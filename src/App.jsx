import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [customSearch, setCustomSearch] = useState(false);
  const [jobs, setJobs] = useState([]);

  // Fetch all jobs
  const fetchJobs = async () => {
    setCustomSearch(false); // Reset custom search flag
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  // Fetch jobs based on custom criteria
  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true); // Enable custom search flag
    const tempJobs = [];
    const jobsRef = collection(db, "jobs");
    let q = query(jobsRef, orderBy("postedOn", "desc"));

    // Apply filters dynamically
    if (jobCriteria.type) q = query(q, where("type", "==", jobCriteria.type));
    if (jobCriteria.title) q = query(q, where("title", "==", jobCriteria.title));
    if (jobCriteria.experience)
      q = query(q, where("experience", "==", jobCriteria.experience));
    if (jobCriteria.location)
      q = query(q, where("location", "==", jobCriteria.location));

    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && (
        <div className="flex justify-center my-4">
          <button
            onClick={fetchJobs}
            className="bg-blue-500 px-6 py-2 rounded-md text-white font-semibold hover:bg-blue-600 transition"
          >
            Clear Filters
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}

export default App;
