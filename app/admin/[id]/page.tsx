import React from "react";
import Form from "next/form";
import Link from "next/link";
import { NewProduct } from "../actions";
export default function Page() {
  return (
    <div className="grid">
      <Form
        action={NewProduct}
        className="grid max-w-lg font-mono gap-4 mx-auto min-w-sm">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          className="border"
          defaultValue={"a"}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="border"
          rows={10}
          defaultValue={"aa"}
          required
        />

        <label htmlFor="category">Category</label>
        <select name="category" id="category" className="border">
          <option value="a" defaultValue={"a"}>
            a
          </option>
        </select>

        <label htmlFor="images">Tags</label>
        <details>
          <summary>Multiple Tags</summary>
          <p>
            For multiple tags keep them comma-separeted, example,
            {`"Shoes", "Summer"`}
          </p>
        </details>
        <input
          type="text"
          className="border"
          name="tags"
          placeholder="Shoes"
          defaultValue={"Shoes"}
          required
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          step={0.01}
          inputMode="decimal"
          className="border"
          min={0}
          max={99999}
          defaultValue={"10"}
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
          defaultValue={"photos"}
          required
        />

        <label htmlFor="thumbnail">Thumbnail Image</label>
        <input
          type="text"
          name="thumbnail"
          className="border"
          placeholder={`"https://picsum.photos"`}
          defaultValue={"https://picsum.photos"}
          required
        />
        <div className="flex gap-4 justify-end">
          <Link
            href={"/admin/products"}
            className="p-4 border bg-button text-background">
            Cancel
          </Link>
          <button
            type="submit"
            className="p-4 border bg-button text-background">
            Save Product
          </button>
        </div>
      </Form>
    </div>
  );
}
