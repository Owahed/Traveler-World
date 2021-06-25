import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddBlog.css'

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
    const url = `http://localhost:5005/addBlog`;

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
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="book">
      <Link to="/manageBlogs">Manage Product</Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">

          <div>
            <h5> Name :</h5>
            <input  {...register("name")} />
          </div>

          <div>
            <h5>Title:</h5>
            <input {...register("title", { required: true })} />
          </div>
          <div>
            <h5>Shot Description:</h5>
            <input {...register("shotDescription", { required: true })} />
          </div>
          <div>
            <h5>Description :</h5>
            <textarea {...register("description", { required: true })} />
          </div>
          {/* <input name="imageURL" type="file"  /> */}
          <input type="file"{...register("imageURL", { required: true })} onChange={handelImageUpload} />
          <br />

          <input type="submit" />
        </div>
      </form>
    </div>

  );
};

export default AddBlog;