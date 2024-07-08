import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name</label>
          <Input id="name" {...register("name", { required: true })} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
          <Input id="email" type="email" {...register("email", { required: true })} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Message</label>
          <Textarea id="message" {...register("message", { required: true })} />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default Contact;