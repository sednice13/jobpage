import React from 'react';

const Menu = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-center gap-8 text-white py-4 select-none">
        <li className="hover:underline cursor-pointer">GitHub</li>
        <li className="hover:underline cursor-pointer">Jobs</li>
        <li className="hover:underline cursor-pointer">CV</li>
      </ul>
    </nav>
  );
};

export default Menu;
