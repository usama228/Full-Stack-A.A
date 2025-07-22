"use client";

import { useState } from "react";

export default function Breadcumb10({ path }) {
  const [shareToggle, setShareToggle] = useState(false);
  const [saveToggle, setSaveToggle] = useState(false);

  return (
    <>
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-lg-10">
              <div className="breadcumb-style1 mb10-xs">
                <div className="breadcumb-list">
                  {path?.map((item, i) => (
                    <a key={i}>{item}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
