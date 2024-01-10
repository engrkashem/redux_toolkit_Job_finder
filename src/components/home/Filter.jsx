import { useDispatch } from "react-redux";
import { sortOrder } from "../../features/jobs/jobSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    let sortBy;
    if (e.target.value === "Default") {
      sortBy = e.target.value;
    } else {
      sortBy = e.target.value === "Salary (Low to High)" ? "asc" : "des";
    }

    dispatch(sortOrder(`${sortBy}`));
  };

  return (
    <select
      onChange={handleSort}
      id="lws-sort"
      name="sort"
      autoComplete="sort"
      className="flex-1"
    >
      <option>Default</option>
      <option>Salary (Low to High)</option>
      <option>Salary (High to Low)</option>
    </select>
  );
};

export default Filter;
