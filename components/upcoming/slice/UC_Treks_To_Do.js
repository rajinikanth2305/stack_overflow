import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { AllIndiaHikes } from "../slice";

const UCTreksToDo = ({ slice, treksToDoData }) => {
  const ucTreksToDoTitle = slice?.primary?.uc_treks_to_do_title;
  const ucTreksToDoDesc = slice?.primary?.uc_treks_to_do_desc;
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
          infinite: false,
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
          arrows: false,
          // centerMode: true
        }
      }
    ]
  };

  const goToTrekPage = data => {
    const slugUrl = data?.target_url?.slug;

    if (slugUrl) {
     // router.push(`/trek/${data?.target_url?.uid}`);
      router.push(`/${data?.target_url?.uid}`);
    }
  };

  const ucTreksToDoImages = treksToDoData.map(function (data, i) {
    const tData = data?.data?.body.find(x => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      //url = `/trek/${slugUrl}`;
      url = `/${slugUrl}`;
    }
    const getFamiltTrek = data?.tags?.find(x => x === "FamilyTrek");
    return (
      <div key={i}>
        <div className="mx-4 m-mx-0 hvr-grow cursor-pointer">
          <Link href={url ? url : "#"}>
            <a>
              <div className="card_sec">
                <div className="card trek_card">
                  <div className="uc_open_for_small_group_images">
                    {tData?.primary?.trek_banner_image?.url && (
                      <Image
                        src={tData?.primary?.trek_banner_image?.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt="imgs"
                        unoptimized
                      />
                    )}
                  </div>
                  <div className="px-3 py-2">
                    <div className="d-flex align-items-center card-info-text">
                      <div>
                        <p>{tData?.primary?.duration[0]?.text}</p>
                      </div>
                      <div>
                        <p className="list-dot-style px-1">
                          <span>.</span>
                        </p>
                      </div>
                      <div>
                        <p>{tData?.primary?.difficulty[0]?.text}</p>
                      </div>
                    </div>

                    <div>
                      <p className="title-diplay-3 m-t-d3 text-uppercase">
                        <b>
                          {tData?.primary?.trek_caption?.length > 25
                            ? `${tData?.primary?.trek_caption.substring(
                              0,
                              25
                            )}...`
                            : tData?.primary?.trek_caption}
                        </b>
                      </p>
                      <div className="p-display-2 trek_card_desc_min_height">
                        {/* {RichText.asText(tData?.primary?.sub_heading)} */}
                        {RichText.asText(tData?.primary?.sub_heading)?.length > 75
                          ? `${RichText.asText(
                            tData?.primary?.sub_heading
                          ).substring(0, 75)}...`
                          : RichText.asText(tData?.primary?.sub_heading)}
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
                          <button className="btn btn-ih-green">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="mb-2 pt-3 ucOpenForSmallGroup_sec">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-4 mb-3">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-display-2">
                {RichText.asText(ucTreksToDoTitle)}
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1 m-d-1 pl-custom">
                {RichText.asText(ucTreksToDoDesc)}
              </p>
            </div>
          </div>
          <div>
            <Slider className="treks-carosule" {...settings}>
              {ucTreksToDoImages}
            </Slider>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>

       { /*
      <div>
        <AllIndiaHikes
          slice={slice}
          key={`slice-${1}`}
        />
      </div>
       */}
    </>
  );
};

export default UCTreksToDo;
