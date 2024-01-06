const mongoose = require('mongoose');

// Define the schema
const StartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
});

// Create a model using the schema
const StartModel = mongoose.model('Start', StartSchema);

module.exports = StartModel;
