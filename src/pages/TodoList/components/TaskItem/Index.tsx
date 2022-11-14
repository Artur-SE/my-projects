import { TaskItemProps } from "./types";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export const TaskItem = (props: TaskItemProps) => {
  const { taskItem, deleteTodoItem, index, completeTodoItem } = props;

  return (
    <div>
      <span>
        {taskItem.name} {taskItem.priority} {taskItem.id}{" "}
        {taskItem.complete.toString()}
      </span>
      <button onClick={() => deleteTodoItem(index)}>X</button>
      <button onClick={() => completeTodoItem(index)}>
        {taskItem.complete ? <CheckIcon /> : <ClearIcon />}
      </button>
    </div>
  );
};
