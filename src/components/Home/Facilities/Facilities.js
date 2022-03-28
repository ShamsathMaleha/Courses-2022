import React from 'react';
import './Facilities.css'


const Facilities = () => {
    return (
        <div className="">
            
          <div className="carousel-inner">
            <div className="carousel-item p-5 active roounded ">
              <div className="row p-5 background-info  bg-gradient d-flex align-items-center">
                <div className="col-lg-7">
                  <h1>Learner outcomes on Coursera</h1>
                  <p>87% of people learning for professional development report career benefits like getting a promotion, a raise, or starting a new career</p>
                  
                  <button className="panda-btn-buy-now">Learn More</button>
                </div>
                <div className="col-lg-5">
                  <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="d-block w-100" alt=""/>
                </div>

              </div>
            </div>
        </div>
        </div>

    );
};

export default Facilities;

