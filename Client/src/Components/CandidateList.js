import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import SearchList from "./SearchList.js";
import { useNavigate } from "react-router-dom";
import "./add.css"

function CandidateList() {
  const CandidateName = useRef(HTMLInputElement);
  const Role = useRef(HTMLInputElement);
  const Email = useRef(HTMLInputElement);
  const Contact = useRef(HTMLInputElement);
  const PAN = useRef(HTMLInputElement);
  const Experience = useRef(HTMLInputElement);
  const status = useRef(HTMLInputElement);
  const [candidateList, setCandidateList] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const onNext = () => {
    setPage(page + 1);
    // search({ preventDefault: () => {} });
  };
  const onPrevious = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    // search({ preventDefault: () => {} });
  };

  function handleSearch(e) {
    e.preventDefault();
    setPage(1);
    search({ preventDefault: () => { } });

  }

  useEffect(() => {
    search({ preventDefault: () => { } });
  }, [page]);

  async function search(e) {
    e.preventDefault();
    setShow(true);
    const request = await fetch(`http://localhost:7000/search/${page}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CandidateName: CandidateName.current.value,
        Email: Email.current.value,
        Contact: Contact.current.value,
        Role: Role.current.value,
        PAN: PAN.current.value,
        Experience: Experience.current.value,
        status: status.current.value,
      }),
    });
    const data = await request.json();
    setCandidateList(data);
  }
  function handlecancel(e) {
    e.preventDefault();
    window.location.reload()
  }


  return (
    <div className="container-wrap p-3">
      <h2>Candidate List</h2>

      <div className="container-wrap">
        <form className="px-2">
          <div className="row mb-4">
            <div className="col-md-12">
              <Link to="/add">
                <button type="submit" className="btn btn-primary btn-sm float-end ms-3 py-2">
                  +Add Candidate
                </button>
              </Link>
              <Link to="/import">
                <button type="submit" className="btn btn-primary btn-sm float-end py-2">
                  +Import Candidates
                </button>
              </Link>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-1">
              <div className="form-group">
                <label className="fw-bolder" htmlFor="userid">
                  Candidate Name
                </label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="candidate-name"
                  ref={CandidateName}
                  placeholder="Enter Candidate Name"
                />
              </div>
            </div>

            <div className="col-md-1">
              <div className="form-group">
                <label className="fw-bolder" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group ">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  ref={Email}
                />
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-1 ">
              <div className="form-group">
                <label className="fw-bolder" htmlFor="status">
                  Status
                </label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group ">
                <select
                  id="status"
                  ref={status}
                  className="form-select"
                  arial-label="Select status"
                >
                  <option value="">Select Status</option>

                  <option value="010 Screening">010 Screening</option>
                  <option value="020 L1 TBS">020 L1 TBS</option>
                  <option value="021 L1 Scheduled">021 L1 Scheduled</option>
                  <option value="022 L1 Rejected">022 L1 Rejected</option>
                  <option value="031 L2 TBS">031 L2 TBS</option>
                  <option value="032 L2 Rejected">032 L2 Rejected</option>
                  <option value="040 HR TBS">040 HR TBS</option>
                  <option value="041 HR Rejected">041 HR Rejected</option>
                  <option value="050 Offer Approval">050 Offer Approval</option>
                  <option value="051 Offer Rejected">051 Offer Rejected</option>
                  <option value="052 Offer Released">052 Offer Released</option>
                  <option value="070 Joined">070 Joined</option>
                  <option value="080 Offer Backout">080 Offer Backout</option>
                  <option value="090 Drop">090 Drop</option>
                </select>
              </div>
            </div>
            <div className="col-md-1">
              <div className="form-group">
                <label className="fw-bolder" htmlFor="first">
                  Role
                </label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <select
                  id="role"
                  ref={Role}
                  className="form-select"
                  aria-label="Select Role"
                >
                  <option value="">Select Role</option>
                  <option value="AES-DigitalFS-JavaMS">AES-DigitalFS-JavaMS</option>
                  <option value="AES-DigitalFS-JavaFS">AES-DigitalFS-JavaFS</option>
                  <option value="AES-DigitalFS-DotnetFS">AES-DigitalFS-DotnetFS</option>
                  <option value="AES-FED-Angular">AES-FED-Angular</option>
                  <option value="AES-FED-React">AES-FED-React</option>
                  <option value="AES-FED-MEAN">AES-FED-MEAN</option>
                  <option value="AES-FED-MERN">AES-FED-MERN</option>
                  <option value="AES-AgileDevOps-Agile">AES-AgileDevOps-Agile</option>
                  <option value="AES-AgileDevOps-DevOps">AES-AgileDevOps-DevOps</option>
                  <option value="AES-DigitalPlatforms-AEM">AES-DigitalPlatforms-AEM</option>
                  <option value="AES-DigitalPlatforms-Liferay">AES-DigitalPlatforms-Liferay</option>
                  <option value="AES-DigitalPlatforms-Sitecore">AES-DigitalPlatforms-Sitecore</option>
                  <option value="AES-DigitalPlatforms-M365">AES-DigitalPlatforms-M365</option>
                  <option value="AES-DigitalPlatforms-Drupal">AES-DigitalPlatforms-Drupal</option>
                  <option value="AES-Lowcode-Outsystems">AES-Lowcode-Outsystems</option>
                  <option value="AES-Lowcode-MSApps">AES-Lowcode-MSApps</option>
                  <option value="AES-Mobility-IOS">AES-Mobility-IOS</option>
                  <option value="AES-Mobility-Android">AES-Mobility-Android</option>
                  <option value="AES-Mobility-ReactNative">AES-Mobility-ReactNative</option>
                  <option value="AES-ApplicationModernization-Mainframe">AES-ApplicationModernization-Mainframe</option>
                  <option value="AES-DigitalFS-Integration">AES-DigitalFS-Integration</option>
                  <option value="AES-CloudApps-Azure">AES-CloudApps-Azure</option>
                  <option value="AES-CloudApps-AWS">AES-CloudApps-AWS</option>
                  <option value="AES-CloudApps-GCP">AES-CloudApps-GCP</option>
                  <option value="AES-Mobility-Others">AES-Mobility-Others</option>

                </select>
              </div>
            </div>
          </div>

          <div className="row addList__button">
            <div className="col-md-2">
              <button
                type="submit"
                onClick={handleSearch}
                className="btn btn-primary"
                data-testid="submit"
                value=""
              >
                Search
              </button>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-primary"
                type="button"
                data-testid="button"
                onClick={handlecancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>

      {show && (
        <SearchList
          candidateList={candidateList}
          onNext={onNext}
          onPrevious={onPrevious}
          page={page}
          Contact={Contact}
          CandidateName={CandidateName}
          Email={Email}
          Role={Role}
          PAN={PAN}
          Experience={Experience}
        // isActive={isActive}
        />
      )}
    </div>
  );
}
export default CandidateList;
