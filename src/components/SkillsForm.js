const SkillsForm = ({ data, setData }) => {

  const handleInputCategory = (e) => {
    const categoryId = parseInt(e.target.id.split("-").pop());
    // temporal copy of skills list
    const updatedCategory = [...data.skills];
    // update category
    updatedCategory[categoryId] = {
      ...data.skills[categoryId],
      skillCategory: e.target.value
    };
    // update data
    setData({...data, skills: updatedCategory});
  };

  const handleInputSkillsList = (e) => {
    const categoryId = parseInt(e.target.id.split("-").pop());
    // split by commas
    const skillsList = e.target.value.split(",");
    // temporal copy of skills list
    const updatedSkills = [...data.skills];
    // update list of skills
    updatedSkills[categoryId] = {
      ...data.skills[categoryId],
      skillsList: skillsList
    };
    // update data
    setData({...data, skills: updatedSkills});
    // console.log(skillsList);
  }

  const handleAddNewCategory = () => {
    setData({...data,
      skills: [...data.skills, {skillCategory: "New category", skillsList: []}]
    });
  }

  const handleRemoveCategory = (categoryName) => {
    // Remove element containing categoryName
    let updatedCategories = data.skills.filter((category) => categoryName !== category.skillCategory);
    // update data
    setData({...data, skills: updatedCategories});

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
                <button  type="button" className='delete-btn' id={`remove-category-${index}`} onClick={() => handleRemoveCategory(skill.skillCategory)}>
                  Remove {skill.skillCategory} category
                </button>
              </div>
            </div>
          )
        })}
        <button type='button' className='form-btn' onClick={handleAddNewCategory}>
          Add new skills +
        </button>
      </form>
    </div>
  )
}

export default SkillsForm