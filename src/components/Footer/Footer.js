import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAddressCard, faMailBulk} from '@fortawesome/free-solid-svg-icons'


const phone = <FontAwesomeIcon icon={faPhone} />
const address = <FontAwesomeIcon icon={faAddressCard} />
const email = <FontAwesomeIcon icon={faMailBulk} />


const Footer = () => {   

    return(
    <footer className="page-footer bg-color font-small mt-5  pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-3 ">
                <h5 className="text ">We Care for enhance your knowledge</h5>
                <h7 className="mb-5 ">Email Us by </h7>
                <h8 className="texts"><span className="icon">  {email} </span>sheracoursehelpline@gmail.com </h8>
                <div className="d-flex justify-content-center">
                <div class="form-group mt-5">
                <div class="col-sm-10 w-100 ">
                <input type="email" className="form-control " id="email" placeholder="Enter Your Email"/>
                </div>
                 </div>
                 <div className="mx-3">
                 <button type="button" className="btn btn-outline-danger mt-5">Submit</button>
                 </div>
                </div>
               
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">SHERA COURSE</h5>
                <ul className="list-unstyled ">
                    <li><HashLink className="footer-link " to="#!">Offered Course</HashLink></li>
                    <li><HashLink className="footer-link" to="#!">Free course</HashLink></li>
                    <li><HashLink className="footer-link" to="#!">Enroll</HashLink></li>
                    <li><HashLink className="footer-link" to="#!">Home</HashLink></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled">
                    <li><p> <span className="icon-color">{address} </span> 56/8, Uttara, Sector-7 Banglagesh </p></li>
                    <li><p><span className="icon-color">{phone}</span> 012-6532-568-9746 </p></li>
                    <li><p><span className="icon-color">{phone}</span> 012-6532-568-8900 </p></li> 
                </ul>
            
            </div>
           
        </div>
    </div>

    <div className="footer-copyright text-center py-3">
        <h5 className=" me-end">© 2021 Copyright:
        <Link href="#" className="footer-link "> SHERACOURSE.COM</Link>
        
       </h5>

    </div>
    

</footer>
    )
}

export default Footer