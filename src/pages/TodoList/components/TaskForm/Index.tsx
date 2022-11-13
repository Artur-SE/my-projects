import { TextField, Typography, Slider, Button } from "@mui/material";
import { TaskFormProps } from "./types";

export const TaskForm = (props: TaskFormProps) => {
  const { submitHandler, changeHandler, sliderChangeHandler, task } = props;

  const marks = [
    {
      value: 0,
      label: "Low",
    },
    {
      value: 1,
      label: "Medium",
    },
    {
      value: 2,
      label: "High",
    },
  ];

  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="outlined-basic"
        label="Task Name"
        name="name"
        onChange={changeHandler}
        required
        value={task.name}
        variant="standard"
      />

      <Typography id="input-slider" gutterBottom>
        Priority
      </Typography>

      <Slider
        name="priority"
        value={task.priority}
        onChange={sliderChangeHandler}
        aria-label="Custom marks"
        defaultValue={0}
        step={1}
        marks={marks}
        min={0}
        max={2}
      />

      <Button type="submit" variant="contained">
        Add Task
      </Button>
    </form>
  );
};
