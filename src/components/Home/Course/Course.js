import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck , faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import './Course.css'
  

const enroll = <FontAwesomeIcon icon={faCalendarCheck} />
const money = <FontAwesomeIcon icon={faMoneyBill} />


const Course = (props) => {
    const {id,img,name,price,description} = props.course
    const history = useHistory();

    const uri = `/appointment/${id}`;
    const handleCourses =()=>{
        history.push(uri)
    }
  
    return (
        <div >
            <Col>
      <Card className="images" >
        <Card.Img variant="top " style={{height:'200px'}} src={img} />
        <Card.Body>
          <Card.Title> <h1>{name}</h1> </Card.Title>
          <Card.Text>
        <h6> {description.slice(0,200)} </h6>
          </Card.Text>
          <Card.Text>
        Course fee: {price} {money}
          </Card.Text>
          <button onClick={handleCourses} type="button" className="btn btn-outline-secondary" >Enroll Now {enroll}</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Course;