import React, { useState } from 'react'

function App() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    if(task.trim() == "") return ;
    setTaskList([...taskList,{text: task,isEditing: false}]);
    setTask("");
  }

  const changeText = (index) => {
    const new_arr=[...taskList];
    new_arr[index].isEditing=!new_arr[index].isEditing;
    setTaskList(new_arr);
  }

  const handlechange = (index,_text) => {
    const new_arr=[...taskList];
    new_arr[index].text=_text;
    setTaskList(new_arr);
  }

  const remove_task = (index) => {
    const new_arr=[...taskList];
    new_arr.splice(index,1);
    setTaskList(new_arr);
  }

  return (
    <div className="bg-body w-full h-screen py-10 hover:bg-body">
      <div className="w-80 h-100 bg-ander m-auto rounded-xl py-4 border-2 border-black overflow-y-auto overflow-x-hidden shadow-[2px_2px_0px_black]">
        <div className="m-auto w-70 h-7 bg-purple hover:bg-purple-500 rounded-xl text-center border-1 border-black shadow-[2px_2px_0px_black]"> 

          <h1 className='font-bold'>My To Do List</h1>

          <div className="h-87 px-1">

            <h1 className='text-sm pt-4 pb-2.5 font-bold'>Enter a Task:</h1>
            <div className='flex w-74'>
              <input value = {task} onChange= {(e) => setTask(e.target.value)} className="bg-inputbox w-60 mr-2 h-6 rounded-xl border shadow-[2px_2px_0px_black] border-black text-center" placeholder="No More Tasks ??"/>
              <button onClick = {handleAdd} className='bg-purple w-9 h-5 mt-0.5 pb- text-sm border shadow-[2px_2px_0px_black] border-black rounded-sm hover:bg-purple-500'>Add</button>
            </div>

            {
              taskList.map((val,index) => {
                return <div className='w-72 flex pt-2.5'>
                  {val.isEditing ? (
                    <input
                      className="shadow-[2px_2px_0px_black] pl-1.5 w-45 mt-0.5 border border-black rounded-sm bg-task text-black"
                      value={val.text}
                      onChange={(e) => handlechange(index, e.target.value)}
                    />
                  ) : (
                    <div
                      className="text-black shadow-[2px_2px_0px_black] text-left pl-1.5 pb-1 w-45 mt-0.5 border border-black rounded-xl bg-task leading-tight break-words"
                    > {val.text}
                    </div>
                  )}

                  <button onClick={ () => changeText(index) } className='shadow-[2px_2px_0px_black] text-center hover:bg-purple-500 bg-purple mx-2 w-9 h-5 mt-1 pb-2 text-sm border border-black rounded-sm'>{val.isEditing ? "Save":"Edit"}</button>
                  <button  onClick={ () => remove_task(index) }className='shadow-[2px_2px_0px_black] text-center hover:bg-purple-500 bg-purple w-15 h-5 mt-1 pb-2 text-sm border border-black rounded-sm'>Remove</button>
                </div>
              })
            }

          </div>          
        </div>
      </div>
    </div>
  )
}

export default App
