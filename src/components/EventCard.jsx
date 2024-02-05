
const EventCard = () => {
  return (
    <div className="flex w-11/12 lg:w-[48%] border border-gray-200 rounded md:mx-1 my-2 hover:shadow-md transition-all duration-300 cursor-pointer">
    <img src="https://cdn.pixabay.com/photo/2019/05/05/17/32/stadium-4181150_960_720.jpg" alt="banner" className="w-1/4 rounded-l object-cover"/>
    <div className="p-3">
    <h1 className="md:text-xl font-medium">Title of the Event goes here</h1>
    <p className="md:text-lg text-gray-500">R. T. M. Nagpur University: Department of Pharmacutical Sciences</p>
    <p className="md:text-lg text-gray-500">Tuesday, 22nd Aug 2023, 11 am (IST)</p>
    </div>
    </div>
  )
}

export default EventCard