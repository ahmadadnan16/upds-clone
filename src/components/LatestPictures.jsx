const galleryData = [
  {
    id: "1",
    image:
      "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg",
    alt: "Group Meeting",
  },
  {
    id: "2",
    image:
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    alt: "Group Meeting",
  },
  {
    id: "3",
    image:
      "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
    alt: "Group Meeting",
  },
  {
    id: "4",
    image: "https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg",
    alt: "Skiing",
  },
  {
    id: "5",
    image: "https://cdn.pixabay.com/photo/2015/04/20/17/39/man-731900_1280.jpg",
    alt: "Climbing",
  },
];

const LatestPictures = () => {
  return (
    <div className="w-10/12 mx-auto bg-white border border-gray-200 rounded-lg shadow my-5">
      <h1 className="text-purple-700 text-xl md:2xl lg:text-3xl uppercase font-semibold px-6 py-7">
        Latest Pictures
      </h1>
      <div className="w-full flex gap-1 rounded px-3 mb-3">
        {galleryData.map((item, index) => (
          <div key={index} className="w-1/5 overflow-hidden">
            <img
              src={item.image}
              alt={item.alt}
              className="hover:scale-125  transition-all duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPictures;
