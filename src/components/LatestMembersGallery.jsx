

const galleryData = [
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Member 1",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg",
      alt: "Member 2",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Member 3",
    },
    {
      id: "4",
      image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Member 4",
    },
    {
      id: "5",
      image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Member 5",
    },
    {
        id: "1",
        image:
          "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 1",
      },
      {
        id: "2",
        image:
          "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg",
        alt: "Member 2",
      },
      {
        id: "3",
        image:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 3",
      },
      {
        id: "4",
        image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 4",
      },
      {
        id: "5",
        image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 5",
      },
      {
        id: "1",
        image:
          "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 1",
      },
      {
        id: "2",
        image:
          "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg",
        alt: "Member 2",
      },
      {
        id: "3",
        image:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 3",
      },
      {
        id: "4",
        image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 4",
      },
      {
        id: "5",
        image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 5",
      },
      {
        id: "1",
        image:
          "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 1",
      },
      {
        id: "2",
        image:
          "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg",
        alt: "Member 2",
      },
      {
        id: "3",
        image:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 3",
      },
      {
        id: "4",
        image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 4",
      },
      {
        id: "5",
        image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 5",
      },
      {
        id: "4",
        image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 4",
      },
      {
        id: "5",
        image: "https://images.pexels.com/photos/59196/pexels-photo-59196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Member 5",
      },
  ];
const LatestMembersGallery = () => {
  return (
    <div className="w-10/12 mx-auto bg-white border border-gray-200 rounded-lg shadow my-5">
    <h1 className="text-purple-700 text-xl md:2xl lg:text-3xl uppercase font-semibold px-6 py-7">
      Latest Members
    </h1>
    <div className="w-full flex flex-wrap mx-auto gap-1 rounded px-3 mb-3 justify-center">
      {galleryData.map((item, index) => (
        <div key={index} className="w-20 md:w-32 lg:w-40 overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            className="hover:scale-125 w-full transition-all duration-300 cursor-pointer "
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default LatestMembersGallery