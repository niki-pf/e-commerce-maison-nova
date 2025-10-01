"use server";

import { PrismaClient } from "../generated/prisma";
import prisma from "../prisma";
import { generateSlug } from "../utils";
import { Product } from "../zod-schemas";

export async function createProduct(
  data: Omit<Product, "id" | "slug">
) {
  const prisma = new PrismaClient();
  const slug = generateSlug(data.title)
  try {
    const result = await prisma.product.create({
      data: {
        ...data,
        slug,
        discountPercentage: data.discountPercentage ?? null,
        rating: data.rating ?? null,
      }
    });
    
    await prisma.$disconnect();
    return {succes: true, product: result.title}
  } catch (e) {
    await prisma.$disconnect();
    return {succes: false, error: e}
  }
}

export async function updateProduct(
  data: Product
) {
  const prisma = new PrismaClient();
  try {
    const result = await prisma.product.update({
      where: {
        id: data.id },
        data: {
          ...data,
          slug: generateSlug(data.title),
          discountPercentage: data.discountPercentage ?? null,
          rating: data.rating ?? null,
        },});

    await prisma.$disconnect();
    return {succes: true, product: result.title}
  } catch (e) {
    await prisma.$disconnect();
    return {succes: false, error: e}
  }
}



export async function deleteProduct(id: number) {
  const prisma = new PrismaClient();
  try {
    const deleted = await prisma.product.delete({
      where: {id},
    });
    return deleted;
  } catch (error) {
    console.error("Error deleting product: ", error)
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

/* export async function DELETE(req: Request, {params}: {params: {id:string}}) {
  try {
    const deleted = await deleteProduct(Number(params.id));
    return NextResponse.json(deleted);
  } catch (error) {
    return NextResponse.json({error: String(error)}, {status: 500});
  }
}

export async function deleteProduct(id: number) {
  const prisma = new PrismaClient();
  try {
    const deleted = await prisma.product.delete({
      where: {id},
    });
    return deleted;
  } catch (error) {
    console.error("Error deleting product: ", error)
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: Request, {params}: {params: {id:string}}) {
  try {
    const deleted = await deleteProduct(Number(params.id));
    return NextResponse.json(deleted);
  } catch (error) {
    return NextResponse.json({error: String(error)}, {status: 500});
  }
}



export async function DeleteProduct(id: number) {
  const prisma = new PrismaClient();
  await prisma.product.delete({where: {id}});
}