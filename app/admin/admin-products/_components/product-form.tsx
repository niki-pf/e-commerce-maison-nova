"use client";

import { createNewProduct, updateOldProduct } from "@/app/admin/actions";
import { Product } from "@/lib/zod-schemas";
import Form from "next/form";
import { useActionState } from "react";
import ValidationError from "../../../../components/error/validation-error";
import DatabaseError from "../../../../components/error/database-error";
import Link from "next/link";
import { allCategories } from "@/lib/constants";

export default function ProductForm({ product }: { product?: Product }) {
  const action = product ? updateOldProduct : createNewProduct;
  const [state, formAction, isPending] = useActionState(action, null);

  const data = state?.data ??
    product ?? {
      id: "",
      slug: "",
      title: "",
      description: "",
      gender: "",
      category: "",
      tags: "",
      price: "",
      images: "",
      thumbnail: "",
    };

  return (
    <div className="grid w-full">
      <Form
        action={formAction}
        className="grid md:w-[50%] w-full mx-auto font-mono gap-4 px-8 py-4"
        key={JSON.stringify(state?.data)}>
        {product && (
          <input
            type="number"
            name="id"
            id="id"
            className="hidden"
            defaultValue={product?.id}
          />
        )}
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
          className="cursor-pointer"
          name="category"
          id="category"
          defaultValue={data.category}>
          {allCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="images">Tags</label>
        <ValidationError
          errors={state?.validationErrors}
          field="tags"></ValidationError>
        <details className="text-sm cursor-pointer text-secondary">
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
              defaultChecked={data.gender === "men"}
            />
            <label htmlFor="men">Men</label>
          </div>
          <div className="flex gap-4">
            <input
              type="radio"
              name="gender"
              id="women"
              value="women"
              defaultChecked={data.gender === "women"}
            />
            <label htmlFor="women">Women</label>
          </div>
        </fieldset>

        <label htmlFor="images">Images</label>
        <ValidationError
          errors={state?.validationErrors}
          field="images"></ValidationError>
        <details className="text-sm cursor-pointer text-secondary">
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
        <DatabaseError errors={state?.dbError}></DatabaseError>
        <div className="flex gap-4 justify-end">
          <Link
            href={"/admin/admin-products"}
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
