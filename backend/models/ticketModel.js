const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Please select a prouct'],
        enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad']
    },
    description: {
        type: String,
        required: [true, 'Please describe the issue']
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'opened', 'closed'],
        default: 'new'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema);