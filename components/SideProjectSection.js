import sideProject from "../data/sideProject"
import SideProject from "./SideProject"

const SideProjectSection = () => (
  <section className="py-10 bg-gray-100 text-gray-900" id="side-project">
    <p className="text-4xl text-center">Side Project</p>
    <div className="px-2 lg:px-10 ">
      {sideProject.map((x, i) => (
        <SideProject item={x} key={i} />
      ))}
    </div>
  </section>
)

export default SideProjectSection
