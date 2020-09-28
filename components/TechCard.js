const TechCard = ({ label, items }) => (
  <div className="bg-purple-800 px-10">
    <h2 className="text-3xl">{label}</h2>
    <div className="flex flex-row">
      {items.map((item, i) => (
        <div key={i} className="ml-4" title={item.tooltip}>
          <img src={item.img} className="h-24 w-auto" />
          <p className="text-center text-lg">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
)

export default TechCard
