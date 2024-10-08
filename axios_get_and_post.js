const axios = require("axios")
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual token if needed
// };

//GET Axios
const getTodos = async() => {
    try{
        const response = await axios.get(`${BASE_URL}/todos?_limit=5`)
        // const response = axios.get(`${BASE_URL}/todos?_limit=5`, {headers})
        console.log('GET: Here\'s the list of todos:', response.data);
    }catch(err){
        console.log(`Error fetching Todos ${err}`)
    }
}

//POST Axios
const addTodos = async(payload) => {
    try{
        const response = await axios.post(`${BASE_URL}/todos`, payload)
        // const response = axios.post(`${BASE_URL}/todos`, payload, {headers})
        console.log('POST: Added a new Todo!', response.data)
    }catch(err){
        console.log(`Failed to add new Todo ${err}`)
    }
}

getTodos()

const newTodo = {
    title: "new Todo",
    completed: false
}

addTodos(newTodo)
