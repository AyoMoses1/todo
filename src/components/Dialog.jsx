/*eslint-disable*/
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "./../redux/todos/todosSlice";

export default function FormDialog({
  handleClose,
  open,
  id,
  title,
  completed,
}) {
  const [state, setState] = useState({ title: title, completed: completed });
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(updateTodo({ id: id, data:{...state} }));
    handleClose();
  };

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>Edit Todo</DialogContentText>
        <FormControl>
          <TextField
            name="title"
            label="title"
            variant="outlined"
            value={state.title}
            onChange={handleChange}
            autoComplete="off"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
          />
          <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={state.completed}
            name="completed"
            onChange={handleChange}
          >
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="Not Completed"
            />
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="Completed"
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleUpdate}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}
