const axios = require('axios');

async function fetchTodoData(todoId) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    return response?.data;
  } catch (error) {
    console.log(`Error fetching TODO data for ID ${todoId}: ${error?.message}`);
    throw error;
  }
}

function printTodo(todo) {
  console.log(`Title: ${todo.title}`);
  console.log(`Completed: ${todo.completed}`);
  console.log('---------------------------');
}

let count = 0;
async function fetchAndPrintEvenTodos() {
  const evenTodos = [];
  let todoId = 2; // Start from the first even index
  let loopCounter = 0;

  console.log('Fetching TODOs. Please wait...');
  console.log('');

  try {
    while (loopCounter < 20) {
      const todoData = await fetchTodoData(todoId);
      if(todoData && Object.keys(todoData)?.length){
      count += 1; // Maintaining count to inform user that there is no TODO to display if count remains 0
      printTodo(todoData);
      }
      evenTodos.push(todoData);
      todoId += 2; // Go to next even index
      loopCounter += 1;
    }
  } catch (error) {
    console.log('Error fetching and printing TODOs:', error?.message);
    throw error;
  }
}

async function main() {
  try {
    await fetchAndPrintEvenTodos();
    if(count == 0){
      console.log("No TODO found!"); // The case where each index returned an empty object, and there is no TODO to display
    }
  } catch (error) {
    console.log('Error in main:', error?.message);
  }
}

main();

module.exports = {
  fetchTodoData,
  fetchAndPrintEvenTodos,
  printTodo,
  main,
};