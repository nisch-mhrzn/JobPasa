import "./App.css";
import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return <div>
    <Navbar/>
    <Header/>
    <SearchBar/>
    <JobCard/>
  </div>;
}

export default App;
