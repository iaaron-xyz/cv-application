import React from 'react'

const LangFormSection = ({ data, setData }) => {
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
                  id="language"
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
                id="language"
                className='block w-full'
                value={lang.level}
              />
            </div>
          </div>
          )
        })}
      </form>
    </div>
  )
}


export default LangFormSection