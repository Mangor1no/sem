/* eslint-disable max-lines */
export const categories = [
  {
    id: 0,
    category: 'coffee-machine',
    name: 'Coffee machine',
    subCategory: [
      {
        id: 0,
        slug: 'all-machines',
        name: 'All Machines',
      },
      {
        id: 1,
        slug: 'coffee-grinder',
        name: 'Coffee Grinder',
      },
      {
        id: 2,
        slug: 'coffee-maker',
        name: 'Coffee Maker',
      },
      {
        id: 3,
        slug: 'coffee-roaster',
        name: 'Coffee Roaster',
      },
      {
        id: 4,
        slug: 'espresso-machine',
        name: 'Espresso Machine',
      },
      {
        id: 5,
        slug: 'fully-automatic',
        name: 'Fully Automatic',
      },
    ],
  },
  {
    id: 1,
    category: 'barista-tools',
    name: 'BARISTA TOOLS',
    subCategory: [
      {
        id: 0,
        slug: 'all-tools',
        name: 'All Tools',
      },
      {
        id: 1,
        slug: 'tampers-and-mats',
        name: 'Tampers & Mats',
      },
      {
        id: 2,
        slug: 'pitchers',
        name: 'Pitchers',
      },
      {
        id: 3,
        slug: 'thermormeters',
        name: 'Thermormeters',
      },
      {
        id: 4,
        slug: 'cups-and-mugs',
        name: 'Cups & Mugs',
      },
      {
        id: 5,
        slug: 'scales',
        name: 'Scales',
      },
      {
        id: 6,
        slug: 'servers',
        name: 'Servers',
      },
    ],
  },
  {
    id: 2,
    category: 'coffee-beans',
    name: 'Coffee beans',
    subCategory: [
      {
        id: 0,
        slug: 'all-beans-types',
        name: 'All Beans Types',
      },
      {
        id: 1,
        slug: 'capsules',
        name: 'Capsules',
      },
      {
        id: 2,
        slug: 'ground',
        name: 'Ground',
      },
      {
        id: 3,
        slug: 'roasted',
        name: 'Roasted',
      },
      {
        id: 4,
        slug: 'speciality',
        name: 'Speciality',
      },
      {
        id: 5,
        slug: 'whole-beans',
        name: 'Whole Beans',
      },
    ],
  },
];

