const express = require('express'),
    router = express.Router(),
    surveyModel = require('../models/surveyModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
    const classInfoData = await surveyModel.getAllTopicData();
    const statusData = await surveyModel.getAllStatuses();

    return res.render('template', {
        locals: {
            title: 'Class Survey',
            classInfoData,
            statusData
        },
        partials: {
            body: 'partials/home',
        },
    });
});

router.post('/', async function (req, res) {

    for (let key in req.body) {
        await surveyModel.update(key, req.body[key]);
    }
    // @TODO - Put in some proper error handling if it all breaks.
    res.redirect('/');
});

module.exports = router;
