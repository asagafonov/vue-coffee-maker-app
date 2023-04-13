export interface Recipe {
  order: number;
  description: string;
}

export interface RecipeCard {
  id?: number;
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nibh sit amet commodo nulla facilisi nullam vehicula. Massa id neque aliquam vestibulum morbi blandit. Dictum non consectetur a erat nam at. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Blandit cursus risus at ultrices mi tempus. Eget sit amet tellus cras. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Blandit turpis cursus in hac habitasse. Egestas dui id ornare arcu odio. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Felis eget velit aliquet sagittis id. Luctus accumsan tortor posuere ac. Nec feugiat in fermentum posuere urna nec tincidunt. Libero justo laoreet sit amet cursus sit amet. Egestas maecenas pharetra convallis posuere morbi.',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nibh sit amet commodo nulla facilisi nullam vehicula. Massa id neque aliquam vestibulum morbi blandit. Dictum non consectetur a erat nam at. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Blandit cursus risus at ultrices mi tempus. Eget sit amet tellus cras. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Blandit turpis cursus in hac habitasse. Egestas dui id ornare arcu odio. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Felis eget velit aliquet sagittis id. Luctus accumsan tortor posuere ac. Nec feugiat in fermentum posuere urna nec tincidunt. Libero justo laoreet sit amet cursus sit amet. Egestas maecenas pharetra convallis posuere morbi.',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nibh sit amet commodo nulla facilisi nullam vehicula. Massa id neque aliquam vestibulum morbi blandit. Dictum non consectetur a erat nam at. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Blandit cursus risus at ultrices mi tempus. Eget sit amet tellus cras. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Blandit turpis cursus in hac habitasse. Egestas dui id ornare arcu odio. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Felis eget velit aliquet sagittis id. Luctus accumsan tortor posuere ac. Nec feugiat in fermentum posuere urna nec tincidunt. Libero justo laoreet sit amet cursus sit amet. Egestas maecenas pharetra convallis posuere morbi.',
    recipe: [
      { order: 0, description: 'blabla' },
      { order: 1, description: 'blabla' },
    ],
    ingredients: ['1', '2', '3'],
  },
  {
    id: 3,
    title: 'Americano',
    img: 'https://www.roastmarket.de/magazin/wp-content/uploads/2016/05/Caffe-Americano-in-Tasse.jpg?x40518',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nibh sit amet commodo nulla facilisi nullam vehicula. Massa id neque aliquam vestibulum morbi blandit. Dictum non consectetur a erat nam at. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Blandit cursus risus at ultrices mi tempus. Eget sit amet tellus cras. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Blandit turpis cursus in hac habitasse. Egestas dui id ornare arcu odio. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Felis eget velit aliquet sagittis id. Luctus accumsan tortor posuere ac. Nec feugiat in fermentum posuere urna nec tincidunt. Libero justo laoreet sit amet cursus sit amet. Egestas maecenas pharetra convallis posuere morbi.',
    recipe: [
      { order: 0, description: 'blabla' },
      { order: 1, description: 'blabla' },
    ],
    ingredients: ['1', '2', '3'],
  },
  {
    id: 4,
    title: 'Capuccino',
    img: 'https://www.comedera.com/wp-content/uploads/2022/08/capuccino.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nibh sit amet commodo nulla facilisi nullam vehicula. Massa id neque aliquam vestibulum morbi blandit. Dictum non consectetur a erat nam at. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Blandit cursus risus at ultrices mi tempus. Eget sit amet tellus cras. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Blandit turpis cursus in hac habitasse. Egestas dui id ornare arcu odio. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Felis eget velit aliquet sagittis id. Luctus accumsan tortor posuere ac. Nec feugiat in fermentum posuere urna nec tincidunt. Libero justo laoreet sit amet cursus sit amet. Egestas maecenas pharetra convallis posuere morbi.',
    recipe: [
      { order: 0, description: 'blabla' },
      { order: 1, description: 'blabla' },
    ],
    ingredients: ['1', '2', '3'],
  },
  {
    id: 5,
    title: 'Flat White',
    img: 'https://www.foodandwine.com/thmb/aqEGg9g5sOQylzXL-D9NdgHiwbo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Flat-White-Explainer-FT-BLOG1222-40af496f40214d7e8e15dde3f488c0cf.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nibh sit amet commodo nulla facilisi nullam vehicula. Massa id neque aliquam vestibulum morbi blandit. Dictum non consectetur a erat nam at. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Blandit cursus risus at ultrices mi tempus. Eget sit amet tellus cras. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Blandit turpis cursus in hac habitasse. Egestas dui id ornare arcu odio. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Felis eget velit aliquet sagittis id. Luctus accumsan tortor posuere ac. Nec feugiat in fermentum posuere urna nec tincidunt. Libero justo laoreet sit amet cursus sit amet. Egestas maecenas pharetra convallis posuere morbi.',
    recipe: [
      { order: 0, description: 'blabla' },
      { order: 1, description: 'blabla' },
    ],
    ingredients: ['1', '2', '3'],
  },
];

export default recipeData;