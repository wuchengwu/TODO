// 程式碼寫這裡
const todoList = document.querySelector(".todo-list")
const taskInput = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")
const list = document.querySelector(".todo-list")




addBtn.addEventListener ("click",() => { 
   addTask(taskInput.value)
})//先找按鈕給他click事件，選取框框帶入值


taskInput.addEventListener("keyup",(i)=>{
    if(i.code === "Enter"){
     addTask(taskInput.value)

    }
})
function addTask(taskContent=""){
    taskContent=taskContent.trim()
   //刪除輸入的值,去掉左右的空白
    if(taskContent !==""){
        createtaskElement(taskContent)
        //設定一個function名稱帶入值
        reseInput()
        
    }
}
    

function createtaskElement(task){
    const taskElemaent =`<li class="todo-item">
    <span class="item">${task}</span>
    <button class="closeBtn">X</button>
  </li>`//先選取要新增的地方

  list.insertAdjacentHTML("afterbegin", taskElemaent)
  //新增欄位新增在li的前一層ul
}

function reseInput(){
    taskInput.value = ""
    taskInput.focus()
}

todoList .addEventListener("click",(i) => {
    if (i.target.NpdeName==="BUTTON" ){
        const btn = i.target
        btn.parentElement.remvoe()
     }//在清單裡面尋找物件裡面父層button來做移除動作
})