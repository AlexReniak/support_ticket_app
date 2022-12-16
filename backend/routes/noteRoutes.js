const express = require('express');
const router = express.Router({mergeParams: true});
const { getNotes, addNote } = require('../controllers/noteController')

const { auth } = require('../middleware/authMiddleware');

router.route('/')
    .get(auth, getNotes)
    .post(auth, addNote)


module.exports = router;