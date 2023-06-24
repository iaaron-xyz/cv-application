import React, { useState } from 'react'

const SkillsForm = ({ data, setData }) => {

  const [categoryCounter, setCategoryCounter] = useState(1);
  const [skills, setSkills] = useState(data.skills);

  const handleInputCategory = (e) => {
    const categoryId = parseInt(e.target.id.split("-").pop());
    const updatedSkill = {
      ...skills[categoryId-1],
      skillCategory: e.target.value,
    };
    setSkills([updatedSkill]);
  };
  const handleInputSkillsList = (e) => {
    const categoryId = parseInt(e.target.id.split("-").pop());
    // split by commas
    const skillsList = e.target.value.split(",");
    // Update list of skills
    const updatedList = {
      ...skills[categoryId-1],
      skillsList: skillsList,
    };
    setSkills([updatedList])
    console.log(skillsList);
  }

  return (
    <div className='p-4'>
      <h2 className='text-2xl'>Skills</h2>
      <form>
        {skills.map((skill) => {
          return (
            <div key={categoryCounter}>
              <div>
                <label htmlFor={`skillsCategory-${categoryCounter}`}>
                  Category
                </label>
                <input
                  type="text"
                  name={`skillsCategory-${categoryCounter}`}
                  id={`skillsCategory-${categoryCounter}`}
                  className="block w-full"
                  value={skill.skillCategory}
                  onChange={handleInputCategory}
                />
              </div>

              <div>
                <label htmlFor={`skillsList-${categoryCounter}`}>
                  List of Skills
                </label>
                <input
                  type="text"
                  name={`skillsList-${categoryCounter}`}
                  id={`skillsList-${categoryCounter}`}
                  className="block w-full"
                  value={skill.skillsList}
                  onChange={handleInputSkillsList}
                />
              </div>
            </div>
          )
        })}
        <button className='form-btn'>Add category skill</button>
      </form>
    </div>
  )
}

export default SkillsForm