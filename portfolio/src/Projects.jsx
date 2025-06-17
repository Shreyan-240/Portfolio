import ProjectsCard from "./ProjectsCard";
import music from './assets/musicPlayer.jpeg';
import portfolioimg from './assets/portfolioimg.png';
import netfliximg from './assets/netfliximg.jpeg';

function Projects() {
return ( <>

<div className=" p-10 text-teal-400" id="projects" 
>
    <div className="bg-black border-2 border-teal-400 pt-10 p-10 rounded-4xl"
    >
    <p className="text-3xl">Work.</p>
    <p className="text-[19px] pt-4 pb-4">Here are some of the projects I worked on in the past year...</p>
    <ProjectsCard ProjectTitle="Music Player" liveLink='https://github.com/Shreyan-240/Music-Player' bgImg={music} height="h-110" width="w-230" text="3xl"/>
    <ProjectsCard ProjectTitle="Portfolio" liveLink='https://www.slavm.w3spaces.com' bgImg={portfolioimg} height="h-105" width="w-190" props="flex justify-end" />
    <ProjectsCard ProjectTitle="Netflix" liveLink='https://github.com/Shreyan-240/Netflix-Clone' bgImg={netfliximg} height="h-105 " width="w-200" />
<p className="text-right text-2xl pt-4">And many more...</p>
</div>

</div>

</>
)
}
export default Projects;

