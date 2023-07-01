import { useState } from "react";
import EditSection from "./components/EditSection";
import RenderSection from "./components/RenderSection";
import { cvData } from "./components/cvData";

const App = () => {

  const [data, setData] = useState(cvData);

  return (
    <div className="main-font p-4 flex flex-row justify-center flex-wrap bg-slate-300">
      <EditSection data={data} setData={setData}/>
      <div className="drop-shadow-xl">
        <RenderSection data={data}/>
      </div>
    </div>
  )
}

export default App;