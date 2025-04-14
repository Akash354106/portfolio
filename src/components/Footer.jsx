import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-100 text-black px-6 py-7 mt-10">
      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Akash Templates. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
