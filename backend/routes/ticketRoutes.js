const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/authMiddleware');
const {getTickets, createTicket, getTicket, deleteTicket, updateTicket} = require('../controllers/tickerController');

router.route('/')
    .get(auth, getTickets)
    .post(auth, createTicket)

router.route('/:id')
    .get(auth, getTicket)
    .delete(auth, deleteTicket)
    .put(auth, updateTicket)

module.exports = router;