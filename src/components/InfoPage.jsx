
const InfoPage = ({title,information}) => {
  return (
    <div className='my-5'>
    <h1 className="text-purple-700 w-11/12 mx-auto text-xl md:2xl lg:text-3xl uppercase font-semibold  py-7">{title}</h1>
      <div className='w-11/12 mx-auto text-black/70 bg-white border border-gray-200 rounded-lg shadow p-3'>
      {information.map((info,index)=>(
        <p key={index} className='text-xl leading-8 py-5 text-justify'>{info}</p>
      ))}
        
      </div>
    </div>
  )
}

export default InfoPage