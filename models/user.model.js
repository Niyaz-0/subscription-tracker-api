import mongoose from "mongoose";

const userSchema = mongoose.Schema( {
    name: {
        type: String,
        required: [true, 'User name is required!'],
        unique: true,
        trim: true,
        minLength: 3,
        maxLength: 35 
    },
    email: {
        type: String,
        required: [true, 'User email is required!'],
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please fill a valid email address'],
        minLength: 5,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: 6
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;