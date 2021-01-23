const express = require('express');
const router = express.Router();

const Promotion = require('../models/promotion');

router.post('/promotion', async (req, res) => {
  try {
    const { body } = req;

    const promotion = new Promotion({ ...body });

    await promotion.save();
    res.status(200).json({ promotion });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

router.get('/promotion/:id', async (req, res) => {
  try {
    const promotionCode = req.params.id;
    const promotion = await Promotion.findOne({ codigoPromo: promotionCode });

    if (!promotion) {
      throw "Promotion not found!";
    } else {

      res.status(200).json(promotion);
    }
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

module.exports = router;
