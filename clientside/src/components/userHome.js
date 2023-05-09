import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./userHome.css";
import configData from "../config/config.json";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

      const [form, setForm] = React.useState({
        title: "",
        description: "",
        file: null
      });

      function handleChange(event) {
        const inputValue =
          event.target.name === "file" ? event.target.files[0] : event.target.value;

        setForm({
          ...form,
          [event.target.name]: inputValue
        });
      }

      function handleSubmit(event) {
        event.preventDefault();

        const videoData = new FormData();

        videoData.append("videoFile",form.file);
        videoData.append("title",form.title);
        videoData.append("description",form.description);

        axios.post(configData.CONTENT_SERVICE_URL+"contents",videoData)
        .then(response => {
          console.log(response.data);
        })

        //console.log({ form });
      }



  return (
    <div className="home_pg">
      <br />
      <br />
      <h1 id="head_styl">Welcome</h1>
      <br />
      <br />
      <h3>User :  {userData.fname}</h3>
      <h6 id="email_styl">{userData.email}</h6>
      <br />
      <br />


      <div >
      <h1 id="head_styl">Upload Youtube Video</h1>
      <form onSubmit={handleSubmit}>
        <div className="align_styl">
          <input id="text_styl"
            onChange={handleChange}
            type="text"
            name="title"
            autoComplete="off"
            placeholder="Title"
          />
        </div>
        <div className="align_styl">
          <textarea id="text_styl"
            onChange={handleChange}
            type="text"
            name="description"
            autoComplete="off"
            placeholder="Description"
          />
        </div>
        <div className="align_styl">
          <input id="text_styl"
            onChange={handleChange}
            accept="video/mp4"
            type="file"
            name="file"
            placeholder="Add Video File"
          />
         <br />
          <br/>
        </div>
        <div className="align_styl">
        <button className="bt_styl" type="submit">Upload Video</button>
        </div>
      </form>
      <br />
    </div>




      <button onClick={logOut} className="btn btn-primary">
        Log Out
      </button>

    </div>
  );
}
