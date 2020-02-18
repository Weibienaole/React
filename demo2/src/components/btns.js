import React from "react";
import Link from "../containers/Link";

function BtnsBox() {
  return (
    <>
      <Link detail='ALL'>show all</Link>
      <Link detail='DONE'>完成</Link>
      <Link detail='UNDONE'>未完成</Link>
    </>
  );
}

export default BtnsBox;
