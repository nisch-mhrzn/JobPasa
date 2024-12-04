import DarkModeToggle from "../DarkModeToggle";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center w-full bg-gray-800 text-gray-100 shadow-md px-10">
      <div className="text-3xl font-bold text-gray-100 tracking-wide hover:text-gray-400 cursor-pointer">
        JobPasa
      </div>

      <div className="ml-auto flex items-center gap-6">
        {/* Add other nav items if needed */}
        <DarkModeToggle className="text-2xl hover:text-gray-400 cursor-pointer transition duration-300" />
      </div>
    </div>
  );
};

export default Navbar;
