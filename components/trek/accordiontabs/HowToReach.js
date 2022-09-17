import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const HowToReach = ({ data }) => {
  const [howToReach, setHowToReach] = useState();

  useEffect(() => {
    findHowToReach();
    return () => {
      // console.log("test");
    };
  }, []);

  async function findHowToReach() {
    const slice = data && data.find((x) => x.slice_type === "howto_reach");
    setHowToReach(slice);
  }

  const mapUrl = howToReach && howToReach?.primary?.map_link.url;
  const howToArray = howToReach && howToReach?.items;

  const howTo = howToArray?.map(function (data, i) {
    return (
      <div key={i}>
        {data?.note_image?.url && (
          <div className="reach-map-img my-4">
            <Image
              src={data?.note_image?.url}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              unoptimized
            />
          </div>
        )}
        <div>
          <p className="p-text-1">
            <b>{RichText.asText(data?.heading1)}</b>
          </p>
          <div className="p-text-4">{RichText.render(data?.details)}</div>
        </div>

        <div className="d-flex">
          <div className="flex-fill">
            {data?.important_note_title[0]?.text !== undefined && (
              <div className="important_note_box">
                <p className="p-text-2-franklin mb-2">
                  {RichText.asText(data?.important_note_title)}
                </p>
                <div className="p-text-4 mb-0">
                  {RichText.render(data?.impprtant_note)}
                </div>
              </div>
            )}
          </div>
          {/* <div className="w-100 d-m-none">
            <div className="position-change mb-4">
              {data?.note_image?.url && (
                <div className="reach-img">
                  <Image
                    src={data?.note_image?.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        {/* <div>
          <iframe
            src={mapUrl}
            width="100%"
            height="420"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <p className="p-text-3-gray">Pinch screen to zoom and use map</p>
        </div> */}
        {howTo}
      </div>
    </>
  );
};
export default HowToReach;
