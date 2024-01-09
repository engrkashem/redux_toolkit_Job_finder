import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { useEffect } from "react";
import { fetchJobs } from "../../features/jobs/jobSlice";

const JobList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, jobs, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading</p>;

  if (!isLoading && isError) content = <p className="error">{error}</p>;

  if (!isLoading && !isError && !jobs?.length)
    content = <p>No job is available</p>;

  if (!isLoading && !isError && jobs?.length) {
    content = jobs?.map((job) => <Job key={job?.id} job={job} />);
  }

  return <div className="jobs-list">{content}</div>;
};

export default JobList;
