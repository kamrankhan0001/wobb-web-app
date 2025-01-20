const Header = () => (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Wobb</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
  
  export default Header;
  