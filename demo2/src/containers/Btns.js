import React from "react";

export default function Box({ children }) {
  console.log(this.context)
  return (
    <>
      <button>{children}</button>
    </>
  );
}
