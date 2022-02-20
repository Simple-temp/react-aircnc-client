import React from 'react';
import h1 from "../../../img/damy/h1.jpeg"
import h2 from "../../../img/damy/h2.jpeg"
import h3 from "../../../img/damy/h3.jpeg"
import h4 from "../../../img/damy/h4.jpeg"
import ExpericenceInfo from '../ExperienceInfo/ExpericenceInfo';

const Experience = () => {

    const experience = [
        {
            img : h1,
            title : "nightlife-new york",
            des : "discover the city's party",
            price : "35 per person",
            rating  : <i class="fa-solid fa-star"></i>,
        },
        {
            img : h2,
            title : "nightlife-new york",
            des : "discover the city's party",
            price : "35 per person",
            rating  : <i class="fa-solid fa-star"></i>,
        },
        {
            img : h3,
            title : "nightlife-new york",
            des : "discover the city's party",
            price : "35 per person",
            rating  : <i class="fa-solid fa-star"></i>,
        },
        {
            img : h4,
            title : "nightlife-new york",
            des : "discover the city's party",
            price : "35 per person",
            rating  : <i class="fa-solid fa-star"></i>,
        },
    ]

    return (
        <div>
            <h4>Experience</h4>
            <div className="container mt-4 experience">
                <div className="row">
                    {
                        experience.map( expe => <ExpericenceInfo expe={expe} key={Math.random()}></ExpericenceInfo> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Experience;