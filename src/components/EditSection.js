import HeaderForm from "./HeaderForm";


const EditSection = ({ data, setData }) => {
  return (
    <div className="edit-section m-4 p-4">
      <HeaderForm data={data} setData={setData}/>
    </div>
  )
}

export default EditSection