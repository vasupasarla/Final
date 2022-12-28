import React from 'react'
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import Papa from "papaparse";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const allowedExtensions = ["csv"];

function Import() {

  const history = useNavigate();

  function cancel() {
      history("/");
  }

  const [dataa, setDataa] = useState([]);
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName]=useState("Select File to import candidates")

  const postData=async (parsedData)=>{

    const res=await fetch("/postmultiple",{
      method : "POST",
      headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          data:parsedData
        })
      });

      const data=await res.json();
      console.log("data : "+JSON.stringify(data));
      const msg=JSON.stringify(data);

      if(res.status===422||!data){
        //window.alert(`Invalid Registration`);
        toast.error("Invalid Registration");
        console.log("Invalid Registration");
      }else if(res.status===500||!data){
        //window.alert(`Invalid Registration ${msg}`);
        toast.error(`Invalid Registration ${msg}`);
        console.log("Invalid Registration");
      }
      else{
        //window.alert("Registration Sucessfull");
        toast.success("Successfully Added the Candidates");
        console.log("Registration Sucessfull");
      }
  }

  const handleFileChange = (e) => {
      setError("");
      if (e.target.files.length) {
          const inputFile = e.target.files[0];
          const fileExtension = inputFile?.type.split("/")[1];
          if (!allowedExtensions.includes(fileExtension)) {
              setError("Please input a csv file");
              return;
          }
          setFile(inputFile);
          setFileName(inputFile.name)
      }
  };

const handleParseAndSend = () => {
      if (!file) return setError("Enter a valid file");
       const reader = new FileReader();
       reader.onload = async ({ target }) => {
          const csv = Papa.parse(target.result, { header: true });
          let parsedData = csv?.data;

          parsedData=parsedData.filter(item=>{
            if(item.CandidateName.length){
              return true;
            }
            return false;
          })

          console.log((parsedData))
          const columns = Object.keys(parsedData[0]);
          setDataa(columns);
          await postData(parsedData)
      };
      reader.readAsText(file);
  };

  const data = [
    {
      candidatename: "",
      email: "",
      contact: "",
      PAN: "",
      role: "",
      experiance: ""
    }

  ]
  const headers = [
    { label: "CandidateName", key: "candidatename" },
    { label: "Email", key: "email" },
    { label: "Contact", key: "contact" },
    { label: "PAN", key: "pan" },
    { label: "Role", key: "role" },
    { label: "Experience", key: "experience" }
  ]

  const csvTemplate = {
    filename: 'Template.csv',
    headers: headers,
    data: data
  }

  return (
    <div className='p-3'>
      <div className='row'>
        <span className="content1"><h2> Import Candidates</h2></span>
        <div className='col-md-11 my-2 mx-auto text-right d-grid gap-2 d-md-flex justify-content-md-end'>
          <div className='btn btn-primary' >
            <CSVLink {...csvTemplate} id="download_template">Download Template</CSVLink>
          </div>
        </div>
        <div className="">
            <span>
            <b>Select File</b>
            <input id="file-input" className="content6" type="file" placeholder="Select File to import Candidates" onChange={handleFileChange}/>
            <label for="file-input" id="file-ip-label" className="col-sm-2 col-form-label fw-lighter ms-5">
              <div id="file-input-label">
                <span>{fileName} </span>
                <div style={{ float: "right" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                  </svg>
                </div>
              </div>
            </label>
            </span>
          <span className="content3"><button className="btn btn-primary btn-xl " onClick={handleParseAndSend}>Upload File</button></span>
          <span>{'   '}</span>
          <span className="content4"><button className="btn btn-primary btn-xl" onClick={cancel}> Cancel</button></span>
          <div style={{ marginTop: "3rem" }}>
                {error ? error : dataa.map((col,
                  idx) => <div key={idx}></div>)}
          </div>
        </div>
      </div>
    </div>
  )

}

export default Import;