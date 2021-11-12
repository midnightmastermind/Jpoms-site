const router = require('express').Router();
const history_controller = require('../controllers/history.controller');


// GET request for creating history. NOTE This must come before route for id (i.e. display history).
router.get('/create', history_controller.history_create_get);

// POST request for creating history.
router.post('/create', history_controller.history_create_post);
// POST request to update all historys.
router.post('/update', history_controller.historys_update);

// GET request to delete history.
router.get('/:id/delete', history_controller.history_delete_get);

// POST request to delete history.
router.post('/:id/delete', history_controller.history_delete_post);

// GET request to update history.
router.get('/:id/update', history_controller.history_update_get);

// POST request to update historys
router.post('/:id/update', history_controller.history_update_post);

// GET request for one history.
router.get('/:id', history_controller.history_detail);


// GET request for list of all historys.
router.get('/', history_controller.history);

module.exports = router;
