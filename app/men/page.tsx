import CategoryNav from "@/components/category-nav";
import { menCategories } from "@/lib/constants";
import ItemWithReview from "@/components/item-review-hero";
import BannerWrapper from "@/components/banner/banner-wrapper";
import FullPageBlock from "@/components/full-page-block";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Maison Nova - Men`,
  description: `Information and categories for the men section`,
};

export default function MenPage() {
  return (
    <>
      <FullPageBlock
        imageSrc="https://images.unsplash.com/photo-1644347506632-836497ef1692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Man wearing a stylish winter coat walking through a city street"
        h2="Your Cold-Weather Edge"
        paragraph="Stay warm, stay sharp with our new winter collection"
        linkPrompt="Shop now"
        link="/products?category=men&subcategory=mens-shoes"
        pos="midRight"
      />
      <CategoryNav gender="men" />;
      <div className="mx-auto my-14 w-full mac-w-7xl px-4 sm:px-6 lg:px-8">
        <BannerWrapper
          banners={[
            {
              imageSrc:
                "https://images.unsplash.com/photo-1644785015193-4bd7db7d1d0c?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              altText: "Guy with basketball",
              h2: "We´re on a Mission To Clean Up the Industry",
              paragraph: "Read about our progress in our latest Impact Report",
              button: "Learn More",
              pos: "positionCenter",
              height: "medium",
            },
          ]}
        />
      </div>
      <ItemWithReview categories={menCategories} />
    </>
  );
}
