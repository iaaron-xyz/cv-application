const RenderSidebar = ({ data }) => {
  return (
    <div className="render-sidebar row-span-full p-2">
      <h2 className='display-font text-xl font-bold text-cyan-700'>Technical Skills</h2>
      <SidebarSkill data={data} />
      <SidebarLang data={data} />
    </div>
  )
}

const SidebarSkill = ({data}) => {
  return (
    <div className='text-sm'>
      {/* Render the cateogry skills */}
      {data.skills.map((skill, index) => {
        return (
          <div key={index}>
            <h3 className='display-font font-bold'>{skill.skillCategory}</h3>
            <div className='flex flex-row flex-wrap'>
              {/* Render evert skill item */}
              {skill.skillsList.map((skillItem,index2) => {
                return (
                  <div key={index2*42+1} className="flex">
                    <ItemSkill skillItem={skillItem}/>
                    {index2 < skill.skillsList.length-1 && ','}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
const ItemSkill = ({ skillItem }) => {
  return (
    <div className='flex flex-row flex-wrap'>
      { skillItem ? (
        <span className='mx-0.5 text-pink-700 font-bold'>
          {skillItem}
        </span>
      ) : (
        <span></span>
      )}
    </div>
  )
}

const SidebarLang = ({ data }) => {
  return (
    <div className='mt-6'>
      <h2 className='display-font font-bold text-xl text-cyan-700'>Languages</h2>
      {data.languages.map((lang, index) => {
        return (
          <div key={index} className='p-2 my-2 bg-slate-100 rounded-md'>
            <h3 className="display-font font-bold">{lang.language}</h3>
            <p className="text-orange-600 font-bold text-sm">{lang.level}</p>
          </div>
        )
      })}
    </div>
  )
}


export default RenderSidebar