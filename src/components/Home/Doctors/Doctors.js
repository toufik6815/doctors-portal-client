import React from 'react';
import Doctor from '../Doctor/Doctor';
import smallDoctor from "../../../images/smallDoctor.png";


const doctorData = [
  {
    name: "Wilson Harry",
    img: smallDoctor,
    number: +8801844644330,
  },
  {
    name: "Wilson Harry",
    img: smallDoctor,
    number: +8801844644331,
  },
  {
    name: "Wilson Harry",
    img: smallDoctor,
    number: +8801844644333,
  },
];


const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 style={{ color: '#1CC7C1'}} className="text-center mb-5">OUR DOCTORS</h5>

                <div className="row">
                    {
                        doctorData.map((doctor => <Doctor doctor={doctor} key={doctor.name}></Doctor>))
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;