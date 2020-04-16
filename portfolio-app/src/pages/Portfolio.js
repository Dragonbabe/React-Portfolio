import React from 'react';
import projects from '../projects.json';
import Wrapper from '../components/Wrapper';

function Portfolio() {
    return (
        <Wrapper>
            {projects.map((project, index) => 
            <div className="card" key={index}>
                <div className="img-container">
                    <img alt={project.name} src={project.image} />
                </div>
                <div className="content">
                    <p>
                        {project.info}
                    </p>
                    <a href={project.link}>See the action here!</a>
                </div>
            </div>
            )}
        </Wrapper>
    );
}
export default Portfolio;
