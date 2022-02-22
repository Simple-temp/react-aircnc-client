import React, { useEffect, useState } from 'react';
import "./ProfileHeader.css"
import bulding from "../../../img/b.jpeg";
import room from "../../../img/room.jpeg";
import { useParams } from 'react-router-dom';

const ProfileHeader = () => {

    const { key } = useParams()

    const [keyResult, setKeyResult] = useState({})

    useEffect(() => {
        fetch(`http://localhost:4000/keyresult/${key}`)
            .then(res => res.json())
            .then(data => setKeyResult(data))
    }, [])

    const { image } = keyResult

    return (
        <div className='profile-header'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={bulding} alt="" className='img-fluid w-100' style={{ height: "450px" }} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={room} alt="" className='img-fluid w-100' style={{ height: "450px" }} />
                        {/* <img src={`data:image/png;base64,${image.img}`} alt="" className='img-fluid w-100' style={{ height: "450px" }} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;