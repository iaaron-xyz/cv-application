import React from 'react'

const HeaderRender = ({ data }) => {
  return (
    <div id="header" className="bg-cyan-900 text-white">
      <div className="p-4">
        <h1 className="text-4xl" id="header-name">
          {data.name}
        </h1>
        <h3 className="text-xl pb-2" id="header-description">
          {data.titleCareer}
        </h3>
        <p>
          {data.description}
        </p>
      </div>
      <div className="bg-cyan-950 py-2">
        <ul className="list-none list-inline text-center text-sm">
        <li>
            { data.contactInfo.email ? (
              <a href={data.contactInfo.email}>{data.contactInfo.email}</a>
            ) : (
              ''
            )}
          </li>
          <li>
            {data.contactInfo.number}
          </li>
          <li>
            { data.contactInfo.linkedin ? (
              <a href={data.contactInfo.linkedin}>linkedIn</a>
            ) : (
              ''
            )}
          </li>
          <li>
            { data.contactInfo.github ? (
              <a href={data.contactInfo.github}>Github</a>
            ) : (
              ''
            )}
          </li>
          <li>
            { data.contactInfo.website ? (
              <a href={data.contactInfo.website}>My portfolio</a>
            ) : (
              ''
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderRender