import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();
const port = 5501;

app.listen(port, () => {
  console.log("Connected =======>");
});

const uri = "mongodb+srv://santoshmanaguli:santohmanaguli@cluster0.qv45iba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to your DB-name database");
})
.catch((err) => {
  console.log("Error connecting to database", err);
})


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model("users", UserSchema);


//API
app.post('register', async(req, res) => {
  try{
    const{name, password} = req.body;

    //checking if user already exists
    const existingUser = await User.findOne({name});
    if (existingUser) {
      return res.status(400).json({message: 'User already exists'})
    }

    const newUser = new User({name, password});
    await newUser.save();

    req.status(201).json({message: 'User registered successfuly'});
  }
  catch(err){
    console.error('error while registering the user',err)
    res.status(500).json({message: 'Something went wrong'});
  }
});

app.get('/users', async(req, res) => {
  try {
    const users = await User.find({});

    res.json(users);
  } catch (err) {
    console.log('Error getting users:', err);
  }
})