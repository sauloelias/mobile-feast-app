import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Users } from 'lucide-react';
import { getRecipesByCategory } from '@/data/recipes';

interface CategoryPageProps {
  category: string;
  title: string;
}

const CategoryPage = ({ category, title }: CategoryPageProps) => {
  const recipes = getRecipesByCategory(category);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 bg-background border-b border-border p-4 z-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Link to="/home">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          </div>
        </div>
      </header>

      <main className="p-4">
        <div className="max-w-md mx-auto">
          <div className="grid gap-4">
            {recipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground line-clamp-2">
                          {recipe.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{recipe.prepTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{recipe.servings} servings</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;