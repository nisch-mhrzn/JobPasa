import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    type: "",
    experience: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(jobCriteria);

  const search = async () => {
    await props.fetchJobsCustom(jobCriteria);
  };

  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      <select
        onChange={handleChange}
        name="title"
        value={jobCriteria.title}
        className="w-64 py-3 pl-4 bg-zinc-200 dark:bg-zinc-700 text-gray-900 dark:text-white font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Andriod Developer">Andriod Developer</option>
        <option value="Software Engineer">Software Engineer</option>
      </select>
      <select
        onChange={handleChange}
        name="type"
        value={jobCriteria.type}
        className="w-64 py-3 pl-4 bg-zinc-200 dark:bg-zinc-700 text-gray-900 dark:text-white font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        onChange={handleChange}
        name="location"
        value={jobCriteria.location}
        className="w-64 py-3 pl-4 bg-zinc-200 dark:bg-zinc-700 text-gray-900 dark:text-white font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        onChange={handleChange}
        name="experience"
        value={jobCriteria.experience}
        className="w-64 py-3 pl-4 bg-zinc-200 dark:bg-zinc-700 text-gray-900 dark:text-white font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button
        onClick={search}
        className="w-64 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-3 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  fetchJobsCustom: PropTypes.func.isRequired,
};

export default SearchBar;
