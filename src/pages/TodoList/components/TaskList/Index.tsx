import { TaskItem } from "../TaskItem/Index";
import { TaskListProps } from "./types";

export const TaskList = (props: TaskListProps) => {
  const { taskList, deleteTodoItem, completeTodoItem } = props;
  return (
    <div>
      {taskList.map((taskItem, index) => {
        return (
          <TaskItem
            completeTodoItem={completeTodoItem}
            deleteTodoItem={deleteTodoItem}
            taskItem={taskItem}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
};
