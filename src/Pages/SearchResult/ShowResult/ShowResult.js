import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const ShowResult = () => {

    const { searchInput } = useParams()


    const [getSearchItem, setgetSearchitem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/getitem?search=` + searchInput)
            .then(res => res.json())
            .then(data => setgetSearchitem(data))
    }, [searchInput])

    return (
        <div>
            <div className="container">
                <h1>showresult</h1>
                <p>result : {searchInput}</p>
            </div>
            <div className="container">
                <div className="row">
                    {
                        getSearchItem.map(result => <ShowSearchItem result={result} key={result._id}></ShowSearchItem>)
                    }
                </div>
            </div>
        </div>
    );
};

function ShowSearchItem({ result }) {

    const { name, img, des, guest, baths, price, image } = result

    return (
        <>
            <div className="col-lg-5 col-md-6 col-12">
                <p>{name}</p>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
                <h6>content</h6>
            </div>
        </>
    )
}

export default ShowResult;