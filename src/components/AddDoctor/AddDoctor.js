import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => { 

    const [info, setInfo] = useState({});
    const handleBlur = event => {
        const newInfo = {...info};
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }


    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("name", info.name);
        formData.append("email", info.email);
        formData.append("file", file);

        fetch("https://arcane-wildwood-87905.herokuapp.com/addADoctor", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
    } 

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand text-center">ADD A Doctor</h5>

                <form onSubmit={handleSubmit}>
                    
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter Your Name"/>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter Your email"/>
                    </div>

                     <div class="form-group">
                        <label for="exampleInputPassword1">Upload a Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" placeholder="Password"/>
                    </div>
                    
                    <button type="submit" class="btn btn-brand mt-4">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;