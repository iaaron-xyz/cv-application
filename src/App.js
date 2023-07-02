import { useRef, useState } from "react";
import EditSection from "./components/EditSection";
import RenderSection from "./components/RenderSection";
import { cvData } from "./components/cvData";
import Navbar from "./components/Navbar";

const App = () => {

  const printRef = useRef();
  const [data, setData] = useState(cvData);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar printRef={printRef} darkMode={darkMode} setDarkMode={setDarkMode}/>

      <div className="main-font p-4 flex flex-row justify-center flex-wrap bg-slate-300 dark:bg-slate-900">
        <EditSection data={data} setData={setData}/>
        <div className="drop-shadow-xl">
          <RenderSection data={data} printRef={printRef}/>
        </div>
      </div>

      <footer className="bg-slate-300 text-center p-4 dark:bg-slate-900 dark:text-slate-100">
        Created by <strong><a href="https://github.com/iaaron-xyz">iaaron-xyz</a></strong> | {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default App;