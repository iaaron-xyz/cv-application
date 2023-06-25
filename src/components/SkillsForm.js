// import React, { useState } from 'react'

const SkillsForm = ({ data, setData }) => {

  const handleInputCategory = (e) => {
    const categoryId = parseInt(e.target.id.split("-").pop());
    const updatedSkill = {
      ...data.skills[categoryId],
      skillCategory: e.target.value,
    };
    setData({...data, skills:[updatedSkill]});
  };
  const handleInputSkillsList = (e) => {
    const categoryId = parseInt(e.target.id.split("-").pop());
    // split by commas
    const skillsList = e.target.value.split(",");
    // Update list of skills
    const updatedList = {
      ...data.skills[categoryId],
      skillsList: skillsList,
    };
    setData({...data, skills: [updatedList]})
    console.log(skillsList);
  }

  return (
    <div className='p-4'>
      <h2 className='text-2xl'>Skills</h2>
      <form>
        {data.skills.map((skill, index) => {
          return (
            <div key={index}>
              <div>
                <label htmlFor={`skillsCategory-${index}`}>
                  Category
                </label>
                <input
                  type="text"
                  name={`skillsCategory-${index}`}
                  id={`skillsCategory-${index}`}
                  className="block w-full"
                  value={skill.skillCategory}
                  onChange={handleInputCategory}
                />
              </div>

              <div>
                <label htmlFor={`skillsList-${index}`}>
                  List of Skills
                </label>
                <input
                  type="text"
                  name={`skillsList-${index}`}
                  id={`skillsList-${index}`}
                  className="block w-full"
                  value={skill.skillsList}
                  onChange={handleInputSkillsList}
                />
              </div>
              <div className='flex flex-row-reverse py-2'>
                <button className='delete-btn' id={`remove-category-${index}`}>Remove {skill.skillCategory} category</button>
              </div>
            </div>
          )
        })}
        <button type='button' className='form-btn'>Add new skills +</button>
      </form>
    </div>
  )
}

export default SkillsForm