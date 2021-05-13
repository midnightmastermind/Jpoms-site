const History = require('../models/history.model');
const express = require("express");
const mongoose = require('mongoose');
// Display history of all historys.
exports.history = function(req, res) {
    History.findOne()
        .then(historys => res.json(historys))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display detail page for a specific history.
exports.history_detail = function(req, res) {
    History.findById(req.params.id)
        .then(history => res.json(history))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display history create form on GET.
exports.history_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: history create GET');
};

// Handle history create on POST.
exports.history_create_post = function(req, res) {
    const newHistory = new History({
        ...req.body.element
    });
     newHistory.save().then(
         history =>History.findById(history._id)
        .then(history => res.json(history))
        .catch(err => res.status(400).json('Error: ' + err)));
};

// Display history delete form on GET.
exports.history_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: history delete GET');
};

// Handle history delete on POST.
exports.history_delete_post = function(req, res) {
    History.findByIdAndDelete(req.params.id)
        .then(() => res.json('History deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display history update form on GET.
exports.history_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: history update GET');
};

// Handle history update on POST.
exports.history_update_post = function(req, res) {
    console.log("hit");
    History.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {...req.body}, {new: true})
        .then(history => res.json(history))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Handle history update on POST.
exports.historys_update = function(req, res) {
    const updatedHistory = req.body;
    res.status(200);
};
