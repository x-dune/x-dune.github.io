import { DownIcon } from "./icons"

const HeroBanner = () => (
  <header className="bg-banner bg-cover bg-fixed">
    <div className="h-screen flex flex-col justify-center items-center bg-transparent-purple-1">
      <div className="pl-10">
        <h2 className="text-6xl font-bold uppercase">Adam Ho</h2>
        <h2 className="text-xl font-bold uppercase">
          Front-end / Mobile Developer
        </h2>
        <div className="pt-5"></div>
        <div>
          <p className="font-bold">tl;dr</p>
          <p>work with react, react-native, redux</p>
          <p>interested in working with flutter, elixir or elm</p>
          <p>Time's Magazine Person of the Year 2006 (seriously, google it)</p>
        </div>
        <div className="pt-5" />
        <button className="border border-white rounded-md px-5 py-1">
          <a className="flex flex-row items-center" href="#side-project">
            <DownIcon className="h-6 w-6" />
            <div className="pr-2"></div>
            <p className="uppercase font-bold">Read On</p>
          </a>
        </button>
      </div>
    </div>
  </header>
)

export default HeroBanner
