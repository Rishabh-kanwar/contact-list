const mongoose=require('mongoose');
const contact_Schema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
});
    const Contact=mongoose.model('Contact',contact_Schema);
    module.exports=Contact;