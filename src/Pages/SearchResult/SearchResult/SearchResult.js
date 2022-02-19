import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import GoogleMap from '../GoogleMap/GoogleMap';
import ShowResult from '../ShowResult/ShowResult';

const SearchResult = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12">
                            <ShowResult></ShowResult>
                        </div>
                        <div className="col-lg-7 col-md-6 col-12">
                            <GoogleMap></GoogleMap>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SearchResult;