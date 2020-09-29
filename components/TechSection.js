import tech from "../data/tech"
import TechItem from "./TechItem"

const remainder = tech.length % 3
const tech3 = remainder ? tech.slice(0, tech.length - remainder) : tech
const techRem = remainder ? tech.slice(tech.length - remainder) : []

const TechSection = () => (
  <div className="flex lg:flex-row flex-col items-center justify-center bg-gray-100 text-gray-900 p-10">
    <div className="lg:pb-0 pb-10">
      <h2 className="text-4xl">Tech I'm into</h2>
      <p>If I'm into it, I probably used it in my side projects.</p>
      <p>Hovering over some of them reveals a little comment.</p>
    </div>
    <div className="pl-10" />
    <div className="grid grid-cols-6 justify-items-center gap-5 h-full">
      {tech3.map((x, i) => (
        <TechItem item={x} key={i} />
      ))}
      {techRem.map((x, i) => (
        <TechItem
          item={x}
          key={`rem-${i}`}
          variant={
            techRem.length === 1 // 1 || 2
              ? "remainder-1"
              : "remainder-2"
          }
        />
      ))}
    </div>
  </div>
)
export default TechSection
