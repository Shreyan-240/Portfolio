import ProjectsCard from "./ProjectsCard";
import music from './assets/musicPlayer.jpeg';

function Projects() {
return ( <>
<div className="bg-black p-10 text-teal-400">
    <p>Work.</p>
    <p>Here are some of the projects I worked on in the past year.</p>
    <ProjectsCard ProjectTitle="Music Player" liveLink='https://github.com/Shreyan-240/Music-Player' bgImg={music} height="h-110" width="w-230" text="2xl"/>
    <ProjectsCard ProjectTitle="Portfolio" liveLink='https://www.slavm.w3spaces.com'/>
    <ProjectsCard ProjectTitle="Netflix" liveLink='https://github.com/Shreyan-240/Netflix-Clone'/>
</div>
</>
)
}
export default Projects;

