import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMatch } from "react-router-dom";
import { createJob } from "../features/jobs/jobSlice";

/* eslint-disable react/prop-types */
const Form = ({ children }) => {
  const match = useMatch("/create-new-job");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();

  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };

  const forSubmitHandler = (e) => {
    e.preventDefault();
    if (match) {
      dispatch(
        createJob({
          title,
          type,
          salary,
          deadline,
        })
      );
    }

    reset();
  };

  return (
    <form onSubmit={forSubmitHandler} className="space-y-6">
      <div className="fieldContainer">
        <label className="text-sm font-medium text-slate-300">Job Title</label>
        <select
          onChange={(e) => setTitle(e.target.value)}
          id="lws-JobTitle"
          name="lwsJobTitle"
          value={title}
          required
        >
          <option value="" hidden>
            Select Job
          </option>
          <option>Software Engineer</option>
          <option>Software Developer</option>
          <option>Full Stack Developer</option>
          <option>MERN Stack Developer</option>
          <option>DevOps Engineer</option>
          <option>QA Engineer</option>
          <option>Product Manager</option>
          <option>Social Media Manager</option>
          <option>Senior Executive</option>
          <option>Junior Executive</option>
          <option>Android App Developer</option>
          <option>IOS App Developer</option>
          <option>Frontend Developer</option>
          <option>Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label>Job Type</label>
        <select
          onChange={(e) => setType(e.target.value)}
          id="lws-JobType"
          name="lwsJobType"
          value={type}
          required
        >
          <option value="" hidden>
            Select Job Type
          </option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label>Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            onChange={(e) => setSalary(e.target.value)}
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            value={salary}
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label>Deadline</label>
        <input
          onChange={(e) => setDeadline(e.target.value)}
          type="date"
          value={deadline}
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          required
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          {children}
        </button>
      </div>
    </form>
  );
};

export default Form;
