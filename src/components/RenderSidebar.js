import React from 'react'

const RenderSidebar = ({ data }) => {
  return (
    <div className="render-sidebar row-span-full p-2">
      <h2 className='text-xl'>Technical Skills</h2>
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
            <h3 className='font-bold'>{skill.skillCategory}</h3>
            <div className='flex flex-row flex-wrap'>
              {/* Render evert skill item */}
              {skill.skillsList.map((skillItem,index2) => {
                return (
                  <ItemSkill key={index2*42+1} skillItem={skillItem}/>
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
        <span className='m-0.5 p-0.5 px-1 border border-slate-50 rounded-lg bg-teal-950 text-slate-50'>
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
    <div className='mt-4'>
      <h2 className='text-xl'>Languages</h2>
      {data.languages.map((lang, index) => {
        return (
          <div key={index} className='p-2'>
            <h3>{lang.language}</h3>
            <p>{lang.level}</p>
          </div>
        )
      })}
    </div>
  )
}


export default RenderSidebar