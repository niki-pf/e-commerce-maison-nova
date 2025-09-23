import { fetchAllProductsOfMultipleCategories } from "../lib/data/products";
import { allCategories, menCategories } from "../lib/constants";
import { Prisma, PrismaClient } from "../lib/generated/prisma/client";

const prisma = new PrismaClient();

const products: Prisma.ProductCreateManyInput[] = [];
const reviews: Prisma.ReviewCreateManyInput[] = [];
async function allProducts() {
  try {
    const allProducts = await fetchAllProductsOfMultipleCategories(
      allCategories
    );
    if (allProducts !== undefined) {
      for (const product of allProducts) {
        const setProduct: Prisma.ProductCreateInput = {
          id: product.id,
          title: product.title,
          description: product.description,
          category: menCategories.includes(product.category) ? "men" : "female",
          subCategory: product.category,
          tags: product.tags,
          price: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          stock: product.stock,
          brand: product.brand,
          sku: product.sku,
          images: product.images,
          thumbnail: product.thumbnail,
        };
        products.push(setProduct);
      }
    }
  } catch (e) {
    console.error("feel vid ", e);
  }
}
async function allReviews() {
  try {
    const allProducts = await fetchAllProductsOfMultipleCategories(
      allCategories
    );
    if (allProducts !== undefined) {
      for (const product of allProducts) {
        product.reviews.map((review) =>
          reviews.push({
            productId: product.id,
            rating: review.rating,
            comment: review.comment,
            reviewerName: review.reviewerName,
            reviewerEmail: review.reviewerEmail,
          })
        );
      }
      return reviews;
    }
  } catch (e) {
    console.error("feel vid ", e);
  }
}

async function main() {
  console.log("start seeding...");
  await allProducts();
  if (products) {
    await prisma.product.createMany({
      data: products,
    });
  }
  await allReviews();
  if (reviews) {
    await prisma.review.createMany({
      data: reviews,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
