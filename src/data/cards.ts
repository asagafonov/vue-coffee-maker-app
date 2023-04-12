export interface Recipe {
  order: number;
  description: string;
}

export interface RecipeCard {
  id: number;
  title: string;
  img: string;
  description: string;
  recipe: Recipe[],
  ingredients: string[],
}

const recipeData: RecipeCard[] = [
  {
    id: 0,
    title: 'Americano',
    img: 'https://www.roastmarket.de/magazin/wp-content/uploads/2016/05/Caffe-Americano-in-Tasse.jpg?x40518',
    description: '',
    recipe: [
      { order: 0, description: 'blabla' },
      { order: 1, description: 'blabla' },
    ],
    ingredients: ['1', '2', '3'],
  },
  {
    id: 1,
    title: 'Capuccino',
    img: 'https://www.comedera.com/wp-content/uploads/2022/08/capuccino.jpg',
    description: '',
    recipe: [
      { order: 0, description: 'blabla' },
      { order: 1, description: 'blabla' },
    ],
    ingredients: ['1', '2', '3'],
  },
  {
    id: 2,
    title: 'Flat White',
    img: 'https://www.foodandwine.com/thmb/aqEGg9g5sOQylzXL-D9NdgHiwbo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Flat-White-Explainer-FT-BLOG1222-40af496f40214d7e8e15dde3f488c0cf.jpg',
    description: '',
    recipe: [
      { order: 0, description: 'blabla' },
      { order: 1, description: 'blabla' },
    ],
    ingredients: ['1', '2', '3'],
  },
];

export default recipeData;