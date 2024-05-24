import mongoose from "mongoose";

mongoose
    .connect("mongodb+srv://swastiksingh368:IEa1avoK1xQUuvrK@cluster0.k0vd22v.mongodb.net/paymentApp")
    .then((it) => console.log(`Database Connected with HOST : ${it.connection.host}`))
    .catch((e) => console.log(e));


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

export const User = mongoose.model('User', userSchema);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

export const Account = mongoose.model('Account', accountSchema);




