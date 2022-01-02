import { useState } from "react";

export const FormCharacterInputField = ({
  type,
  label,
  labelClassNames,
  fieldClassNames,
  theme,
  name,
}) => {
  const [inputValue, updateInputValue] = useState("");
  return (
    <>
      <div className="flex flex-row w-80">
        <label
          className={`${labelClassNames} formControl__inputLabel`}
          htmlFor={name}
        >
          {label}
        </label>
        <input
          id={name}
          className={`${fieldClassNames} formControl__inputField ${
            theme === `light` ? `inputCharFieldLight` : `inputCharFieldDark`
          }`}
          value={inputValue}
          type={type}
          name={name}
          onChange={(event) => updateInputValue(event.target.value)}
        />
      </div>
    </>
  );
};
