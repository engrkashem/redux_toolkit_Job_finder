import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchText } from "../../features/jobs/jobSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setSearch(e.target.value);

    dispatch(searchText(`${search}`));
  };

  return (
    <div className="search-field group flex-1">
      <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
      <input
        type="text"
        placeholder="Search Job"
        className="search-input"
        id="lws-searchJob"
        value={search}
        onChange={handleSubmit}
        onKeyUp={handleSubmit}
      />
    </div>
  );
};

export default Search;
