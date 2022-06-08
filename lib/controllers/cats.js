const { Router } = require('express');
const { cats } = require('../../data/cats');


module.exports = Router() 
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchedCat = cats.find((cat) => cat.id === id);
    res.json(matchedCat);
  })
  .get('/', (req, res) => {
    const cats2 = cats.map((cat) => { return { id: cat.id, name: cat.name };});
    res.json(cats2);
  });
  
