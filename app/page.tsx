import SplitHero from "@/components/split-hero";

export default function Home() {
  return (
    <main>
      <SplitHero
        leftImageUrl="https://images.unsplash.com/photo-1610903507228-38ef043f8a9d?q=80&w=829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        rightImageUrl="https://images.unsplash.com/photo-1567181445486-56bff05af0bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        leftButtonText="Shop Men"
        rightButtonText="Shop Women"
        leftHref="/men"
        rightHref="/women"
        buttonY="70%"
      />
    </main>
  );
}
