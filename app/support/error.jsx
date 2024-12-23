"use client";
import { Typography } from "@mui/material";
import React from "react";

function error({ error, reset }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography mt={10}>{error.message}</Typography>
      <button onClick={() => reset()}>show it again</button>
    </div>
  );
}

export default error;
