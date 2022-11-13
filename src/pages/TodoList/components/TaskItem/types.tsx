import { ITask } from "../../types";

export interface TaskItemProps {
  taskItem: ITask;
  deleteTodoItem: (index: any) => void;
  index: number;
}
