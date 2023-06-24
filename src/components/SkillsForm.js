import React, { useState } from 'react'

const SkillsForm = ({ data, setData }) => {

  const [categoryCounter, setCategoryCounter] = useState(1);
  const [skills, setSkills] = useState(data.skills);

  const handleCategory = (e) => {
    const categoryId = parseInt(e.target.id.split("-").pop());
    const updatedSkill = {
      ...skills[categoryId-1],
      skillCategory: e.target.value,
    };
    setSkills([updatedSkill]);
  };
  const handleSkillsList = () => {
    console.log('handling skill cateogries');
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
                  onChange={handleCategory}
                />
              </div>

              <div>
                <label htmlFor="skillsList">
                  List of Skills
                </label>
                <input
                  type="text"
                  name="skillsList"
                  id="skillsList"
                  className="block w-full"
                  value={skill.skillsList}
                  onChange={handleSkillsList}
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