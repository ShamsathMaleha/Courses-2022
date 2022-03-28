import React from 'react';
import { useHistory } from 'react-router-dom';
import './Enroll.css'

const Enroll = () => {
    const history = useHistory();
    const handleButton =()=>{
        history.push('/thankYou')
    }
    return (
        <div  className="d-flex justify-content-center h-75 mb-5 mt-5 pt-5 pb-5 appointment">
             <form >
    <h1>Enroll Now</h1>

<div className="form-group">
    
    <input type="text" className="form-control mb-3" placeholder="Your Name" />
</div>

<div className="form-group mb-3">
    
    <input type="email" className="form-control" placeholder="Enter Email" />
</div>  


<div className="form-group">
    
    <input type="text" className="form-control mb-3" placeholder="Course Name" />
</div>

<div className="form-group">
    
    <input type="number" className="form-control mb-3" placeholder="Amount" />
</div>
<div className="form-group">
    
<input className="form-control mb-3" type="datetime-local" id="datetime" name="datetime"/>
</div>


<button type="submit" onClick={handleButton} className="btn btn-outline-danger btn-lg btn-block">Enroll</button>

</form>


        </div>
    );
};

export default Enroll;