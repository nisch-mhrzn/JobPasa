import "./App.css";
import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import jobData from "./JobDummyData";
function App() {

  return <div>
    <Navbar/>
    <Header/>
    <SearchBar/>
    {jobData.map((job)=>(
      <JobCard key={job.id} {...job}/>  // spread operator to pass all properties of job object as props to JobCard component  // {...job} is equivalent to job.title, job.company, job.location, job.skills, job.id... etc.  // job.id is used as key for unique identification of each job card.  // Note: job.id should be unique for each job card. If it's not, React will throw a warning about duplicate keys.  // If job.id is not provided, React will generate a unique key internally.  // If the job.id is provided but not unique, React will not throw a warning.  // In this case, we need to ensure that job.id is unique for each job card.  // For example, if job.id is a combination of job title and company name, we can generate a unique id by combining them.
    ))}
   
  </div>;
}

export default App;
