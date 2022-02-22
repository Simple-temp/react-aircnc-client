import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ProfileBody from '../ProfileBody/ProfileBody';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

const Profile = () => {
    return (
        <>
           <Navbar></Navbar> 
           <section>
               <ProfileHeader></ProfileHeader>
           </section>
           <section>
               <ProfileBody></ProfileBody>
           </section>
        </>
    );
};

export default Profile;