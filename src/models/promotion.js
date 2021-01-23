const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({

  id_producto: {
    type: String,
    require: true,
  },
  nombreProm: {
    type: String,
    required: true,
  },
  infoPromocion: {
    type: String,
    required: true,

  },
  cantidadProducto: {
    type: Number,
    required: true,
  },
  descuento: {
    type: Number,
    required: true,
  },
  codigoPromo: {
    type: String,
    required: true,
  },
  flyer: {
    type: String,
    required: true,
  },

});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;
