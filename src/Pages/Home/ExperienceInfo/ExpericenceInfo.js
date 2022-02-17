import React from 'react';
import "./ExpericenceInfo.css"

const ExpericenceInfo = ({ expe }) => {

    const { img, title, des, price, rating } = expe;

    return (
            <div className="col-lg-3 col-md-6 col-12">
                <div className="expe-box">
                    <div className="expe-head">
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                    <div className="expe-body">
                        <span className='text-uppercase'>{title}</span>
                        <h6 className='text-capitalize'>{des}<br/>scene</h6>
                        <small className='text-capitalize'>${price}</small>
                        <div className="rating">
                            <i>{rating}</i> <i>{rating}</i> <i>{rating}</i> <i>{rating}</i> <i>{rating}(64)</i>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ExpericenceInfo;