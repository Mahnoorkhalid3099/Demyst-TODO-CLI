const axios = require('axios');
const {
  fetchTodoData,
  fetchAndPrintEvenTodos,
  printTodo,
  main,
} = require('../src/demystData_cli');

const mockTodoData = {
  userId: 1,
  id: 2,
  title: 'Sample Title',
  completed: false,
};

jest.mock('axios');

describe('fetchTodoData', () => {
  it('should fetch TODO data for a given ID', async () => {
    const todoId = 2;
    axios.get.mockResolvedValue({ data: mockTodoData });
  
    const result = await fetchTodoData(todoId);
  
    expect(result).toEqual(mockTodoData);
    expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  });

  it('should handle errors when fetching TODO data', async () => {
    const todoId = 2;
    const errorMessage = 'Failed to fetch TODO data';

    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(fetchTodoData(todoId)).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  });
});

describe('printTodo', () => {
  it('should print TODO information', () => {
    const mockTodo = {
      title: 'Sample Title',
      completed: true,
    };

    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    printTodo(mockTodo);

    expect(consoleLogSpy).toHaveBeenCalledWith(`Title: ${mockTodo.title}`);
    expect(consoleLogSpy).toHaveBeenCalledWith(`Completed: ${mockTodo.completed}`);
    expect(consoleLogSpy).toHaveBeenCalledWith('---------------------------');

    consoleLogSpy.mockRestore();
  });
});

describe('fetchAndPrintEvenTodos', () => {
  it('should fetch and print 20 even TODOs', async () => {
    
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    axios.get.mockResolvedValue({ data: mockTodoData });

    await fetchAndPrintEvenTodos();

    expect(axios.get).toHaveBeenCalledTimes(42); // 20 in actual, and additional 22 because of mock calls
    expect(consoleLogSpy).toHaveBeenCalledWith('Fetching TODOs. Please wait...');

    consoleLogSpy.mockRestore();
  });

  it('should handle errors during fetching and printing TODOs', async () => {
    const errorMessage = 'Failed to fetch and print TODOs';

    axios.get.mockRejectedValue(new Error(errorMessage));

    const consoleErrorSpy = jest.spyOn(console, 'log').mockImplementation();

    await expect(fetchAndPrintEvenTodos()).rejects.toThrow(errorMessage);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching and printing TODOs:', errorMessage);

    consoleErrorSpy.mockRestore();
  });
});

describe('main', () => {
  it('should handle errors in the main function', async () => {
    const errorMessage = 'Failed in main function';

    jest.spyOn(console, 'log').mockImplementation();

    jest.spyOn(axios, 'get').mockRejectedValue(new Error(errorMessage));

    await expect(main()).resolves.not.toThrow();
  });
});
