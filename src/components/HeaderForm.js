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
    <div className="p-4 header-form-info bg-white rounded-lg mb-2">
      <h2 className="display-font text-2xl text-center">Header info</h2>
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
            placeholder="Ex: John Doe"
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
            placeholder="Ex: 'Quantum Physicist' or 'Frontend Developer'"
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
          <div className="contact-info flex flex-col">
            {/* email */}
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full my-2"
              value={data.contactInfo.email}
              onChange={handleContactInfo}
              placeholder="username@mail.com"
            />
            {/* number phone */}
            <input
              type="text"
              name="number"
              id="number"
              className="block w-full"
              value={data.contactInfo.number}
              onChange={handleContactInfo}
              placeholder="Mobile number"
            />
            {/* linkedin */}
            <div className="social-profile-info flex items-center">
              <div className="border-2 border-slate-400 h-8 p-1 align-middle rounded-l-lg bg-slate-200 text-slate-600">
                www.linkedin.com/in/
              </div>
              <input
                type="url"
                name="linkedin"
                id="linkedin"
                className="block w-full h-8 rounded-r-lg"
                value={data.contactInfo.linkedin}
                onChange={handleContactInfo}
                placeholder="linkedin-username"
              />
            </div>
            {/* github */}
            <div className="social-profile-info flex items-center">
              <div className="border-2 border-slate-400 h-8 p-1 align-middle rounded-l-lg bg-slate-200 text-slate-600">
                www.github.com/
              </div>
              <input
                type="url"
                name="github"
                id="github"
                className="block w-full h-8 rounded-r-lg border-slate-500"
                value={data.contactInfo.github}
                onChange={handleContactInfo}
                placeholder="github-username"
              />
            </div>
            {/* website */}
            <input
              type="url"
              name="website"
              id="website"
              className="block w-full"
              value={data.contactInfo.website}
              onChange={handleContactInfo}
              placeholder="Your web portfolio. Ex: https://www.myportfolio.com"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default HeaderForm