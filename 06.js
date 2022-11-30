// TODO練習題

// 先在html 連結JS地方加上defer
// 第一步先用新增按鈕加上click監聽事件
// 再把輸入值抓起來 
// 在用insertAdjacentElement,insertadjaecntHTML塞在最上面是afterbegin
// 再把Ｘ按鈕加上click監聽事件
// 按下去時要抓到上一層把他remove掉
// 然後把輸入值完變空白
// 讓滑鼠貼在輸入的地方
// 把輸入匡加入鍵盤事件
//把內容物重做一個functionau名字是addTask
//然後（按鈕事件和鍵盤事件）加上剛設好的functionau名字
//注意如果是const寫法只能寫在前面，functionau寫法放哪都可以，因為會（變數提升）會出問題

//用queryselecotorall選去所有關閉按鈕加上監聽事件click






// input事件
// date事件可以打什麼就會印出什麼
// keyboar事件(keyup,keydown)
//trim 可以刪掉上下左右的空白地方,只留下輸入元字
//target
//Nodename結點明稱
const todoList = document.querySelector("todo-list")
const task = document.querySelector("#taskInput")
const addBtn= document.querySelector("#addBtn")
const closeBtn= document.querySelectorAll(".closeBtn")

taskInput.focus()


//event delegation
todoList.addEventListener("click", (e) =>
{   if(e.target.nodename ==="BUTTON"){
      const btn =e.target
      btn.parentElement.remove()
 }
})

closeBtn.forEach((btn) => {
addBtn.addEventListener("click",() => {

   }) 
 })


addBtn.addEventListener("click", addTask)


taskInput.addEventListener("keyup",(e)=>{
    if(e.code ==="Enter"){
        addTask()
    }
})



function addTask() {
    const list =document.querySelector(".todo-list")
    const task = taskInput.value.trim()

     if(task !== " "){

    const taskElement = `<li class="todo-item">
          <span class="item">${task}</span>
          <button class= "closeBtn">x</button> 
          </li>`
    
    
    list.insertAdjacentHTML("afterbegin",taskElement)
    task.value = ""
    taskInput.focus()
    
 } 
}