import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [taskOnForm, setTaskOnForm] = useState("placeholder")
  const [errorMessage, setErrorMessage] = useState('');

  const tasksToDisplay = taskList.filter(task => {
    return task.category === selectedCategory || selectedCategory === 'All'
  })

  function onDeleteTask(textToDelete){
    const newTaskList = taskList.filter(task => task.text !== textToDelete)
    setTaskList(newTaskList)
  }
  function onSelectCategory(categoryToMatch){
    setSelectedCategory(categoryToMatch)
  }
  function onTaskFormSubmit(newTask){
    setErrorMessage('')
    const newTaskList = [...taskList, newTask]
    setTaskList(newTaskList)
  }
  function triggerError(message){
    setErrorMessage(message)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={onSelectCategory} 
        categories={CATEGORIES} 
        taskOnForm={taskOnForm}
      />
      <NewTaskForm formError={triggerError} categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <div style={{color: 'red'}}>
      {errorMessage !== '' ? <p>{errorMessage}</p> : null}
      </div>
      <hr />
      <TaskList tasks={tasksToDisplay} onDeleteTask={onDeleteTask} />
    </div>
    
  );
}

export default App;
