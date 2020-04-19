import React from 'react';
import projects from '../projects';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
function Portfolio() {
    return (
        <>
        <Header message="Take A Look At My Projects!"/>
        
        <Wrapper>
            <div className="row">
                {projects.map((project, index) =>
                    <div className="col-md-6" key={index}>
                        <div className="card" style={{width: "100%"}}>
                            <h1>{project.name}</h1>
                            <div className="img-container">
                                <img alt="beep boop" src={project.image} className="img-fluid" style={{width:"100%"}}/>
                            </div>
                            <div className="content">
                                <p>
                                    {project.info}
                                </p>
                                <a href={project.link}>See my website here!</a><br>
                                </br>
                                <a href={project.github}>See my code on Git Hub!</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
        </>
    );
}
export default Portfolio;
