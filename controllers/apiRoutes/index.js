const router = require('express').Router();

const userRoutes = require('./user-routes');
const preferenceRoutes = require('./preference-routes.js');

router.use('/users', userRoutes);
router.use('/preferences', preferenceRoutes);

module.exports = router;