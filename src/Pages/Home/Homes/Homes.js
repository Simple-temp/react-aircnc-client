import React from 'react';
import h5 from "../../../img/damy/h5.jpeg"
import h6 from "../../../img/damy/h6.jpeg"
import h7 from "../../../img/damy/h7.jpeg"
import HomesInfo from '../HomesInfo/HomesInfo';

const Homes = () => {

    const homes = [
        {
            img : h5,
            title : "nightlife-new york",
            des : "unique job cottage",
            price : "35 per person",
            rating  : <i class="fa-solid fa-star"></i>,
        },
        {
            img : h6,
            title : "nightlife-new york",
            des : "the joshuna tree house",
            price : "35 per person",
            rating  : <i class="fa-solid fa-star"></i>,
        },
        {
            img : h7,
            title : "nightlife-new york",
            des : "a pirate's life for me - houseboat",
            price : "35 per person",
            rating  : <i class="fa-solid fa-star"></i>,
        }
    ]

    return (
        <div>
            <h4 className='mt-3'>Homes</h4>
            <div className="container mt-4">
                <div className="row">
                    {
                        homes.map( home => <HomesInfo home={home} key={Math.random()}></HomesInfo> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Homes;