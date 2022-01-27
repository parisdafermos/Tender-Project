import React, { Fragment } from "react";
import ItemsSummary from "./ItemsSummary";
import AvailableItems from "./AvailableItems";
export default function Items() {
  return (
    <Fragment>
      <ItemsSummary />
      <AvailableItems />
    </Fragment>
  );
}
