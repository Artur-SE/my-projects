import { ITask } from "../../types";

export interface TaskListProps {
  completeTodoItem: (index: number) => void;
  deleteTodoItem: (index: number) => void;
  taskList: ITask[];
}
