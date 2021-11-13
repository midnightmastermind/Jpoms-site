const router = require('express').Router();
const project_controller = require('../controllers/project.controller');


// GET request for creating project. NOTE This must come before route for id (i.e. display project).
router.get('/create', project_controller.project_create_get);

// POST request for creating project.
router.post('/create', project_controller.project_create_post);
// POST request to update all projects.
router.post('/update', project_controller.projects_update);

// GET request to delete project.
router.get('/:id/delete', project_controller.project_delete_get);

// POST request to delete project.
router.post('/:id/delete', project_controller.project_delete_post);

// GET request to update project.
router.get('/:id/update', project_controller.project_update_get);

// POST request to update projects
router.post('/:id/update', project_controller.project_update_post);

// GET request for one project.
router.get('/:id', project_controller.project_detail);


// GET request for list of all projects.
router.get('/', project_controller.project);

module.exports = router;
