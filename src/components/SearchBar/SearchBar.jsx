

const SearchBar = () => {
  return (
    <div className="flex gap-4 my-10 justify-center px-10">
        <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
            <option value="" disabled hidden selected>Job Role</option>
            <option value="iOS Developer" >iOS Developer</option>
            <option value="Frontend Developer" >Frontend Developer</option>
            <option value="Backend Developer" >Backend Developer</option>
            <option value="Andriod Developer" >Andriod Developer</option>
            <option value="Software Engineer" >Software Engineer</option>
        </select>
        <select name="type"  className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
        </select>
        <select  name="location"  className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Location</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <select name="experience" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button className="w-64 bg-blue-500 textwhite font-bold py-3 rounded-md">Search</button>
    </div>
  )
}

export default SearchBar