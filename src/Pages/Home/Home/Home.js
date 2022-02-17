import React from 'react';
import "./Home.css";
import Navbar from '../../Shared/Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import DamyData from '../DamyData/DamyData';


const Home = () => {

    
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <SearchBar></SearchBar>
                        </div>
                        <div className="col-lg-8 col-md-6 col-12">
                            <DamyData></DamyData>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;