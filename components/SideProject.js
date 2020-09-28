import { GithubIcon } from "./icons"
import StyledButton from "./StyledButton"

const SideProject = ({ item }) => (
  <div className="flex justify-center py-5">
    <div className="flex flex-col lg:flex-row max-w-screen-lg">
      <img src={item.img} className="self-center w-full lg:max-w-lg" />
      <div className="px-5 py-5 lg:py0">
        <h3 className="text-2xl font-bold">{item.title}</h3>
        <div className="pb-5" />
        <p>{item.subtitle}</p>
        <div className="pb-5" />
        <div className="flex flex-col lg:flex-row items-start text-gray-200">
          <StyledButton Tag="a" href={item.links.live}>
            Live Demo
          </StyledButton>
          <div className="pb-2 lg:pb-0 pl-2" />
          <a
            className="bg-purple-700 px-4 py-2 rounded-md flex"
            href={item.links.source}
          >
            <GithubIcon className="h-6 w-6" />
            <span className="pl-2">Source Code</span>
          </a>
        </div>
        <div className="pt-5" />
        <div className="flex">
          {item.techs.map((x, i) => (
            <a className="mr-3" key={i}>
              <img src={x} height="50px" width="50px" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default SideProject
