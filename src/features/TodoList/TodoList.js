import { Input } from "../../Components/Input/input";
import TodoCard from "./Components/TodoCard";
import { StyledTodoList } from "./TodoList.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  getLoadingStatus,
  getTodos,
  getTodosList,
  updateTodoStatus,
} from "./State/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodosList);
  const isLoading = useSelector(getLoadingStatus);

  const handleUpdateTodoStatus = (id) => {
    dispatch(updateTodoStatus(id));
    dispatch(getTodos());
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
  };

  return (
    <StyledTodoList>
      <button onClick={() => dispatch(getTodos())}>get todos</button>
      <Input
        label="search"
        name="search_todo"
        value=""
        placeholder="todo title"
      />
      <br />
      <hr />
      <br />
      {isLoading && <div>loading...</div>}
      {todos.map((item) => (
        <TodoCard
          key={`${item.id}`}
          todo={item}
          onChange={handleUpdateTodoStatus}
          onDelete={handleDeleteTodo}
        />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
