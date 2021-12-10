import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChooseTreks } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hrefResolver, linkResolver } from "prismic-configuration";
import Link from "next/link";

const TrekkersStories = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const trekkersStoriesImageArray = slice.items;
  //   const router = useRouter();

  //   const goToTrekPage = (e) => {
  //     e.preventDefault()
  //     router.push('/trek/hampta_pass');
  //   };

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

  const trekkersStoriesImage = trekkersStoriesImageArray.map(function(data, i) {
    const trekkers_stories_desc = data.trekkers_stories_desc.map((desc, j) => {
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
        <div className="mx-4 m-mx-0 cursor-pointer">
          <Link href={url ? url : '#'}>
            <div className="card_sec">
              <div className="card trek_card">
                <div alt="imgs" className="choose_trek_image">
                  <Image
                    src={data.trekkers_stories_image.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    // width={350}
                    // height={215}
                  />
                </div>
                <div className="p-4">
                  <div>
                    <h3 className="title-diplay-3 ts-lable">
                      {data.trekkers_stories_title[0].text}
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
          </Link>
        </div>
      </div>
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
          <div>
            <Slider {...settings}>{trekkersStoriesImage}</Slider>
          </div>
        </div>
        <style jsx global>
          {ChooseTreks}
        </style>
      </div>
    </>
  );
};

export default TrekkersStories;
