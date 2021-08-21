import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dropdown } from "primereact/dropdown";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const AllIndiaHikes = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const easyModerateTreksList = slice.primary.easy_moderate_treks_list;
  const moderateTreksList = slice.primary.moderate_treks;
  const difficultTreksList = slice.primary.difficult_treks;
  const familyTreksList = slice.primary.family_treks;
  const diyTreksList = slice.primary.diy_treks;

  const easyTrekImage = slice.primary.easy_trek_image.url;
  const easyTrekTitleMobile = slice.primary.easy_trek_title_mobile;
  const easyTrekDescMobile = slice.primary.easy_trek_desc_mobile;

  const moderateTrekimage = slice.primary.moderate_trek_image.url;
  const moderateTrekTitleMobile = slice.primary.moderate_trek_title_mobile;
  const moderateTrekDescMobile = slice.primary.moderate_trek_desc_mobile;

  const difficultTrekImage = slice.primary.difficult_trek_image.url;
  const difficultTrekTitleMobile = slice.primary.difficult_trek_title_mobile;
  const difficultTrekDescMobile = slice.primary.difficult_trek_desc_mobile;

  const filterSelection = e => {
    console.log(e.target.value);
  };

  const easyModerateTreks = easyModerateTreksList.map(function(data1, i1) {
    return (
      <>
        <div className="d-flex align-items-center" key={i1}>
          <div>
            <p className="badge-green"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3 p-display-3-md">{data1.text}</p>
          </div>
        </div>
      </>
    );
  });

  const moderateTreks = moderateTreksList.map(function(data2, i2) {
    return (
      <>
        <div className="d-flex align-items-center" key={i2}>
          <div>
            <p className="badge-yellow"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3 p-display-3-md">{data2.text}</p>
          </div>
        </div>
      </>
    );
  });

  const difficultTreks = difficultTreksList.map(function(data3, i3) {
    return (
      <>
        <div className="d-flex align-items-center" key={i3}>
          <div>
            <p className="badge-red"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3 p-display-3-md">{data3.text}</p>
          </div>
        </div>
      </>
    );
  });

  const familyTreks = familyTreksList.map(function(data4, i4) {
    return (
      <>
        <div className="d-flex align-items-center" key={i4}>
          <div>
            <p className="badge-blue"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3 p-display-3-md">{data4.text}</p>
          </div>
        </div>
      </>
    );
  });

  const diyTreks = diyTreksList.map(function(data5, i5) {
    return (
      <>
        <div className="d-flex align-items-center" key={i5}>
          <div>
            <p className="badge-blue"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3 p-display-3-md">{data5.text}</p>
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
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1 m-d-1">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div>
            <div className="slots-bg mb-2 m-d-none">
              <div className="d-flex align-items-center">
                <div className="mx-2">
                  <p className="p-text-3-1 mb-0">
                    <span className="badge-green-lg mx-2"></span> Easy Moderate
                    trek
                  </p>
                </div>
                <div className="mx-2">
                  <p className="p-text-3-1 mb-0">
                    <span className="badge-red-lg mx-2"></span>
                    Moderate trek{" "}
                  </p>
                </div>
                <div className="mx-2">
                  <p className="p-text-3-1 mb-0">
                    <span className="badge-yellow-lg mx-2"></span> Difficult
                    trek
                  </p>
                </div>
                <div className="mx-2">
                  <p className="p-text-3-1 mb-0">
                    <span className="badge-blue-lg mx-2"></span> Family Trek{" "}
                  </p>
                </div>
                <div className="flex-grow-1 mx-2">
                  <p className="p-text-3-1 mb-0">
                    <span className="badge-blue-lg mx-2"></span> DIY Trek{" "}
                  </p>
                </div>
                <div>
                  <select
                    className="slot-filter"
                    onChange={e => filterSelection(e)}
                    placeholder="test"
                  >
                    <option selected value="test">
                      Filter by Region
                    </option>
                    <option value="easyModerateTreks">
                      Easy Moderate trek
                    </option>
                    <option value="moderateTrek">Moderate trek</option>
                    <option value="difficultTrek">Difficult trek</option>
                    <option value="familyTrek">Family Trek</option>
                    <option value="DIYTrek">DIY Trek</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="m-d-none">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <h3 className="title-dispaly-4 my-3">Easy Moderate Treks</h3>
              {easyModerateTreks}
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <h3 className="title-dispaly-4 my-3">Moderate Treks</h3>
                  {moderateTreks}
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3 className="title-dispaly-4 my-3">Difficult Treks</h3>
                  {difficultTreks}
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3 className="title-dispaly-4 my-3">Family Treks</h3>
                  {familyTreks}
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3 className="title-dispaly-4 my-3">DIY Treks</h3>
                  {diyTreks}
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="m-d-block">
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
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{easyModerateTreks}</Card.Body>
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
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>{moderateTreks}</Card.Body>
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
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>{difficultTreks}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default AllIndiaHikes;
