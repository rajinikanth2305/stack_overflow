import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/**
 * FT Slice Components
 */
const Testimonoials = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const testimonialsArray = slice?.items;

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
          arrows: false,
          centerMode: true
        }
      }
    ]
  };

  const testimonials = testimonialsArray?.map(function(data, i) {
    return (
      <div key={`testimonial` + i}>
        <div className="mx-4 m-mx-0">
          <div className="card_sec">
            <div className="card card-body">
              <div className="d-flex align-items-center">
                <div>
                  <div className="testimonial-img">
                    {data?.image?.url && (
                      <Image
                        src={data?.image?.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    )}
                  </div>
                </div>
                <div className="px-3">
                  <p className="p-text-1-fgt mb-0">{RichText.asText(data?.title)}</p>
                  <p className="p-text-3-fg-book-gray">{RichText.asText(data?.sub_title)}</p>
                </div>
              </div>
              <div className="mt-4 mb-2">
                <div className="p-text-4">{RichText.render(data?.content)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="py-5">
      <div className="container">
        <h2 className="title-h2 mb-0">{RichText.asText(heading1)}</h2>
        <div className="my-4 py-2">
          <Slider className="home-choose-treks" {...settings}>
            {testimonials}
          </Slider>
        </div>
      </div>
      <style jsx global>
        {customStyles}
      </style>
    </div>
  );
};

export default Testimonoials;
