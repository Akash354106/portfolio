const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black  px-6 py-[40px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Akash Templates</h3>
          <p className="text-sm text-gray-600">
            High-quality React + Tailwind templates for developers and designers. Build fast, look great.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-600">📧 akashtemplates@gmail.com</p>
          <p className="text-sm text-gray-600">📍 Jharkhand, India</p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Akash Templates. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
