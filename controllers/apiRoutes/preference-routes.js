const router = require(express).Router();
const sequelize = require('../config/connection');
const { Preferences, User } = require('../../models');

router.get('/', (req, res) => {
    Preferences.findAll({
        include: {
            model: User,
            attributes:  ['username', 'email']
        }
    })
    .then(dbPreferenceData => res.json(dbPreferenceData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    Preferences.create({
        user_id: {
            id: req.session.user_id,
            poetry: req.body.poetry,
            foreignPolicy: req.body.foreignPolicy,
            coding: req.body.coding,
            gifs: req.body.gifs
        }
    })
    .then(dbPreferenceData => res.json(dbPreferenceData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});
