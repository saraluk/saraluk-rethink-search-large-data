const express = require('express');
const User = require('../models/userModel');
const router = new express.Router();

router.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/api/users', async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  try {
    const users = await User.find({
      $or: [
        { name: { $regex: req.query.q, $options: 'i' } },
        { email: { $regex: req.query.q, $options: 'i' } },
        { street: { $regex: req.query.q, $options: 'i' } },
        { city: { $regex: req.query.q, $options: 'i' } },
        { state: { $regex: req.query.q, $options: 'i' } },
        { country: { $regex: req.query.q, $options: 'i' } },
        { zipCode: { $regex: req.query.q, $options: 'i' } },
      ],
    }).select('name email street city state zipCode country');
    const results = users.slice(startIndex, endIndex);
    res.send({ users: results, total: users.length });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
