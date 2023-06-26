const EduFormSection = ({ data, setData }) => {

  const handleInputEdu = () => {
    console.log("Handle input Edu")
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
              <div className=' flex flex-row-reverse pb-2'>
                {/* <button  type="button" className='delete-btn' id={`remove-edu-${index}`} onClick={() => handleRemoveEdu(edu.universityName)}>
                  Remove {edu.universityName} language
                </button> */}
              </div>
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default EduFormSection