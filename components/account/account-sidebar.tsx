import { createClient } from "@/utils/supabase/client";
import { LayoutDashboard, MessageCircleHeart, UserCog } from "lucide-react";
import React from "react";

export const accountList = [
  { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard /> },
  { label: "Account Settings", href: "/account-settings", icon: <UserCog /> },
  { label: "Favorites", href: "/favorites", icon: <MessageCircleHeart /> },
];

const AccountSidebar = () => {
  const supabase = createClient();
  return (
    <aside className=" p-7 flex flex-col h-full bg-[#f5f4f7] rounded-3xl">
      <h2 className="px-6 text-2xl font-semibold">Maison Nova</h2>
      {/* <div className="w-full border-t-2 border-red-900 rounded-b-lg"></div> */}
      <div className="mt-5 mb-6 w-full h-[2px] bg-gray-400 opacity-30 rounded-full" />

      <div className="h-full flex flex-col justify-between">
        <ul className="flex flex-col gap-3">
          {accountList.map((listItem, idx) => (
            <li
              key={idx}
              className="px-6 py-3 flex gap-2 bg-amber-800 rounded-full"
            >
              <span>{listItem.icon}</span>
              <p>{listItem.label}</p>
            </li>
          ))}
        </ul>
        <div>
          <form action="/auth/signout" method="post">
            <button
              className="button block px-8 py-2 mt-6 bg-cyan-500 rounded-full font-semibold cursor-pointer"
              type="submit"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default AccountSidebar;
