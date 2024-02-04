const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [{ model: Product }] })
    res.json(categories)
  } catch (err) { res.status(500).json(err) }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try{
    const categories = await Category.findByPk(req.params.id, {include:[{ model: Product }] })
    res.json(categories)
  } catch (err) { res.status(500).json(err) }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
try{ const newCategory=await Category.create(req.body)
  res.json(newCategory)
}catch (err) { res.status(500).json(err) }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try{
    const updateCategory= await Category.update(req.body,{where:{id: req.params.id}})
    res.json(updateCategory)
  } catch (err) { res.status(500).json(err) }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    const deleteCategory= await Category.destroy({where:{id: req.params.id}})
    res.json({message:"category deleted"})
  } catch (err) { res.status(500).json(err) }
  // delete a category by its `id` value
});

module.exports = router;
