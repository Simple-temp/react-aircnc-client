import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProfileBody.css"
import home from "../../../img/home.png"
import check from "../../../img/check.png"
import solid from "../../../img/solid.png"
import user from "../../../img/user.png"
import { UserContext } from '../../../App';

const ProfileBody = () => {

    const { key } = useParams()

    const [userInfo, setUserInfo] = useContext(UserContext)
    const [keyResult, setKeyResult] = useState({})
    const [getguests, setGetguests] = useState({})

    useEffect(() => {
        fetch(`http://localhost:4000/keyresult/${key}`)
            .then(res => res.json())
            .then(data => setKeyResult(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:4000/getdetails?email=` + userInfo.email)
            .then(res => res.json())
            .then(user => {
                setGetguests(user)
                console.log(user)
            })
    }, [])

    const { name, baths, price, rating, image } = keyResult
    const {adults,child,baby,startdate,enddate} = getguests


    var quantity = 4
    var result = price * quantity
    var total = result + 21 + 10

    var totalguests = adults + child + baby

    return (
        <div class="user-profile">
            <div className="container w-75 mx-auto mt-4">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h4>{name}</h4> <img src={userInfo.img} alt="" className='m-2' style={{width:"30px",height:"30px",borderRadius:"50px"}} />
                        <div className="p-location">
                            <p>Bangladesh</p>
                            <ul>
                                <li>{baths} guests</li>
                                <li>{baths} bedrooms</li>
                                <li>{baths} beds</li>
                                <li>{baths} baths</li>
                            </ul>
                        </div>
                        <div className="profile-b">
                            <div className="p-body-head b-top">
                                <ul>
                                    <li> <img src={home} alt="" /> <span>Entire home</span> </li>
                                    <li> <img src={check} alt="" /> <span>self check-in </span> </li>
                                    <li> <img src={solid} alt="" /> <span>sparking clean</span> </li>
                                    <li> <img src={user} alt="" /> <span>rowdra is a superhost</span> </li>
                                </ul>
                                <div className="body-head-content b-top py-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eveniet eos, distinctio iusto reiciendis recusandae dignissimos rerum ipsam beatae, velit maiores nostrum quis maxime voluptatibus soluta. At maiores nisi quae rerum soluta ad, labore saepe pariatur, eius placeat neque aspernatur?</p>
                                </div>
                            </div>
                            <div className="p-body-f">
                                <label htmlFor="">Reviews</label>
                                <p> <i class="fa-solid fa-star mt-3"></i> <b>4.9</b> ({rating}reviews)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="profile-box">
                            <div className="profile-review">
                                <span>${price}/night</span>
                                <p> <i class="fa-solid fa-star"></i> <b>4.9</b> ({rating}reviews)</p>
                            </div>
                            <div className="guests-dates">
                                <label htmlFor="" className='d-block my-1'>Dates</label>
                                <span>{new Date(startdate).toDateString()}</span> <i class="fa-solid fa-right-long"></i> <span>{new Date(enddate).toDateString()}</span>
                            </div>
                            <div className="guests-box mt-4">
                                <label htmlFor="">Guests</label>
                                <div className="guests-box-info">
                                    <ul>
                                        <li>total guests {totalguests}</li>
                                        <li>{price}*{quantity} nights <span>${result}</span></li>
                                        <li>cleaning fee <span>$10</span></li>
                                        <li>service fee <span>$21</span></li>
                                        <li><b>Total</b> <span>${total}</span></li>
                                    </ul>
                                </div>
                                <button className='search-btn d-block w-100'>reserve</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBody;

/**keyresult */