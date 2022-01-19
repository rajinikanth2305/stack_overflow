import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Link from "next/link";

const UCWinterTreks = ({ slice, winterData }) => {
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

  const ucWinterWreksImages = winterData.map(function(data, i) {
    const tData = data?.data?.body.find(x => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    const getFamiltTrek = data?.tags?.find(x => x === "FamilyTrek");
    return (
      <>
        <div className="mx-4 m-mx-0" key={i}>
          <div className="card_sec">
            <div className="card trek_card">
              <div alt="imgs" className="uc_open_for_small_group_images">
                {tData.primary.trek_banner_image.url && (
                  <Image
                    src={tData.primary.trek_banner_image.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                )}
              </div>
              <div className="px-3 py-2">
                <div className="d-flex align-items-center card-info-text">
                  <div>
                    <p>{tData.primary.duration[0].text}</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{tData.primary.difficulty[0].text}</p>
                  </div>
                </div>

                <div>
                  <p className="title-diplay-3 text-uppercase">
                    {/* <b>{tData.primary.trek_caption}</b> */}
                    <b>
                      {tData.primary.trek_caption.length > 25
                        ? `${tData.primary.trek_caption.substring(0, 25)}...`
                        : tData.primary.trek_caption}
                    </b>
                  </p>
                  <div className="p-display-2">
                    {RichText.asText(tData.primary.sub_heading)}
                  </div>
                  <div className="d-flex align-items-center flex-wrap pt-2 pb-2 p-btn-btm">
                    <div className="flex-grow-1">
                      {getFamiltTrek !== undefined ? (
                        <p className="m-0 fam_trek">
                          <span>*</span> Family trek
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      <Link href={url ? url : "#"}>
                        <button className="btn btn-ih-green">
                          View Details
                        </button>
                      </Link>
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

  const ucWinterWreksImagesMobileView = winterData.map(function(data, j) {
    const tData = data?.data?.body.find(x => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    const getFamiltTrek = data?.tags?.find(x => x === "FamilyTrek");
    return (
      <>
        <div className="col-6" key={j}>
          <div className="card_sec">
            <div className="card trek_card_mb">
              <div alt="imgs" className="m-uc_open_for_small_group_images">
                {tData.primary.trek_banner_image.url && (
                  <Image
                    src={tData.primary.trek_banner_image.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                )}
              </div>
              <div className="px-3 py-2">
                <div>
                  <h3 className="m-title-3 text-uppercase">
                    {tData.primary.trek_caption.length > 20
                      ? `${tData.primary.trek_caption.substring(0, 20)}...`
                      : tData.primary.trek_caption}
                  </h3>
                  <p className="m-display-2">
                    {/* {data.uc_winter_treks_image_caption_desc[0].text.length >
                    122
                      ? `${data.uc_winter_treks_image_caption_desc[0].text.substring(
                          0,
                          122
                        )}...`
                      : data.uc_winter_treks_image_caption_desc[0].text} */}
                    {RichText.asText(tData.primary.sub_heading)}
                  </p>
                  <p className="m-card-info-text m-0">
                    <span className="list-dot-style-mob"></span>{" "}
                    {tData.primary.duration[0].text}
                  </p>
                  {/* <p className="m-card-info-text m-0">
                    <span className="list-dot-style-mob"></span>{" "}
                    {data.uc_winter_treks_seasons[0].text}
                  </p> */}
                  <p className="m-card-info-text">
                    <span className="list-dot-style-mob"></span>{" "}
                    {tData.primary.difficulty[0].text}
                  </p>
                  <div className="d-flex align-items-center flex-wrap pt-2 pb-2">
                    <div className="flex-grow-1">
                      {getFamiltTrek !== undefined ? (
                        <p className="m-0 fam_trek">
                          <span>*</span> Family trek
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="p-abs-btn pb-3">
                      <Link href={url ? url : "#"}>
                        <button className="btn m-btn-ih-green px-2">
                          View Dates / Register
                        </button>
                      </Link>
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
