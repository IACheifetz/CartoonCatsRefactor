const { Router } = require('express');
const CartoonCat = require('../models/CartoonCat');


module.exports = Router() 
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchedCat = await CartoonCat.getById(id);
    res.json(matchedCat);
  })
   
  .get('/', async (req, res) => {
    const cats2 = await CartoonCat.getAll();
    res.json(cats2);
  });
  
