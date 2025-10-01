"use server";

import { Prisma, PrismaClient } from "../generated/prisma";
import prisma from "../prisma";
import { generateSlug } from "../utils";
import { NextResponse } from "next/server";





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