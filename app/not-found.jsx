import { Stack, Typography } from "@mui/material";
import React from "react";

function notFound() {
  return (
    <Stack textAlign={"center"}>
      <Typography>sorry! I think you are not in a correct path!</Typography>
    </Stack>
  );
}

export default notFound;
