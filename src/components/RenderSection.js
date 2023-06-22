import React, { Component } from "react";


class RenderSection extends Component {
  render() {
    return (
      <div className="render-section bg-white">
        <div id="header" className="bg-cyan-900 text-white">
          <div className="p-4">
            <h1 className="text-4xl">Name</h1>
            <h3 className="text-xl pb-2">Position/Career</h3>
            <p>Description</p>
          </div>
          <div className="bg-cyan-950 py-2">
            <ul className="list-none list-inline text-center">
              <li>
                contact 1
              </li>
              <li>
                contact 2
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default RenderSection