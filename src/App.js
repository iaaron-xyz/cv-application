import { useState } from "react";
import EditSection from "./components/EditSection";
import RenderSection from "./components/RenderSection";
import { cvData } from "./components/cvData";

const App = () => {

  const [data, setData] = useState(cvData);

  return (
    <div className="main-font p-4 flex flex-row justify-center flex-wrap bg-slate-500">
      <EditSection data={data} setData={setData}/>
      <RenderSection data={data}/>
    </div>
  )
}

export default App;