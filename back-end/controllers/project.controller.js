const Project = require('../models/project.model');
const express = require("express");
const mongoose = require('mongoose');
// Display project of all projects.
exports.project = function(req, res) {
    Project.find()
    .then(project => {
          console.log(project);
          res.json(project);
        })
        .catch(err => res.status(400).json('Error: ' + err));
    //res.send(project);
};

// Display detail page for a specific project.
exports.project_detail = function(req, res) {
    Project.findById(req.params.id)
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display project create form on GET.
exports.project_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: project create GET');
};

// Handle project create on POST.
exports.project_create_post = function(req, res) {
    const newProject = new Project({
        ...req.body.element
    });
     newProject.save().then(
         project =>Project.findById(project._id)
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error: ' + err)));
};

// Display project delete form on GET.
exports.project_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: project delete GET');
};

// Handle project delete on POST.
exports.project_delete_post = function(req, res) {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json('Project deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display project update form on GET.
exports.project_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: project update GET');
};

// Handle project update on POST.
exports.project_update_post = function(req, res) {
    console.log("hit");
    Project.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {...req.body}, {new: true})
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Handle project update on POST.
exports.projects_update = function(req, res) {
    const updatedProject = req.body;
    res.status(200);
};
