import React,{useState} from "react"
import './counter.css'

function Counter()
{

    const [tasks,setTasks] = useState([]);

    const[newtask,setNewtask] = useState("");

    function addnewtask(e)
    {
        setNewtask(e.target.value);
    }

    function addtasks()
    {
        setTasks(t=>[...t,newtask]);
        setNewtask("");
        
    }

    function deletetasks(index)
    {
        setTasks(tasks.filter((_,i)=> index!==i))
    }

    function setup(index)
    {
        if(index>0){
        const updatedtasks = [...tasks];
        [updatedtasks[index],updatedtasks[index-1]] = [updatedtasks[index-1],updatedtasks[index]]
        setTasks(updatedtasks)
        }
    }

    function setdown(index)
    {
        if(index<tasks.length-1)
            {
                const updatedtasks = [...tasks];
                [updatedtasks[index],updatedtasks[index+1]] = [updatedtasks[index+1],updatedtasks[index]]
                setTasks(updatedtasks)
            }
    }

    return(<>
    <div className="TO_Do_list">
        <div className="Header">
            <h1 >List of Tasks</h1>
        </div>
        <div className="input">
        <input type="text" value={newtask} onChange={addnewtask} />
        <button onClick={addtasks}>addtask</button>``
        </div>
       <div className="list">
       <ol>
            {tasks.map((task,index)=> <li key={index}>{task} <button onClick={()=>deletetasks(index)}>delete</button>
            <button onClick={() => setup(index)}>up</button> <button onClick={()=>setdown(index)}>down</button></li>)}
        </ol>
       </div>

        
        
    </div>
    </>);
}

export default Counter