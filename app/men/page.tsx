import CategoryNav from "@/components/category-nav";
import { menCategories } from "@/lib/constants";
import ItemWithReview from "@/components/item-review-hero";

export default function MenPage() {
  return (
    <main>
      <CategoryNav gender="men" />;
      <ItemWithReview categories={menCategories} />
    </main>
  );
}
