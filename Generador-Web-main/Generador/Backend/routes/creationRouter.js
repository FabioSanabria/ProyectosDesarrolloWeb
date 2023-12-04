const path = require('path');
const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const router = express.Router();
let model;

async function loadGenerator() {
    try 
    {
        model = await tf.loadLayersModel('file:///home/user/Documents/.../Models/taylor_swift_js/model.json');
    } 
    catch (error)
    {
        console.error('Error at loading generator model:', error);
    }
}

loadGenerator();

router.get('/', (req, res) => {
  res.render('create');
});

router.post('/:user_id', async (req, res, next) => {
  await controller.start(req, res, next);
});

// Professor's Code (Translated from Python)
router.post('/', (req, res) => {
  if (!model) {
      return res.status(500).send('Model has not loaded yet');
  }

  const inputData = req.body.data;
  if (!Array.isArray(inputData)) {
      return res.status(400).send('Input data must be an array');
  }
  const tensor = tf.tensor(inputData);
  const fs = require('fs');

  const text = fs.readFileSync('Models/choruses.txt', 'utf-8');

  const vocabSet = new Set(text);
  const vocab = Array.from(vocabSet).sort();

  const char2idx = {};
  vocab.forEach((char, idx) => {
      char2idx[char] = idx;
  });

  const idx2char = vocab;
  genFromPrompt(model, inputData[0], parseFloat(inputData[1]), char2idx, idx2char).then(result => res.json(result));

});

async function genFromPrompt(model, startString, temp, char2idx, idx2char) {

  // Limit Number
  const numGenerate = 300;
  let idxValue = startString.split('').map(s => char2idx[s]);
  idxValue = tf.tensor2d([idxValue]);
  const resultGen = [];
  const temperature = temp;

  model.resetStates();
  // Repeat for <numGenerate> characters.
  for (let i = 0; i < numGenerate; i++) {
      // Common code for predictions in tensorflow.
      const predictions = model.predict(idxValue);
      const predictionsSqueezed = predictions.squeeze();
      const predictionsScaled = predictionsSqueezed.div(temperature);
      const predictedId = tf.multinomial(predictionsScaled, 1).dataSync()[0];
      idxValue = tf.tensor2d([[predictedId]]);
      resultGen.push(idx2char[predictedId]);
      // <--->
    }
  
    return startString + " " +resultGen.join('') + ".";
}

module.exports = router;