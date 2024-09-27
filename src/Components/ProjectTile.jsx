function ProjectTile(props){
    return(
        <div className="project-tile">
            <img className="project-image" src={props.src} alt={props.alt}></img>
            <div className="project-description">
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default ProjectTile