import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChooseTreks } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hrefResolver, linkResolver } from "prismic-configuration";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";

const TrekkersStories = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const trekkersStoriesImageArray = slice?.items;

  const [show, setShow] = useState(false);
  const [reveiewInfo, setReveiewInfo] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const router = useRouter();

  //   const goToTrekPage = (e) => {
  //     e.preventDefault()
  //     router.push('/trek/hampta_pass');
  //   };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  const sampleData = [
    {
      name: "Harshini Ramesh",
      batch: "January 2022",
      title: "Kedarkantha – The Trek That Transformed Indian Trekking",
      desc:
        "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable."
    },
    {
      name: "Deya Bhattacharjee",
      batch: "January 2021",
      title:
        "Rupin Pass – One Of The Flagship Treks Of Indiahikes And Of Trekkers In Our Country.",
      desc:
        "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable."
    },
    {
      name: "Pruthvi mj",
      batch: "December 2021",
      title: "Kedarkantha – The Trek That Transformed Indian Trekking",
      desc:
        "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable."
    },
    {
      name: "Pruthvi mj",
      batch: "December 2021",
      title: "Kedarkantha – The Trek That Transformed Indian Trekking",
      desc:
        "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable."
    }
  ];

  const trekkersStoriesGr = trekkersStoriesImageArray?.map(function(data, i) {
    const trekkers_stories_desc = data.trekkers_stories_desc?.map((desc, j) => {
      return <p key={j}>{desc.text}</p>;
    });
    let url;
    const slugUrl = data?.link_article_url?.slug;
    if (slugUrl) {
      url = linkResolver(data?.link_article_url);
    } else {
      url = data?.link_article_url?.url;
    }
    return (
      <div key={`trekkstory` + i}>
        <div className="mx-4 m-mx-0 cursor-pointer hvr-grow">
          <Link href={url ? url : "#"}>
          <a target="_blank">
            <div className="card_sec">
              <div className="card trek_card">
                <div className="choose_trek_image">
                  <Image
                    src={data?.trekkers_stories_image?.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt="imgs"
                    // width={350}
                    // height={215}
                  />
                </div>
                <div className="p-4">
                  <div>
                    <h3 className="title-diplay-3 ts-lable">
                      {data?.trekkers_stories_title[0]?.text}
                    </h3>
                    <div className="p-display-2">
                      {trekkers_stories_desc.length > 125
                        ? `${trekkers_stories_desc.substring(0, 125)}...`
                        : trekkers_stories_desc}
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

  const trekkersStoriesImage = sampleData?.map(function(data, i) {
    return (
      <>
        <div className="mx-4 m-mx-0" key={`trekkstory` + i}>
          <div className="card_sec">
            <div className="card trek_card review_card">
              <div className="p-4">
                <div>
                  <div className="mb-4">
                    <h6>
                      <b>{data.name}</b>
                    </h6>
                    <p className="m-0 p-display-2">Group of</p>
                    <p className="m-0 p-display-2">{data.batch}</p>
                  </div>
                  {/* <h3 className="title-diplay-3 ts-lable">
                    {data.title.length > 25
                      ? `${data.title.substring(0, 55)}...`
                      : data.title}
                  </h3> */}
                  <p className="p-display-2">
                    {data.desc.length > 125
                      ? `${data.desc.substring(0, 195)}...`
                      : data.desc}
                  </p>
                </div>
                <div className="d-flex justify-content-end w-100">
                  <button
                    class="btn btn-lg btn-ih-primary text-capitalized hvr-grow mt-3 mb-2"
                    onClick={() => {
                      setReveiewInfo(data);
                      setShow(true);
                    }}
                  >
                    Read More
                  </button>
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
      <div className="my-5 py-3">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3">
            <div className="col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="p-text-4">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">{trekkersStoriesGr}</div>
            <div className="col-lg-8 col-md-6 col-12">
              <div>
                <Slider {...settings}>{trekkersStoriesImage}</Slider>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {ChooseTreks}
        </style>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
        className="review_modal"
      >
        <Modal.Header className="border-0 py-0" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="p-4">
              <div>
                <div className="mb-4">
                  <h6>
                    <b>{reveiewInfo && reveiewInfo.name}</b>
                  </h6>
                  <p className="m-0 p-display-2">Group of</p>
                  <p className="m-0 p-display-2">
                    {reveiewInfo && reveiewInfo.batch}
                  </p>
                </div>
                {/* <h3 className="title-diplay-3 ts-lable">
                  {reveiewInfo && reveiewInfo.title}
                </h3> */}
                <p className="p-display-2">{reveiewInfo && reveiewInfo.desc}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TrekkersStories;
