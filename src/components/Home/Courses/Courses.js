import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course'
import './Courses.css'



const Courses = () => {
    const [courses, setCourses] =useState([])
    useEffect(()=>{
        fetch('/course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
        
    },[])
  
    return (
        <div id="courses" className=" courses-section pt-5 mt-5 ">
            <div className="  mb-5">
             
            <h1 style={{color:"rgb(199,21,133)",fontWeight:"bold"}}>Our Courses</h1>
            <h4> Get that "ready for anything" feeling with more than 5,000 courses,<br /> Professional Certificates,and degrees from world-class universities and companies.</h4>
            </div>
         
            <Container>
           <Row xs={1} md={2} lg={3} className="g-5 justify-content-center">
            {
                    
                        
                  courses.map(course => <Course 
                    key={course.id}
                    course={course}></Course>)      
                    
                    }
            </Row>
           </Container>
           </div>
           
       
    );
};


export default Courses;