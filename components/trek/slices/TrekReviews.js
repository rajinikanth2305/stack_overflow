import React, { useState } from "react";
import { trekStyle } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";
import { getTrekReviews } from "../../../services/queries";

import { Controller, useForm } from 'react-hook-form';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Rating } from 'primereact/rating';

const TrekReviews = ({ slice }) => {
  const [show, setShow] = useState(false);
  const [reveiewInfo, setReveiewInfo] = useState();
  const [answers, setAnswers] = React.useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [trekUserReviews, setTrekUserReviews] = useState([]); 
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  

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

  const trekkersStoriesImage = trekUserReviews?.map(function(data, i) {
    let title="";
    let desc="";
 
    if(data?.reviewAnswers?.length > 0) {
      const answers= data?.reviewAnswers.filter(y=>y.questionType==="Question::Descriptive");
      if(answers?.length>0) {
        const answer=answers[0];
        title=answer?.questionText;
        desc=answer?.answerText
      }
    }

    const onMoreClick=(data)=> {
      setReveiewInfo(data);
      console.log(data);
      const answers= data?.reviewAnswers?.filter(y=>y.questionType==="Question::Descriptive");
      setAnswers(answers);
      const arr = Array.from(new Array(answers?.length), (x, i) => i);
      setIndexes(arr);
      setShow(true);
    }

    return (
      <div key={`trekkstory` + i}>
        <div className="mx-4 m-mx-0">
          <div className="card_sec">
            <div className="card trek_card review_card">
              <div className="p-4">
                <div>
                  <div className="mb-4">
                    <h6>
                      <b>{data.name}</b>
                    </h6>
                    <p className="m-0 p-display-2">Batch of</p>
                    <p className="m-0 p-display-2">{data.batchName}</p>
                  </div>
                  <h3 className="title-diplay-3 ts-lable">
                  <div dangerouslySetInnerHTML={{ __html: 
                    title?.length > 25
                      ? `${title?.substring(0, 55)}...`
                      : title
                  }} />
                  </h3>
                  <p className="p-display-2">

                  <div dangerouslySetInnerHTML={{ __html: 
                    desc?.length > 125
                      ? `${desc?.substring(0, 195)}...`
                      : desc
                  }} />
                  </p>
                </div>
                <div className="d-flex justify-content-end w-100">
                  <button
                    className="btn btn-btn-yellow-new mt-3 mb-2"
                    onClick={() => {
                      onMoreClick(data);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  React.useEffect(() => {
    // http://localhost:3000/blog/12-most-beautiful-alpine-lakes-to-trek-to-in-india
    /// Get the trekName from QueryString
    let actualTrekPageName = "";  
    const pageUrl = window.location.href;
    const pageNamesArray = pageUrl.split("/");
    const pageName = pageNamesArray[pageNamesArray.length - 1];
    const hashIndex = pageName.indexOf("#");

      if (hashIndex > 0) {
        actualTrekPageName = pageName
          .substring(0, hashIndex)
          .replaceAll("-", " ");
      } else {
        actualTrekPageName = pageName.replaceAll("-", " ");
        // actualTrekPageName = actualTrekPageName.replaceAll("-", " ");
      }
    // console.log(actualTrekPageName);
     getTrekReviewsByTrekName(actualTrekPageName);
 
   }, []);

   const getTrekReviewsByTrekName=(trekName)=>{
           getTrekReviews(trekName).then(res=>{
                 setTrekUserReviews(res);
                
           });
          }

  return (
    <>
      <div className="my-5 py-3">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3">
            <div className="col-md-12">
              <h2 className="title-display-2 pb-08 mb-3 pb-08-mobile">
                Trekker Stories And Experiences With Indiahikes
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="p-text-4">
                Over 20,000 people trek with Indiahikes each year and vouch for
                our unmatched safety standards. See what they have to say below.
                Click to read more.
              </div>
            </div>
          </div>
          <div className="my-3">
            <Slider {...settings}>{trekkersStoriesImage}</Slider>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
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
                    <b>{reveiewInfo && reveiewInfo?.trekName}</b>
                  </h6>
                  <p className="m-0 p-display-2">Batch of</p>
                  <p className="m-0 p-display-2">
                    {reveiewInfo && reveiewInfo?.batchName}
                  </p>
                </div>
                <h3 className="title-diplay-3 ts-lable">
                  {reveiewInfo && reveiewInfo.title}
                </h3>

                {
                  indexes.map(index => {
                  const ansdata=answers?.[index];
                  console.log(ansdata);
                      return(
                      <p className="p-display-2">
                          {ansdata?.answerText}
                      </p>
                      )
                       
                      })
                }

              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TrekReviews;
