import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const HowToReach = () => {
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
        // console.log(tt);
        const slice = tt && tt.find(x => x.slice_type === "howto_reach");
        setHowToReach(slice);
        // console.log(slice);
      });
  }

  // const mapUrl = howToReach && howToReach?.primary?.map_url.url;
  //   console.log(howToReach);

  return (
    <>
      <div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d53976.65142493995!2d77.31156287401993!3d32.270437542909185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39047acf81706967%3A0xe51e3ff6b7c1fd0d!2sHamta%20Pass%2C%20Himachal%20Pradesh!3m2!1d32.2703698!2d77.3465824!4m5!1s0x39047acf81706967%3A0xe51e3ff6b7c1fd0d!2sHamta%20Pass%2C%20Himachal%20Pradesh%20175140!3m2!1d32.2703698!2d77.3465824!5e0!3m2!1sen!2sin!4v1630230991822!5m2!1sen!2sin"
            width="100%"
            height="420"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <p className="p-text-3-gray">Pinch screen to zoom and use map</p>
        </div>
        <div>
          <p className="p-text-1">
            <b>How To Get To Manali</b>
          </p>
          <p className="p-text-4">
            The best way to reach Manali is by an overnight bus from Chandigarh
            or Delhi. The travel time from Delhi to Manali is around 12 to 14
            hours and the travel time from Chandigarh to Manali is around 8-10
            hours. We recommend that you book the Himachal Government Volvo
            buses. They are reliable and usually on schedule.
          </p>
          <p className="p-text-4">
            Ensure you leave at around 6 pm the previous evening, so that you
            are well on time for the pick up in case of unexpected delays in
            reaching Manali.
          </p>
        </div>
        <div className="d-flex">
          <div className="flex-fill">
            <div className="important_note_box">
              <p className="p-text-2-franklin mb-2">Important note</p>
              <p className="p-text-4 mb-0">
                Ensure you leave at around 6 pm the previous evening, so that
                you are well on time for the pick up in case of unexpected
                delays in reaching Manali.{" "}
              </p>
            </div>
          </div>
          <div className="w-100 d-m-none">
            <div class="position-change mb-4" style={{ height: '220px' }}>
              <Image
                src="/ip.png"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="p-text-1">
            <b>How To Get To Hampta Pass Basecamp Jobra</b>
          </p>
          <p className="p-text-4">
            The best way to reach Manali is by an overnight bus from Chandigarh
            or Delhi. The travel time from Delhi to Manali is around 12 to 14
            hours and the travel time from Chandigarh to Manali is around 8-10
            hours. We recommend that you book the Himachal Government Volvo
            buses. They are reliable and usually on schedule.
          </p>
          <p className="p-text-4">
            Ensure you leave at around 6 pm the previous evening, so that you
            are well on time for the pick up in case of unexpected delays in
            reaching Manali.
          </p>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default HowToReach;
