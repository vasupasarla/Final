const Candidate = require("../Models/addcandidate");



const getAllCandidates =  (req,res,next) => {

     Candidate.addCandid.find({}, function (err, result) {
            //if (err) { res.status(404).send("Error in finding") }
            res.status(200).json(result);
        })
}

module.exports = {getAllCandidates};