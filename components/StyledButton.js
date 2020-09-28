const StyledButton = ({ children, Tag, ...props }) => (
  <Tag className="bg-purple-700 px-4 py-2 rounded-md" {...props}>
    {children}
  </Tag>
)

StyledButton.defaultProps = {
  Tag: "button",
}

export default StyledButton
