import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from './SideBar';


const AddBlog = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    console.log(data)
    const eventData = {
      name: data.name,
      title: data.title,
      shotDescription: data.shotDescription,
      description: data.description,
      imageURL: imageURL,
    };
    const url = `https://fast-peak-49025.herokuapp.com/addBlog`;

    console.log(eventData);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server', res))
  };

  const handelImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '9c41fec4c704740a0c23135b3efa4a21');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload/books', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        alert('Blog Add successfully')
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div class="md:flex bg-red-200 h-screen h-full">
     <div class="p-14">
       <SideBar/>
     </div>

      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="m-14 ">

          <div>
            <h5> Name :</h5>
            <input required placeholder="Name" class="border-2 border-red-400 rounded-md " {...register("name")} />
          </div>

          <div>
            <h5>Title:</h5>
            <input required placeholder="Title" class="border-2 border-red-400 rounded-md " {...register("title", { required: true })} />
          </div>
          <div>
            <h5>Shot Description:</h5>
            <input required placeholder="Shot Description" class="border-2 border-red-400 rounded-md " {...register("shotDescription", { required: true })} />
          </div>
          <div>
            <h5>Description :</h5>
            <textarea required placeholder="Description" class="border-2 border-red-400 rounded-md " {...register("description", { required: true })} />
          </div>
          {/* <input name="imageURL" type="file"  /> */}
          <input type="file"{...register("imageURL", { required: true })} onChange={handelImageUpload} />
          <br />

          <input className="bg-red-500 py-2 px-4 rounded-md hover:bg-red-700 text-white cursor-pointer" type="submit" />
        </div>
      </form>
    </div>

  );
};

export default AddBlog;