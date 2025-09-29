"use client";

import { crateNewProduct } from "@/app/admin/actions";
import { Product } from "@/lib/zod-schemas";
import Form from "next/form";
import { useActionState } from "react";
import ValidationError from "./error/validation-error";
import DatabaseError from "./error/database-error";
import Link from "next/link";

export default function ProductForm({ product }: { product?: Product }) {
  const [state, formAction, isPending] = useActionState(crateNewProduct, null);

  const data = state?.data ??
    product ?? {
      title: "",
      description: "",
      gender: "men",
      category: "",
      tags: "",
      price: "",
      images: "",
      thumbnail: "",
    };
  if (product) {
    console.log(product);
  }

  return (
    <div className="grid">
      <Form
        action={formAction}
        className="grid max-w-lg font-mono gap-4 mx-auto min-w-sm"
        key={JSON.stringify(state?.data)}>
        <label htmlFor="title">Title:</label>
        <ValidationError
          errors={state?.validationErrors}
          field="title"></ValidationError>
        <input
          type="text"
          name="title"
          id="title"
          className="border"
          defaultValue={data.title}
          required
        />
        <label htmlFor="description">Description</label>
        <ValidationError
          errors={state?.validationErrors}
          field="description"></ValidationError>
        <textarea
          name="description"
          id="description"
          className="border"
          rows={10}
          defaultValue={data.description}
          required
        />

        <label htmlFor="category">Category</label>
        <ValidationError
          errors={state?.validationErrors}
          field="category"></ValidationError>

        <select
          name="category"
          id="category"
          className="border"
          defaultValue={data.category}>
          <option value="a">a</option>
        </select>

        <label htmlFor="images">Tags</label>
        <ValidationError
          errors={state?.validationErrors}
          field="tags"></ValidationError>
        <details>
          <summary>Multiple Tags</summary>
          <p>
            For multiple tags keep them comma-separeted,
            {`"Shoes", "Summer"`}
          </p>
        </details>
        <input
          type="text"
          className="border"
          name="tags"
          placeholder="Shoes"
          defaultValue={data.tags}
          required
        />

        <label htmlFor="price">Price</label>
        <ValidationError
          errors={state?.validationErrors}
          field="price"></ValidationError>
        <input
          type="number"
          name="price"
          id="price"
          step={0.01}
          inputMode="decimal"
          className="border"
          min={0}
          max={99999}
          defaultValue={data.price}
          required
        />

        <fieldset className="border p-4">
          <legend>For</legend>
          <ValidationError
            errors={state?.validationErrors}
            field="gender"></ValidationError>
          <div className="flex gap-4">
            <input
              type="radio"
              name="gender"
              id="men"
              value="men"
              defaultChecked
            />
            <label htmlFor="men">Men</label>
          </div>
          <div className="flex gap-4">
            <input type="radio" name="gender" id="women" value="women" />
            <label htmlFor="women">Women</label>
          </div>
        </fieldset>

        <label htmlFor="images">Images</label>
        <ValidationError
          errors={state?.validationErrors}
          field="images"></ValidationError>

        <details>
          <summary>Multiple image URL</summary>
          <p>
            For multiple images keep the links comma-separeted, example,{" "}
            {`"https://picsum.photos", "https://picsum.photos"`}
          </p>
        </details>
        <input
          type="text"
          className="border"
          name="images"
          placeholder={`"https://picsum.photos"`}
          defaultValue={data.images}
          required
        />

        <label htmlFor="thumbnail">Thumbnail Image</label>
        <ValidationError
          errors={state?.validationErrors}
          field="thumbnail"></ValidationError>
        <input
          type="text"
          name="thumbnail"
          className="border"
          placeholder={`"https://picsum.photos"`}
          defaultValue={data.thumbnail}
          required
        />
        <DatabaseError state={state?.dbError}></DatabaseError>
        <div className="flex gap-4 justify-end">
          <Link
            href={"/admin/products"}
            className="p-4 border bg-button text-background">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isPending}
            className="p-4 border bg-button text-background">
            Save Product
          </button>
        </div>
      </Form>
    </div>
  );
}
