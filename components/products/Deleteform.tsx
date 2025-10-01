import { DeleteProduct } from "../../lib/data/product";

export default function DeleteForm({productId}: {productId: number}) {
    return (
        <form action={async () => {
            "use server";
            await DeleteProduct(productId);
        }}>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
            Delete Product!        
        </button>"

        </form>
    )
}