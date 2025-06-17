import bgimg from './assets/bgFINAL.png';
import Typer from './Typer';
function Name() {
    return (
        <>
        <div className="flex flex-col left-0 justify-center h-screen p-15 w-screen border-4 m-0 border-black"
        
        id='name'>
        <p className='text-white text-3xl p-4'>Hello World!</p>
        <Typer text="I'm" speed={150} classname='text-2xl text-white p-4'/>
        <Typer text="SHREYAN MOR..." speed={150} delay={200} classname='text-7xl text-white p-4'/>
        </div>
        </>
    )

}

export default Name;