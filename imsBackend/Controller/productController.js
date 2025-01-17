const Product = require('../Model/productModel');
const Category = require('../Model/categoryModel');

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { Product_Type, Product_Name, Brand, Depreciation, Model_No, Category_Id, Created_By, Created_Date, Modified_By, Modified_Date } = req.body;
    // const category = await Category.findOne({ where: { Name: Category_Name } });
    // if (!category) {
    //   return res.status(404).json({ error: 'Category not found' });
    // }
    const newProduct = await Product.create({
      Product_Type,
      Product_Name,
      Brand,
      Depreciation,
      Model_No,
      Category_Id,
      Created_By,
      Created_Date,
      Modified_By,
      Modified_Date,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// Update
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    console.log('Request body:', req.body);
    console.log('Updating product with ID:', productId);
    const { Product_Type, Product_Name, Brand, Depreciation, Model_No, Category_Id, Created_By, Created_Date, Modified_By, Modified_Date } = req.body;
    const updatedProduct = await Product.update({
      Product_Type,
      Product_Name,
      Brand,
      Depreciation,
      Model_No,
      Category_Id,
      Created_By,
      Created_Date,
      Modified_By,
      Modified_Date,
    }, { where: { Product_Id: productId } });

    if (updatedProduct[0] === 1) {
      const updatedProductWithCategory = await Product.findOne({
        where: { Product_Id: productId },
        include: [Category]
      });
      res.status(200).json(updatedProductWithCategory);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// Delete
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.destroy({ where: { Product_Id: productId } });
    if (deletedProduct === 1) {
      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Get a product by ID for edit
const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

module.exports = { addProduct, updateProduct, deleteProduct, getAllProducts, getProductById };
