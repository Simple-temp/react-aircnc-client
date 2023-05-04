import React, { useContext, useEffect, useState } from 'react';
import "./SearchBar.css"
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const SearchBar = () => {

    const [userInfo, setUserInfo] = useContext(UserContext)

    const [info,setInfo] = useState({})

    const handleBlur = (e) => {
        const searching = e.target.value
        const obj = { searchInput: searching }
        setUserInfo(obj)
    }

    const [parent, setParent] = useState(0)
    const [child, setChild] = useState(0)
    const [baby, setBaby] = useState(0)

    const parentincrement = () => {
        setParent(parent + 1)
    }

    const parentdecrement = () => {
        if (parent > 0) {
            setParent(parent - 1)
        } else {
            setParent(0)
        }
    }

    const childIncrement = () => {
        setChild(child + 1)
    }

    const childDecrement = () => {
        if (child > 0) {
            setChild(child - 1)
        } else {
            setChild(0)
        }
    }

    const babyIncrement = () => {
        setBaby(baby + 1)
    }

    const babyDecrement = () => {
        if (baby > 0) {
            setBaby(baby - 1)
        } else {
            setBaby(0)
        }
    }

    const [selectedDate, setSelectedDate] = useState(
        {
            startdate: new Date(),
            enddate: new Date()
        }
    );

    const handleStartingDate = (date) => {
        const start = { ...selectedDate }
        start.startdate = date
        setSelectedDate(start)
    };

    const handleEndingDate = (date) => {
        const end = { ...selectedDate }
        end.enddate = date
        setSelectedDate(end)
    }


    const handleApply = () => {

        const applyInfo = { ...info, adults: parent, child: child, baby: baby, ...selectedDate }

        console.log(applyInfo)
        fetch('https://aircnc-u5qx.onrender.com/applyguest', {
            method: 'POST',
            body: JSON.stringify(applyInfo),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                alert("Apply succesfully, Now search the location")
            });

    }

    const getemail = (e) =>{
        const newFile = {...info}
        newFile[e.target.name] = e.target.value
        setInfo(newFile)
    }

    return (
        <div className='searchbar'>
            <h4 className='mb-1'>Where do you want to go</h4>

            <form action="" className='location'>
                <label htmlFor="">loaction</label>
                <input required onBlur={handleBlur} type="text" name="search" placeholder='Add city,Landmark or Address' className='search-field w-100' />
            </form>

            <div className="date-box">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <div className="row mt-3">
                            <div className="col-lg-6 col-md-12">
                                <div className="date-box-inner date">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Arrival"
                                        value={selectedDate.startdate}
                                        onChange={handleStartingDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="date-box-inner date">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Departure"
                                        format="MM/dd/yyyy"
                                        value={selectedDate.enddate}
                                        onChange={handleEndingDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>

            <div className="user-details mt-3 date">
                <form action="">
                    <div className="email-input">
                        <input required onChange={getemail} type="email" name="email" placeholder='Enter valid email' className='w-100 pt-3' />
                    </div>
                </form>
                <div className="result-box">
                    <span>guests</span>
                    <div className="total-member d-flex">
                        <b>{parent}</b> <p>adults</p> , <b>{child}</b> <p>child</p> , <b>{baby}</b> <p>baby</p>
                    </div>
                </div>
                <div className="options mt-3">
                    <div className="adult-box d-flex">
                        <h6>Adults</h6>
                        <i class="fa-solid fa-minus" onClick={parentdecrement}></i>
                        <span>{parent}</span>
                        <i class="fa-solid fa-plus" onClick={parentincrement}></i>
                    </div>
                </div>
                <div className="options mt-3">
                    <div className="adult-box d-flex">
                        <h6>Child</h6>
                        <i class="fa-solid fa-minus" onClick={childDecrement}></i>
                        <span>{child}</span>
                        <i class="fa-solid fa-plus" onClick={childIncrement}></i>
                    </div>
                </div>
                <div className="options mt-3 mb-3">
                    <div className="adult-box d-flex">
                        <h6>baby</h6>
                        <i class="fa-solid fa-minus" onClick={babyDecrement}></i>
                        <span>{baby}</span>
                        <i class="fa-solid fa-plus" onClick={babyIncrement}></i>
                    </div>
                </div>
                <button className='apply-btn' onClick={handleApply}>apply</button>
            </div>

            <Link to={`/searchingResult/${userInfo.searchInput}`} className="Link"><button className='search-btn mt-2 d-block w-100'><i class="fa-solid fa-magnifying-glass"></i>search</button></Link>

        </div>
    );
};

export default SearchBar;





/*
    // const [search,setSearch] = useState({})
    // const [getitem,setGetitem] = useState([])
    // const [filter,setFilter] = useState([])

    // useEffect(()=>{
    //     fetch(`https://aircnc-u5qx.onrender.com/getitem`)
    //     .then(res=>res.json())
    //     .then(data=>setGetitem(data))
    // },[])

    // useEffect(()=>{
    //     setFilter(
    //         getitem.filter( (item) => item.name.toLowerCase().includes(search.toLowerCase()) )
    //     )
    // },[search,getitem])

    // const searchBtn = () =>{
    //     console.log(userInfo.searchInput)
    //     console.log(filter)
    // }
*/