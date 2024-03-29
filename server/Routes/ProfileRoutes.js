const express = require('express');
const router = express.Router();
const Profile = require("../Models/ProfileModel");

router.get('/:user_id', async (req, res) => {
    try {
        const user_id = req.params.user_id;
        console.log(user_id)

        const user = await Profile.findOne({ user_id });

        if (!user) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;