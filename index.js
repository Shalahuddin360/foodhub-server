const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef = require('./data/chefs.json');

const recipes = require('./data/recipes.json');
app.use(cors())
app.get('/', (req, res) => {
  res.send('FoodHub is comming soon')
})

app.get('/chef', (req, res) => {
  res.send(chef)
})
app.get('/recipes', (req, res) => {
  res.send(recipes)
})
app.get('/recipes/:id', (req, res) => {
  const id = req.params.id;
  const selectedRecipe = recipes.find(r => r.recipe_id === id);
  res.send(selectedRecipe)
})
app.get('/chef/:id', (req, res) => {
   const id = parseInt(req.params.id);
   if (id === 0) {
   res.send(recipes)
  }
  else {
    const chefRecipes = recipes.filter(r => parseInt(r.chef_id) === id);
     res.send(chefRecipes)
  }

})

app.listen(port, () => {
  console.log(`FoodHub API is running on port : ${port}`)
})