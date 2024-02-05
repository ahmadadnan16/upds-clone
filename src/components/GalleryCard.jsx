
const GalleryCard = () => {
  return (
    <div className="w-full md:w-3/12 lg:w-2/12 border p-1 rounded overflow-hidden text-center cursor-pointer hover:shadow-md transition-all duration-300">

    <img src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Award ceremony"  className="w-full object-cover"/>
    <h1 className="text-lg font-medium">Event name</h1>
    <p className="text-gray-500">3 Photos</p>
    </div>
  )
}

export default GalleryCard