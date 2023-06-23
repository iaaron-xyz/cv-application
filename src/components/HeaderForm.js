const HeaderForm = ({ data, setData }) => {

  const handleInputChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleContactInfo = (e) => {
    console.log(data.contactInfo);
    setData({
      ...data,
      contactInfo: {
        ...data.contactInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className="p-4 header-form-info">
      <h2 className="text-2xl">Header info</h2>
      <form >
        <div className="form-element">
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full"
            value={data.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="titleCareer">
            Title
          </label>
          <input
            type="text"
            name="titleCareer"
            id="title"
            className="block w-full"
            value={data.titleCareer}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="description">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            className="block w-full"
            value={data.description}
            onChange={handleInputChange}>
          </textarea>
        </div>

        {/* Contact info */}
        <div className="form-element">
          <h2 className="text-xl">Contact Information</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* email */}
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full"
              value={data.contactInfo.email}
              onChange={handleContactInfo}
            />
            {/* number phone */}
            <input
              type="text"
              name="number"
              id="number"
              className="block w-full"
              value={data.contactInfo.number}
              onChange={handleContactInfo}
            />
            {/* linkedin */}
            <input
              type="url"
              name="linkedin"
              id="linkedin"
              className="block w-full"
              value={data.contactInfo.linkedin}
              onChange={handleContactInfo}
            />
            {/* github */}
            <input
              type="url"
              name="github"
              id="github"
              className="block w-full"
              value={data.contactInfo.github}
              onChange={handleContactInfo}
            />
            {/* website */}
            <input
              type="url"
              name="website"
              id="website"
              className="block w-full"
              value={data.contactInfo.website}
              onChange={handleContactInfo}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default HeaderForm