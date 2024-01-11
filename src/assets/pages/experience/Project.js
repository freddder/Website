import React from 'react'
import path from '../../images/Path_of_Titans_Banner.jpg'

function Project(props) {

    return (
        <div className={`project-${props.projNumber}`}>
            <img src={path} alt={props.imgAlt} style={{ maxWidth: '30%', marginRight: '20px', objectFit: 'contain' }}/>
            <div style={{ textAlign: 'left' }}>
                { props.link !== '' 
                    ? <h1><a href={props.link} target="_blank" rel="noreferrer" style={{ color: 'white' }}>{props.projName}</a></h1>
                    : <h1>{props.projName}</h1>
                }
                <h2>{props.title}</h2>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: '50px' }}>
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