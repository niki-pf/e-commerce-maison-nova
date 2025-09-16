import { FOOTER_TAGS, NO_GO_LINKS } from "@/lib/constants";
import React from "react";

export default function Footer() {
  return (
    <footer className="grid bg-accent p-4 pt-8 gap-4 w-full justify-center">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:justify-around gap-8">
        {NO_GO_LINKS.map((link, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-bold">{link.header}</p>
            {link.links.map((string, index) => (
              <p key={index}>{string}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="grid sm:grid-flow-col gap-4">
        {FOOTER_TAGS.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </div>
      <p className="text-center">2025 All Rights Reserved</p>
    </footer>
  );
}
