import Link from "next/link";
import React from "react";

const NO_GO_LINKS = [
  { header: "Account", links: ["Log In", "Sign Up", "Redeem a Gift Card"] },
  {
    header: "Company",
    links: [
      "About",
      "Enviromental Initiatives",
      "Factories",
      "DEI",
      "Careers",
      "International",
      "Accessibility",
    ],
  },
  {
    header: "Get Help",
    links: ["Help Center", "Return Policy", "Shipping Info", "Bulk Orders"],
  },
  {
    header: "Connect",
    links: ["Facebook", "Instagram", "Twitter", "Affiliates", "Our Stores"],
  },
];

const FOOTER_TAGS = [
  "Privacy Policy",
  "Terms of Servicce",
  "Do Not Sell or Share My Personal Information",
  "Supply Chain Transparancy",
  "Vendor Code Of Conduct",
  "Site Map Pages",
];
export default function Footer() {
  return (
    <footer className="grid bg-accent pt-8 pb-4 gap-4">
      <div className="grid grid-flow-col justify-center gap-8">
        <div className="flex gap-8 mx-auto">
          {NO_GO_LINKS.map((link, index) => (
            <div className="flex flex-col">
              <p className="font-bold">{link.header}</p>
              {link.links.map((string, index) => (
                <p key={index}>{string}</p>
              ))}
            </div>
          ))}
        </div>
        {
          <Link
            href={"/contact"}
            className="p-4 md:block hidden h-min shadow rounded-2xl bg-accent">
            Contact Us
          </Link>
        }
      </div>
      <div className="flex gap-4 justify-center">
        {FOOTER_TAGS.map((link, index) => (
          <p>{link}</p>
        ))}
      </div>
      <p className="text-center">2025 All Rights Reserved</p>
    </footer>
  );
}
