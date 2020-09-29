import Tippy from "@tippyjs/react"

const TechItem = ({ variant, item }) => {
  const colSpanClass =
    variant === "remainder-1"
      ? "col-span-6 "
      : variant === "remainder-2"
      ? "col-span-3"
      : "col-span-2"

  const base = (
    <div className={`${colSpanClass} w-full flex justify-center rounded-md`}>
      <img src={item.img} className="h-20 w-auto" />
    </div>
  )

  return item.tooltip ? (
    <Tippy content={item.tooltip} className="text-center">
      {base}
    </Tippy>
  ) : (
    base
  )
}

export default TechItem
