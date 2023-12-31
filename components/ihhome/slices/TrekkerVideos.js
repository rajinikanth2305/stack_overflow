import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { ChooseTreks } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";

const TrekkerVideos = ({ slice }) => {
  const ihTrekkerVideosImageArray = slice?.items;
  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();
  //   const router = useRouter();

  //   const goToTrekPage = (e) => {
  //     e.preventDefault()
  //     router.push('/trek/hampta_pass');
  //   };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  const ihTrekkerVideosImage = ihTrekkerVideosImageArray?.map(function (
    data,
    i
  ) {
    const result = data?.ih_trekker_video_link?.url?.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = result && result[2];

    const cleanVideoId =
      videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <div key={`choosetrek` + i}>
        <div className="mx-2 m-mx-0">
          <div className="card_sec">
            <div className="card video_trek_card">
              <div className="ih_trekker_videos_image">
                <Image
                  src={imageURL}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 60%"
                  alt="imgs"
                  onClick={() => {
                    setTrekVideoUrl(videoUrl);
                    setShow(true);
                  }}
                  unoptimized
                />
              </div>
              {/* <div className="px-3 py-2">
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
            </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="mb-4 choose_trek_sec">
        <div className="trek_video_badge">
          <img src="/trek-badge_badge.png" />
          <span>Latest Videos</span>
        </div>
        <div className="container container-custom">
          <div className="m-mt-15">
            <Slider className="trekvideos-carosule" {...settings}>
              {ihTrekkerVideosImage}
            </Slider>
          </div>
        </div>
        <style jsx global>
          {ChooseTreks}
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
            className="mob-video-iframe"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TrekkerVideos;
