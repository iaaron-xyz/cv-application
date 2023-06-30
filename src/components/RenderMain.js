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
      <h2 className="display-font font-bold text-cyan-700 text-xl mb-2">Education</h2>
      {data.education.map((edu, index) => {
        return (
          <div key={index} className="pb-3">
            <h3 className="font-bold leading-none">{edu.title}</h3>
            <h4 className="display-font leading-none">{edu.universityName}</h4>
            <div className="display-font text-slate-600 text-sm"> {edu.startYear} - {edu.endYear} </div>
            <div className="leading-none mt-1 text-teal-600">{edu.optDescription || ''}</div>
          </div>
        )
      })}
    </div>
  )
}

export default RenderMain