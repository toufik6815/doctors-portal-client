import React from 'react';
import featured from '../../../images/featured.png';
import './FeaturedService.css';

const FeaturedService = () => {
    return (
        <section className="featured-service pb-0 pb-md-5 my-5">
            <div className="container md-5">
                <div className="row md-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>

                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental <br/> Care, on your Term</h1>

                        <p className="text-secondary my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus assumenda consequuntur fuga enim voluptate fugiat soluta nam atque id? Beatae, sequi temporibus vitae ipsa obcaecati iure, illum dolores eos id earum doloremque ullam explicabo debitis animi quibusdam a aut est inventore. Optio blanditiis, quia hic maiores nulla aliquid nobis voluptate minus distinctio maxime, pariatur magnam beatae temporibus eaque molestiae odit minima, iure unde velit incidunt soluta amet obcaecati ipsam.</p>

                        <button className="btn btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;