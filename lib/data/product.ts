import { Prisma, PrismaClient } from "../generated/prisma";
import { generateSlug } from "../utils";

type NewProductFromInput = Omit<Prisma.ProductCreateInput, "slug">;
export async function createProduct(
  data: NewProductFromInput
) {
  const prisma = new PrismaClient();
  try {
    const result = await prisma.product.create({
      data: { ...data, slug: generateSlug(data.title) },
    });

    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
}
