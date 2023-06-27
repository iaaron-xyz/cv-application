const EduFormSection = ({ data, setData }) => {

  const handleInputEdu = (e) => {
    // get index number and associated sub-field
    const eduId = parseInt(e.target.id.split("-").pop());
    const eduField = e.target.id.split("-")[0];
    // temporal copy of education list
    const updatedEdu = [...data.education];
    // update education list
    updatedEdu[eduId] = {
      ...data.education[eduId],
      [eduField]: e.target.value
    };
    // update data
    setData({...data, education: updatedEdu});
  }

  const handleAddNewEdu = () => {
    setData({...data,
      education: [
        ...data.education,
        {
          universityName: "",
          title: "",
          startYear: "",
          endYear: "",
          optDescription: "",
        }]
    });
  }

  const handleRemoveEdu = (schoolName, degree) => {
    // new list with removed school and degree
    let updatedEducation = data.education.filter((edu) => ((schoolName !== edu.universityName) && (degree !== edu.title)));
    // update data
    setData({...data, education: updatedEducation});
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl">Education</h2>
      <form>
        {data.education.map((edu, index) => {
          return (
            <div key={index}>
              <div className='grid grid-cols-2 gap-1'>
                <div className='form-element'>
                  <label htmlFor={`universityName-${index}`}>
                    University/School Name
                  </label>
                  <input
                    type="text"
                    name={`universityName-${index}`}
                    id={`universityName-${index}`}
                    className='block w-full'
                    value={edu.universityName}
                    onChange={handleInputEdu}
                  />
                </div>
                <div className='form-element'>
                  <label htmlFor={`title-${index}`}>
                    title
                  </label>
                  <input
                    type="text"
                    name={`title-${index}`}
                    id={`title-${index}`}
                    className='block w-full'
                    value={edu.title}
                    onChange={handleInputEdu}
                  />
                </div>
                <div className="'form-element">
                  <label htmlFor={`startYear-${index}`}>
                    Start year:
                  </label>
                  <input
                    type="number"
                    name={`startYear-${index}`}
                    id={`startYear-${index}`}
                    className="block w-full"
                    value={edu.startYear}
                    onChange={handleInputEdu}
                  />
                </div>
                <div className="'form-element">
                  <label htmlFor={`endYear-${index}`}>
                    Graduation year:
                  </label>
                  <input
                    type="number"
                    name={`endYear-${index}`}
                    id={`endYear-${index}`}
                    className="block w-full"
                    value={edu.endYear}
                    onChange={handleInputEdu}
                  />
                </div>
                <div className="'form-element col-span-full">
                  <label htmlFor={`optDescription-${index}`}>
                    Comments and description:
                  </label>
                  <textarea
                    name={`optDescription-${index}`}
                    id={`optDescription-${index}`}
                    className="block w-full"
                    value={edu.optDescription}
                    onChange={handleInputEdu}
                  >
                  </textarea>
                </div>
              </div>
              <div className='form-element flex flex-row-reverse py-2'>
                <button  type="button" className='delete-btn' id={`remove-edu-${index}`} onClick={() => handleRemoveEdu(edu.universityName, edu.title)}>
                  Remove {edu.universityName} {edu.endYear}
                </button>
              </div>
            </div>
          )
        })}
        <button type='button' className='form-btn' onClick={handleAddNewEdu}>
          Add School +
        </button>
      </form>
    </div>
  )
}

export default EduFormSection