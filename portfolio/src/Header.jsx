function Header(){
    return (
<div className='fixed z-10 top-0 left-0 right-0 backdrop-blur-sm shadow-md p-4 flex h-25 '>
        <ul className='flex justify-between text-white max-w-screen-lg mx-auto w-full items-center'>
        <li className=" text-center "><a href="#name" className="hover:shadow-md">NAME</a></li>
        <li className=" text-center "><a href="#about">ABOUT</a></li>
        <li className=" text-center "><a href="#projects">WORK</a></li>
        <li className=" text-center "><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    )
}

export default Header;