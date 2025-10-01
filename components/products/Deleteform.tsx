import Form from "next/form";
import { deleteProduct } from "../../lib/data/product";

export default function DeleteForm({ productId }: { productId: number }) {
  return (
    <Form
      action={async () => {
        "use server";
        await deleteProduct(productId);
      }}>
      <button
        type="submit"
        className="bg-destructive text-white px-4 py-2 rounded">
        Delete Product!
      </button>
      "
    </Form>
  );
}
