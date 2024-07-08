import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();

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
      <section>
        <h2 className="text-2xl font-semibold mb-2">About the Author</h2>
        <p>Information about the author of the recipe.</p>
      </section>
    </div>
  );
};

export default Recipe;