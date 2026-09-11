
import Logo from"../assets/logo-text.png"
const Navbar = () => {
    return (
         <nav className="border-b-2 border-gray-200">
    <div className="flex justify-between w-11/12 mx-auto">
        <img src={Logo} alt="" />

      <ul className='flex gap-4 items-center'>
        <li>Home</li>
        <li>Techonologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='flex gap-2'>
        <button className='hover:cursor-pointer'>Sign In</button>
        <button className='hover:cursor-pointer bg-[#D91B7E] rounded-xl btn text-white'>Sign Up</button>
      </div>
    </div>
      </nav>
    );
};

export default Navbar;