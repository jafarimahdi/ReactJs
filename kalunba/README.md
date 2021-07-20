# Tools been used in this React.js App


## Create A New Project
. npx create-react-app my-project 


##
. keep the data in state part and have for loop to show them in JSX/DOM make our code simple and less.

. Adding the Bootstrap CDN to root(index) and use it for our Design
## Form and Validation

. using the react-hook-form for managing the  data and input form user

    1- npm install react-hook-form

    2- import { useForm } from "react-hook-form";

    3- const { register, handleSubmit, watch, errors } = useForm();

    4- const onSubmit = data => console.log(data);

    5- <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
            and in input {...register("input-name")}
                 <p>{errors.name?.message} </p>




. Validation for our Form and check the inputs are correct with YUP api

    1- npm i yup

    2- import { yupResolver } from "@hookform/resolvers/yup";
       import * as yup from "yup";

    3- add yub steps here


. use hookform/resolvers/yup 

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

. Using the EmilJs API for managing the messages from user and Auto Replay to send them back a message

    1- create EmailJs account

    2- make template and auto replay for templates and

    3- npm install emailjs-com --save

    4- mport { init, sendForm } from 'emailjs-com';
        
        init('YOUR_USER_ID');

    5- import { useState } from 'react';
        having contact number randomly for our Emailjs data

    6- make contact function to have random random for each Email

    7- add <input type='hidden' name='contact_number' value={contactNumber} />



## Animation 

. Animation with spring-react for the tags
