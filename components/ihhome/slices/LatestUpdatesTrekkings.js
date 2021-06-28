import React from "react";
import { RichText, Date } from "prismic-reactjs";
import { latestUpdatesTrekkingsStyles } from "styles";
import Image from "next/image";

const LatestUpdatesTrekkings = ({ slice }) => {
  const Sectiontitle = slice.primary.section_header;
  const latestLrekImage = slice.primary.latest_trek_image.url;
  const dayTalkTitle = slice.primary.day_talk_title;
  const dayTrekTalkTitle = slice.primary.day_trek_talk_title;
  const dayTrekTalkDesc = slice.primary.day_trek_talk_desc;
  const nameEditor = slice.primary.name_editor;
  const dateTrek = Date(slice.primary.date_trek).toString();
  const durationTrekRead = slice.primary.duration_trek_read;
  const latestTrekking_world_array = slice.items;

  const latestTrekWorld = latestTrekking_world_array.map(function(data, index) {
    return (
      <>
        <div className="col-lg-6 col-md-12" key={index}>
          <div class="card exp-card-blog mx-0">
            <div alt="img" className="latestTrekWorld_bg">
              <Image
                src={data.latest_trekking_world_img.url}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>
            <div className="p-3">
              <p className="latestTrekWorld_caption">
                {data.latest_trekking_world_img_caption[0].text}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  });

  const latestLrekImageBg = {
    backgroundImage: `url('${latestLrekImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div className="mt-5 mb-4 pb-5 expert-blog-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="lut_section_title m-0 pt-4">
                {RichText.asText(Sectiontitle)}
              </p>
            </div>
          </div>
          <div className="card tw_trek_card mx-0 my-4">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="latestLrekImage_bg">
                  <Image
                    src={latestLrekImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="d-flex align-items-center latest_trek_details">
                  <div>
                    <p className="day_talk_title">
                      <span>{RichText.asText(dayTalkTitle)}</span>
                    </p>
                    <p className="day_trek_talk_title">
                      {RichText.asText(dayTrekTalkTitle)}
                    </p>
                    <p className="day_trek_talk_desc">
                      {RichText.asText(dayTrekTalkDesc)}
                    </p>
                    <p className="name_editor m-0">
                      By{" "}
                      <span>
                        <b>{RichText.asText(nameEditor)}</b>
                      </span>
                    </p>
                    <p className="name_editor">
                      <span>{dateTrek} | </span>
                      <span>{RichText.asText(durationTrekRead)} min read</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-d-none">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="row">{latestTrekWorld}</div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div class="card exp-card-blog mx-0">
                  <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/uOzBmKrZUes"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <div className="p-3">
                    <p className="latestTrekWorld_caption">
                      Indiahikes’ Experiential Learning Programs For Schools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-d-block">
            <div className="d-flex align-items-center mb-4">
              <div>
                <img src="/Mask_Group_10.png" alt="img" />
              </div>
              <div className="mx-2"></div>
              <div>
                <p className="update_terk_title_text_mobile">
                  How To Choose Trek Pants — The Ultimate Trekking Pants Guide
                  2020
                </p>
                <p className="name_editor m-0">By Arjun Majumdar</p>
                <p className="name_editor m-0">24 Jan 2020 | 6 min read</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div>
                <img src="/Mask_Group_10_bx.png" alt="img" />
              </div>
              <div className="mx-2"></div>
              <div>
                <p className="update_terk_title_text_mobile">
                  How To Reach Rishikesh, Haridwar And Dehradun – A Guide To
                  Air, Train And Road Travel (With 13 PRO TIPS)
                </p>
                <p className="name_editor m-0">By Arjun Majumdar</p>
                <p className="name_editor m-0">24 Jan 2020 | 6 min read</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div>
                <img src="/Mask_Group_10_cb.png" alt="img" />
              </div>
              <div className="mx-2"></div>
              <div>
                <p className="update_terk_title_text_mobile">
                  Indiahikes’ Experiential Learning Programs For Schools
                </p>
                <p className="name_editor m-0">By Arjun Majumdar</p>
                <p className="name_editor m-0">24 Jan 2020 | 6 min read</p>
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
