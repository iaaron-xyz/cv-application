import HeaderRender from "./RenderHeader"


const RenderSection = ({ data }) => {
  return (
    <div className="render-section bg-white">
      <HeaderRender data={data} />
    </div>

  )
}

export default RenderSection