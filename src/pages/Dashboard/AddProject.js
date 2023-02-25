import React, { useState } from 'react';
import Spinning from '../../components/Spinning';
import SpinningImage from '../../components/SpinningImage';

const AddProject = () => {
    const [checkboxValues, setCheckboxValues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [clearCheckboxValues, setClearCheckboxValues] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)
    const [images, setImages] = useState({})


    const handleCheckboxChange = (event) => {
        setClearCheckboxValues(false)
        const newValue = event.target.value;
        if (checkboxValues.includes(newValue)) {
            setCheckboxValues(checkboxValues.filter((v) => v !== newValue));
        } else {
            setCheckboxValues([...checkboxValues, newValue]);
        }

        if (clearCheckboxValues) {
            newValue.reset()
        }
    };


    const addImage = (image, title) => {
        setImageLoading(true)
        const imagebbkey = process.env.REACT_APP_IMAGEBB_KEY
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imagebbkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.status === 200) {
                    const projectPhoto = imgData.data.url
                    setImages({ ...images, [title]: projectPhoto })
                 
                    
                    setImageLoading(false)
                }
            })
            .catch(err => {
                console.log('====================================')
                console.log(err)
                console.log('====================================')
            })

    }

    const handleAddProject = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const form = event.target
        const name = form.name.value
        const clientName = form.clientName.value
        const year = form.year.value
        const moreDetails = form.moreDetails.value
        const index = parseInt(form.index.value) 
        const description = form.description.value
        const cphoto = images.cphoto
        const img1 = images.img1
        const img2 = images.img2
        const img3 = images.img3
        const img4 = images.img4
        const img5 = images.img5
        const img6 = images.img6

        const project = {
            name,
            clientName,
            year,
            index:index,
            about: description,
            categories: checkboxValues,
            moreDetails,
            coverPicture: cphoto,
            picture1: img1,
            picture2: img2,
            picture3: img3,
            picture4: img4,
            picture5: img5,
            picture6: img6,
        }
        
        fetch('https://apidesigns.adoordesigns.com/project',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)

        })
        .then(res => res.json())
        .then(data=> {
           
            if(data.acknowledged){
                form.reset()
                setClearCheckboxValues(false)
                setIsLoading(false)
               
            }else{
                form.reset()
                setClearCheckboxValues(false)
                setIsLoading(false)
                
            }
        })    
    }


    if (isLoading) {
        return <Spinning></Spinning>
    }


    return (
        <div className='py-32 flex justify-center w-full'>
            <div className='text-black bg-primary w-4/5 p-4'>
                <h1 className='text-2xl font-bold text-black flex w-full justify-center'>Add A Project <span className='px-2'>{imageLoading && <SpinningImage></SpinningImage>}</span> </h1>
                <div className='w-full flex justify-center'>
                    <form onSubmit={handleAddProject} className='w-full grid grid-cols-3  gap-6'>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="name">Project Name</label>
                            <input type="text" name='name' id='name' className='border p-1 text-black' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="clientName">Client Name</label>
                            <input type="text" name='clientName' id='clientName' className='border p-1 text-black' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="year">Year</label>
                            <input type="text" name='year' className='border p-1 text-black' />
                        </div>
                        <div className="form-control flex flex-col items-start ">

                            <label htmlFor="cphoto">Cover Photo</label>
                            <input onChange={(event) => addImage(event.target.files[0], 'cphoto')} type="file" name='cphoto' className='border bg-primary text-black   file-input file-input-bordered  file-input-primary w-full  max-w-xs ' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="img1">Image 1</label>
                            <input onChange={(event) => addImage(event.target.files[0], 'img1')} type="file" name='img1' className='border bg-primary text-black   file-input file-input-bordered  file-input-primary w-full  max-w-xs ' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="img2">Image 2</label>
                            <input onChange={(event) => addImage(event.target.files[0], 'img2')} type="file" name='img2' className='border bg-primary text-black   file-input file-input-bordered  file-input-primary w-full  max-w-xs ' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="img3">Image 3</label>
                            <input onChange={(event) => addImage(event.target.files[0], 'img3')} type="file" name='img3' className='border bg-primary text-black   file-input file-input-bordered  file-input-primary w-full  max-w-xs ' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="img4">Image 4</label>
                            <input onChange={(event) => addImage(event.target.files[0], 'img4')} type="file" name='img4' className='border bg-primary text-black   file-input file-input-bordered  file-input-primary w-full  max-w-xs ' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="img5">Image 5</label>
                            <input onChange={(event) => addImage(event.target.files[0], 'img5')} type="file" name='img5' className='border bg-primary text-black   file-input file-input-bordered  file-input-primary w-full  max-w-xs ' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="img6">Image 6</label>
                            <input onChange={(event) => addImage(event.target.files[0], 'img6')} type="file" name='img6' className='border bg-primary text-black   file-input file-input-bordered  file-input-primary w-full  max-w-xs ' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="index">Index</label>
                            <input type="number" name='index' className='border p-1 text-black' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="moreDetails">Details Link</label>
                            <input type="text" name='moreDetails' className='border p-1 text-black' />
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="category">Category</label>
                            <div className='grid grid-cols-2 gap-y-2 gap-x-0 w-16 justify-start items-center '>

                                <input type="checkbox" onChange={handleCheckboxChange} checked={checkboxValues.includes("Branding")} value="Branding" className='border p-1 appearance-none bg-white rounded-full checked:bg-[#000] w-4 h-4' />
                                <label className='text-start' htmlFor="Branding">Branding</label>
                                <input type="checkbox" onChange={handleCheckboxChange} checked={checkboxValues.includes("Marketing")} value="Marketing" className='border p-1 appearance-none bg-white rounded-full checked:bg-[#000] w-4 h-4' />
                                <label className='text-start' htmlFor="Marketing">Marketing</label>
                                <input type="checkbox" onChange={handleCheckboxChange} checked={checkboxValues.includes("UIUX")} value="UIUX" className='border p-1 appearance-none bg-white rounded-full checked:bg-[#000] w-4 h-4' />
                                <label className='text-start' htmlFor="UIUX">UIUX</label>
                                <input type="checkbox" onChange={handleCheckboxChange} checked={checkboxValues.includes("NFT")} value="NFT" className='border p-1 appearance-none bg-white rounded-full checked:bg-[#000] w-4 h-4' />
                                <label className='text-start' htmlFor="NFT">NFT</label>
                            </div>
                        </div>
                        <div className="form-control flex flex-col items-start ">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" name='description' rows="5" cols="40" className='border p-1 text-black' />
                        </div>
                        <div className="form-control  flex-col   flex justify-center items-center ">

                            <input type="submit" value="Add Project" className=' mr-6 text-sm font-medium bg-gray-900 rounded-2xl px-4 py-1 my-1 text-white' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProject;