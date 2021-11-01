import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

const UCWinterTreks = ({ slice }) => {
  const ucWinterTreksTitle = slice.primary.uc_winter_treks_title;
  const ucWinterTreksDesc = slice.primary.uc_winter_treks_desc;
  const ucWinterWreksImagesArray = slice.items;
  const router = useRouter();

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

  const goToTrekPage = data => {
    const slugUrl = data?.target_url.slug;

    if (slugUrl) {
      router.push(`/trek/${data.target_url.uid}`);
    }
  };

  const ucWinterWreksImages = ucWinterWreksImagesArray.map(function(data, i) {
    return (
      <>
        <div className="mx-4 m-mx-0" key={i}>
          <div className="card_sec">
            <div className="card trek_card">
              <div alt="imgs" className="uc_open_for_small_group_images">
                {/* {data.uc_winter_treks_family_trek === true ? (
                  <div className="trek_badge">
                    <img src="./trek-badge.png" />
                    <span>Family Trek</span>
                  </div>
                ) : (
                  ""
                )} */}
                <Image
                  src={data.uc_winter_treks_images.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <div className="px-3 py-2">
                <div className="d-flex align-items-center card-info-text">
                  <div>
                    <p>{data.uc_winter_treks_days[0].text} Days</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{data.uc_winter_treks_seasons[0].text}</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{data.uc_winter_treks_guide[0].text}</p>
                  </div>
                </div>

                <div>
                  <h3 className="title-diplay-3 text-uppercase">
                    {/* {data.uc_winter_treks_image_caption[0].text} */}
                    {data.uc_winter_treks_image_caption[0].text.length > 20
                      ? `${data.uc_open_desc[0].text.substring(0, 20)}...`
                      : data.uc_winter_treks_image_caption[0].text}
                  </h3>
                  <p className="p-display-2">
                    {data.uc_winter_treks_image_caption_desc[0].text.length >
                    122
                      ? `${data.uc_winter_treks_image_caption_desc[0].text.substring(
                          0,
                          122
                        )}...`
                      : data.uc_winter_treks_image_caption_desc[0].text}
                  </p>
                  {/* <div className="float-right pt-2 pb-4">
                    <button
                      className="btn btn-ih-green"
                      onClick={() => goToTrekPage(data)}
                    >
                      View Details
                    </button>
                  </div> */}
                  <div className="d-flex align-items-center pt-2 pb-2">
                    <div className="flex-grow-1">
                      {data.uc_winter_treks_family_trek === true ? (
                        <p className="m-0 fam_trek">
                          <span>*</span> Family trek
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      <button
                        className="btn btn-ih-green"
                        onClick={() => goToTrekPage(data)}
                      >
                        View Dates
                      </button>
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

  const ucWinterWreksImagesMobileView = ucWinterWreksImagesArray.map(function(
    data,
    j
  ) {
    return (
      <>
        <div className="col-6" key={j}>
          <div className="card_sec">
            <div className="card trek_card">
              <div alt="imgs" className="m-uc_open_for_small_group_images">
                {/* {data.uc_winter_treks_family_trek === true ? (
                  <div className="trek_badge">
                    <img src="./trek-badge.png" />
                    <span>Family Trek</span>
                  </div>
                ) : (
                  ""
                )} */}
                <Image
                  src={data.uc_winter_treks_images.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <div className="px-3 py-2">
                <div>
                  <h3 className="m-title-3 text-uppercase">
                    {data.uc_winter_treks_image_caption[0].text}
                  </h3>
                  <p className="m-display-2">
                    {data.uc_winter_treks_image_caption_desc[0].text.length >
                    122
                      ? `${data.uc_winter_treks_image_caption_desc[0].text.substring(
                          0,
                          122
                        )}...`
                      : data.uc_winter_treks_image_caption_desc[0].text}
                  </p>
                  <p className="m-card-info-text m-0">
                    <span className="list-dot-style-mob"></span>{" "}
                    {data.uc_winter_treks_days[0].text} Days
                  </p>
                  <p className="m-card-info-text m-0">
                    <span className="list-dot-style-mob"></span>{" "}
                    {data.uc_winter_treks_seasons[0].text}
                  </p>
                  <p className="m-card-info-text">
                    <span className="list-dot-style-mob"></span>{" "}
                    {data.uc_winter_treks_guide[0].text}
                  </p>
                  {/* <div className="t-2 pb-4">
                    <button className="btn m-btn-ih-green">
                      View Dates / Register
                    </button>
                  </div> */}
                  <div className="d-flex align-items-center flex-wrap pt-2 pb-2">
                    <div className="flex-grow-1">
                      {data.uc_winter_treks_family_trek === true ? (
                        <p className="m-0 fam_trek">
                          <span>*</span> Family trek
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      <button
                        className="btn m-btn-ih-green px-2"
                        onClick={() => goToTrekPage(data)}
                      >
                        View Dates / Register
                      </button>
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
      <div className="mb-5 ucOpenForSmallGroup_sec">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-4 mb-3">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-display-2">
                {RichText.asText(ucWinterTreksTitle)}
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1 m-d-1">
                {RichText.asText(ucWinterTreksDesc)}
              </p>
            </div>
          </div>
          <div className="m-d-none">
            <Slider {...settings}>{ucWinterWreksImages}</Slider>
          </div>
          <div className="m-view-d-block">
            <div className="row">{ucWinterWreksImagesMobileView}</div>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default UCWinterTreks;