export const coffeeMachines = [
  {
    id: 0,
    name: 'Aldult Salmon Rice',
    category: 'Food',
    image: [
      '/images/products/0.jpg',
      '/images/products/0-1.jpg',
      '/images/products/0-2.jpg',
      '/images/products/0-3.jpg',
    ],
    rating: 4.5,
    price: 20.19,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 42,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 1,
    name: 'Royal Canin Kitten',
    category: 'Food',
    image: [
      '/images/products/1.jpg',
      '/images/products/1-1.jpg',
      '/images/products/1-2.jpg',
      '/images/products/1-3.jpg',
    ],
    rating: 5,
    price: 80.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 35,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 2,
    name: 'Royal Canin Hairball Care',
    category: 'Food',
    image: [
      '/images/products/2.jpg',
      '/images/products/2-1.jpg',
      '/images/products/2-2.jpg',
      '/images/products/2-3.jpg',
    ],
    rating: 5,
    price: 56.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 3,
    name: 'ABC-Dog Toys',
    category: 'Toy',
    image: ['/images/products/3.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 4,
    name: ' ABC-square mattress size 2',
    category: 'Accessories',
    image: ['/images/products/4.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 5,
    name: 'Baby Powder',
    category: 'Accessories',
    image: ['/images/products/5.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 6,
    name: 'Meowing Heads-Dry Cat ',
    category: 'Accessories',
    image: ['/images/products/6.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 7,
    name: 'Hagen-Kitty Rubber Brush',
    category: 'Accessories',
    image: ['/images/products/7.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 8,
    name: 'Omega 3 Healty Care',
    category: 'Medicine',
    image: ['/images/products/8.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 9,
    name: 'ABC-Nail Scratcher',
    category: 'Accessories',
    image: ['/images/products/9.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //    {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //        },
    //       },
  },

  {
    id: 9,
    name: 'ABC-Nail Scratcher',
    category: 'Accessories',
    image: ['/images/products/9.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 10,
    name: "Napoleon's Nibbles",
    category: 'Food',
    image: ['/images/products/10.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 11,
    name: 'S0S-Special For Cat',
    category: 'Medicine',
    image: ['/images/products/11.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 12,
    name: 'Endeavor Daytripa',
    category: 'Clothes',
    image: ['/images/products/12.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 13,
    name: 'Endeavor Royal Canin',
    category: 'Food',
    image: ['/images/products/13.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 14,
    name: 'Endeavor Daytripa',
    category: 'Food',
    image: ['/images/products/14.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 15,
    name: 'Grain Free Adult',
    category: 'Food',
    image: ['/images/products/15.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 16,
    name: 'Endeavor Daytripa',
    category: 'Food',
    image: ['/images/products/16.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 17,
    name: 'Arden Grange For Dog',
    category: 'Food',
    image: ['/images/products/17.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 18,
    name: 'Arden Grange Sensitive',
    category: 'Food',
    image: ['/images/products/18.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 19,
    name: 'Endeavor Daytripa Hairball',
    category: 'Food',
    image: ['/images/products/19.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 19,
    name: 'Endeavor Daytripa Hairball',
    category: 'Food',
    image: ['/images/products/19.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 20,
    name: 'Vita Vet C',
    category: 'Medicine',
    image: ['/images/products/20.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 21,
    name: 'Chocolate Bombom Sortidos ',
    category: 'Food',
    image: ['/images/products/21.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 22,
    name: 'Endeavor Daytripa Bag',
    category: 'Accessories',
    image: ['/images/products/22.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },

  {
    id: 23,
    name: 'Endeavor Daytripa Pro',
    category: 'Accessories',
    image: ['/images/products/23.jpg'],
    rating: 5,
    price: 33.0,
    brand: 'Bialetti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod empor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    stock: 2,
    // metadata: {
    //      {Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //          },
    //         },
  },
];

export const baristaTools = [
  {
    id: 0,
    name: 'Delonghi Tamper',
    category: 'barista-tools',
    subCategory: 'tampers-and-mats',
    image: [
      '/images/products/product-24.png',
      '/images/products/product-24.png',
      '/images/products/product-24.png',
      '/images/products/product-24.png',
      '/images/products/product-24.png',
    ],
    rating: 4,
    price: 28.5,
    oldPrice: 53.25,
    variations: ['black', 'gray'],
    brand: 'Delonghi',
    description:
      "The better result are obtaines using De'longhi calibrated coffee tamper to give the right pressure to ground coffee into the filter.",
    stock: 42,
    metadata: {
      details: {
        dimensions: '51.5x51.5x90.9mm',
        weight: '283.50g',
        material: 'Metal',
        country: 'Italia',
      },
    },
  },
  {
    id: 1,
    name: 'Delonghi Shot Glass',
    category: 'barista-tools',
    subCategory: 'cups-and-mugs',
    image: [
      '/images/products/product-12.png',
      '/images/products/product-12.png',
      '/images/products/product-12.png',
      '/images/products/product-12.png',
      '/images/products/product-12.png',
    ],
    rating: 5,
    price: 14.99,
    variations: ['#F2F2F2', 'gray'],
    brand: 'Delonghi',
    description:
      'Serve robust espresso at home in double-wall-insulated glasses that keep drinks hot or cold and limit condensation. The dishwasher-safe design allows quick and easy cleaning.',
    stock: 42,
    metadata: {
      details: {
        dimensions: '63.5x63.5x63.5mm',
        weight: '113.40g',
        cable_length: '1.0m',
        tank_capacity: '0.03L',
        material: 'Glass',
        country: 'Italia',
      },
    },
  },
];

export const coffeeBeans = [
  {
    id: 0,
    name: 'Roasted Coffee Beans',
    category: 'coffee-beans',
    subCategory: 'roasted',
    image: [
      '/images/products/product-11.png',
      '/images/products/product-11.png',
      '/images/products/product-11.png',
      '/images/products/product-11.png',
      '/images/products/product-11.png',
    ],
    rating: 4,
    price: 19.95,
    variations: ['black'],
    brand: 'Bialetti',
    description:
      'Since more than 80 years, Bialetti is delivering the perfect coffee to worldwide homes.',
    stock: 42,
    metadata: {
      details: {
        dimensions: '255x70x80mm',
        weight: '0.26g',
        flavor: 'Flower, Dried Fruit',
        roast_level: 'Medium-roast',
        special_ingredient: 'Italia Espresso Roasted',
        model: '8006363031646',
        country: 'Italia',
      },
    },
  },
];

export const filterType = ['brand', 'price', 'color'];

export const blogs = [
  {
    id: 0,
    createdAt: Date.now(),
    category: 'coffee-machine',
    title: 'HOW To make coffee at home',
    shortDesc:
      'To make true Italian espresso at home that rivals what you’d get in a coffee shop, you need an manual espresso machine to make good coffee.',
    banner: '/images/home/home-blog-2.jpg',
    author: 'Minh Ngoc',
    content: `
            <div class="font-poppins text-sm">
              <p class="mb-4">
                If you're looking to cut down on visits to your local coffee shop, the best home
                espresso machines can help you get your latte or cappuccino right in your own
                kitchen. The best home espresso machines offer much more than a basic brew, they
                appeal to both newbies and budding baristas looking to take their caffeine devotion
                to the next level.
              </p>
              <p class="uppercase mb-2 font-base font-bold">1. Bialetti espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-2.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
              <p class="uppercase mb-2 font-base font-bold">2. delonghi espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-4.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
              <p class="uppercase mb-2 font-base font-bold">3. NESPRESSO espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-3.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
            </div>
          `,
  },
  {
    id: 1,
    createdAt: Date.now(),
    category: 'coffee-beans',
    title: 'Beginner guide to COFFEE GRINDER ',
    shortDesc:
      'The purpose of this section is to let you in on all the little things that you don’t normally hear about coffee grinders. Here is some of my explaination.',
    banner: '/images/home/home-blog-2.jpg',
    author: 'Minh Ngoc',
    content: `
            <div class="font-poppins text-sm">
              <p class="mb-4">
                If you're looking to cut down on visits to your local coffee shop, the best home
                espresso machines can help you get your latte or cappuccino right in your own
                kitchen. The best home espresso machines offer much more than a basic brew, they
                appeal to both newbies and budding baristas looking to take their caffeine devotion
                to the next level.
              </p>
              <p class="uppercase mb-2 font-base font-bold">1. Bialetti espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-2.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
              <p class="uppercase mb-2 font-base font-bold">2. delonghi espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-4.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
              <p class="uppercase mb-2 font-base font-bold">3. NESPRESSO espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-3.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
            </div>
          `,
  },
  {
    id: 2,
    createdAt: Date.now(),
    category: 'coffee-machine',
    title: 'TOP 3 espresso machines 2021',
    shortDesc:
      "If you're looking to cut down on visits to your local coffee shop, the best home espresso machines can help you get your coffee right in your own kitchen.",
    banner: '/images/home/home-blog-2.jpg',
    author: 'Minh Ngoc',
    content: `
            <div class="font-poppins text-sm">
              <p class="mb-4">
                If you're looking to cut down on visits to your local coffee shop, the best home
                espresso machines can help you get your latte or cappuccino right in your own
                kitchen. The best home espresso machines offer much more than a basic brew, they
                appeal to both newbies and budding baristas looking to take their caffeine devotion
                to the next level.
              </p>
              <p class="uppercase mb-2 font-base font-bold">1. Bialetti espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-2.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
              <p class="uppercase mb-2 font-base font-bold">2. delonghi espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-4.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
              <p class="uppercase mb-2 font-base font-bold">3. NESPRESSO espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-3.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
            </div>
          `,
  },
  {
    id: 3,
    createdAt: Date.now(),
    category: 'coffee-machine',
    title: 'TOP 3 espresso machines 2021',
    shortDesc:
      "If you're looking to cut down on visits to your local coffee shop, the best home espresso machines can help you get your coffee right in your own kitchen.",
    banner: '/images/home/home-blog-2.jpg',
    author: 'Minh Ngoc',
    content: `
            <div class="font-poppins text-sm">
              <p class="mb-4">
                If you're looking to cut down on visits to your local coffee shop, the best home
                espresso machines can help you get your latte or cappuccino right in your own
                kitchen. The best home espresso machines offer much more than a basic brew, they
                appeal to both newbies and budding baristas looking to take their caffeine devotion
                to the next level.
              </p>
              <p class="uppercase mb-2 font-base font-bold">1. Bialetti espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-2.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
              <p class="uppercase mb-2 font-base font-bold">2. delonghi espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-4.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
              <p class="uppercase mb-2 font-base font-bold">3. NESPRESSO espresso machine</p>
              <p>
                You’ll have an espresso, latte, or cappuccino in minutes with De’Longhi’s
                super-automatic machine. It comes with a built-in burr grinder with 13 settings, or
                you can use your own pre-ground beans in the second chamber. In addition to
                selecting from automatic single or double brewing options, you can also customize
                the espresso strength, size, temperature to your tastes.
              </p>
              <div class="flex items-center justify-center my-4">
                <img
                  src="/images/coffee-machine-3.png"
                  alt="Bialetti"
                  class="max-h-[250px] object-cover"
                />
              </div>
            </div>
          `,
  },
];
