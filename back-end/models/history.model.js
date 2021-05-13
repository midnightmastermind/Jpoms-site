const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const HistorySchema = new Schema({
    name: {type: String},
    startDate: {type: Date},
    endDate: {type: Date},
    description: {type: String},
    tags: [{type: String}]
})

// BlockSchema.post('findOneAndUpdate', function(doc, next) {
//   recursive_reference(this._update, "children")
//   console.log(this._update["children"]);
//   next();
// });
//create model
const History = mongoose.model('History', HistorySchema);


module.exports = History;
