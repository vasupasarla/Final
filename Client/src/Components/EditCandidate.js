import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRef,useEffect } from "react";
import "./add.css"

const EditCandidate = () => {
  const CandidateName = useRef(HTMLInputElement);
  const Role = useRef(HTMLInputElement);
  const Email = useRef(HTMLInputElement);
  const Contact = useRef(HTMLInputElement);
  const PAN = useRef(HTMLInputElement);
  const Experience = useRef(HTMLInputElement);
 // const status = useRef(HTMLInputElement);

 

  const navigate = useNavigate();
  const { cid} = useParams();
  const [x , setX] = useState(cid);

  const handleCancel = (e) => {
    e.preventDefault();
   
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
      const result = await fetch(`http://localhost:7000/updateCandidate/${cid}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "CandidateName": CandidateName.current.value,
          "Email": Email.current.value,
          "Contact": Contact.current.value,
          "Role": Role.current.value,
          "PAN": PAN.current.value,
          "Experience": Experience.current.value,
        //  "status": status.current.value

        })
      })
     
      const data = await result.json();
        toast.success('Candidate Updated successfully');
        navigate('/');
  };

  useEffect(() => {
    fetch(`http://localhost:7000/getbyid/${cid}`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json"
      }
    }).then(res => res.json())
      .then((data, err) => {
        if (err) {
          console.log(err);
          return;
        }
        const temp = data.usersList[0];
        CandidateName.current.value = temp.CandidateName;
        Email.current.value = temp.Email;
        Role.current.value = temp.Role;
        PAN.current.value = temp.PAN;
        Contact.current.value=temp.Contact;
        Experience.current.value=temp.Experience;
      //  status.current.value=temp.status;
      })
  }, []);
 
  return (
    <div className="container-wrap p-3">
      <h2 className="mb-4 px-2">Edit Candidate</h2>
      <form className="px-2">
        <div className="row mb-4">
          <div className="col-md-1">
            <div className="form-group">
              <label className="fw-bolder" htmlFor="first">
                Candidate ID
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                //placeholder={x}
                //ref = {cid}
                value={ cid }
                disabled 
              />
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-1">
            <div className="form-group">
              <label className="fw-bolder" htmlFor="first">
                Candidate Name
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Candidate Name"
                ref={CandidateName}
              />
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-md-1">
            <div className="form-group">
              <label className="fw-bolder" htmlFor="first">
                Email
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                ref={Email}
               
                pattern="[a-zA-Z0-9]+@[a-zA-Z]+.com"

                // pattern="[0-9]{10}"
              />
            </div>
          </div>

        </div>
        <div className="row mb-4">
          <div className="col-md-1">
            <div className="form-group">
              <label className="fw-bolder" htmlFor="first">
                Contact
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                ref={Contact}
               
                pattern="[0-9]{10}"
              />
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-md-1">
            <div className="form-group">
              <label className="fw-bolder" htmlFor="first">
                Role
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <select
                id="select"
                className="form-select"
                aria-label="Select Role"
                ref={Role}
               
              >
              <option defaultValue="">Select Role</option>
              <option value = "AES-DigitalFS-JavaMS">AES-DigitalFS-JavaMS</option>
              <option value = "AES-DigitalFS-JavaFS">AES-DigitalFS-JavaFS</option>
              <option value = "AES-DigitalFS-DotnetFS">AES-DigitalFS-DotnetFS</option>
              <option value = "AES-FED-Angular">AES-FED-Angular</option>
              <option value = "AES-FED-React">AES-FED-React</option>
              <option value = "AES-FED-MEAN">AES-FED-MEAN</option>
              <option value = "AES-FED-MERN">AES-FED-MERN</option>
              <option value = "AES-AgileDevOps-Agile">AES-AgileDevOps-Agile</option>
              <option value = "AES-AgileDevOps-DevOps">AES-AgileDevOps-DevOps</option>
              <option value = "AES-DigitalPlatforms-AEM">AES-DigitalPlatforms-AEM</option>
              <option value = "AES-DigitalPlatforms-Liferay">AES-DigitalPlatforms-Liferay</option>
              <option value = "AES-DigitalPlatforms-Sitecore">AES-DigitalPlatforms-Sitecore</option>
              <option value = "AES-DigitalPlatforms-M365">AES-DigitalPlatforms-M365</option>
              <option value = "AES-DigitalPlatforms-Drupal">AES-DigitalPlatforms-Drupal</option>
              <option value = "AES-Lowcode-Outsystems">AES-Lowcode-Outsystems</option>
              <option value = "AES-Lowcode-MSApps">AES-Lowcode-MSApps</option>
              <option value = "AES-Mobility-IOS">AES-Mobility-IOS</option>
              <option value = "AES-Mobility-Android">AES-Mobility-Android</option>
              <option value = "AES-Mobility-ReactNative">AES-Mobility-ReactNative</option>
              <option value = "AES-ApplicationModernization-Mainframe">AES-ApplicationModernization-Mainframe</option>
              <option value = "AES-DigitalFS-Integration">AES-DigitalFS-Integration</option>
              <option value = "AES-CloudApps-Azure">AES-CloudApps-Azure</option>
              <option value = "AES-CloudApps-AWS">AES-CloudApps-AWS</option>
              <option value = "AES-CloudApps-GCP">AES-CloudApps-GCP</option>
              <option value = "AES-Mobility-Others">AES-Mobility-Others</option>
               

              </select>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-1">
            <div className="form-group">
              <label className="fw-bolder" htmlFor="first">
                PAN
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter PAN"
                ref={PAN}
               
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              />
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-md-1">
            <div className="form-group">
              <label className="fw-bolder" htmlFor="first">
                Experience
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="number"
                min = "0"
                className="form-control"
                placeholder="Enter Number of years"
                ref={Experience}
               
              />
            </div>
          </div>
        </div>
 
        <div className="row">
        <div className="col-md-2 ">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
          </div>
          <div className="col-md-2 ">
          <button
            className="btn btn-primary"
            onClick={handleCancel}
          >
            Cancel
          </button>
          </div>
        </div>
      </form>
    </div>
   
  );
};

export default  EditCandidate;