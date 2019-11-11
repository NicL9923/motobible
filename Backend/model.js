const mongodb = require('mongoose');
const schema = mongodb.Schema;

//TODO
let whateverThingy = new Schema ({
    description: {
        type: String
    },
    thingy: {
        type: Number
    }
});

module.exports = mongodb.model('whateverThingy', whateverThingy);