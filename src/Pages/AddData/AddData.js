import React, { useState } from 'react';

const AddData = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleblur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
        console.log(newInfo)
    }


    const handlechange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
        console.log(newFile)
    }


    const handleSubmit = () => {

        const formData = new FormData()

        formData.append('file', file)
        formData.append('key', info.key)
        formData.append('name', info.name)
        formData.append('rating', info.rating)
        formData.append('baths', info.baths)
        formData.append('des', info.des)
        formData.append('price', info.price)

        fetch(`http://localhost:4000/postitem`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("submit")
            })
            .catch(error => {
                console.error(error)
            })
        // e.preventDefault()
    }

    return (
        <div className="container mt-5 pt-5">
            <div className='col-lg-6'>
                <form action="" onSubmit={handleSubmit} enctype="multipart/form-data" >
                    <input onChange={handlechange} type="file" name="file" className='w-100' />
                    <input onBlur={handleblur} required name="key" type="text" placeholder='key' className='w-100' />
                    <input onBlur={handleblur} required name="name" type="text" placeholder='name' className='w-100' />
                    <input onBlur={handleblur} required name="rating" type="number" placeholder='rating' className='w-100' />
                    <input onBlur={handleblur} required name="baths" type="number" placeholder='baths' className='w-100' />
                    <textarea onBlur={handleblur} required name="des" id="" cols="30" rows="4" placeholder='des' className='w-100'></textarea>
                    <input onBlur={handleblur} required name="price" type="number" placeholder='price' className='w-100' />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddData;