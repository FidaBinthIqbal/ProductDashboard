import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1),
  price: z.number().min(1),
});

export const ProductForm = () => {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: any) => {
    alert("Product Submitted: " + JSON.stringify(data));
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Add / Edit Product</h1>
        <input {...register("title")} placeholder="Title" className="border p-2 mb-4 w-full" />
        <input {...register("price", { valueAsNumber: true })} placeholder="Price" className="border p-2 mb-4 w-full" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Submit</button>
      </form>
    </div>
  );
};