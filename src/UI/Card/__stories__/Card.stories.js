import React from "react";
import {Card as CardComponent} from "../index";

export default {
  title: "UI/Card",
  component: CardComponent,
}

export const Card = () => {
  return (
    <div style={{padding: "15px"}}>
      <CardComponent title="标题">ddd</CardComponent>
    </div>
  )
}
;
