import React from 'react'

const RenderSidebar = ({ data }) => {
  return (
    <div className="render-sidebar bg-orange-300 row-span-full">
      <h2 className='text-xl'>Technical Skills</h2>
      <SidebarSkill data={data}/>
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
                  <div className='flex flex-row flex-wrap'>
                    { skillItem ? (
                      <span key={`${index2}${index}`} className='m-0.5 p-0.5 px-1 border border-slate-50 rounded-lg bg-teal-950 text-slate-50'>{skillItem}</span>
                    ) : (
                      <span></span>
                    )}
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

export default RenderSidebar