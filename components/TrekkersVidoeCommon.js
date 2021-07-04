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

const TrekkersVideoCommon = () => {
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
        const slice = tt && tt.find(x => x.slice_type === "ih_trekker_videos");
        setResults(slice);
      });
  }

  const ihTrekkerVideosImageArray = results && results.items;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  const ihTrekkerVideosImage = ihTrekkerVideosImageArray?.map(function(data, i) {
    return (
      <>
        <div className="c-mx-2" key={`choosetrek` + i}>
          <div className="card_sec">
            <div className="card video_trek_card">
              <div alt="imgs" className="ih_trekker_videos_image">
                <Image
                  src={data.ih_trekker_videos_image.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <div class="px-3 py-2">
                <div>
                  <p className="p-text-5 mb-1">
                    {data.ih_trekker_videos_title[0].text}
                  </p>
                  <div className="d-flex alifn-center justify-content-between video_views">
                    <div>
                      <p className="m-0">
                        {data.ih_trekker_videos_views[0].text} views
                      </p>
                    </div>
                    <div>
                      <p className="m-0">
                        {data.ih_trekker_videos_date[0].text} views
                      </p>
                    </div>
                  </div>
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
      <div className="mb-4 choose_trek_sec">
        <div className="trek_video_badge">
          <img src="/trek-badge_badge.png" />
          <span>Trekker Videos</span>
        </div>
        <div className="container container-custom">
          <div>
            <Slider {...settings}>{ihTrekkerVideosImage}</Slider>
          </div>
        </div>
        <style jsx global>
          {ChooseTreks}
        </style>
      </div>
    </>
  );
};
export default TrekkersVideoCommon;
