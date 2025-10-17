import './Experience.css';

function Project(props) {

    return (
        <div className={`project-${props.projNumber}`}>
            <img className='projImg' src={props.imgSrc} alt={props.imgAlt}/>
            <div className='projContainer'>
                { props.link !== '' 
                    ? <h1><a href={props.link} target="_blank" rel="noreferrer" style={{ color: 'white' }}>{props.projName}</a></h1>
                    : <h1>{props.projName}</h1>
                }
                <h2>{props.title}</h2>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: '10px' }}>
                        { props.responsabilities.map((responsability) => {
                            return <li>{responsability}</li>
                        })}
                    </div>
                    <div>
                        { props.skills.map((skill) => {
                            return <li>{skill}</li>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;