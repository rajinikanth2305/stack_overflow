import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const InclusionsAndExclusions = () => {
  const [howToReach, setHowToReach] = useState();

  useEffect(() => {
    findHowToReach();
    return () => {
      // console.log("test");
    };
  }, []);

  async function findHowToReach() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        // console.log(response);
        const tt = response.results[0].data.body;
        console.log(tt);
        const slice =
          tt && tt.find(x => x.slice_type === "inclusions_exclusions");
        setHowToReach(slice);
        // console.log(slice);
      });
  }

  const mapUrl = howToReach && howToReach.primary.map_url.url;
  //   console.log(howToReach);

  return (
    <>
      <div>
        <div className="my-4">
          <p className="p-text-1 text-capitalize mb-4">
            <b>inclusions</b>
          </p>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2-franklin mb-2">
                <img src="/shoes.png" alt="icon" />{" "}
                <span className="mx-2">Accommodation</span>
              </p>
              <p className="p-text-4">
                Accommodation – Stay is included from Day 1 to Day 5 (Jobra to
                Chhatru). You will be camping on all days of the trek (3 per
                tent).{" "}
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2-franklin mb-2">
                <img src="/shoes.png" alt="icon" />{" "}
                <span className="mx-2">Trekking equipment</span>
              </p>
              <p className="p-text-4">
                You will stay in high-quality tents and sleeping bags in all the
                camps. Our high altitude sleeping bags can withstand
                temperatures as low as -10 ºC. We provide.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <p className="p-text-1 text-capitalize mb-4">
            <b>Exclusions</b>
          </p>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2-franklin mb-2">
                <img src="/shoes.png" alt="icon" />{" "}
                <span className="mx-2">Accommodation</span>
              </p>
              <p className="p-text-4">
                Accommodation – Stay is included from Day 1 to Day 5 (Jobra to
                Chhatru). You will be camping on all days of the trek (3 per
                tent).{" "}
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2-franklin mb-2">
                <img src="/shoes.png" alt="icon" />{" "}
                <span className="mx-2">Trekking equipment</span>
              </p>
              <p className="p-text-4">
                You will stay in high-quality tents and sleeping bags in all the
                camps. Our high altitude sleeping bags can withstand
                temperatures as low as -10 ºC. We provide.{" "}
              </p>
            </div>
          </div>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default InclusionsAndExclusions;
