const mongoose=require('mongoose')

const messageSchema = new mongoose.Schema({
    user: {
        type:String,
        required:true
    },
    showTime:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    room: {
        type:String,
        required:true
    },
    createdAt: { type: Date, default: Date.now },
    },{timestamps:true});
    
const Message = mongoose.model('Message', messageSchema);

// Export the Message model
module.exports = Message;