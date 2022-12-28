const Candidate = require("../Models/addcandidate");
const getCandidatesStrict = async (req,res,next) => {
  try{
    const currentPage = req.params.page || 1;
    const perPage = 3;
    let totalItems=0;
    dbConstraint = {};
      if (req.body.CandidateName) {
        dbConstraint.CandidateName = req.body.CandidateName;
    }
    if (req.body.Email) {
        dbConstraint.Email = req.body.Email;
    }
    if (req.body.Contact) {
        dbConstraint.Contact = req.body.Contact;
    }
    if(req.body.PAN){
      dbConstraint.PAN = req.body.PAN;
    }
    if (req.body.Role) {
        dbConstraint.Role = req.body.Role;
    }
    if (req.body.status) {
        dbConstraint.status = req.body.status;
    }

      console.log(dbConstraint);
        totalItems = await Candidate.addCandid.find({ ...dbConstraint }).countDocuments();
        let user=await Candidate.addCandid.find({ ...dbConstraint }).skip((currentPage - 1) * perPage).limit(perPage);
        if (user.length === 0) {
            return res.status(404).json({ message: 'User details not found',totalItems});
        }
        res.status(200).json({ message: "Successfully Fetched the User", candidate: user, totalItems: totalItems });    
    }
    catch(err) {
      console.log(err);
    }
  

}

module.exports = {getCandidatesStrict};