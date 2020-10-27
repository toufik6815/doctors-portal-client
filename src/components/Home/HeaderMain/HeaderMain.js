import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
      <main style={{height: '600px'}} className="row d-flex align-items-center">
        <div className="col-md-4 col-sm-6 col-12 offset-md-1">
          <h1 style={{color: '#3A4256'}}>Your New Smile <br /> Starts Here</h1>

          <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the. </p>

          <Link to="/appointment">
            <button className="btn btn-brand">Get Appointment</button>
          </Link>
        </div>

        <div className="col-md-6 col-sm-6 col-12">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </main>
    );
};

export default HeaderMain;

