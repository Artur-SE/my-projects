import { FormEvent, useState } from "react";
import { TaskForm } from "./components/TaskForm/Index";
import { TaskList } from "./components/TaskList/Index";
import { StyledTodoList } from "./styled";
import { ITask } from "./types";
import { v4 as uuidv4 } from "uuid";

export const TodoList = () => {
  const [task, setTask] = useState<ITask>({
    id: "",
    name: "",
    priority: 0,
    complete: false,
  });

  const [taskList, setTaskList] = useState<ITask[]>([
    {
      id: "",
      name: "Artur",
      priority: 0,
      complete: false,
    },
    {
      id: "",
      name: "Mascha",
      priority: 2,
      complete: true,
    },
  ]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log(task);
  };

  const sliderChangeHandler = (event: Event, value: number | number[]) => {
    const target = event.target as HTMLInputElement;
    setTask({ ...task, [target.name]: value });
    console.log(task);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newTask = { ...task, id: uuidv4() };
    setTaskList([...taskList, newTask]);
    setTask({
      id: "",
      name: "",
      priority: 0,
      complete: false,
    });
  };

  const deleteTodoItem = (index: number) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const completeTodoItem = (index: number) => {
    const newTaskList = [...taskList];
    newTaskList[index].complete === false
      ? (newTaskList[index].complete = true)
      : (newTaskList[index].complete = false);
    setTaskList(newTaskList);
  };

  return (
    <StyledTodoList>
      <TaskForm
        task={task}
        changeHandler={changeHandler}
        sliderChangeHandler={sliderChangeHandler}
        submitHandler={submitHandler}
      />
      <TaskList
        taskList={taskList}
        deleteTodoItem={deleteTodoItem}
        completeTodoItem={completeTodoItem}
      />
    </StyledTodoList>
  );
};
