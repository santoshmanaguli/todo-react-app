import { useRef, useState } from "react";

const Home = () => {
  //state
  const [tasks, setTasks] = useState([]);

  const setTasksRef = useRef(null);

  //all function
  function handleAddBtn() {
    const taskText = setTasksRef.current.value.trim();
    if (taskText !== "") {
      setTasks((prev) => [...prev, taskText]);
      setTasksRef.current.value = "";
    }

    console.log(tasks);
  }

  function handleTogglebtn(index, e) {
    if (e.target.checked) {
      setTasks((prev) => {
        const updatedPrevTask = [...prev];
        updatedPrevTask.splice(index, 1);
        return updatedPrevTask;
      });
    }
  }

  return (
    <div>
      <>Welcome to home page</>
      <div>
        <input type="text" placeholder="Type here..." ref={setTasksRef} />
        <button
          type="submit"
          onClick={() => {
            handleAddBtn();
          }}
        >
          {" "}
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{}}>
            <input type="checkbox" onClick={(e) => handleTogglebtn(index, e)} />
            <label htmlFor={index + `${task}`}>{task}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
