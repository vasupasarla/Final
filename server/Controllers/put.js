const Candidate = require("../Models/addcandidate");

const updateCandidate = async (request, response, next) => {

    try {
        console.log(request.params.cid);
        Candidate.addCandid.findOne({ cid : request.params.cid },
            function (err, result) {
                if (!result) {
                    return response.status(404).json({ message: 'Candidate with ' + request.params.cid + ' not found!' });
                }

                result.CandidateName = request.body.CandidateName,
                result.Email = request.body.Email,
                result.Contact = request.body.Contact;
                result.Role = request.body.Role;
                result.PAN = request.body.PAN;
                result.Experience = request.body.Experience;
                //result.status = request.body.status;

                Object.assign(result, request.body).save((err, result) => {
                    if (err) response.send(err);
                    response.json({ message: 'Sucessfully Updated Candidate Details', result });
                });
            })
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
}


module.exports = { updateCandidate };