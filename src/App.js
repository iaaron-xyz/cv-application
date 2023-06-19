import React, { Component } from "react";
import EditSection from "./components/EditSection";
import RenderSection from "./components/RenderSection";

class App extends Component {
  render() {
    return (
      <div className="p-4 flex flex-row justify-center flex-wrap">
        <EditSection />
        <RenderSection />
      </div>
    );
  }
}

export default App;