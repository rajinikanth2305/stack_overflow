import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Image from "next/image";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const TrekkingTips = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const [diyResDetails, setDiyResDetails] = useState();

  useEffect(() => {
    findDiyResources();
    return () => {
      //   console.log("test");
    };
  }, []);

  async function findDiyResources() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "diy_trek")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "diy_resources");
        setDiyResDetails(slice);
      });
  }

  const diyResArray = diyResDetails && diyResDetails?.items;

  const diyResList = diyResArray?.map(function(data, i) {
    return (
      <div key={i} className="col-lg-4 col-md-6">
        <div className="d-flex align-items-center row mb-4">
          <div className="diyres_img_bg col-3 col-lg-3 col-md-12">
            <Image
              src={data?.res_image?.url}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
          <div className="col-9 col-lg-9 col-md-12">
            <p className="p-text-3">
              <b>{data?.title[0]?.text}</b>
            </p>
            <div>
              <p className="p-text-small m-0">By {data.name[0].text}</p>
              <p className="p-text-small m-0">
                {data?.date[0]?.text} | {data?.date[0]?.text} min read
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row d-flex align-items-center mt-4 mb-4 border-bottom-custom">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-h2 border-0 m-0">
                <b>{RichText.asText(heading1)}</b>
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div className="row">
            {diyResList}
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-bihtn-yellow hvr-grow">
                More Resources
              </button>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default TrekkingTips;
