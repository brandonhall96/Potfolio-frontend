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
                            <p class="card-text">My game is called F1 Trivia, which is based off the popular 
                            motorsport F1. It will demonstrate a combination of HTML, CSS and Javascript.
                            The game is fairly easy to play and will depend of the users knowledge 
                            of the sport. The game will consist of 8 questions and a score of 
                            at least 50% will be needed to win.</p>

                            
                    </div>
                </div>
            </div>
            <div class="card-deck" className='movie-grid'>
                <div class="card">
                    <img class="card-img-top" src="images/proj2.jpeg" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Dream Team Builder</h5>
                            <p class="card-text">My App is called Dream Team Builder which is based off the 
                            commonly know professional hockey league also know as the NHL.
                            It will demonstrate a combination of HTML, CSS, Javascript, 
                            Express as well as some others. The program is pretty self explanatory, theres many things you can do from checking stats to putting together your very own dream team.

</p>
                            
                    </div>
                </div>
            </div>
            <div class="card-deck" className='movie-grid'>
                <div class="card">
                    <img class="card-img-top" src="images/proj3.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">FakeX</h5>
                            <p class="card-text">FakeX allows you to be an applicant for a super real and exclusive FakeX astronaut program that allows you to 
                            track 5 of the 1500 Starlink satellites (real location and height based on SPACEX api call) as well as
                            learn about SpaceX Rockets, crew, and Dragons.

</p>
                            
                    </div>
                </div>
            </div>
            <div class="card-deck" className='movie-grid'>
                <div class="card">
                    <img class="card-img-top" src="images/proj4.jpeg" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">FakeFlix</h5>
                                <p class="proj-p" class="card-text">Our App is called FakeFlix which is based off the well known movie streaming 
                                                        site 'Netflix'
                                                        It will demonstrate a combination of React, JavaScript, Express and MongoDB. 
                                                        The App is pretty self explanatory, 
                                                        once a profile has been created the user will be able to login, 
                                                        choose movies and add them to a favorites or watchlist.</p>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;