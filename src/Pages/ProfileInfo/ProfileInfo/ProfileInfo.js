import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import "./ProfileInfo.css"
import room from "../../../img/room2.jpg"
import ProfileInfoTab from '../ProfileInfoTab/ProfileInfoTab';

const ProfileInfo = (props) => {

    const { children, value, index, ...other } = props;


    const { key } = useParams()

    const [userInfo, setUserInfo] = useContext(UserContext)
    const [keyResult, setKeyResult] = useState({})
    const [getguests, setGetguests] = useState({})

    useEffect(() => {
        fetch(`https://aircnc-server-node.herokuapp.com/keyresult/${key}`)
            .then(res => res.json())
            .then(data => setKeyResult(data))
    }, [])

    useEffect(() => {
        fetch(`https://aircnc-server-node.herokuapp.com/getdetails?email=` + userInfo.email)
            .then(res => res.json())
            .then(user => {
                setGetguests(user)
            })
    }, [])

    const { name, baths, price, rating, image } = keyResult
    const { adults, child, baby, startdate, enddate } = getguests


    var quantity = 4
    var result = price * quantity
    var total = result + 21 + 10

    var totalguests = adults + child + baby

    return (
        <section className='profileInfo'>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-12">
                        <ProfileInfoTab startdate={startdate} enddate={enddate}></ProfileInfoTab>
                    </div>
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="profile-review d-flex justify-content-between">
                            <div className="profile-review-l">
                                <h4>{name}</h4>
                                <span>${price}/night</span>
                                <p> <i class="fa-solid fa-star"></i> <b>4.9</b> ({rating}reviews)</p>
                            </div>
                            <div className="profile-review-l">
                                <img src={room} alt="" className='img-fluid' style={{height:"90px",borderRadius:"10px"}} />
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileInfo;