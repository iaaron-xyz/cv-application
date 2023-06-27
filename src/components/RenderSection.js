import HeaderRender from "./RenderHeader"
import RenderMain from "./RenderMain"
import RenderSidebar from "./RenderSidebar"


const RenderSection = ({ data }) => {
  return (
    <div className="render-section bg-white">
      <HeaderRender data={data} />
      <div className="render-main-content">
        <RenderSidebar data={data}/>
        <RenderMain />
      </div>
    </div>

  )
}

export default RenderSection