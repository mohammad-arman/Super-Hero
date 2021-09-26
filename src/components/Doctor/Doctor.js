import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./Doctor.css"

const Doctor = (props) => {
    //btn plus icon
    const plusIcon = <FontAwesomeIcon icon={faPlus} />
    //destructuring
    const {name, age, country, specialist, visit, img} = props.doctor;
    return (
        <div className="col-md-4 my-3">
            <div className="doctor-cart p-3 text-center">
                <div className="doctor-thumb text-center mb-3">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                    <h4 className="name">Name: {name}</h4>
                    <h3 className="age">Age: {age}</h3>
                    <h5>Country: {country}</h5>
                    <p>Specialist: {specialist}</p>
                    <h4>Salary: ${visit}</h4>
                    <button className="add-btn mt-3" onClick={()=> props.handleAddDoctor(props.doctor)}>{plusIcon} Select Doctor</button>
            </div>
        </div>
    );
};

export default Doctor;