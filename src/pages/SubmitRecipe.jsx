import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SubmitRecipe = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast("Recipe submitted successfully!", { description: "Thank you for your submission." });
    reset();
    } catch (error) {
      toast.error("Failed to submit recipe.", { description: "Please try again later." });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Submit Your Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-muted-foreground">Recipe Title</label>
          <Input id="title" {...register("title", { required: "Recipe title is required" })} />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-muted-foreground">Ingredients</label>
          <Textarea id="ingredients" {...register("ingredients", { required: "Ingredients are required" })} />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients.message}</p>}
        </div>
        <div>
          <label htmlFor="instructions" className="block text-sm font-medium text-muted-foreground">Instructions</label>
          <Textarea id="instructions" {...register("instructions", { required: "Instructions are required" })} />
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions.message}</p>}
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-muted-foreground">Image</label>
          <Input id="image" type="file" {...register("image")} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SubmitRecipe;