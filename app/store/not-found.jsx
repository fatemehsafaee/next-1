"use client";

import { Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

function notFound() {
  const path = usePathname();
  return (
    <Stack>
      <Typography>sorry! We could not find {path} product in RED</Typography>
    </Stack>
  );
}

export default notFound;
