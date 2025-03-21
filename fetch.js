document.addEventListener('DOMContentLoaded', () => {
    // all logic related to fetching data from the server go here
    // 1. get all data from  http://localhost:3000/tasks
    // 2. post data to http://localhost:3000/tasks
    //  3. patch data to http://localhost:3000/tasks
    // 4. put data to http://localhost:3000/tasks
    // 5. dlete data from http://localhost:3000/tasks

// FETCH METHOD 
// A FUNCTION USED TO MAKE REQUESTS TO A SERVER
// ENABLES SEND/PUT, DELETE, GET, UPDATE DATA
// fetch() method --->Used to make requests to a server get add update and delete tasks


const apiUrl = 'http://localhost:3000/tasks';


const taskList =document.getElementById('tasklist');
console.log(taskList); 
//1.GET request-->getting all data
fetch(apiUrl) // send a get request to the server
.then((response) => Response.json()) // parses our response to json--- first .then which essentially passes our response
    console.log(response)
    return response.json
.then((data) => {
    // second.then() acts on the  data
    console.log(data);
    data.aray.forEach((task) => {
        renderTask.task
    })
    // Call function for rendering tasks on the page
}).catch((error) =>{
    console.log('Error:', error);
})
function renderTask(task){
    const newTaskListItem = document.createElement('li');
    newTaskListItem.ClassList.add('task');
    const taskTest = document.createElement('span');
    taskTest.classList.add('taskTest')
    taskTest.textContent = task.test;
    newTaskListItem.appendChild(taskTest);
}
data();
});
