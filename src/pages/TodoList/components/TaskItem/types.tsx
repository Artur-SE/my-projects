import { ITask } from "../../types";

export interface TaskItemProps {
  completeTodoItem: (index: number) => void;
  deleteTodoItem: (index: any) => void;
  index: number;
  taskItem: ITask;
}
