import { StyledInput } from "./input.styled";

export const Input = ({
  label = "",
  name = "",
  value = "",
  placeholder = "",
  onchange = (e) => console.log(e.target.value),
}) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onchange}
      />
    </StyledInput>
  );
};
