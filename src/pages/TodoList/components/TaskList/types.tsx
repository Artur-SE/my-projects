import { ITask } from "../../types";

export interface TaskListProps {
  taskList: ITask[];
  deleteTodoItem: (index: any) => void;
}
