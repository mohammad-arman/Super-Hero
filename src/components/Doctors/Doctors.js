import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import "./Doctors.css"
//doctor data load
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=> {
        fetch("./doctorData.JSON")
        .then(res=> res.json())
        .then(data=> setDoctors(data))
    }, [])

//state data for added docor in cart
    const [addedDoctor, setAddedDoctor] = useState([]);

    //handle added doctor
    const handleAddDoctor = (doctor) => {
        const newAddedDoctor = [...addedDoctor, doctor];
        setAddedDoctor(newAddedDoctor);
    }
    return (
        <div className="container-fluid">
          <div className="row">
              <div className="col-md-9">
                <div className="row p-3">
                    {
                        doctors.map(doctor=><Doctor key={doctor.id} doctor={doctor} handleAddDoctor={handleAddDoctor}></Doctor>)
                    }
                </div>
              </div>
              <div className="col-md-3">
                    <Cart doctor={addedDoctor}></Cart>
              </div>
          </div>
        </div>
    );
};

export default Doctors;