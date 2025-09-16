import CategoryNav from "@/components/category-nav";
import ItemWithReview from "@/components/item-review-hero";
import { womenCategories } from "@/lib/constants";
import BannerWrapper from "@/components/banner/banner-wrapper";
import FullPageBlock from "@/components/full-page-block";

export default function WomenPage() {
  return (
    <main>
      <FullPageBlock
        imageSrc="https://images.unsplash.com/photo-1610288311735-39b7facbd095?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Closeup image of a female torso wearing a cozy mustard-colored knitted sweater and a rose-qwartz heartshaped necklace"
        h1="Your Cozy Era"
        paragraph="Get peak comfy chic with new winter essentials"
        linkPrompt="Shop now"
        link="/products?category=women&subcategory=tops"
        pos="midRight"
      />
      <CategoryNav gender="women" />
      <div className="mx-auto my-14 w-full mac-w-7xl px-4 sm:px-6 lg:px-8">
        <BannerWrapper
          banners={[
            {
              imageSrc:
                "https://images.unsplash.com/photo-1644785015193-4bd7db7d1d0c?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              altText: "Guy with basketball",
              h1: "We´re on a Mission To Clean Up the Industry",
              paragraph: "Read about our progress in our latest Impact Report",
              button: "Learn More",
              pos: "positionCenter",
              height: "medium",
            },
          ]}
        />
      </div>
      <ItemWithReview categories={womenCategories} />
    </main>
  );
}
