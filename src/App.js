import { useRef, useState } from "react";
import EditSection from "./components/EditSection";
import RenderSection from "./components/RenderSection";
import { cvData } from "./components/cvData";
import Navbar from "./components/Navbar";

const App = () => {

  const printRef = useRef();
  const [data, setData] = useState(cvData);

  return (
    <>
      <Navbar printRef={printRef}/>

      <div className="main-font p-4 flex flex-row justify-center flex-wrap bg-slate-300">
        <EditSection data={data} setData={setData}/>
        <div className="drop-shadow-xl">
          <RenderSection data={data} printRef={printRef}/>
        </div>
      </div>

      <footer className="bg-slate-300 text-center p-4">
        Created by <strong><a href="https://github.com/iaaron-xyz">iaaron-xyz</a></strong> | {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default App;