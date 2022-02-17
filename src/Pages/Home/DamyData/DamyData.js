import React from 'react';
import Experience from '../Experience/Experience';
import Homes from '../Homes/Homes';
import "./DamyData.css"

const DamyData = () => {
    return (
        <>
            <div className="container damydata">
                <div className="row">
                    <div className="col-12">
                        <Experience></Experience>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Homes></Homes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DamyData;