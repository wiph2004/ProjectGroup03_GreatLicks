const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Ice Cream' },
    { name: 'Apparel' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Vanilla Pint',
      description:
        'A luscious vanilla bean ice cream in a 16 oz container',
      image: 'pinticecream.jpeg',
      category: categories[0]._id,
      price: 5.50,
      quantity: 50
    },
    {
      name: 'Vanilla Ice Cream Bar',
      description:
        'Our vanilla bean ice cream in handy-dandy individually wrapped bar form. Package of 6.',
      image: 'vanilla-bar.png',
      category: categories[0]._id,
      price: 2.99,
      quantity: 100
    },
    {
      name: 'Vanilla Ice Cream Sandwich',
      category: categories[0]._id,
      description:
        'Our vanilla bean ice cream sandwiched between two chocolate wafer cookies. Package of 6.',
      image: 'vanilla-sandwich.jpg',
      price: 3.99,
      quantity: 100
    },
    {
      name: 'Chocolate Pint',
      category: categories[0]._id,
      description:
        'A decadent Dutch chocolate ice cream in a 16 oz container',
      image: 'pinticecream.jpeg',
      price: 5.50,
      quantity: 50
    },
    {
      name: 'Chocolate Ice Cream Bar',
      category: categories[0]._id,
      description:
        'Our Dutch chocolate ice cream in handy-dandy individually wrapped bar form. Package of 6.',
      image: 'chocolateicecreambar.jpg',
      price: 2.99,
      quantity: 100
    },
    {
      name: 'Chocolate Ice Cream Sandwich',
      category: categories[0]._id,
      description:
        'Our Dutch chocolate ice cream sandwiched between two chocolate wafer cookies. Package of 6.',
      image: 'chocolatesandwich.JPG',
      price: 3.99,
      quantity: 100
    },
    {
      name: 'Strawberry Pint',
      category: categories[0]._id,
      description:
        'A fresh strawberry ice cream in a 16 oz container. Made with real strawberries!',
      image: 'pinticecream.jpeg',
      price: 5.50,
      quantity: 50
    },
    {
      name: 'Strawberry Ice Cream Bar',
      category: categories[0]._id,
      description:
        'Our fresh strawberry ice cream in handy-dandy individually wrapped bar form. Package of 6.',
      image: 'strawberrybar.jpeg',
      price: 2.99,
      quantity: 100
    },
    {
      name: 'Strawberry Ice Cream Sandwich',
      category: categories[0]._id,
      description: 'Our fresh strawberry ice cream sandwiched between two graham cracker cookies. Package of 6.',
      image: 'strawberrysandwich.jpg',
      price: 3.99,
      quantity: 100
    },
    {
      name: 'Great Licks Shirt',
      category: categories[1]._id,
      description:
        'Show off your Great Licks pride with our fashionable boxy tee. Printed on Gildan shirts.',
      image: 'plastic-horses.jpg',
      price: 18.99,
      quantity: 100
    },
    {
      name: 'Great Licks ball cap',
      category: categories[1]._id,
      description:
        'Represent Great Licks with a stylish ball cap.',
      image: 'teddy-bear.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Great Licks Silver Spoon',
      category: categories[1]._id,
      description:
        'You weren\'t born with a silver spoon in your mouth, so get this one as soon as you can.',
      image: 'alphabet-blocks.jpg',
      price: 5.50,
      quantity: 100
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Jessica',
    lastName: 'Jones',
    email: 'jessica@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Dustin',
    lastName: 'Long',
    email: 'dlong@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
