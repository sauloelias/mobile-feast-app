import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, Users, ChefHat, Info, Utensils, Lightbulb } from 'lucide-react';
import { getRecipeById } from '@/data/recipes';

const getCategoryTranslation = (category: string) => {
  const translations: Record<string, string> = {
    'breakfast': 'Café-da-Manhã',
    'lunch': 'Almoço',
    'snack': 'Lanche',
    'dinner': 'Janta',
    'dessert': 'Sobremesa'
  };
  return translations[category] || category;
};

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = getRecipeById(id || '');

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Recipe Not Found</h1>
          <p className="text-muted-foreground mb-4">The recipe you're looking for doesn't exist.</p>
          <Link to="/home">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 bg-background border-b border-border p-4 z-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <Link to={`/${recipe.category}`}>
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground line-clamp-2">
              {recipe.title}
            </h1>
          </div>
        </div>
      </header>

      <main className="p-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Hero Image */}
          <div className="relative h-48 rounded-lg overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Recipe Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{getCategoryTranslation(recipe.category)}</Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{recipe.servings} porções</span>
              </div>
              <div className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                <span>{recipe.nutrition.calories} cal</span>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ChefHat className="h-5 w-5" />
                Ingredientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Utensils className="h-5 w-5" />
                Como Preparar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3 text-sm">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{instruction}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="h-5 w-5" />
                Dicas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Nutrition */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informação Nutricional</CardTitle>
              <p className="text-sm text-muted-foreground">Por Porção</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="font-semibold text-lg">{recipe.nutrition.calories}</div>
                  <div className="text-muted-foreground">Calorias</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="font-semibold text-lg">{recipe.nutrition.protein}</div>
                  <div className="text-muted-foreground">Proteína</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="font-semibold text-lg">{recipe.nutrition.carbs}</div>
                  <div className="text-muted-foreground">Carboidrato</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="font-semibold text-lg">{recipe.nutrition.fat}</div>
                  <div className="text-muted-foreground">Gordura</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Meal Prep */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dicas de Armazenamento</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.mealPrep.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Variations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Variações da Receita</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.variations.map((variation, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>{variation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Recipe;