import React from 'react';
import { useForm } from "react-hook-form";
import SideBar from './SideBar';



const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5005/adminEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(document => {
                console.log(document)
                alert('Email placed successfully')
            })
        console.log(data)

    };

    return (
        <div class="md:flex bg-red-200 h-screen h-full">
            <div className="p-14">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="m-2">Email:</h4>
                    <div className="d-flex mt-3">
                        <input class="form-control w-25 m-2 border-2 border-red-400 rounded-md" placeholder="Email" type="email" {...register("email", { required: true })} />
                        <input className="bg-red-500 py-2 px-4 rounded-md hover:bg-red-700 text-white cursor-pointer" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;