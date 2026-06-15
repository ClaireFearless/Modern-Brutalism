import { Fragment } from "react";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            <span>★</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
