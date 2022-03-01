import { SearchIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
const Header = () => {
  return (
    <header className="sticky top-0 z-20 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className=" relative font-['Architects_Daughter'] font-medium flex items-center h-10 my-auto cursor-pointer text-blue-400 text-3xl">
        <Link to="/">Rest Inn</Link>
      </div>

      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent pl-5 outline-none flex-grow text-sm text-gray-800"
        />
        <button type=" submit">
          <SearchIcon className="hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </button>
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-600">
        <p className=" hidden md:inline-flex text-black">Vacation Properties</p>
        <Menu as="div">
          <Menu.Button className="flex items-center border-2 rounded-full p-2 space-x-2 transition duration-150 ease-in-out">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </Menu.Button>
          <Menu.Items className="z-30 absolute right-10 bg-white border shadow rounded-md mt-2">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/signup"
                  className={`${
                    active ? " bg-gray-100" : ""
                  } block px-5 py-3 whitespace-no-wrap`}
                >
                  Sign Up
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/login"
                  className={`${
                    active ? " bg-gray-100" : ""
                  } block px-5 py-3 whitespace-no-wrap`}
                >
                  Login
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
