import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hrefResolver, linkResolver } from "prismic-configuration";
import Link from "next/link";

const UCOpenForSmallGroup = ({ slice, ucOpenData }) => {
  const ucOpenForSmallGroupTitle = slice.primary.uc_open_for_small_group_title;
  const ucOpenForSmallGroupDesc = slice.primary.uc_open_for_small_group_desc;
  const ucOpenForSmallGroupImagesArray = slice.items;
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
  //   centerMode: true,
  // centerPadding: '60px',
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
          arrows: false,
          centerMode: true,
          // centerPadding: "20px"
        }
      }
    ]
  };

  const goToTrekPage = data => {
    // e.preventDefault()
    // router.push('/trek/hampta_pass');
    const slugUrl = data?.target_url.slug;

    if (slugUrl) {
      // const url = linkResolver(data?.target_url);
      // router.push(url + 'trek/' + slugUrl);
      router.push(`/trek/${data.target_url.uid}`);
    }
  };

  // const ucOpenForSmallGroupImages = ucOpenForSmallGroupImagesArray.map(function(
  //   data,
  //   i
  // ) {
  //   return (
  //     <>
  //       <div className="mx-4 m-mx-0" key={i}>
  //         <div className="card_sec">
  //           <div className="card trek_card opn-trek">
  //             <div alt="imgs" className="uc_open_for_small_group_images">
  //               <Image
  //                 src={data.uc_open_for_small_group_images.url}
  //                 layout="fill"
  //                 objectFit="cover"
  //                 objectPosition="50% 50%"
  //               />
  //             </div>
  //             <div className="px-3 py-2">
  //               <div className="d-flex align-items-center card-info-text">
  //                 <div>
  //                   <p>{data.uc_open_days[0].text} Days</p>
  //                 </div>
  //                 <div>
  //                   <p className="list-dot-style px-1">
  //                     <span>.</span>
  //                   </p>
  //                 </div>
  //                 <div>
  //                   <p>{data.uc_open_seasons[0].text}</p>
  //                 </div>
  //                 <div>
  //                   <p className="list-dot-style px-1">
  //                     <span>.</span>
  //                   </p>
  //                 </div>
  //                 <div>
  //                   <p>{data.uc_open_guide[0].text}</p>
  //                 </div>
  //               </div>

  //               <div>
  //                 <h3 className="title-diplay-3 m-d-3 text-uppercase">
  //                   {data.uc_open_title[0].text.length > 20
  //                     ? `${data.uc_open_desc[0].text.substring(0, 20)}...`
  //                     : data.uc_open_title[0].text}
  //                 </h3>
  //                 <p className="p-display-2 md-2">
  //                   {data.uc_open_desc[0].text.length > 122
  //                     ? `${data.uc_open_desc[0].text.substring(0, 122)}...`
  //                     : data.uc_open_desc[0].text}
  //                 </p>
  //                 <div className="d-flex align-items-center flex-wrap pt-2 pb-2">
  //                   <div className="flex-grow-1">
  //                     {data.uc_open_familytrek === true ? (
  //                       <p className="m-0 fam_trek">
  //                         <span>*</span> Family trek
  //                       </p>
  //                     ) : (
  //                       ""
  //                     )}
  //                   </div>
  //                   <div>
  //                     <button
  //                       className="btn btn-ih-green"
  //                       onClick={() => goToTrekPage(data)}
  //                     >
  //                       View Details
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // });

  const ucOpenForSmallGroupImages = ucOpenData.map(function(data, i) {
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
                  {/* <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{tData.primary.altitude[0].text}</p>
                  </div> */}
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
                  <p className="title-diplay-3 m-t-d3 text-uppercase">
                    {/* <b>{tData.primary.trek_caption}</b> */}
                    <b>{tData.primary.trek_caption.length > 25
                      ? `${tData.primary.trek_caption.substring(0, 25)}...`
                      : tData.primary.trek_caption}</b>
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

  return (
    <>
      <div className="mb-4 mmt-4 ucOpenForSmallGroup_sec">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-display-2">
                {RichText.asText(ucOpenForSmallGroupTitle)}
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1 m-d-1">
                {RichText.asText(ucOpenForSmallGroupDesc)}
              </p>
            </div>
          </div>
          <div>
            <Slider className="treks-carosule" {...settings}>
              {ucOpenForSmallGroupImages}
            </Slider>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default UCOpenForSmallGroup;
