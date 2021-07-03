import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChooseTreks } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const TrekkersStoriesCommon = () => {
  const [results, setResults] = useState();

  useEffect(() => {
    findTrekStories();
    return () => {
      console.log("test");
    };
  }, []);

  async function findTrekStories() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "hike_home_ctype")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "trekker_stories");
        setResults(slice);
      });
  }

  const heading1 = results && results.primary.heading1;
  const heading2 = results && results.primary.heading2;
  const trekkersStoriesImageArray = results && results.items;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const trekkersStoriesImage = trekkersStoriesImageArray?.map(function(data, i) {
    const trekkers_stories_desc = data.trekkers_stories_desc.map((desc, j) => {
      return <p>{desc.text}</p>;
    });
    return (
      <>
        <div className="c-mx-2" key={`trekkstory` + i}>
          <div className="card_sec">
            <div className="card trek_card">
              <div alt="imgs" className="choose_trek_image">
                <Image
                  src={data.trekkers_stories_image.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  // width={350}
                  // height={215}
                />
              </div>
              <div class="p-4">
                <div>
                  <h3 class="title-diplay-3 ts-lable">
                    {data.trekkers_stories_title[0].text}
                  </h3>
                  <p className="p-display-2">
                    {trekkers_stories_desc.length > 125
                      ? `${trekkers_stories_desc.substring(0, 125)}...`
                      : trekkers_stories_desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="my-5 py-3">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3">
            <div className="col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="p-text-4">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div>
            <Slider {...settings}>{trekkersStoriesImage}</Slider>
          </div>
        </div>
        <style jsx global>
          {ChooseTreks}
        </style>
      </div>
    </>
  );
};
export default TrekkersStoriesCommon;
