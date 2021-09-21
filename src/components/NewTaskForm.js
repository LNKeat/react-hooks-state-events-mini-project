import React, {useState} from "react";


function NewTaskForm({ categories, onTaskFormSubmit, taskOnForm, formError }) {
  const [taskToAdd, setTaskToAdd] = useState('')
  const [newTaskCategory, setNewTaskCategory] = useState('')
  const categoriesDD = categories.filter(category => category !== 'All')
   
  function updateTask(e){
    const newTask = e.target.value
    setTaskToAdd(newTask)
  }
  function handleCategorySelect(e){
      setNewTaskCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    if(taskToAdd !== ''){
      const newTask = {text: taskToAdd, category: newTaskCategory}
      onTaskFormSubmit(newTask)
      setTaskToAdd('')
    }else{
      formError('Please fill in a task and select a category')
    }
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskToAdd} onChange={updateTask} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategorySelect}>
          {
            categoriesDD.map(category => <option key={category} value={category}>{category}</option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
