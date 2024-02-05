"use client";

import { PAGE_URL } from "@src/utils/constants";
import React, { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Button from "../button";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Memo
   */
  const showNavBack = useMemo(() => {
    if (pathname === PAGE_URL.home) return false;
    return true;
  }, [pathname]);

  if (showNavBack)
    return (
      <div className="absolute left-4 top-4 z-50">
        <Button onClick={() => router.push(PAGE_URL.home)}>Back to Home</Button>
      </div>
    );

  return null;
};

export default Navbar;
