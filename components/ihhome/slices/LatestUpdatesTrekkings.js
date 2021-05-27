import React from "react";
import { RichText, Date } from "prismic-reactjs";
import { latestUpdatesTrekkingsStyles } from "styles";

const LatestUpdatesTrekkings = ({ slice }) => {
  const Sectiontitle = slice.primary.section_header;
  const latestLrekImage = slice.primary.latest_trek_image.url;
  const dayTalkTitle = slice.primary.day_talk_title;
  const dayTrekTalkTitle = slice.primary.day_trek_talk_title;
  const dayTrekTalkDesc = slice.primary.day_trek_talk_desc;
  const nameEditor = slice.primary.name_editor;
  const dateTrek = Date(slice.primary.date_trek).toString();
  const durationTrekRead = slice.primary.duration_trek_read;

  const latestLrekImageBg = {
    backgroundImage: `url('${latestLrekImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div class="my-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <p class="lut_section_title m-0">
                {RichText.asText(Sectiontitle)}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="latestLrekImage_bg" style={latestLrekImageBg}></div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="d-flex align-items-center latest_trek_details">
                <div>
                  <p class="day_talk_title">
                    <span>{RichText.asText(dayTalkTitle)}</span>
                  </p>
                  <p class="day_trek_talk_title">
                    {RichText.asText(dayTrekTalkTitle)}
                  </p>
                  <p class="day_trek_talk_desc">
                    {RichText.asText(dayTrekTalkDesc)}
                  </p>
                  <p class="name_editor m-0">
                    By <span><b>{RichText.asText(nameEditor)}</b></span>
                  </p>
                  <p class="name_editor">
                    <span>{dateTrek} | </span>
                    <span>{RichText.asText(durationTrekRead)} min read</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {latestUpdatesTrekkingsStyles}
        </style>
      </div>
    </>
  );
};

export default LatestUpdatesTrekkings;
