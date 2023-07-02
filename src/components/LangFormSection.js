import React from 'react'

const LangFormSection = ({ data, setData }) => {

  const handleInputLang = (e) => {
    // get index number and associated sub-field
    const langId = parseInt(e.target.id.split("-").pop());
    const langField = e.target.id.split("-")[0];
    // temporal copy of skills list
    const updatedLang = [...data.languages];
    // update category
    updatedLang[langId] = {
      ...data.languages[langId],
      [langField]: e.target.value
    };
    // update data
    setData({...data, languages: updatedLang});
  };
  
  const handleAddNewLang = () => {
    setData({...data,
      languages: [...data.languages, {language: "", level: ""}]
    });
  }

  const handleRemoveLang = (langName) => {
    // new list with removed language
    let updatedLanguages = data.languages.filter((lang) => langName !== lang.language);
    // update data
    setData({...data, languages: updatedLanguages});
  }

  return (
    
    <div className='p-4 bg-white mb-2 rounded-lg dark:bg-slate-800 dark:text-slate-100'>
      <h2 className='display-font text-2xl text-center'>Languages</h2>
      <form>
        {data.languages.map((lang, index) => {
          return (
            <div key={index} className='grid grid-cols-2 gap-1'>
              <div className='form-element'>
                <label>
                  Language
                </label>
                <input
                  type="text"
                  name={`language-${index}`}
                  id={`language-${index}`}
                  className='block w-full dark:bg-slate-700'
                  value={lang.language}
                  onChange={handleInputLang}
                  placeholder='language. Ex: English or Chinese'
                />
              </div>
              <div className='form-element'>
              <label>
                Level/Certificate
              </label>
              <input
                type="text"
                name={`level-${index}`}
                id={`level-${index}`}
                className='block w-full dark:bg-slate-700'
                value={lang.level}
                onChange={handleInputLang}
                placeholder='Ex: "IELTS 7.0", "C2" or "TOEFL"'
              />
            </div>
            <div></div>
            <div className=' flex flex-row-reverse pb-2'>
              <button  type="button" className='delete-btn' id={`remove-lang-${index}`} onClick={() => handleRemoveLang(lang.language)}>
                Remove {lang.language} language
              </button>
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