
const TaskListNumbers = ({data}) => {
  return (
    <div className="flex justify-between gap-5 mt-10">
      <div className="bg-[#3b7883] w-[40%] g rounded-lg py-12 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active} </h2>
        <h2 className="text-2xl">Active Task</h2>
      </div>
      <div className="bg-[#9ead69] w-[40%] g rounded-lg py-12 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h2 className="text-2xl">New Task</h2>
      </div>
      <div className="bg-[#ebc94d] w-[40%] g rounded-lg py-12 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h2 className="text-2xl">Completed Task</h2>
      </div>
      <div className="bg-[#f5b8da] w-[40%] g rounded-lg py-12 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h2 className="text-2xl">Failed Task</h2>
      </div>
     
    </div>
  )
}

export default TaskListNumbers
