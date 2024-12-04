import dayjs from "dayjs";
import PropTypes from "prop-types";

const JobCard = (props) => {
  const date1 = dayjs(Date.now());
  const diffInDays = Math.abs(date1.diff(props.postedOn, "day"));

  return (
    <div className="mx-auto mb-6 w-full max-w-md">
      <div className="flex flex-col justify-between h-full px-6 py-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg transition-transform duration-200 hover:shadow-xl hover:scale-105">
        {/* Job Details Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {props.title} - <span className="text-gray-600 dark:text-gray-400">{props.company}</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {props.type} <span className="mx-2">•</span> {props.experience}{" "}
            <span className="mx-2">•</span> {props.location}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {props.skills.map((skill) => (
              <p
                key={skill}
                className="text-sm text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-600 py-1 px-3 rounded-full font-medium"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* Actions Section */}
        <div className="mt-auto flex flex-col items-end gap-2">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
          </p>
          <a href={props.job_link}>
            <button className="text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 font-medium py-2 px-6 rounded-lg shadow-sm transition-colors duration-200">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  postedOn: PropTypes.instanceOf(Date).isRequired,
  job_link: PropTypes.string.isRequired,
};

export default JobCard;
