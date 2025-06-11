function ProjectsCard({ProjectTitle='Project', liveLink, height='h-40', width='w-80', bgImg, text=''}) {
    return (
        <a href={liveLink} target="_blank" className={`rounded-4xl border-teal-400 border-4 ${height} ${width} flex-col flex bg-contain m-2.5`}
        style={{ backgroundImage: `url(${bgImg})`, backgroundPosition: 'center' }}>
        <div  className={`flex items-center justify-center h-full text-${text}`}
        >
            
                <p className="text-center">{ProjectTitle}</p>
            

        </div>
        </a>
    )


}

export default ProjectsCard;