import React from 'react';
import services_1 from '../../../images/services_1.png'
import services_2 from '../../../images/services_2.png'
import services_3 from '../../../images/services_3.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
  {
    name: "Fluoride Treatment",
    img: services_1
  },
  {
    name: "Cavity Filling",
    img: services_2
  },
  {
    name: "Teeth Whitening",
    img: services_3
  }
];

const Services = () => {
    return (
      <section className="services-container mt-5">
        <div className="text-center">
          <h5 style={{ color: "#5FC7C7" }}>OUR SERVICES</h5>
          <h2>Services We Provide</h2>
        </div>

        <div className="d-flex justify-content-center">
          <div className="w-75 row mt-5 pt-5">
            {serviceData.map((service) => (
              <ServiceDetail service={service}></ServiceDetail>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Services;