const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ProjectSchema = new Schema({
    name: {type: String},
    link: {type: String },
    description: {type: String},
    files: {type: String},
    current: {type: Boolean}
})

// BlockSchema.post('findOneAndUpdate', function(doc, next) {
//   recursive_reference(this._update, "children")
//   console.log(this._update["children"]);
//   next();
// });
//create model
const Project = mongoose.model('Project', ProjectSchema, 'project');


module.exports = Project;
