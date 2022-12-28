import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./add.css"

const AddCandidate = () => {
  const [CandidateName, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");
  const [Contact, setPhone] = useState("");
  const [PAN, setPan] = useState("");
  const [Experience, setExperience] = useState("");
  // const [status, setStatus] = useState("");
  const navigate = useNavigate();


  const handleCancel = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setRole("");
    setPhone("");
    setPan("");
    setExperience("");
    // setStatus("");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (!CandidateName || !Email || !Role || !Contact || !PAN || !Experience) {
      return toast.error("Please fill in all details")
    }

    const candidate = {
      CandidateName,
      Email,
      Contact,
      Role,
      PAN,
      Experience,
      // status
    };


    const result = await fetch("/addCandidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "CandidateName": CandidateName,
        "Email": Email,
        "Contact": Contact,
        "Role": Role,
        "PAN": PAN,
        "Experience": Experience,
        // "status" : status
      })

    })

    const data = await result.json();
    const msg=JSON.stringify(data);
    // console.log(data)

    if (result.status === 422) {
      return toast.error("Server Trashed");
    }else if (result.status === 500) {
      return toast.error(`Invalid Registration ${msg}`)
    }
    if(result.status === 200) {
      return toast.success("Successfully Added the candidate");
    }

    navigate('/');
  };

  return (
    <div className="container-wrap p-3">
    <h2 className="mb-4 px-2" id="addcandidate">Add Candidate</h2>
    <form className="px-2">
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
              value={CandidateName}
              onChange={(e) => setName(e.target.value)}
              minLength="3"
              required
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
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              type="tel"
              className="form-control"
              placeholder="Enter Contact"
              // inputMode="numeric"
              value={Contact}
              minLength={10}
              maxLength={10}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]{10}"
              required
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
              value={Role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
      
              <option defaultValue="Select Role">Select Role</option>
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
              value={PAN}
              minLength={10}
              maxLength={10}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              required
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
              className="form-control"
              placeholder="Enter Number of years"
              value={Experience}
              onChange={(e) => setExperience(e.target.value)}
              required
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

export default AddCandidate;
