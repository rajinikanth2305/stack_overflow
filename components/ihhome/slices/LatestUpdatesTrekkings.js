import React, { useState } from "react";
import { RichText, Date } from "prismic-reactjs";
import { latestUpdatesTrekkingsStyles } from "styles";
import Image from "next/image";
import { hrefResolver, linkResolver } from "prismic-configuration";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";

const LatestUpdatesTrekkings = ({ slice }) => {
  const Sectiontitle = slice.primary.section_header;
  const latestLrekImage = slice.primary.latest_trek_image.url;
  const dayTalkTitle = slice.primary.day_talk_title;
  const dayTrekTalkTitle = slice.primary.day_trek_talk_title;
  const dayTrekTalkDesc = slice.primary.day_trek_talk_desc;
  const nameEditor = slice.primary.name_editor;

  const videoText = slice.primary.video_text;
  const primaryVideoImg = slice.primary.primary_video_img.url;
  const primaryVideoUrl = slice.primary.primary_video_url.url;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dateTrek = Date(slice.primary.date_trek).toString();
  const durationTrekRead = slice.primary.duration_trek_read;
  const latestTrekking_world_array = slice.items;

  let primary_url;
  const slugUrl = slice.primary.primary_link_url.slug;
  if (slugUrl) {
    primary_url = linkResolver(slice.primary.primary_link_url);
  }

  const latestTrekWorld = latestTrekking_world_array.map(function(data, index) {
    let url;
    const slugUrl = data?.link_url.slug;
    if (slugUrl) {
      url = linkResolver(data?.link_url);
    }
    return (
      <div className="col-lg-6 col-md-12" key={index}>
        <Link href={url ? url : '#'}>
          <div className="card exp-card-blog mx-0 cursor-pointer">
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
        </Link>
      </div>
    );
  });

  const latestLrekImageBg = {
    backgroundImage: `url('${latestLrekImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div className="mt-5 mb-4 pb-5 m-pb-2 expert-blog-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="lut_section_title m-0 pt-4 pb-08">
                {RichText.asText(Sectiontitle)}
              </p>
            </div>
          </div>
          <div className="card tw_trek_card mx-0 my-4 m-mt-0 cursor-pointer">
            <Link href={primary_url ? primary_url: '#'}>
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
                        <i>By&nbsp;
                        {RichText.asText(nameEditor)}</i>
                      </p>
                      <p className="name_editor">
                        <span>{dateTrek} | </span>
                        <span>
                          {RichText.asText(durationTrekRead)} min read
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="m-d-none">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="row">{latestTrekWorld}</div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card exp-card-blog mx-0">
                  <div className="latest_update_img">
                    <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <div className="text-center">
                        <img
                          src="/v-icon.png"
                          alt="playicon'"
                          className="paly-icon icon-size-50"
                          onClick={handleShow}
                        />
                      </div>
                    </div>
                    <Image
                      src={primaryVideoImg}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                      onClick={handleShow}
                    />
                  </div>
                  <div className="p-3">
                    <p className="latestTrekWorld_caption">
                      {RichText.asText(videoText)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-d-block">
            <div className="d-flex align-items-center mb-3 bg-white p-2 bg-shadow-1">
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
            <div className="d-flex align-items-center mb-3 bg-white p-2 bg-shadow-1">
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
            <div className="d-flex align-items-center mb-3 bg-white p-2 bg-shadow-1">
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
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={primaryVideoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LatestUpdatesTrekkings;
