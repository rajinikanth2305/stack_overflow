import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestTrekToDo = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const trekToDoImageArray = slice.items;

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

  const trekToDoImage = trekToDoImageArray.map(function(data, i) {
    return (
      <>
        <div className="mx-2" key={i}>
          <div className="card_sec">
            <div className="card trek_card">
              <div alt="imgs" className="uc_open_for_small_group_images">
                {data.trek_familytrek === true ? (
                  <div className="trek_badge">
                    <img src="./trek-badge.png" />
                    <span>Family Trek</span>
                  </div>
                ) : (
                  ""
                )}
                <Image
                  src={data.trek_to_do_image.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <div class="px-3 py-2">
                <div className="d-flex align-items-center card-info-text">
                  <div>
                    <p>{data.trek_days[0].text} Days</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{data.trek_seasons[0].text}</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{data.trek_guide[0].text}</p>
                  </div>
                </div>

                <div>
                  <h3 class="title-diplay-3 text-uppercase">
                    {data.trek_title[0].text}
                  </h3>
                  <p className="p-display-2">
                    {data.trek_desc[0].text.length > 125
                      ? `${data.trek_desc[0].text.substring(0, 125)}...`
                      : data.trek_desc[0].text}
                  </p>
                  <div className="float-right pt-2 pb-4">
                    <button className="btn btn-ih-green">View Details</button>
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
      <div className="my-5">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-4">
            <div className="col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="p-display-1 mb-4">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div>
            <Slider {...settings}>{trekToDoImage}</Slider>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default BestTrekToDo;
