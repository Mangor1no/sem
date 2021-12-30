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
    name: 'Break Capsule Coffee',
    category: 'coffee-machine',
    subCategory: 'espresso-machine',
    image: [
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
    ],
    rating: 4,
    price: 41.5,
    oldPrice: 53.25,
    variations: ['#111827', '#4B5563'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'Bialetti',
    description:
      'BREAK the super compact Bialetti! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Bialetti capsules.',
      },
    },
  },
  {
    id: 1,
    name: 'Gioia Capsule Coffee',
    category: 'coffee-machine',
    subCategory: 'coffee-maker',
    image: [
      '/images/products/product-1.png',
      '/images/products/product-1.png',
      '/images/products/product-1.png',
      '/images/products/product-1.png',
      '/images/products/product-1.png',
    ],
    rating: 5,
    price: 79.99,
    variations: ['#1E40AF'],
    background: ['#C9F0FF', '#EAFFFD'], // #1E40AF machine
    brand: 'Vinfast',
    description:
      'BREAK the super compact Vinfast! Small, modern design with chrome finishes and soft lines. It is less than 31 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '250x430x260mm',
        maximum_height: '430mm',
        cable_length: '2.0m',
        capsule_capacity: '9/9 capsules',
        tank_capacity: '2.50L',
        pump_pressure: '50 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Automatic',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 07 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Vinfast capsules.',
      },
    },
  },
  {
    id: 2,
    name: 'Super Capsule Coffee',
    category: 'coffee-machine',
    subCategory: 'espresso-machine',
    image: [
      '/images/products/product-2.png',
      '/images/products/product-2.png',
      '/images/products/product-2.png',
      '/images/products/product-2.png',
      '/images/products/product-2.png',
    ],
    rating: 3,
    price: 51.5,
    oldPrice: 58.5,
    variations: ['#B91C1C', '#111827'],
    background: ['#B91C1C85', '#F59E0B50'], // #B91C1C machine
    brand: 'Masan',
    description:
      'BREAK the super compact Masan! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Masan capsules.',
      },
    },
  },
  {
    id: 3,
    name: 'Filter Coffee Machine',
    category: 'coffee-machine',
    subCategory: 'coffee-grinder',
    image: [
      '/images/products/product-3.png',
      '/images/products/product-3.png',
      '/images/products/product-3.png',
      '/images/products/product-3.png',
      '/images/products/product-3.png',
    ],
    rating: 5,
    price: 63.5,
    variations: ['#111827', '#4B5563'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'Bialetti',
    description:
      'BREAK the super compact Bialetti! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Bialetti capsules.',
      },
    },
  },
  {
    id: 4,
    name: 'Break Capsule Coffee 2',
    category: 'coffee-machine',
    subCategory: 'espresso-machine',
    image: [
      '/images/products/product-4.png',
      '/images/products/product-4.png',
      '/images/products/product-4.png',
      '/images/products/product-4.png',
      '/images/products/product-4.png',
    ],
    rating: 4,
    price: 50.25,
    oldPrice: 58.5,
    variations: ['#111827', '#4B5563'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'KOI',
    description:
      'BREAK the super compact KOI! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '140x290x260mm',
        maximum_height: '330mm',
        cable_length: '1.5m',
        capsule_capacity: '9/9 capsules',
        tank_capacity: '0.60L',
        pump_pressure: '30 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with KOI capsules.',
      },
    },
  },
  {
    id: 5,
    name: 'Russel Hobb Filter',
    category: 'coffee-machine',
    subCategory: 'coffee-grinder',
    image: [
      '/images/products/product-5.png',
      '/images/products/product-5.png',
      '/images/products/product-5.png',
      '/images/products/product-5.png',
      '/images/products/product-5.png',
    ],
    rating: 4,
    price: 44.5,
    variations: ['#111827', '#4B5563'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'Russel',
    description:
      'BREAK the super compact Russel! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 0,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Russel capsules.',
      },
    },
  },
  {
    id: 6,
    name: 'Russel Hobb Maker',
    category: 'coffee-machine',
    subCategory: 'coffee-maker',
    image: [
      '/images/products/product-8.png',
      '/images/products/product-8.png',
      '/images/products/product-8.png',
      '/images/products/product-8.png',
      '/images/products/product-8.png',
    ],
    rating: 4,
    price: 55.5,
    oldPrice: 73.25,
    variations: ['#4B5563'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'Russel Hobb',
    description:
      'BREAK the super compact Russel Hobb! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Russel Hobb capsules.',
      },
    },
  },
  {
    id: 7,
    name: 'Delonghi Coffee Machine',
    category: 'coffee-machine',
    subCategory: 'espresso-machine',
    image: [
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
    ],
    rating: 5,
    price: 69.5,
    oldPrice: 86.25,
    variations: ['#111827'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'Delonghi',
    description:
      'BREAK the super compact Delonghi! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Delonghi capsules.',
      },
    },
  },
  {
    id: 8,
    name: 'Beko Coffee Machine',
    category: 'coffee-machine',
    subCategory: 'espresso-machine',
    image: [
      '/images/products/product-8.png',
      '/images/products/product-8.png',
      '/images/products/product-8.png',
      '/images/products/product-8.png',
      '/images/products/product-8.png',
    ],
    rating: 4,
    price: 41.5,
    oldPrice: 53.25,
    variations: ['#FAFAFA'],
    background: ['#797D8145', '#FA792135'], // #FAFAFA machine
    brand: 'Beko',
    description:
      'BREAK the super compact Beko! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Beko capsules.',
      },
    },
  },
  {
    id: 9,
    name: 'Akko Special',
    category: 'coffee-machine',
    subCategory: 'espresso-machine',
    image: [
      '/images/products/product-9.png',
      '/images/products/product-9.png',
      '/images/products/product-9.png',
      '/images/products/product-9.png',
      '/images/products/product-9.png',
    ],
    rating: 5,
    price: 539.99,
    variations: ['#111827'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'Akko',
    description:
      'BREAK the super compact Akko! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 0,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Akko capsules.',
      },
    },
  },
  {
    id: 10,
    name: 'Bona Fide Coffee',
    category: 'coffee-machine',
    subCategory: 'espresso-machine',
    image: [
      '/images/products/product-18.png',
      '/images/products/product-18.png',
      '/images/products/product-18.png',
      '/images/products/product-18.png',
      '/images/products/product-18.png',
    ],
    rating: 4,
    price: 31.5,
    oldPrice: 42.25,
    variations: ['#111827', '#B91C1C'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'Crown',
    description:
      'BREAK the super compact Crown! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 18 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Crown capsules.',
      },
    },
  },
  {
    id: 12,
    name: 'Old Spice Capsule',
    category: 'coffee-machine',
    subCategory: 'coffee-roaster',
    image: [
      '/images/products/product-2.png',
      '/images/products/product-2.png',
      '/images/products/product-2.png',
      '/images/products/product-2.png',
      '/images/products/product-2.png',
    ],
    rating: 4,
    price: 57.5,
    variations: ['#111827', '#4B5563'],
    background: ['#797D8145', '#FA792135'], // #FAFAFA machine
    brand: 'Old Spice',
    description:
      'BREAK the super compact Old Spice! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Old Spice capsules.',
      },
    },
  },
  {
    id: 13,
    name: 'Okamura WASD',
    category: 'coffee-machine',
    subCategory: 'espresso-machine',
    image: [
      '/images/products/product-1.png',
      '/images/products/product-1.png',
      '/images/products/product-1.png',
      '/images/products/product-1.png',
      '/images/products/product-1.png',
    ],
    rating: 4,
    price: 54.5,
    oldPrice: 68.25,
    variations: ['#111827', '#4B5563'],
    background: ['#797D8145', '#FA792135'], // #FAFAFA machine
    brand: 'WASD',
    description:
      'BREAK the super compact WASD! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with WASD capsules.',
      },
    },
  },
  {
    id: 14,
    name: 'Fika Rough Rider',
    category: 'coffee-machine',
    subCategory: 'fully-automatic',
    image: [
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
    ],
    rating: 4,
    price: 57.5,
    oldPrice: 78.25,
    variations: ['#B91C1C'],
    background: ['#797D8145', '#FA792135'], // #FAFAFA machine
    brand: 'Fika',
    description:
      'BREAK the super compact Fika! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Fika capsules.',
      },
    },
  },
  {
    id: 16,
    name: 'HOCO DAB',
    category: 'coffee-machine',
    subCategory: 'fully-automatic',
    image: [
      '/images/products/product-4.png',
      '/images/products/product-4.png',
      '/images/products/product-4.png',
      '/images/products/product-4.png',
      '/images/products/product-4.png',
    ],
    rating: 5,
    price: 489.99,
    oldPrice: 538.79,
    variations: ['#111827'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'HOCO',
    description:
      'BREAK the super compact HOCO DAB! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '129x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.0m',
        capsule_capacity: '8/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '20 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 10 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with HOCO capsules.',
      },
    },
  },
  {
    id: 17,
    name: 'Colorize Coffee PX-4',
    category: 'coffee-machine',
    subCategory: 'fully-automatic',
    image: [
      '/images/products/product-5.png',
      '/images/products/product-5.png',
      '/images/products/product-5.png',
      '/images/products/product-5.png',
      '/images/products/product-5.png',
    ],
    rating: 5,
    price: 489.99,
    oldPrice: 538.79,
    variations: ['#111827'],
    background: ['#14131345', '#E58F6580'], // #111827 machine
    brand: 'Colorize',
    description:
      'BREAK the super compact Colorize Coffee! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '149x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.2m',
        capsule_capacity: '9/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '25 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 06 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Colorize capsules.',
      },
    },
  },
  {
    id: 18,
    name: 'Colorize Coffee PX-3',
    category: 'coffee-machine',
    subCategory: 'fully-automatic',
    image: [
      '/images/products/product-18.png',
      '/images/products/product-18.png',
      '/images/products/product-18.png',
      '/images/products/product-18.png',
      '/images/products/product-18.png',
    ],
    rating: 5,
    price: 489.99,
    oldPrice: 538.79,
    variations: ['#111827'],
    background: ['#B91C1C95', '#F59E0B80'], // #B91C1C machine
    brand: 'Colorize',
    description:
      'BREAK the super compact Colorize Coffee! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '149x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.2m',
        capsule_capacity: '9/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '25 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 06 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Colorize capsules.',
      },
    },
  },
  {
    id: 19,
    name: 'Colorize Coffee PX-5',
    category: 'coffee-machine',
    subCategory: 'fully-automatic',
    image: [
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
      '/images/products/product-0.png',
    ],
    rating: 5,
    price: 489.99,
    oldPrice: 538.79,
    variations: ['#111827'],
    background: ['#797D8145', '#FA792135'], // #FAFAFA machine
    brand: 'Colorize',
    description:
      'BREAK the super compact Colorize Coffee! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '149x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.2m',
        capsule_capacity: '9/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '25 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 06 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Colorize capsules.',
      },
    },
  },
  {
    id: 20,
    name: 'Gillette Okamura',
    category: 'coffee-machine',
    subCategory: 'fully-automatic',
    image: [
      '/images/products/product-2.png',
      '/images/products/product-2.png',
      '/images/products/product-2.png',
      '/images/products/product-2.png',
      '/images/products/product-2.png',
    ],
    rating: 5,
    price: 489.99,
    oldPrice: 538.79,
    variations: ['#111827'],
    background: ['#797D8145', '#FA792135'], // #FAFAFA machine
    brand: 'Okamura',
    description:
      'BREAK the super compact Gillette Okamura! Small, modern design with chrome finishes and soft lines. It is less than 30 cm deep, to fit perfectly in any kitchen.',
    stock: 42,
    metadata: {
      size: {
        dimensions: '149x295x233mm',
        maximum_height: '355mm',
        cable_length: '1.2m',
        capsule_capacity: '9/9 capsules',
        tank_capacity: '0.40L',
        pump_pressure: '25 Bar',
      },
      power: {
        voltage: '220 - 240V 50 - 60Hz',
        power: '1200W',
        dispensing_dose: 'Manual',
        capsule_ejection: 'Automatic',
        steam_wand: 'About 06 mins',
      },
      special: {
        boiler_system: 'Thermoblock system. For an always hot espresso.',
        operation_system: 'Monosystem. It works exclusively with Okamura capsules.',
      },
    },
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
