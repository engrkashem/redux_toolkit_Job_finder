import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createJob, updateJob } from "../features/jobs/jobSlice";

/* eslint-disable react/prop-types */
const Form = ({ children }) => {
  // const match = useMatch("/create-new-job");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const { jobs } = useSelector((state) => state.job);
  const navigate = useNavigate();

  useEffect(() => {
    const updatableJob = jobs?.filter((job) => job?.id === Number(id))[0] || {};

    if (id && updatableJob?.id) {
      setTitle(updatableJob?.title || "");
      setType(updatableJob?.type || "");
      setSalary(updatableJob?.salary || "");
      setDeadline(updatableJob?.deadline || "");
    } else {
      navigate("/");
    }
  }, [id, jobs, navigate]);

  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };

  const forSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      type,
      salary,
      deadline,
    };
    if (!id) {
      dispatch(createJob(data));
    } else {
      dispatch(updateJob({ id, data }));
      navigate("/");
    }

    reset();
  };

  return (
    <form onSubmit={forSubmitHandler} className="space-y-6">
      <div className="fieldContainer">
        <label className="text-sm font-medium text-slate-300">Job Title</label>
        <select
          id="lws-JobTitle"
          name="lwsJobTitle"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
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
          id="lws-JobType"
          name="lwsJobType"
          value={type}
          required
          onChange={(e) => setType(e.target.value)}
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
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            value={salary}
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label>Deadline</label>
        <input
          type="date"
          value={deadline}
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          required
          onChange={(e) => setDeadline(e.target.value)}
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
