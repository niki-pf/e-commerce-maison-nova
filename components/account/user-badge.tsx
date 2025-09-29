"use client";

import React, { useCallback, useState } from "react";
import { type User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

const UserBadge = ({ user }: { user: User | null }) => {
  // const supabase = createClient();
  // const [loading, setLoading] = useState(true);

  // const getProfile = useCallback(async () => {
  //     try {
  //         setLoading(true);
  //     }

  //     const { data, error, status } = await supabase
  //         .from("profiles")
  //         .select(`full_name, username, avatar_url`)
  //         .eq("id", user?.id)
  //         .single();

  //     if (error && status !== 406 ) {
  //         console.log(error);
  //         throw error;
  //     }

  // }, [user, supabase]);
  return <div>user-badge</div>;
};

export default UserBadge;
