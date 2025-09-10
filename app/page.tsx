import FullPageBlock from "@/components/FullPageBlock";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FullPageBlock
        imageSrc="https://images.unsplash.com/photo-1552939100-c648a5802eb6?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Image of cool young couple"
        h1="Your Cozy Era"
        paragraph="Get peak comfy chic with new winter essentials"
        button="Shop now"
        pos="bottomRight"
      />
    </>
  );
}
