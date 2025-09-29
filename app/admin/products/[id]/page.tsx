"use client";

import React, { useActionState } from "react";
import Form from "next/form";
import Link from "next/link";
import { crateNewProduct } from "../../actions";
import ValidationError from "@/components/error/validation-error";
import DatabaseError from "@/components/error/database-error";

export default function Page() {
  const [state, formAction, isPending] = useActionState(crateNewProduct, null);
  return (
    <div className="grid">
      <Form
        action={formAction}
        className="grid max-w-lg font-mono gap-4 mx-auto min-w-sm"
        key={JSON.stringify(state?.data)}>
        <label htmlFor="title">Title:</label>
        <ValidationError state={state} field="title"></ValidationError>
        <input
          type="text"
          name="title"
          id="title"
          className="border"
          defaultValue={state?.data.title}
          required
        />
        <label htmlFor="description">Description</label>
        <ValidationError state={state} field="description"></ValidationError>
        <textarea
          name="description"
          id="description"
          className="border"
          rows={10}
          defaultValue={state?.data.description}
          required
        />

        <label htmlFor="category">Category</label>
        <ValidationError state={state} field="category"></ValidationError>

        <select
          name="category"
          id="category"
          className="border"
          defaultValue={state?.data.category ?? "a"}>
          <option value="a">a</option>
        </select>

        <label htmlFor="images">Tags</label>
        <ValidationError state={state} field="tags"></ValidationError>
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
          defaultValue={state?.data.tags}
          required
        />

        <label htmlFor="price">Price</label>
        <ValidationError state={state} field="price"></ValidationError>
        <input
          type="number"
          name="price"
          id="price"
          step={0.01}
          inputMode="decimal"
          className="border"
          min={0}
          max={99999}
          defaultValue={state?.data.price}
          required
        />

        <fieldset className="border p-4">
          <legend>For</legend>
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
        <ValidationError state={state} field="images"></ValidationError>

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
          defaultValue={state?.data.images}
          required
        />

        <label htmlFor="thumbnail">Thumbnail Image</label>
        <ValidationError state={state} field="thumbnail"></ValidationError>
        <input
          type="text"
          name="thumbnail"
          className="border"
          placeholder={`"https://picsum.photos"`}
          defaultValue={state?.data.thumbnail}
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
