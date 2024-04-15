// let checkbox = document.querySelector(".checkbox");
// console.log("checkbox");
// checkbox.style.display = "none";

// let buttonz = document.querySelector(".buttonz");
// let addtask = document.querySelector(".addtask");
// buttonz.addEventListener('click',function());

// document.addEventListener("DOMContentLoaded", function () {
//   const addTaskInput = document.querySelector(".addtask"); // Get the task input field
//   const addButton = document.querySelector(".buttonz"); // Get the add task button
//   const checkboxContainer = document.querySelector(".checkbox"); // Get the task checkbox container

//   // Function to add a new task
//   function addTask() {
//     const taskDescription = addTaskInput.value.trim(); // Get the task description from the input field
//     if (taskDescription !== "") {
//       // Check if the input field is not empty
//       const newTask = document.createElement("div"); // Create a new task container
//       newTask.classList.add("tasks1"); // Add the tasks1 class to the new task container

//       const taskContent = `
//           <div class="value">
//             <p class="Activity2">Activity</p>
//             <p class="Activity"><b>${taskDescription}</b></p>
//           </div>
//           <div class="ditz">
//             <button class="Edit">Edit</button>
//             <button class="Remove">Remove Task</button>
//           </div>
//         `;
//       newTask.innerHTML = taskContent; // Set the task content

//       checkboxContainer.appendChild(newTask); // Add the new task to the task checkbox container
//       addTaskInput.value = ""; // Clear the input field
//     }
//   }

//   // Event listener for the add task button
//   addButton.addEventListener("click", addTask);

//   // Event listener for pressing Enter key in the task input field
//   addTaskInput.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });

//   // Event delegation for handling Edit and Remove task buttons
//   checkboxContainer.addEventListener("click", function (event) {
//     const target = event.target;
//     if (target.classList.contains("Edit")) {
//       const taskDescription =
//         target.parentElement.previousElementSibling.lastElementChild
//           .textContent;
//       const newTaskDescription = prompt("Edit Task:", taskDescription);
//       if (newTaskDescription !== null) {
//         target.parentElement.previousElementSibling.lastElementChild.textContent =
//           newTaskDescription;
//       }
//     } else if (target.classList.contains("Remove")) {
//       target.closest(".tasks1").remove();
//     }
//   });
// });

// Selecting elements
// const addTaskInput = document.querySelector(".addtask");
// const addButton = document.querySelector(".buttonz");
// const checkboxContainer = document.querySelector(".checkbox");

// // Function to add a new task
// function addTask() {
//   const taskDescription = addTaskInput.value.trim();
//   if (taskDescription !== "") {
//     const newTask = document.createElement("div");
//     newTask.classList.add("tasks1");

//     const taskContent = `
//             <div class="value">
//                 <p class="Activity2">Activity</p>
//                 <p class="Activity"><b>${taskDescription}</b></p>
//             </div>
//             <div class="ditz">
//                 <button class="Edit">Edit</button>
//                 <button class="Remove">Remove Task</button>
//             </div>
//         `;
//     newTask.innerHTML = taskContent;

//     checkboxContainer.appendChild(newTask);
//     addTaskInput.value = "";
//   }
// }

// // Event listener for the add task button
// addButton.addEventListener("click", addTask);

// // Event listener for pressing Enter key in the task input field
// addTaskInput.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

// // Event delegation for handling Edit and Remove task buttons
// checkboxContainer.addEventListener("click", function (event) {
//   const target = event.target;
//   if (target.classList.contains("Edit")) {
//     const taskDescription =
//       target.parentElement.previousElementSibling.lastElementChild.textContent;
//     const newTaskDescription = prompt("Edit Task:", taskDescription);
//     if (newTaskDescription !== null) {
//       target.parentElement.previousElementSibling.lastElementChild.textContent =
//         newTaskDescription;
//     }
//   } else if (target.classList.contains("Remove")) {
//     target.closest(".tasks1").remove();
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const addTaskInput = document.querySelector(".addtask"); // Get the task input field
  const addButton = document.querySelector(".buttonz"); // Get the add task button
  const checkboxContainer = document.querySelector(".checkbox"); // Get the task checkbox container

  // Function to add a new task
  function addTask() {
    const taskDescription = addTaskInput.value.trim(); // Get the task description from the input field
    if (taskDescription !== "") {
      // Check if the input field is not empty
      const newTask = document.createElement("div"); // Create a new task container
      newTask.classList.add("tasks1"); // Add the tasks1 class to the new task container

      const taskContent = `
        <div class="value">
          <p class="Activity2">Activity</p>
          <p class="Activity"><b>${taskDescription}</b></p>
        </div>
        <div class="ditz">
          <button class="Edit">Edit</button>
          <button class="Remove">Remove Task</button>
        </div>
      `;
      newTask.innerHTML = taskContent; // Set the task content

      checkboxContainer.appendChild(newTask); // Add the new task to the task checkbox container
      addTaskInput.value = ""; // Clear the input field
    }
  }

  // Event listener for the add task button
  addButton.addEventListener("click", addTask);

  // Event listener for pressing Enter key in the task input field
  addTaskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Event delegation for handling Edit and Remove task buttons
  checkboxContainer.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("Edit")) {
      const taskDescription =
        target.parentElement.previousElementSibling.lastElementChild
          .textContent;
      const newTaskDescription = prompt("Edit Task:", taskDescription);
      if (newTaskDescription !== null) {
        target.parentElement.previousElementSibling.lastElementChild.textContent =
          newTaskDescription;
      }
    } else if (target.classList.contains("Remove")) {
      target.closest(".tasks1").remove();
    }
  });
});
