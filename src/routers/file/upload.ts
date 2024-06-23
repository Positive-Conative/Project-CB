import express from 'express';

const router = express.Router({ mergeParams: true });


router.post('/', async function (req, res, next) {

    res.json({a:1});
});


module.exports = router;
