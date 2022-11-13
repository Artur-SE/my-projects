import { FormEvent } from "react";
import { ITask } from "../../types";

export interface TaskFormProps {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sliderChangeHandler: (event: Event, value: number | number[]) => void;
  task: ITask;
}
