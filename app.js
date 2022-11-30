// 程式碼寫這裡 
// trim把頭尾空白去掉
const todoList = document.querySelector(".todo-list")
const taskInput = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")
const list = document.querySelector(".todo-list")

// resetInput()



addBtn.addEventListener("click", () => {//先找出按鈕給它值
  addTask(taskInput.value)
})

taskInput.addEventListener("keyup", (e) => {//
  if (e.code === "Enter") {
    addTask(taskInput.value)
  }
})

function addTask(taskContent = "") {
  taskContent = taskContent.trim()

  if (taskContent !== "") {
    createTaskElement(taskContent)
    resetInput()
  }
}

function createTaskElement(task) {
  const taskElement = `<li class="todo-item">
        <span class="item">${task}</span>
        <button class="closeBtn">X</button>
      </li>`

  list.insertAdjacentHTML("afterbegin", taskElement)
}

function resetInput() {
  taskInput.value = ""
  taskInput.focus()
}

// event delegation
todoList.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    const btn = e.target
    btn.parentElement.remove()
  }//消除上一層父元素
})