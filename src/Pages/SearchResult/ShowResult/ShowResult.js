import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./ShowResult.css"

const ShowResult = () => {

    const { searchInput } = useParams()

    const [getSearchItem, setgetSearchitem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/getitem?search=` + searchInput)
            .then(res => res.json())
            .then(data => setgetSearchitem(data))
    }, [searchInput])

    return (
        <div className='searchlocation'>
            <div className="container">
                <h6>stay in {searchInput} search</h6>
            </div>
            <div className="container mt-3 max-h">
                <div className="row">
                    {
                        getSearchItem.length === 0 ? <div className='d-flex justify-content-center align-items-center not-found'>
                            <p>Undefined result...</p>
                            <i class="fa-solid fa-face-smile"></i>
                            </div>:
                        getSearchItem.map(resultitem => <ShowSearchItem result={resultitem} key={resultitem._id}></ShowSearchItem>)
                    }
                </div>
            </div>
        </div>
    );
};

function ShowSearchItem({ result }) {

    const { name, des, baths, rating, price, image ,key } = result

    return (
        <div className='s-item'>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                    <img src={`data:image/png;base64,${image.img}`} alt="" className='img-fluid' style={{ borderRadius: "14px" }} />
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="right-side">
                        <div className="right">
                            <Link to={`/profile/${key}`} className="Link"><p>{name}</p></Link>
                            <ul>
                                <li>{baths} guests</li>
                                <li>{baths} bedrooms</li>
                                <li>{baths} beds</li>
                                <li>{baths} baths</li>
                            </ul>
                        </div>
                        <div className="right-des">
                            <p>{des}</p>
                        </div>
                        <div className="right-footer d-flex justify-content-between">
                            <div className="rating">
                                <i class="fa-solid fa-star"></i>
                                <b>4.9</b>
                                ({rating})
                            </div>
                            <div className="price">
                                <span>${price}/night</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowResult;