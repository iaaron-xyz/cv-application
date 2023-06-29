const RenderMain = ({ data }) => {
  return (
    <div className="render-main row-span-full py-2 px-4">
      <MainEducation data={data}/>
    </div>
  )
}

const MainEducation = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl mb-2">Education</h2>
      {data.education.map((edu, index) => {
        return (
          <div key={index} className="pb-3">
            <h3>{edu.title}</h3>
            <h4>{edu.universityName}</h4>
            <div> {edu.startYear} - {edu.endYear} </div>
            <div>{edu.optDescription || 'hola'}</div>
          </div>
        )
      })}
    </div>
  )
}

export default RenderMain