import { useState } from "react";

const AddTask = ({ showAddForm }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  return (
    <div className="container">
      <form className="add-form">
        <div className="form-control">
          <label> Task </label>
          <input
            type="text"
            placeholder="Add task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label> Day & Time </label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTask;
