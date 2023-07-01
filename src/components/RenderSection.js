import HeaderRender from "./RenderHeader"
import RenderMain from "./RenderMain"
import RenderSidebar from "./RenderSidebar"


const RenderSection = ({ data, printRef }) => {
  return (
    <div ref={printRef} className="render-section bg-white">
      <HeaderRender data={data} />
      <div className="render-main-content">
        <RenderSidebar data={data} />
        <RenderMain data={data} />
      </div>
    </div>

  )
}

export default RenderSection