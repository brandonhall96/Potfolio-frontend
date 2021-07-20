import React from 'react';


const Welcome = () => {
    return (
        <div>
            <div>
            <img id="headshot" src="images/portpropic.jpeg" alt='profile picture'></img>
            </div>
            <div>
                <h2>Hi! My name is Brandon Hall</h2>
                <br></br>
                <p id="bio">
                Im a full stack web developer and photographer with a passion for creating innovative and effective solutions. With years of retail management experience i have developed the skills to come up with new solutions, adapt quickly, and have great time managment.
                </p>
            </div>
            <br></br>
            

            <section class="skills pfblock" id="skills">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="pfblock-header" data-aos="fade-right" data-aos-delay="300">
                            <h2 class="pfblock-title">MY SKILLS</h2>
                            <div class="pfblock-line"></div>
                            <div class="row" data-aos="fade-left" data-aos-delay="450">
                                <div  class="devicon-python-plain  col-xs-15"><span>PYTHON</span></div>
                                <div  class="devicon-django-plain  col-xs-15"><span>DJANGO</span></div>
                                <div  class="devicon-javascript-plain  col-xs-15"><span>JAVASCRIPT</span></div>
                                <div  class="devicon-nodejs-plain  col-xs-15"><span>NODE</span></div>
                            </div>
                            <div class="row" data-aos="fade-right" data-aos-delay="600">
                                <div  class="devicon-react-original  col-xs-15"><span>REACT</span></div>
                                <div  class="devicon-bootstrap-plain col-xs-15"><span>BOOTSTRAP</span></div>					
                                <div  class="devicon-html5-plain  col-xs-15"><span>HTML</span></div>
                                <div  class="devicon-css3-plain   col-xs-15"><span>CSS</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
            
            
        </div>
        
    )
}

export default Welcome;