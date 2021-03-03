import React from 'react'

function Todo({text,markDone,remove,index}) {

    const handelDelete =()=>{

    }
    
    const handelFinish =()=>{
        
    }

    return (
        <div className=' sm:flex sm:flex-col md:flex-row text-white bg-gray-900 lg:flex lg:flex-row lg:flex-nowrap text-lg p-4 justify-between w-full my-1 hover:bg-indigo-900 rounded-xl "transition duration-200 ease-in-out transform hover:-translate-y-1'>
            <div className='font-bold p-2 m-1 break-all xs:text-sm sm:text-sm md:text-sm lg:text-xl'>
                {text} 
            </div>
            <div className='flex flex-nowrap sm:text-sm md:text-sm lg:text-lg sm:w-full sm:justify-center sm:flex-wrap'>
            <button onClick = {()=>{markDone(index)}} className="xs:w-2/4  text-xs bg-green-700 text-white font-semibold py-2 px-4 border-b-4 border-green-900  hover:border-green-700 rounded m-1 w-22 h-12">Done</button>
            <button onClick = {()=>{remove(index)}} className="xs:w-2/4  text-xs bg-red-700 text-white font-semibold py-2 px-4 border-b-4 border-red-900 hover:border-red-700 rounded m-1 w-22 h-12">Delete</button>
            </div>
        </div>
    )
}

export default Todo
