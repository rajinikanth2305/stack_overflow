import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";

const UCOpenForSmallGroup = ({ slice }) => {
  const ucOpenForSmallGroupTitle = slice.primary.uc_open_for_small_group_title;
  const ucOpenForSmallGroupDesc = slice.primary.uc_open_for_small_group_desc;
  const ucOpenForSmallGroupImagesArray = slice.items;

  console.log(ucOpenForSmallGroupImagesArray);

  const ucOpenForSmallGroupImages = ucOpenForSmallGroupImagesArray.map(function(
    data,
    i
  ) {
    return (
      <>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card trek_card my-2">
            <div alt="imgs" className="uc_open_for_small_group_images">
              { data.uc_open_familytrek === true ? <div className="trek_badge"><img src="./trek-badge.png" /><span>Family Trek</span></div> : '' }
              <Image
                src={data.uc_open_for_small_group_images.url}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>
            <div class="px-3 py-2">
              <div className="d-flex align-items-center card-info-text">
                <div>
                  <p>{data.uc_open_days[0].text} Days</p>
                </div>
                <div>
                  <p className="list-dot-style px-1">
                    <span>.</span>
                  </p>
                </div>
                <div>
                  <p>{data.uc_open_seasons[0].text}</p>
                </div>
                <div>
                  <p className="list-dot-style px-1">
                    <span>.</span>
                  </p>
                </div>
                <div>
                  <p>{data.uc_open_guide[0].text}</p>
                </div>
              </div>

              <div>
                <h3 class="title-diplay-3 text-uppercase">
                  {data.uc_open_title[0].text}
                </h3>
                <p className="p-display-2">{data.uc_open_desc[0].text.length > 125 ? `${data.uc_open_desc[0].text.substring(0, 125)}...` : data.uc_open_desc[0].text}</p>
                <div className="float-right pt-2 pb-4">
                  <button className="btn btn-ih-green">View Details</button>
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
      <div className="mb-4 ucOpenForSmallGroup_sec">
        <div className="container">
          <div className="row border-bottom-4 mb-3">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-display-2">
                {RichText.asText(ucOpenForSmallGroupTitle)}
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1">
                {RichText.asText(ucOpenForSmallGroupDesc)}
              </p>
            </div>
          </div>
          <div className="row">{ucOpenForSmallGroupImages}</div>
        </div>
      </div>
    </>
  );
};

export default UCOpenForSmallGroup;
