import { NavLink } from "react-router-dom"

const NewsCard = () => {
  return (
    <div className="flex flex-col md:flex-row w-9/12 mx-auto  gap-3 border-b pb-5">
    <img src="https://cdn.pixabay.com/photo/2017/04/06/20/17/board-2209239_1280.jpg" alt="event"  className="w-full md:w-4/12 lg:w-2/12 object-cover"/>
    <div>
    <h1 className="text-2xl font-bold text-black/90">Title of the news</h1>
    <h3 className="text-gray-400 my-2">Published on 7<sup>th</sup> Jan, 2024</h3>
    <p className="text-lg text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum necessitatibus voluptas earum in harum dicta! At voluptas, rerum molestiae voluptatibus atque aperiam ipsum facilis veniam architecto sint, similique quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui earum repellendus dolores laborum nemo suscipit numquam, unde eum ratione, facere fuga vel, possimus magnam explicabo deserunt ipsa voluptate porro non.</p>
    <NavLink to="#" className="text-blue-500 hover:text-blue-900 transition-all duration-300">Read more...</NavLink>
    </div>
    </div>
  )
}

export default NewsCard