import CategoryNav from "@/components/category-nav";
import ItemWithReview from "@/components/item-review-hero";
import { womenCategories } from "@/lib/constants";

export default function WomenPage() {
  return (
    <main>
      {" "}
      <CategoryNav gender="women" />
      <ItemWithReview categories={womenCategories} />
    </main>
  );
}
