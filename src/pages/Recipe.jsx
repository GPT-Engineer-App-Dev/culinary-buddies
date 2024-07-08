import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { FaStar } from "react-icons/fa";

const Recipe = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    toast(`You rated this recipe ${rate} stars!`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Recipe Title {id}</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Rate this Recipe</h2>
        <div className="flex space-x-1">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRating(ratingValue)}
                  className="hidden"
                />
                <FaStar
                  className={`cursor-pointer ${ratingValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}`}
                  size={30}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">About the Author</h2>
        <p>Information about the author of the recipe.</p>
      </section>
    </div>
  );
};

export default Recipe;