const express = require('express');
const array = require('../apiServices/Array/array.routes');

const router = express.Router();

router.use('/array', array);

module.exports = router;