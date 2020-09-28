const ContactButton = ({ children, colorClass, cursorClass, href }) => (
  <a
    className={`
    flex
    flex-row
    items-center
    hover:${colorClass}
    my-2
    px-5
    py-2
    rounded-md
    transition-all
    duration-300
    ${cursorClass}
    `}
    target={href ? "_blank" : ""}
    rel={href ? "noreferrer" : ""}
    href={href}
  >
    {children}
  </a>
)

ContactButton.defaultProps = {
  colorClass: "bg-black",
  cursorClass: "cursor-pointer",
}

export default ContactButton
