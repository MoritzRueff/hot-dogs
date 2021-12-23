import mongoose  from "mongoose";

const dogScheme = new mongoose.Schema( {
    name: String,
    breed: String,
    age: Number,
    female: Boolean
} )

const Dog = mongoose.model('Dogs', dogScheme)

export default Dog