import { data } from "framer-motion/client";
import { allCategories, menCategories } from "../constants";
import { ProductFull } from "../interfaces";
import { supabase } from "./supabaseClient";

export async function fetchProduct(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`There was an error fetching a product with id: ${id}`);
    }

    const data: ProductFull = await response.json();
    return data;
  } catch (error) {}
}

export async function fetchSearchProduct(
  query: string,
  sortBy: string,
  order: string
) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}&sortBy=${sortBy}&order=${order}`
    );

    if (!response.ok) {
      throw new Error(`There was an error searching for products`);
    }

    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (error) {}
}

export async function fetchProductOfTypeCategory(
  category: string,
  sortBy: string,
  order: string
) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}?sortBy=${sortBy}&order=${order}`
    );

    if (!response.ok) {
      throw new Error(`There was an error fetching all products by category`);
    }

    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (error) {}
}

export async function fetchAllProductsOfMultipleCategories(
  categories: string[]
) {
  try {
    let productList: ProductFull[] = [];
    const result = await Promise.all(
      /* returns array of produlist */
      categories.map(async (category) => {
        const result = await fetchProductOfTypeCategory(category, "", "");
        /* returns empty array if result is undefined */
        return Array.isArray(result) ? result : [];
      })
    );
    if (result) {
      /* flattens the result from fetching categories */
      productList = result.flat();
    } else {
      throw new Error(
        `There was a problem fetching all products of multiple categories`
      );
    }
    return productList;
  } catch (error) {}
}

/* 
// fetch all api data and adds to db
export async function borrowData() {
  try {
    const data = await fetchAllProductsOfMultipleCategories(allCategories);


    const products = data;
    products.forEach(async (product: ProductFull) => {
      await insertProduct(product);
    });
  } catch (error) {}
}

async function insertProduct(productFull: ProductFull) {
  const { reviews, ...product } = productFull;
  const { data, error } = await supabase
    .from("products")
    .insert({
      id: product.id,
      title: product.title,
      sub_category: product.category,
      category: menCategories.includes(product.category) ? "men" : "female",
      description: product.description,
      tags: product.tags,
      price: product.price,
      discount_percentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      sku: product.sku,
      weight: product.weight,
      dimensions: product.dimensions,
      warranty_information: product.warrantyInformation,
      shipping_information: product.shippingInformation,
      availability_status: product.availabilityStatus,
      return_policy: product.returnPolicy,
      minimum_order_quantity: product.minimumOrderQuantity,
      meta: product.meta,
      images: product.images,
      thumbnail: product.thumbnail,
    })
    .select()
    .single();
  if (error) {
    console.error("Error inserting product: ", error);
  }
  console.log(data);

  if (reviews && reviews.length > 0) {
    const reviewsData = reviews.map((review: any) => ({
      product_id: data.id,
      rating: review.rating,
      comment: review.comment,
      date: review.date,
      reviewer_name: review.reviewerName,
      reviewer_email: review.reviewerEmail,
    }));
    const { error: reviewError } = await supabase
      .from("reviews")
      .insert(reviewsData);
    if (reviewError) {
      console.error("error inserting reviews", reviewError);
    }
  }
}
 */
