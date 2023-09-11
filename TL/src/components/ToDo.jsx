import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handelAddNew,
  handelDeleteJob,
  handelEditJob,
} from "../actions/actions";
import { v4 } from "uuid";
export const ToDo = () => {
  const jobs = useSelector((e) => e.todo);
  const dispatch = useDispatch();
  const [job, setJob] = useState("");
  // console.log(job);
  const handleAdd = () => {
    const newJob = {
      id: v4(),
      name: job,
      status: false,
    };
    dispatch(handelAddNew(newJob));
    setJob("");
  };
  const handelDelete = (id) => {
    dispatch(handelDeleteJob(id));
  };
  const handelEdit = (id) => {
    dispatch(handelEditJob(id));
  };
  return (
    <>
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={handleAdd} className="btn btn-primary">
          Add
        </button>
      </div>
      <ul className="list-group">
        {jobs.map((e) => (
          <li
            className="list-group-item d-flex justify-content-between mb-3"
            key={e.id}
          >
            <div className="d-flex gap-2 align-items-center">
              <input
                type="checkbox"
                className="form-check-input"
                checked={e.status}
                onChange={() => handelEdit(e.id)}
              />
              {e.status ? <del>{e.name}</del> : <span>{e.name}</span>}
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handelDelete(e.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
