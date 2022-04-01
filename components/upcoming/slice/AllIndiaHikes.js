import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dropdown } from "primereact/dropdown";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const AllIndiaHikes = ({
  slice,
  easyMordatesTreks,
  moderateTreks,
  difficultTreks,
  familyTreks,
  diyTreks,
  allTreksData
}) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;

  const easyTrekImage = slice?.primary?.easy_trek_image?.url;
  const easyTrekTitleMobile = slice?.primary?.easy_trek_title_mobile;
  const easyTrekDescMobile = slice?.primary?.easy_trek_desc_mobile;

  const moderateTrekimage = slice?.primary?.moderate_trek_image?.url;
  const moderateTrekTitleMobile = slice?.primary?.moderate_trek_title_mobile;
  const moderateTrekDescMobile = slice?.primary?.moderate_trek_desc_mobile;

  const difficultTrekImage = slice?.primary?.difficult_trek_image?.url;
  const difficultTrekTitleMobile = slice?.primary?.difficult_trek_title_mobile;
  const difficultTrekDescMobile = slice?.primary?.difficult_trek_desc_mobile;

  allTreksData?.results?.sort(function(a, b){
    if(a?.uid < b?.uid) { return -1; }
    if(a?.uid > b?.uid) { return 1; }
    return 0;
  });

  const easyMordatesTreksList = easyMordatesTreks?.results?.map(function(
    data1,
    i1
  ) {
    let url;
    const slugUrl = data1?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    return (
      <div className="d-flex align-items-center" key={i1}>
        <div>
          <p className="badge-green"></p>
        </div>
        <div className="mx-3">
          <Link href={url ? url : "#"}>
            <p className="p-display-3 p-display-3-md cursor-pointer">
              {data1?.data?.trek_title[0]?.text}
            </p>
          </Link>
        </div>
      </div>
    );
  });

  const moderateTreksList = moderateTreks?.results?.map(function(data2, i2) {
    let url;
    const slugUrl = data2?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    return (
      <div className="d-flex align-items-center" key={i2}>
        <div>
          <p className="badge-yellow"></p>
        </div>
        <Link href={url ? url : "#"}>
          <div className="mx-3">
            <p className="p-display-3 p-display-3-md cursor-pointer">
              {data2?.data?.trek_title[0]?.text}
            </p>
          </div>
        </Link>
      </div>
    );
  });

  const difficultTreksList = difficultTreks?.results?.map(function(data3, i3) {
    let url;
    const slugUrl = data3?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    return (
      <div className="d-flex align-items-center" key={i3}>
        <div>
          <p className="badge-red"></p>
        </div>
        <div className="mx-3">
          <Link href={url ? url : "#"}>
            <p className="p-display-3 p-display-3-md cursor-pointer">
              {data3?.data?.trek_title[0]?.text}
            </p>
          </Link>
        </div>
      </div>
    );
  });

  const familyTreksList = familyTreks?.results?.map(function(data4, i4) {
    let url;
    const slugUrl = data4?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    return (
      <div className="d-flex align-items-center" key={i4}>
        <div>
          <p className="badge-blue"></p>
        </div>
        <div className="mx-3">
          <Link href={url ? url : "#"}>
            <p className="p-display-3 p-display-3-md cursor-pointer">
              {data4?.data?.trek_title[0]?.text}
            </p>
          </Link>
        </div>
      </div>
    );
  });

  const diyTreksList = diyTreks?.results?.map(function(data5, i5) {
    let url;
    const slugUrl = data5?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    return (
      <div className="d-flex align-items-center" key={i5}>
        <div>
          <p className="badge-blue"></p>
        </div>
        <div className="mx-3">
          <Link href={url ? url : "#"}>
            <p className="p-display-3 p-display-3-md cursor-pointer">
              {data5?.data?.trek_title[0]?.text}
            </p>
          </Link>
        </div>
      </div>
    );
  });

  const treks = allTreksData?.results?.map(function(data, i) {
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    return (
      <div key={i} className="col-lg-4 col-md-6">
        <Link href={url ? url : "#"}>
          <div className="d-flex align-items-center cursor-pointer">
            <div>
              <p
                className={
                  data?.data?.body[0]?.primary?.difficulty[0]?.text === "Easy"
                    ? "badge-green-diy"
                    : data?.data?.body[0]?.primary?.difficulty[0]?.text === "Easy-Moderate"
                    ? "badge-green-diy"
                    : data?.data?.body[0]?.primary?.difficulty[0]?.text === "Easy - Moderate"
                    ? "badge-green-diy"
                    : data?.data?.body[0]?.primary?.difficulty[0]?.text === "Moderate"
                    ? "badge-yellow-diy"
                    : data?.data?.body[0]?.primary?.difficulty[0]?.text === "Moderate-Difficult"
                    ? "badge-yellow-diy"
                    : data?.data?.body[0]?.primary?.difficulty[0]?.text === "Moderate - Difficult"
                    ? "badge-yellow-diy"
                    : data?.data?.body[0]?.primary?.difficulty[0]?.text === "Moderate Difficult"
                    ? "badge-yellow-diy"
                    : data?.data?.body[0]?.primary?.difficulty[0]?.text === "Difficult"
                    ? "badge-red-diy"
                    : "badge-blue-diy"
                }
              ></p>
            </div>
            <div className="mx-3">
              <p className="p-display-3 p-display-3-md cursor-pointer">{RichText.asText(data?.data?.trek_title)}
              {data?.tags[0].match(/Family/g) ? <span className="text-small text-blue">( Family trek )</span> : ''}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="mb-5 ucOpenForSmallGroup_sec">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-4 mb-3">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1 m-d-1">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div>
            <div className="slots-bg">
              <div className="d-flex align-items-center">
                <div className="mx-2">
                  <p className="p-text-3-1 mt-3-1 mb-0">
                    <span className="badge-green-lg mx-2"></span> Easy Moderate
                    trek
                  </p>
                </div>
                <div className="mx-2">
                  <p className="p-text-3-1 mt-3-1 mb-0">
                    <span className="badge-yellow-lg mx-2"></span>
                    Moderate trek{" "}
                  </p>
                </div>
                <div className="mx-2">
                  <p className="p-text-3-1 mt-3-1 mb-0">
                    <span className="badge-red-lg mx-2"></span> Difficult
                    trek
                  </p>
                </div>
                <div className="mx-2">
                  <p className="p-text-3-1 mt-3-1 mb-0">
                    <span className="badge-blue-lg mx-2"></span> Family Trek{" "}
                  </p>
                </div>
                {/* <div className="flex-grow-1 mx-2">
                  <p className="p-text-3-1 mt-3-1 mb-0">
                    <span className="badge-blue-lg mx-2"></span> DIY Trek{" "}
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="container my-3">
            <div className="row">{treks}</div>
          </div>
          {/* <div className="m-d-none">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <h3 className="title-dispaly-4 my-3">Easy Moderate Treks</h3>
                {easyMordatesTreksList}
                <h3 className="title-dispaly-4 my-3">Family Treks</h3>
                {familyTreksList}
                <h3 className="title-dispaly-4 my-3">DIY Treks</h3>
                {diyTreksList}
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <h3 className="title-dispaly-4 my-3">Moderate Treks</h3>
                    {moderateTreksList}
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <h3 className="title-dispaly-4 my-3">Difficult Treks</h3>
                    {difficultTreksList}
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="m-d-block">
            <Accordion defaultActiveKey="0" className="allindia-mob-accordion">
              <Card>
                <Card.Header>
                  <Accordion.Toggle variant="link" eventKey="0">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="mob_treek_img_allindia">
                          <Image
                            src={easyTrekImage}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                          />
                        </div>
                      </div>
                      <div className="mx-2"></div>
                      <div>
                        <p className="m-title-3 mb-1">
                          {RichText.asText(easyTrekTitleMobile)}
                        </p>
                        <p className="m-card-info-text">
                          {RichText.asText(easyTrekDescMobile)}
                        </p>
                      </div>
                      <div className="mx-2"></div>
                      <div>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{easyMordatesTreksList}</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle variant="link" eventKey="1">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="mob_treek_img_allindia">
                          <Image
                            src={moderateTrekimage}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                          />
                        </div>
                      </div>
                      <div className="mx-2"></div>
                      <div>
                        <p className="m-title-3 mb-1">
                          {RichText.asText(moderateTrekTitleMobile)}
                        </p>
                        <p className="m-card-info-text">
                          {RichText.asText(moderateTrekDescMobile)}
                        </p>
                      </div>
                      <div className="mx-2"></div>
                      <div>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>{moderateTreksList}</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle variant="link" eventKey="2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="mob_treek_img_allindia">
                          <Image
                            src={difficultTrekImage}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                          />
                        </div>
                      </div>
                      <div className="mx-2"></div>
                      <div>
                        <p className="m-title-3 mb-1">
                          {RichText.asText(difficultTrekTitleMobile)}
                        </p>
                        <p className="m-card-info-text">
                          {RichText.asText(difficultTrekDescMobile)}
                        </p>
                      </div>
                      <div className="mx-2"></div>
                      <div>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>{difficultTreksList}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div> */}
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default AllIndiaHikes;
