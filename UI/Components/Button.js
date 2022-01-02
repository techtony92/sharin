export const ContainedButton = ({ type, theme, label, classes }) => {
  return (
    <button
      type={type}
      className={`${classes} mx-4 px-12 py-4 h-auto text-textSize__3 ${
        theme === "dark"
          ? "bg-DarkMode__buttonBase text-DarkMode__buttonText"
          : "bg-LightMode__buttonBase text-LightMode__buttonText"
      } `}
    >
      {label}
    </button>
  );
};

export const OutlinedButton = ({ type, theme, label, classes }) => {
  return (
    <button
      type={type}
      className={`${classes} mx-4 px-12 py-8 h-auto bg-transparent text-textSize__2 font-bold  border-2 ${
        theme === "dark"
          ? "text-DarkMode__buttonText border-DarkMode__buttonBase"
          : "text-LightMode__buttonText border-LightMode__buttonBase"
      } `}
    >
      {label}
    </button>
  );
};

export const TextButton = ({
  id,
  type,
  theme,
  label,
  classes,
  focused,
  setFocused,
}) => {
  return (
    <button
      id={id}
      type={type}
      onClick={(event) => setFocused(id)}
      className={`${classes} mx-4 px-12 py-8 h-auto bg-transparent text-textSize__2 font-bold ${
        theme === "dark" ? "text-DarkMode__text" : "text-LightMode__text"
      } ${focused === id ? "border-b-2" : "border-b-0"} ${
        focused === id && theme === "dark"
          ? "border-DarkMode__border"
          : "bg-LightMode__border"
      }} `}
    >
      {label}
    </button>
  );
};
