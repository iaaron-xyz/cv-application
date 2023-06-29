import React from 'react'

const HeaderRender = ({ data }) => {
  return (
    <div id="header" className="bg-cyan-900 text-white">
      <div className="p-4">
        <h1 className="display-font text-4xl" id="header-name">
          {data.name}
        </h1>
        <h3 className="display-font text-xl pb-2 text-teal-400 font-bold" id="header-description">
          {data.titleCareer}
        </h3>
        <p>
          {data.description}
        </p>
      </div>
      <div className="bg-cyan-950 py-2">
        <ul className="mono-font flex justify-center items-center text-center text-xxs">
          <ContactItems data={data} />
        </ul>
      </div>
    </div>
  )
}

const ContactItems = ({data}) => {

  
  return (
    <>
      <li className={data.contactInfo.email && 'mx-3'}>
        { data.contactInfo.email ? (
          <a href={data.contactInfo.email}>
            {data.contactInfo.email}
          </a>
        ) : (
          ''
        )}
      </li>
      <li className={data.contactInfo.number && 'mx-3'}>
        {data.contactInfo.number}
      </li>
      <li className={data.contactInfo.linkedin && 'mx-3 flex flex-col items-start'}>
        <ContactUserItem
          site={'linkedin.com/in'}
          username={data.contactInfo.linkedin}
        />
      </li>
      <li className={data.contactInfo.github && 'mx-3 flex flex-col items-start'}>
        <ContactUserItem
          site={'github.com'}
          username={data.contactInfo.github}
        />
      </li>
      <li className={data.contactInfo.website && 'mx-3'}>
        { data.contactInfo.website ? (
          <a href={data.contactInfo.website}>
            Website
          </a>
        ) : (
          ''
        )}
      </li>
    </>
  )
}

const ContactUserItem = ({site, username}) => {
  return (
    <>
      { username ? (
        <>
          <p className='text-xxxs text-teal-500'>{site}/</p>
          <a href={`https://www.${site}/${username.split('/').at(-1) || username.split('/').at(-2)}`}>
            {username.split('/').at(-1) || username.split('/').at(-2)}
          </a>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default HeaderRender