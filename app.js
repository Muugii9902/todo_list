const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");
// const trashBtn = document.getElementById("btn2");
// const task = [];

// VARIABLES FOR TASK
let tasks = [
  // {
  //   name: "Task Two",
  //   status: "INPROGRESS",
  // },
  // {
  //   name: "Task Three",
  //   status: "BLOCKED",
  // },
];

function zurah() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    let borderColor = "";
    switch (tasks[i].status) {
      case "TODO": {
        borderColor = "";
        break;
      }
      case "INPROGRESS": {
        borderColor = "border-primary";

        break;
      }
      case "DONE": {
        borderColor = "border-success-subtle";
        break;
      }
      case "BLOCKED": {
        borderColor = "border-warning";
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }

    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1   rounded p-2 ${borderColor}">
    <span>${tasks[i].name} - </span>
    <div>
        <button data-bs-toggle="modal"
          data-bs-target="#taskModal" class ="bnt1" onclick="moveTask(${i})"> 
        <i class="bi bi-pencil"></i>
        </button>
        <button class ="btn2">
        <i class="bi bi-trash" onclick="deleteTask(${i})"></i>
        </button>
    </div>
    </div>
 `;

    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}
saveBtn.addEventListener("click", function () {
  const newTask = {
    name: taskInput.value,
    status: taskStatus.value,
  };
  tasks.push(newTask);
  zurah();
  console.log("TASKS", tasks);
});

zurah();
// trashBtn.addEventListener("click", function () {
//   let index = tasksArray.findIndex();
// });
// trashBtn.addEventListener("click", function () {
//   const taskToRemove = taskInput.value;
//   const index = tasks.findIndex((task) => task.name === taskToRemove);
//   if (index > -1) {
//     tasks.splice(index, 1);
//     zurah();
//     console.log("TASKS", tasks);
//   } else {
//     console.log("Task not found");
//   }
// });
const deleteTask = (taskIndex) => {
  tasks.splice(taskIndex, 1);
  zurah();
  console.log("task delete", taskIndex);
};
// const editTask = (taskIndex) => {};
const moveTask = (taskIndex) => {
  taskInput.value = tasks[taskIndex].name;
  taskStatus.value = tasks[taskIndex].status;
  tasks.splice(taskIndex, 1);
  zurah();
};
