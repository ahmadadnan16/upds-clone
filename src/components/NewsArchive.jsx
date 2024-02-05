const archiveData =[
    {
        id:1,
        year:2023,
        month:"January",
        newsCount:3,
    },
    {
        id:2,
        year:2023,
        month:"February",
        newsCount:2,
    },
    {
        id:3,
        year:2023,
        month:"March",
        newsCount:1,
    },
    {
        id:4,
        year:2023,
        month:"April",
        newsCount:2,
    },
    {
        id:5,
        year:2023,
        month:"May",
        newsCount:3,
    },
    {
        id:6,
        year:2023,
        month:"June",
        newsCount:2,
    },
    {
        id:7,
        year:2023,
        month:"July",
        newsCount:1,
    },

]

const NewsArchive = () => {
  return (
    <>
    <h1 className="text-xl font-bold">Archive</h1>
    {
        archiveData.map((item,index)=>(
            <h1 key={index} className="text-lg my-2">{item.month} {item.year} <span className="text-gray-500">({item.newsCount})</span></h1>
        ))
    }

    </>
      )
}

export default NewsArchive