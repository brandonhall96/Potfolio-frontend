import React from 'react';

const Projects = () => {
    return (
        <div>
            <div>
                <h1 class="page-headers">My Projects</h1>
            </div>
    
            <div class="card-deck" className='movie-grid'>
                <div class="card">
                    <img class="card-img-top" src="images/proj1.jpeg" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">F1 Trivia</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural 
                            lead-in to additional content. This content is a little bit longer.</p>
                            
                    </div>
                </div>
            </div>
            <div class="card-deck" className='movie-grid'>
                <div class="card">
                    <img class="card-img-top" src="images/proj2.jpeg" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Dream Team Builder</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural 
                            lead-in to additional content. This content is a little bit longer.</p>
                            
                    </div>
                </div>
            </div>
            <div class="card-deck" className='movie-grid'>
                <div class="card">
                    <img class="card-img-top" src="images/proj3.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">FakeX</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural 
                            lead-in to additional content. This content is a little bit longer.</p>
                            
                    </div>
                </div>
            </div>
            <div class="card-deck" className='movie-grid'>
                <div class="card">
                    <img class="card-img-top" src="images/proj4.jpeg" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">FakeFlix</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural 
                            lead-in to additional content. This content is a little bit longer.</p>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;