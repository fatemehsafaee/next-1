import { Box, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import React from "react";

function page({ params }) {
  const ID = typeof parseInt(params.id);

  if (parseInt(params.id) === 7) {
    return notFound();
  }

  return (
    <Box sx={{ marginLeft: "20px" }}>
      <Typography component="h1" variant="h3">
        Product {params.id}
      </Typography>
      <img
        style={{
          marginTop: "20px",
          borderColor: "black",
          borderWidth: "2px",
          borderStyle: "solid",
        }}
        src="/favicon.ico"
        alt=""
      />
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        autem, praesentium expedita dolor natus officia necessitatibus
        repellendus asperiores, aspernatur voluptatem accusantium aliquam. Natus
        ullam sed eaque autem praesentium cupiditate quo soluta iusto
        asperiores. Itaque, non. Nesciunt facilis quidem repellat ipsa hic quae
        sint fugiat quam, explicabo officiis eos quisquam quas ratione ducimus
        nihil. Doloribus porro ad, magni repudiandae omnis veritatis sit nam eos
        nihil atque, ea voluptas incidunt delectus reprehenderit deserunt
        nesciunt, corporis mollitia rerum blanditiis placeat reiciendis? Ab
        repudiandae deserunt provident dolores at nulla asperiores maxime ea
        optio, praesentium, corporis quas quaerat exercitationem natus ad
        voluptate dolor quam necessitatibus!
      </Typography>
    </Box>
  );
}

export default page;
