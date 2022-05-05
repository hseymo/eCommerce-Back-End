const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route! Try '/api/categories', '/api/products', or '/api/tags' next time!</h1>")
});

module.exports = router;