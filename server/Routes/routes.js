const express = require('express');
const router = express.Router();

const getallController = require("../Controllers/getall");
const postController = require("../Controllers/post");
const putController = require("../Controllers/put");
const searchController = require("../Controllers/search");
const getbyid=require("../Controllers/getbyid");

router.post('/addCandidate', postController.postAddCandidate);
router.get('/all', getallController.getAllCandidates);
router.post('/postmultiple', postController.postMultiple);
router.post('/search/:page', searchController.getCandidatesStrict);
router.put('/updateCandidate/:cid', putController.updateCandidate);
router.get('/getbyid/:cid', getbyid.getbyid);

module.exports = router;