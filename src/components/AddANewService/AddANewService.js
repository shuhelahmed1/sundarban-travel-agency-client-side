import React, { useRef } from 'react';
import './AddANewService.css';

const AddANewService = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const urlRef = useRef();
    // const textRef = useRef();
    const handleAddService = e =>{
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const imgUrl = urlRef.current.value;
        const newUser = {name, description, imgUrl};
        fetch('https://guarded-mesa-03173.herokuapp.com/services', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then()
        e.preventDefault();
    }
    return (
        <div>
            <h3 className='text-center my-3'>Add a New Service Others Would Like</h3>
            <form className='addServiceForm' onSubmit={handleAddService}>
                <p>Img url: <input className='w-75' type="text" ref={urlRef}/></p>
                <p>Offer name: <input className='w-75' type="text" ref={nameRef}/></p>
                <p>Offer description: <textarea className='w-75' name="" id="" cols="30" rows="5" ref={descriptionRef}></textarea></p>
                <input className='btn btn-primary' type="submit" value='Submit'/>
            </form>
        </div>
    );
};

export default AddANewService;