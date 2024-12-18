import React from "react";

function page({ params }) {
  return (
    <div>
      <p>admin id: {params.id}</p>
    </div>
  );
}

export default page;
