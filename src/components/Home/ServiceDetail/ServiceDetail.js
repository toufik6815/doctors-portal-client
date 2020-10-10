import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt=""/>
            <h5 className="mt-5 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam magni harum perspiciatis id mollitia ipsam at assumenda incidunt? Maiores sit placeat minima pariatur est quisquam corporis sunt quis harum?</p>
        </div>
    );
};

export default ServiceDetail;