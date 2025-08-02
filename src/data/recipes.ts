export interface Recipe {
  id: string;
  title: string;
  category: 'breakfast' | 'lunch' | 'snack' | 'dinner' | 'dessert';
  prepTime: string;
  servings: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  mealPrep: string[];
  variations: string[];
}

export const recipes: Recipe[] = [
  // Breakfast recipes
  {
    id: 'overnight-oats',
    title: 'Overnight Oats with Berries',
    category: 'breakfast',
    prepTime: '5 min',
    servings: 1,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
    ingredients: [
      '1/2 cup rolled oats',
      '1/2 cup milk of choice',
      '1 tbsp chia seeds',
      '1 tbsp honey or maple syrup',
      '1/4 cup mixed berries',
      '1 tbsp chopped nuts'
    ],
    instructions: [
      'Combine oats, milk, chia seeds, and sweetener in a jar',
      'Stir well and refrigerate overnight',
      'Top with berries and nuts before serving',
      'Enjoy cold or warm up if preferred'
    ],
    tips: [
      'Prepare multiple jars for the week',
      'Add protein powder for extra nutrition',
      'Use any seasonal fruits you prefer'
    ],
    nutrition: {
      calories: 320,
      protein: '12g',
      carbs: '45g',
      fat: '8g'
    },
    mealPrep: [
      'Prepare up to 4 days in advance',
      'Store in airtight jars in refrigerator',
      'Add toppings just before eating'
    ],
    variations: [
      'Chocolate version: Add cocoa powder',
      'Tropical: Use coconut milk and mango',
      'Apple cinnamon: Add diced apple and cinnamon'
    ]
  },
  {
    id: 'avocado-toast',
    title: 'Perfect Avocado Toast',
    category: 'breakfast',
    prepTime: '5 min',
    servings: 1,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400&h=300&fit=crop',
    ingredients: [
      '1 slice whole grain bread',
      '1/2 ripe avocado',
      '1 tsp lemon juice',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)',
      '1 tsp olive oil'
    ],
    instructions: [
      'Toast bread to your desired crispness',
      'Mash avocado with lemon juice, salt, and pepper',
      'Spread avocado mixture on toast',
      'Drizzle with olive oil and sprinkle red pepper flakes'
    ],
    tips: [
      'Choose ripe but firm avocados',
      'Add lemon juice to prevent browning',
      'Toast bread just before serving'
    ],
    nutrition: {
      calories: 280,
      protein: '6g',
      carbs: '25g',
      fat: '18g'
    },
    mealPrep: [
      'Prepare avocado mixture up to 1 day ahead',
      'Store with plastic wrap directly on surface',
      'Toast bread fresh each time'
    ],
    variations: [
      'Add sliced tomatoes and basil',
      'Top with a poached egg',
      'Sprinkle everything bagel seasoning'
    ]
  },
  // Lunch recipes
  {
    id: 'quinoa-salad',
    title: 'Mediterranean Quinoa Salad',
    category: 'lunch',
    prepTime: '15 min',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    ingredients: [
      '1 cup quinoa, cooked',
      '1 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 red onion, diced',
      '1/2 cup feta cheese',
      '1/4 cup olive oil',
      '2 tbsp lemon juice',
      'Fresh herbs (parsley, mint)'
    ],
    instructions: [
      'Cook quinoa according to package directions and let cool',
      'Dice all vegetables and combine in large bowl',
      'Whisk together olive oil, lemon juice, salt, and pepper',
      'Toss quinoa and vegetables with dressing',
      'Add feta and herbs, mix gently'
    ],
    tips: [
      'Rinse quinoa before cooking to remove bitterness',
      'Let quinoa cool completely before mixing',
      'Taste and adjust seasoning before serving'
    ],
    nutrition: {
      calories: 350,
      protein: '12g',
      carbs: '35g',
      fat: '18g'
    },
    mealPrep: [
      'Keeps well for 3-4 days refrigerated',
      'Store dressing separately if preparing ahead',
      'Add feta just before serving'
    ],
    variations: [
      'Add chickpeas for extra protein',
      'Use different herbs like dill or oregano',
      'Substitute goat cheese for feta'
    ]
  },
  {
    id: 'pancakes',
    title: 'Fluffy Banana Pancakes',
    category: 'breakfast',
    prepTime: '15 min',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=400&h=300&fit=crop',
    ingredients: [
      '1 cup all-purpose flour',
      '1 tbsp sugar',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '1 cup milk',
      '1 large egg',
      '2 tbsp melted butter',
      '1 ripe banana, mashed'
    ],
    instructions: [
      'Mix dry ingredients in a large bowl',
      'Whisk together wet ingredients in another bowl',
      'Combine wet and dry ingredients until just mixed',
      'Heat griddle or pan over medium heat',
      'Pour 1/4 cup batter per pancake',
      'Cook until bubbles form, then flip and cook until golden'
    ],
    tips: [
      'Don\'t overmix the batter',
      'Let batter rest for 5 minutes',
      'Use ripe bananas for best flavor'
    ],
    nutrition: {
      calories: 220,
      protein: '7g',
      carbs: '35g',
      fat: '6g'
    },
    mealPrep: [
      'Make ahead and freeze for up to 3 months',
      'Reheat in toaster or microwave',
      'Double the recipe for meal prep'
    ],
    variations: [
      'Blueberry: Add 1/2 cup fresh blueberries',
      'Chocolate chip: Add mini chocolate chips',
      'Protein: Add a scoop of protein powder'
    ]
  },
  {
    id: 'greek-salad',
    title: 'Classic Greek Salad',
    category: 'lunch',
    prepTime: '10 min',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1544047750-7f8a09b3d09e?w=400&h=300&fit=crop',
    ingredients: [
      '2 large tomatoes, chopped',
      '1 cucumber, sliced',
      '1/2 red onion, thinly sliced',
      '1/2 cup kalamata olives',
      '4 oz feta cheese, crumbled',
      '3 tbsp olive oil',
      '1 tbsp red wine vinegar',
      '1 tsp dried oregano'
    ],
    instructions: [
      'Combine tomatoes, cucumber, and onion in large bowl',
      'Add olives and half the feta cheese',
      'Whisk together olive oil, vinegar, and oregano',
      'Pour dressing over salad and toss gently',
      'Top with remaining feta and serve immediately'
    ],
    tips: [
      'Use the ripest tomatoes you can find',
      'Salt tomatoes and let drain to remove excess water',
      'Serve at room temperature for best flavor'
    ],
    nutrition: {
      calories: 280,
      protein: '8g',
      carbs: '12g',
      fat: '24g'
    },
    mealPrep: [
      'Store components separately',
      'Dress just before serving',
      'Best consumed same day'
    ],
    variations: [
      'Add bell peppers for extra crunch',
      'Include chickpeas for protein',
      'Try goat cheese instead of feta'
    ]
  },
  {
    id: 'hummus-veggies',
    title: 'Homemade Hummus with Vegetables',
    category: 'snack',
    prepTime: '10 min',
    servings: 6,
    image: 'https://images.unsplash.com/photo-1571197572525-b57c122d1135?w=400&h=300&fit=crop',
    ingredients: [
      '1 can chickpeas, drained',
      '2 cloves garlic',
      '2 tbsp tahini',
      '2 tbsp lemon juice',
      '2 tbsp olive oil',
      '1/2 tsp cumin',
      'Salt to taste',
      'Assorted vegetables for dipping'
    ],
    instructions: [
      'Combine chickpeas, garlic, tahini, and lemon juice in food processor',
      'Process until smooth, adding water as needed',
      'Add olive oil, cumin, and salt',
      'Blend until creamy and smooth',
      'Serve with cut vegetables'
    ],
    tips: [
      'Remove chickpea skins for smoother texture',
      'Add ice cubes while blending for fluffier hummus',
      'Taste and adjust seasonings'
    ],
    nutrition: {
      calories: 110,
      protein: '5g',
      carbs: '12g',
      fat: '5g'
    },
    mealPrep: [
      'Store in refrigerator for up to 1 week',
      'Bring to room temperature before serving',
      'Pre-cut vegetables for easy snacking'
    ],
    variations: [
      'Roasted red pepper hummus',
      'Spicy with jalapeños',
      'Herb hummus with fresh basil'
    ]
  },
  {
    id: 'salmon-rice',
    title: 'Teriyaki Salmon Bowl',
    category: 'dinner',
    prepTime: '25 min',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop',
    ingredients: [
      '2 salmon fillets',
      '1 cup jasmine rice',
      '2 tbsp soy sauce',
      '1 tbsp honey',
      '1 tsp ginger, grated',
      '1 clove garlic, minced',
      '1 cup broccoli florets',
      '1 tbsp sesame oil'
    ],
    instructions: [
      'Cook rice according to package directions',
      'Mix soy sauce, honey, ginger, and garlic for glaze',
      'Season salmon and cook in pan for 4 minutes per side',
      'Brush salmon with teriyaki glaze',
      'Steam broccoli until tender',
      'Serve salmon over rice with broccoli'
    ],
    tips: [
      'Don\'t overcook the salmon',
      'Let salmon rest before serving',
      'Use fresh ginger for best flavor'
    ],
    nutrition: {
      calories: 450,
      protein: '35g',
      carbs: '45g',
      fat: '15g'
    },
    mealPrep: [
      'Cook components separately',
      'Store salmon for up to 3 days',
      'Reheat gently to avoid overcooking'
    ],
    variations: [
      'Substitute chicken or tofu',
      'Add edamame for extra protein',
      'Try brown rice for more fiber'
    ]
  },
  {
    id: 'tiramisu',
    title: 'Easy Tiramisu Cups',
    category: 'dessert',
    prepTime: '20 min',
    servings: 6,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    ingredients: [
      '24 ladyfinger cookies',
      '1 cup strong coffee, cooled',
      '3 egg yolks',
      '3 tbsp sugar',
      '1 lb mascarpone cheese',
      '1 cup heavy cream',
      '2 tbsp coffee liqueur (optional)',
      'Unsweetened cocoa powder'
    ],
    instructions: [
      'Whisk egg yolks and sugar until pale',
      'Add mascarpone and mix until smooth',
      'Whip cream to soft peaks and fold into mascarpone',
      'Dip ladyfingers in coffee and layer in cups',
      'Spread mascarpone mixture over cookies',
      'Repeat layers and chill for 4 hours',
      'Dust with cocoa before serving'
    ],
    tips: [
      'Use room temperature mascarpone',
      'Don\'t oversoak the ladyfingers',
      'Chill overnight for best results'
    ],
    nutrition: {
      calories: 420,
      protein: '8g',
      carbs: '32g',
      fat: '28g'
    },
    mealPrep: [
      'Make up to 2 days ahead',
      'Cover tightly to prevent drying',
      'Add cocoa just before serving'
    ],
    variations: [
      'Berry tiramisu with mixed berries',
      'Chocolate version with cocoa in cream',
      'Individual parfait glasses for parties'
    ]
  },
  {
    id: 'energy-balls',
    title: 'No-Bake Energy Balls',
    category: 'snack',
    prepTime: '10 min',
    servings: 12,
    image: 'https://images.unsplash.com/photo-1587080422634-48baaa49b33a?w=400&h=300&fit=crop',
    ingredients: [
      '1 cup rolled oats',
      '1/2 cup peanut butter',
      '1/3 cup honey',
      '1/3 cup mini chocolate chips',
      '1/4 cup ground flaxseed',
      '1 tsp vanilla extract'
    ],
    instructions: [
      'Mix all ingredients in a large bowl',
      'Stir until well combined',
      'Chill mixture for 30 minutes',
      'Roll into 12 balls using your hands',
      'Store in refrigerator'
    ],
    tips: [
      'Wet hands slightly when rolling balls',
      'Add more oats if mixture is too sticky',
      'Experiment with different mix-ins'
    ],
    nutrition: {
      calories: 140,
      protein: '4g',
      carbs: '16g',
      fat: '7g'
    },
    mealPrep: [
      'Store in refrigerator for up to 1 week',
      'Freeze for longer storage',
      'Keep in airtight container'
    ],
    variations: [
      'Coconut version: Add shredded coconut',
      'Almond butter instead of peanut butter',
      'Add dried fruit instead of chocolate chips'
    ]
  },
  {
    id: 'grilled-chicken',
    title: 'Herb-Crusted Grilled Chicken',
    category: 'dinner',
    prepTime: '20 min',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
    ingredients: [
      '4 chicken breasts',
      '2 tbsp olive oil',
      '2 tsp dried herbs (thyme, rosemary)',
      '1 tsp garlic powder',
      '1 tsp paprika',
      'Salt and pepper to taste',
      '1 lemon, sliced'
    ],
    instructions: [
      'Preheat grill to medium-high heat',
      'Mix herbs, garlic powder, paprika, salt, and pepper',
      'Brush chicken with olive oil and coat with spice mixture',
      'Grill for 6-7 minutes per side until internal temp reaches 165°F',
      'Let rest for 5 minutes, serve with lemon slices'
    ],
    tips: [
      'Pound chicken to even thickness for uniform cooking',
      'Use meat thermometer to check doneness',
      'Let chicken rest to retain juices'
    ],
    nutrition: {
      calories: 280,
      protein: '35g',
      carbs: '2g',
      fat: '12g'
    },
    mealPrep: [
      'Cook extra for salads and wraps',
      'Store cooked chicken for 3-4 days',
      'Slice before storing for easy use'
    ],
    variations: [
      'Mexican spices: cumin, chili powder, lime',
      'Italian herbs: basil, oregano, garlic',
      'Asian marinade: soy sauce, ginger, sesame oil'
    ]
  },
  {
    id: 'chocolate-mousse',
    title: 'Rich Chocolate Mousse',
    category: 'dessert',
    prepTime: '15 min',
    servings: 6,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    ingredients: [
      '6 oz dark chocolate, chopped',
      '3 tbsp butter',
      '3 large eggs, separated',
      '1/4 cup sugar',
      '1/2 cup heavy cream',
      '1 tsp vanilla extract',
      'Pinch of salt'
    ],
    instructions: [
      'Melt chocolate and butter in double boiler until smooth',
      'Let cool slightly, then whisk in egg yolks one at a time',
      'Beat egg whites with sugar until soft peaks form',
      'Whip cream with vanilla until soft peaks form',
      'Fold whipped cream into chocolate, then fold in egg whites',
      'Divide into serving cups and chill for 2 hours'
    ],
    tips: [
      'Use room temperature eggs for better incorporation',
      'Don\'t overbeat the cream or egg whites',
      'Fold gently to maintain airiness'
    ],
    nutrition: {
      calories: 280,
      protein: '5g',
      carbs: '18g',
      fat: '22g'
    },
    mealPrep: [
      'Can be made 1 day ahead',
      'Cover with plastic wrap to prevent skin forming',
      'Serve chilled'
    ],
    variations: [
      'Add orange zest for citrus twist',
      'Coffee mousse: add 1 tbsp instant espresso',
      'Top with fresh berries or whipped cream'
    ]
  }
];

export const getRecipesByCategory = (category: string) => {
  return recipes.filter(recipe => recipe.category === category);
};

export const getRecipeById = (id: string) => {
  return recipes.find(recipe => recipe.id === id);
};

export const categories = [
  {
    name: 'Café-da-Manhã',
    path: '/breakfast',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop',
    description: 'Start your day right'
  },
  {
    name: 'Almoço',
    path: '/lunch', 
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Nutritious midday meals'
  },
  {
    name: 'Lanche',
    path: '/snack',
    image: 'https://images.unsplash.com/photo-1587080422634-48baaa49b33a?w=400&h=300&fit=crop',
    description: 'Healthy bites anytime'
  },
  {
    name: 'Janta',
    path: '/dinner',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
    description: 'Satisfying evening meals'
  },
  {
    name: 'Sobremesa',
    path: '/dessert',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    description: 'Sweet treats to indulge'
  }
];