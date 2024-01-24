function Project(props) {
    return (
        <div className="projects">
                <h3>{props.name} <a href={props.ghLink}><img className="github-link" src="src/assets/github.icon.png" /></a></h3>
                <div className="project-container">
                    <a href={ props.link }><img className="image-container" src={props.source}/></a>
                    <div className="project-text">{ props.desc }</div>    
                </div>
            
        </div>
    )
}

export default Project