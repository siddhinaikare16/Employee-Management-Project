
const NewTask = ({data}) => {
  return (
    <div>
      <div className=" h-full w-75 bg-[#7eedc4] border-2 rounded-xl shrink-0 p-5">
        <div className="flex items-center justify-between text-black ">
         <h3 className="bg-emerald-500 px-4 py-1 rounded-xl font-semibold text-lg">{data.category} </h3>
          <h4 className="text-lg">{data.taskDate} </h4>
        </div>
        <div className="mt-5 flex flex-col text-black p-2">
        <h2 className="text-2xl font-medium">{data.taskTitle}  </h2>
        <p className="mt-2 text-lg">{data.taskDescription}</p>
        </div> 
        <div className='mt-4'>
            <button className='bg-green-400 py-2 px-2 rounded-xl text-xs'>Accept Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
