import tech from "../data/tech"

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
      {tech3.map((x) => (
        <div
          key={x.label}
          title={x.tooltip}
          className="col-span-2 w-full flex justify-center rounded-md"
        >
          <img src={x.img} className="h-20 w-auto" />
        </div>
      ))}
      {techRem.map((x) => (
        <div
          key={x.label}
          title={x.tooltip}
          className={`
            ${
              techRem.length === 1 // 1 || 2
                ? "col-span-6"
                : "col-span-3"
            }
            w-full flex justify-center rounded-md
            `}
        >
          <img src={x.img} className="h-20 w-auto" />
        </div>
      ))}
    </div>
  </div>
)
export default TechSection
