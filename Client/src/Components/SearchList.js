import Paginator from "./Paginator";
import SingleList from "./Singlelist";
import "./SearchList.scss";
//import { Action } from "@remix-run/router";

function SearchList({ candidateList, onNext, onPrevious, page, CandidateName, Email, Role, status}) {
    console.log(candidateList.candidate);
    return (
        <div className='container-wrap p-2'>
            <h5> {candidateList.totalItems === 1 ? "1 Candidate" : `${candidateList.totalItems} Candidates Fetched`}</h5>
            {candidateList.candidate?.length ? (
                <Paginator
                    onPrevious={onPrevious}
                    onNext={onNext}
                    lastPage={candidateList ? Math.ceil(candidateList.totalItems / 3) : 1}
                    currentPage={page}>
                    <table className='searchList__lists'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Candidate Name</th>
                                <th>Candidate Email</th>
                                <th>Candidate Contact</th>
                                <th>PAN</th>
                                <th>Role</th>
                                <th>Experience</th>
                                <th>Status</th>
                                <th>Action</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {candidateList.candidate?.map((candidate, index) => (
                                <SingleList key={candidate.cid} hash={(page*3 - 3)+(index + 1)} candidate={candidate} />
                            ))}
                        </tbody>
                    </table>
                </Paginator>
            ) : (
                <h3 className='searchList__noResult'>
                    No Result Found For this Search
                </h3>
            )}
            {/* <br></br> */}

            <span>{ (page*3 -2) +  " - " + (page*3 <= candidateList.totalItems ? page*3 : candidateList.totalItems) + " of " + Math.ceil(candidateList.totalItems) + " records"}</span>
        </div>
    );
}

export default SearchList;