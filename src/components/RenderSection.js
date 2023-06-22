import React, { Component } from "react";
import { headerData } from './cvData';


class RenderSection extends Component {
  render() {

    const {name, description, titleCareer} = headerData;
    return (
      <div className="render-section bg-white">

        {/* HEADER */}
        <div id="header" className="bg-cyan-900 text-white">
          <div className="p-4">
            <h1 className="text-4xl" id="header-name">
              {name}
            </h1>
            <h3 className="text-xl pb-2" id="header-description">
              {titleCareer}
            </h3>
            <p>
              {description}
            </p>
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