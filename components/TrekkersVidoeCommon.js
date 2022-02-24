import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { trekStyle } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Modal from "react-bootstrap/Modal";

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
  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: true,
    infinite: false,
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
          infinite: false,
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
          arrows: false,
          centerMode: true,
          adaptiveHeight: true
        }
      }
    ]
  };

  const ihTrekkerVideosImage = ihTrekkerVideosImageArray?.map(function(
    data,
    i
  ) {
  const result = data?.ih_trekker_video_link?.url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  const videoIdWithParams = result && result[2];

  const cleanVideoId =
  videoIdWithParams && videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

  const videoUrl =
    "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
  const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <>
        <div key={`choosetrek` + i}>
          <div className="mx-2 m-mx-0">
            <div className="card_sec">
              <div className="card video_trek_card">
                <div alt="imgs" className="ih_trekker_videos_image">
                  <Image
                    src={imageURL}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    onClick={() => {
                      setTrekVideoUrl(videoUrl);
                      setShow(true);
                    }}
                  />
                </div>
                <div className="px-3 py-2">
                  <div>
                    <p className="p-text-5-tv mb-1">
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
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mb-4 choose_trek_sec-common">
        <div className="trek_video_badge mmb2">
          <img src="/trek-badge_badge.png" />
          <span>Trekker Videos</span>
        </div>
        <div className="container container-custom">
          <div>
            <Slider className="trekvideos-carosule-common" {...settings}>
              {ihTrekkerVideosImage}
            </Slider>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={trekVideoUrl && trekVideoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TrekkersVideoCommon;
