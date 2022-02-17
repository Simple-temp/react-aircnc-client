import React from 'react';

const HomesInfo = ({ home }) => {

    const { img, title, des, price, rating } = home;

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="expe-box">
                <div className="expe-head">
                    <img src={img} alt="" className='img-fluid' />
                </div>
                <div className="expe-body">
                    <span className='text-uppercase'>{title}</span>
                    <h6 className='text-capitalize'>{des}</h6>
                    <small className='text-capitalize'>${price}</small>
                    <div className="rating">
                        <i>{rating}</i> <i>{rating}</i> <i>{rating}</i> <i>{rating}</i> <i>{rating} Superhost </i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomesInfo;