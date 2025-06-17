function ProjectsCard({ProjectTitle='Project', liveLink, height='h-40', width='w-80', bgImg, text='3xl', props=''}) {
    return (
        <div className={`${props}`}>
        <a href={liveLink} target="_blank" className={`rounded-4xl border-teal-400 border-4 ${height} ${width} flex-col flex bg-contain m-2.5 hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out`}
        style={{ backgroundImage: `url(${bgImg})`, backgroundPosition: 'center' }}>
        <div  className={`flex items-center justify-center h-full text-${text}`}
        >
            
                <p className="text-center bg-teal-400 border-[12px] border-teal-400 rounded-4xl text-white">{ProjectTitle}</p>
            

        </div>
        </a>
        </div>
    )


}

export default ProjectsCard;