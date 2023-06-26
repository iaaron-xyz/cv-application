import EduFormSection from "./EduFormSection";
import HeaderForm from "./HeaderForm";
import LangFormSection from "./LangFormSection";
import SkillsForm from "./SkillsForm";


const EditSection = ({ data, setData }) => {
  return (
    <div className="edit-section m-4 p-4">
      <HeaderForm data={data} setData={setData}/>
      <SkillsForm data={data} setData={setData}/>
      <LangFormSection data={data} setData={setData}/>
      <EduFormSection data={data} setData={setData} />
    </div>
  )
}

export default EditSection