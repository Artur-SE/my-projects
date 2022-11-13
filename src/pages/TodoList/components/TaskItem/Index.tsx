import { TaskItemProps } from "./types";

export const TaskItem = (props: TaskItemProps) => {
  const { taskItem, deleteTodoItem, index } = props;

  return (
    <div>
      <span>
        {taskItem.name} {taskItem.priority} {taskItem.id}
      </span>
      <button onClick={() => deleteTodoItem(index)}>X</button>
    </div>
  );
};
