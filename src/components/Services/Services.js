import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] =useState([])
    useEffect(()=>{
        fetch('/FreeCourse.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
        
    },[])
  
    return (
        <div id="freeCourses" className="services-section pt-5 mt-5 ">
            <div className=" mb-5 ">
             
            <h1 style={{color:"rgb(199,21,133)",fontWeight:"bold"}}>Courses You Can  
<span className=""> Complete in a Day</span></h1>
            <h5>Over 4,000 courses in topics like business analytics, graphic design, Python, and more.</h5>
            </div>
         
            <Container>
           <Row xs={1} md={2} lg={3} className="g-5 justify-content-md-center">
            {
                    
                        services.map(service=><Service 
                            key={service.id}
                            service={service} ></Service>)
                        
                    
                    }
            </Row>
           </Container>
           </div>
           
       
    );
};

export default Services;