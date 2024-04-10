const { Mongoose } = require("mongoose")

const musicSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    linkimage: {
        type: String,
        require: true,
    },
    linkmusic: {
        type: String,
        require: true,
    },

});
module.exports = moongose.model("Music", musicSchema);