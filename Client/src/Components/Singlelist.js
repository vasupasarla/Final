import React, { useEffect, useState } from "react";
import { PencilIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
// import ToggleButton from "./ToggleButton.js";
import { Link } from 'react-router-dom';
import "./SingleList.scss";

function SingleList({ hash, candidate, candidateList }) {
    const [CandidateName, setName] = useState();
    const [Email, setEmail] = useState();
    const [Role, setRole] = useState();
    const [status, setStatus] = useState();
    const [Contact, setPhone] = useState();
    const [PAN, setPan] = useState();
    const [Experience, setExperience] = useState();

    // const [isActive, setIsActive] = useState();
    // const triggerToggle = () => {
    //     setIsActive(user.Action);
    // };

    useEffect(() => {
        setName(candidate.CandidateName);
        setEmail(candidate.Email);
        setPhone(candidate.Contact);
        setRole(candidate.Role);
        setPan(candidate.PAN);
        setExperience(candidate.Experience)
        setStatus(candidate.status);
        console.log(candidate);
    }, [candidate]);
    let e1;
    if (candidate.status === "022 L1 Rejected" || candidate.status === "032 L2 Rejected" || candidate.status === "041 HR Rejected" || candidate.status === "090 Drop") {



        e1 = <XCircleIcon color="white" className="singleList__icon"></XCircleIcon>;
    
    
    
      } else {
    
    
    
        e1 = <CheckCircleIcon color="#0d6efd" className="singleList__icon" ></CheckCircleIcon>
    
      }
    return (
        <tr className="singleList">
            <td>{hash}</td>
            <td>{CandidateName}</td>
            <td>{Email}</td>
            <td>{Contact}</td>
            <td>{PAN}</td>
            <td>{Role}</td>
            <td>{Experience}</td>
            {/* <td>{status}</td> */}
            <td className="singleList__action">
                {e1}                
            </td>
            <td>
            <Link to={`/edit/${candidate.cid}`}><PencilIcon className="singleList__pencilIcon" /></Link>

            </td>
        </tr>
    );
}

export default SingleList;


