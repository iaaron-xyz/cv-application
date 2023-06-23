const HeaderForm = ({ data, setData }) => {

  const handleInputChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
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
      </form>
    </div>
  )
}

export default HeaderForm