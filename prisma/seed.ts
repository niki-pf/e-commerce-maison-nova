import { fetchAllProductsOfMultipleCategories } from "./seedUtil/products";
import { allCategories, menCategories } from "./seedUtil/constants";
import { PrismaClient } from "../lib/generated/prisma/client";
import { generateSlug } from "../lib/utils";

const prisma = new PrismaClient();

async function allProducts() {
  try {
    const allProducts = await fetchAllProductsOfMultipleCategories(
      allCategories
    );

    if (!allProducts) {
      return;
    }
    let productIdCounter = 1;
    for (const product of allProducts) {
      await prisma.product.create({
        data: {
          slug: generateSlug(product.title),
          title: product.title,
          description: product.description,
          gender: menCategories.includes(product.category) ? "men" : "women",
          category: product.category,
          tags: product.tags,
          price: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          images: product.images,
          thumbnail: product.thumbnail,
        },
      });

      if (product.reviews && product.reviews.length > 0) {
        for (const review of product.reviews) {

          await prisma.review.create({
            data: {
              productId: productIdCounter,
              rating: review.rating,
              comment: review.comment,
              reviewerName: review.reviewerName,
              reviewerEmail: review.reviewerEmail,
            },
          });
        }
      }
      productIdCounter++;
    }
  } catch (e) {
    console.log(e);
    
  }
}

async function main() {
  await allProducts();
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
