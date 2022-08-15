const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
    },

    lastname:{
        type: String,
    },

    middlename:{
        type: String,
    },

    address:{
        type: String,
    },
    
    email:{
        type: String,
        unique: true,
    },

    password:{
        type: String,
    },

    phone:{
        type: String,
    },
    
    dob:{
        type: String,
    },
    
    savings:{
        type: Number,
        default: 0
    },

    current:{
        type: Number,
        default: 0
    },

    business:{
        type: Number,
        default: 0
    },

    cardnumber:{
        type: Number,
        default: 0
    },

    accountnumber:{
        type: Number,
    },

    routingnumber:{
        type: Number,
    },



}, {timestamps: true})

export default mongoose.models.User ||  mongoose.model('User', UserSchema)