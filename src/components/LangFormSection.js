import React from 'react'

const LangFormSection = ({ data, setData }) => {

  const handleAddNewLang = () => {
    setData({...data,
      languages: [...data.languages, {language: "", level: ""}]
    });
  }
  return (
    <div className='p-4'>
      <h2 className='text-2xl'>Languages</h2>
      <form>
        {data.languages.map((lang, index) => {
          return (
            <div className='grid grid-cols-2 gap-1'>
              <div className='form-element'>
                <label>
                  Language
                </label>
                <input
                  type="text"
                  id={`language-${index}`}
                  className='block w-full'
                  value={lang.language}
                />
              </div>
              <div className='form-element'>
              <label>
                Level
              </label>
              <input
                type="text"
                id={`level-${index}`}
                className='block w-full'
                value={lang.level}
              />
            </div>
          </div>
          )
        })}
        <button type='button' className='form-btn' onClick={handleAddNewLang}>
          Add language +
        </button>
      </form>
    </div>
  )
}


export default LangFormSection