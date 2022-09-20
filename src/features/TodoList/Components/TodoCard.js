import Checkbox from "../../../Components/Checkbox/Checkbox";
import { StyledTodoCard, DeleteButton } from "./TodoCard.styled";

const TodoCard = ({ todo, onChange, onDelete }) => {
  const { id, title, completed } = todo;
  return (
    <StyledTodoCard>
      <Checkbox
        label={title}
        name={`todo_card_${id}`}
        checked={completed}
        onChange={() => onChange(id)}
      />
      <DeleteButton onClick={() => onDelete(id)}>Del</DeleteButton>
    </StyledTodoCard>
  );
};

export default TodoCard;
