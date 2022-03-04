import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-4 gap-y-10  text-gray-600 py-10 px-5">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Support</h5>
          <p>Help Center</p>
          <p>Safety Information</p>
          <p>Our COVID-19 Response</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 ">
          <h5 className="font-bold">Community</h5>
          <p>Support Ukraine refugees</p>
          <p>Combating discrimination</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 ">
          <h5 className="font-bold">Hosting</h5>
          <p>Try Hosting</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 ">
          <h5 className="font-bold">About</h5>
          <p>Newsroom</p>
          <p>Learn about new features</p>
          <p>Careers</p>
          <p>Investors</p>
        </div>
      </div>
      <hr className=" shadow-md" />
      <ul className="flex items-center py-5 space-x-3 sm:justify-end px-5">
        <li className=" flex-grow">&copy; 2022 RestInn, Inc</li>
        <li>
          <ImFacebook />
        </li>
        <li>
          <ImTwitter />{" "}
        </li>
        <li>
          <ImInstagram />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
