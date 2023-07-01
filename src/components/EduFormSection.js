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
    <div className="p-4 bg-white mb-2 rounded-lg">
      <h2 className="display-font text-center text-2xl">Education</h2>
      <form>
        {data.education.map((edu, index) => {
          return (
            <div key={index}>
              <div className='grid grid-cols-2 gap-1'>
                {/* School name */}
                <FormInput
                  index={index}
                  labelTitle={'University/School name'}
                  inputType={'text'}
                  eduField={edu.universityName}
                  field={'universityName'}
                  handleInputEdu={handleInputEdu}
                />
                {/* Degree / Title */}
                <FormInput
                  index={index}
                  labelTitle={'Title/Degree'}
                  inputType={'text'}
                  eduField={edu.title}
                  field={'title'}
                  handleInputEdu={handleInputEdu}
                />
                {/* Start year */}
                <FormInput
                  index={index}
                  labelTitle={'Start year'}
                  inputType={'number'}
                  eduField={edu.startYear}
                  field={'startYear'}
                  handleInputEdu={handleInputEdu}
                />
                {/* End year */}
                <FormInput
                  index={index}
                  labelTitle={'End year'}
                  inputType={'number'}
                  eduField={edu.endYear}
                  field={'endYear'}
                  handleInputEdu={handleInputEdu}
                />
                {/* Comments */}
                <FormInput
                  index={index}
                  labelTitle={'Comments/Description'}
                  inputType={''}
                  eduField={edu.optDescription}
                  field={'optDescription'}
                  handleInputEdu={handleInputEdu}
                />
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

const FormInput = (props) => {
  const {index, labelTitle, inputType, eduField, field, handleInputEdu} = props;

  return (
    <div className='form-element'>
      <label htmlFor={`${field}-${index}`}>
        {labelTitle}
      </label>
      { (field === 'optDescription') ? (
        // Text Area
        <textarea
          name={`${field}-${index}`}
          id={`${field}-${index}`}
          className="block w-full"
          value={eduField}
          onChange={handleInputEdu}
        >
        </textarea>
      ) : (
        // Input text / number
        <input
          type={inputType}
          name={`${field}-${index}`}
          id={`${field}-${index}`}
          className='block w-full'
          value={eduField}
          onChange={handleInputEdu}
        />
      )}
    </div>
  )
}

export default EduFormSection