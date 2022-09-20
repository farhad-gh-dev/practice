import { StyledCheckbox } from "./Checkbox.styled";

const Checkbox = ({
  label = "",
  name = "",
  checked = false,
  onChange = () => console.log("checkbox clicked..."),
}) => {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </StyledCheckbox>
  );
};

export default Checkbox;
