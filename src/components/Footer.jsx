import React from "react";

const Footer = () => (
  <footer className="w-full bg-[#0b0d12] text-white pt-12 pb-6 mt-16 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Branding & Address */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="text-2xl font-black mb-4">
            <span className="text-white">Moren</span>
            <span className="text-red-500"> Consultancies</span>
          </div>
          <div className="text-gray-400 text-sm mb-3">
            Accelerating digital growth & strategy for future-ready enterprises.<br />
            123 Main St, Mumbai, India • info@moren.ai • +91-12345-67890
          </div>
        </div>
        {/* Columns */}
        <div className="grid grid-cols-2 gap-8 flex-1 md:grid-cols-4">
          <div>
            <h4 className="font-semibold mb-3 text-red-500 uppercase text-xs">Consulting</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#">Growth Strategy</a></li>
              <li><a href="#">AI & Automation</a></li>
              <li><a href="#">Digital Transformation</a></li>
              <li><a href="#">Brand Intelligence</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-red-500 uppercase text-xs">Solutions</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#">Ecosystem Engineering</a></li>
              <li><a href="#">AI Business Enablement</a></li>
              <li><a href="#">Growth Architecture</a></li>
              <li><a href="#">Demand Acceleration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-red-500 uppercase text-xs">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Insights</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-red-500 uppercase text-xs">Resources</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-800 mt-10 pt-6 gap-2 text-gray-500 text-xs">
        <div>&copy; {new Date().getFullYear()} Moren Consultancies. All rights reserved.</div>
        <div>Branding, Automation & Strategy for the AI Age.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
