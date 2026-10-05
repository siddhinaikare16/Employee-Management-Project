const AdminHeader = () => {
  return (
    <div>
      <div className="flex items-start justify-between">
        <h1 className="text-2xl font-medium">Hello <br /><span className="text-2xl font-bold"> 🖐️</span></h1>
        <button className="bg-emerald-400 px-6 py-3 text-2xl font-semibold rounded-full">Log Out</button>
      </div>
    </div>
  )
}

export default AdminHeader