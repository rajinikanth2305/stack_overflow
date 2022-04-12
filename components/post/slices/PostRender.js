import { customStyles } from "styles";
import React, { useState, useEffect, useRef } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import moment from "moment";
import Link from "next/link";
import { Toast } from "primereact/toast";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { route } from "next/dist/next-server/server/router";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import { linkResolver } from "prismic-configuration";
import { Text, Quote, ImageWithCaption, IframeTag, EmbedHtml } from "./index";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

import { saveWebComments, getPostComments } from "../../../services/queries";
/**
 * Post slice component
 */

//TO DO IMPLEMENT RECAPTHHA LATER!
// https://javascript.plainenglish.io/integrate-google-recaptcha-v2-invisible-with-react-and-nodejs-9d119c94433b

const PostRender = ({
  data,
  authorData,
  updatesData,
  upComingData,
  relatedArticles,
  related_authors
}) => {
  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toast = useRef(null);
  const [postComments, setPostComments] = useState();
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [activeReply, setActiveReply] = React.useState(0);

  let featureImageUrl = "";
  const caption = "";
  //console.log(upComingData);

  const router = useRouter();
  const shareUrl = `https://apstage.co.in${router?.asPath}`;

  const featureSlice = data.body.find(x => x.slice_type == "feature_image");
  if (featureSlice != null) {
    featureImageUrl = featureSlice.primary.feature_image.url;
  }

  React.useEffect(() => {
    // https://apstage.co.in/blog/12-most-beautiful-alpine-lakes-to-trek-to-in-india
    let url = location.href.replace(location.origin, "");
    let pageUrl = url.split("/");
    const postName = pageUrl[2]; //batchid
    getPostCommentsByPostName(postName);
  }, []);

  const tempData = () => {
    const data = [
      {
        id: 1,
        oldCommentId: null,
        commentPostId: 27325,
        commentPostTitle: null,
        commentPostName: "why-hampta-pass-is-a-superb-trek-for-mid-june",
        commentAuthor: "Surya Pillai",
        commentAuthorEmail: "suryapillai0709@gmail.com",
        commentAuthorUrl: null,
        commentAuthorIp: "59.184.191.252",
        createdAt: "2022-03-06T04:09:11",
        commentContent:
          " This actually sounds like a great experience. But I was wondering, will we get to see the Chandrataal lake as well? If not in June, when does Chandrataal become part of the Itinerary?",
        commentApproved: true,
        commentParent: 0,
        commentType: "",
        userId: 0,
        commentAlterId: 16,
        votes: 0,
        parentId: 0,
        replies: [],
        childrens: []
      },
      {
        id: 2,
        oldCommentId: null,
        commentPostId: 27325,
        commentPostTitle: null,
        commentPostName: "why-hampta-pass-is-a-superb-trek-for-mid-june",
        commentAuthor: "Kunal maiti",
        commentAuthorEmail: "kunalmaity57@gmail.com",
        commentAuthorUrl: null,
        commentAuthorIp: "223.176.50.32",
        createdAt: "2022-03-06T04:09:11",
        commentContent: " Will we be able to see chandrtal.",
        commentApproved: true,
        commentParent: 0,
        commentType: "",
        userId: 0,
        commentAlterId: 17,
        votes: 0,
        parentId: 0,
        replies: [],
        childrens: []
      },
      {
        id: 3,
        oldCommentId: null,
        commentPostId: 27325,
        commentPostTitle: null,
        commentPostName: "why-hampta-pass-is-a-superb-trek-for-mid-june",
        commentAuthor: "aswati anand",
        commentAuthorEmail: "aswati@indiahikes.in",
        commentAuthorUrl: null,
        commentAuthorIp: "124.40.244.150",
        createdAt: "2022-03-06T04:09:11",
        commentContent: " Yes. If the weather is good.",
        commentApproved: true,
        commentParent: 17,
        commentType: "",
        userId: 86,
        commentAlterId: 18,
        votes: 0,
        parentId: 1,
        replies: [],
        childrens: []
      },
      {
        id: 4,
        oldCommentId: null,
        commentPostId: 27325,
        commentPostTitle: null,
        commentPostName: "why-hampta-pass-is-a-superb-trek-for-mid-june",
        commentAuthor: "aswati anand",
        commentAuthorEmail: "aswati@indiahikes.in",
        commentAuthorUrl: null,
        commentAuthorIp: "124.40.244.150",
        createdAt: "2022-03-06T04:09:11",
        commentContent: " Yes. If the weather is good.",
        commentApproved: true,
        commentParent: 17,
        commentType: "",
        userId: 86,
        commentAlterId: 18,
        votes: 0,
        parentId: 3,
        replies: [],
        childrens: []
      }
    ];
    return data;
  };

  const getPostCommentsByPostName = postName => {
    getPostComments(postName).then(res => {
      // console.log(res);
      var comments = getPreparedData(res);
      setPostComments(comments);
      const arr = Array.from(new Array(comments?.length), (x, i) => i);
      setIndexes(arr);
      setCounter(arr.length);
      //setRender(true);
    });
  };

  const buildInternalBindStructure = res => {
    let comments = [];

    res?.map(y => {
      comments.push({
        id: y.id,
        oldCommentId: y.oldCommentId,
        commentPostId: y.commentPostId,
        commentPostTitle: y.commentPostTitle,
        commentPostName: y.commentPostName,
        commentAuthor: y.commentAuthor,
        commentAuthorEmail: y.commentAuthorEmail,
        commentAuthorUrl: y.commentAuthorUrl,
        commentAuthorIp: y.commentAuthorIp,
        createdAt: y.createdAt,
        commentContent: y.commentContent,
        commentApproved: y.commentApproved,
        commentParent: y.refcommentParent,
        commentType: y.commentType,
        userId: y.userId,
        commentAlterId: y.commentAlterId,
        votes: y.renderLatestUpdatesvotes,
        parentId: y.parentId,
        replies: [],
        childrens: []
      });
    });
    return comments;
  };

  const getPreparedData = res => {
    const dt = buildInternalBindStructure(res); //tempData();
    //console.log(dt);
    let comments = [];

    dt?.filter(y => y.parentId == 0).map(y => {
      comments.push(y);
    });
    // console.log(comments);

    dt?.filter(y => y.parentId > 0).map(x => {
      const comment = comments?.find(z => z.id === x.parentId);
      if (comment !== null && comment !== undefined) {
        comment?.replies?.push(x);
        comment?.childrens?.push(x.id);
      } else {
        let findNesteParent;
        comments?.map(cmt => {
          cmt.childrens?.map(item => {
            if (item === x.parentId) {
              findNesteParent = cmt;
              return cmt;
            }
          });
        });

        console.log(findNesteParent);
        if (findNesteParent !== null && findNesteParent !== undefined) {
          findNesteParent.childrens.push(x.id);
          findChildrensAndAdd(findNesteParent, x);
        }
      }
    });

    // console.log(comments);
    return comments;
  };
  const findChildrensAndAdd = (commentItem, childItem) => {
    var reply = commentItem?.replies?.find(v => v.id === childItem.parentId);
    if (reply == null || reply === undefined) {
      commentItem?.replies?.map(rep => {
        findChildrensAndAdd(rep, childItem);
      });
    } else {
      reply.replies.push(childItem);
    }
  };

  const renderAuthorSlice = () => {
    return (
      <div id="sidepanel_author_panel">
        <div className="ml-100">
          <div className="text-center">
            <div className="auth_image">
              <img src={authorData?.data?.author_photo?.url} />
            </div>
            <p className="m-0 p-text-3-fg text-center mt-1">
              {authorData?.data?.author_first_name}{" "}
              {authorData?.data?.author_last_name}
            </p>
            <p className="m-0 p-text-small-black text-center">
              {authorData?.data?.designation}
            </p>
          </div>

          <div className="grey-bg border-top-c">
            <p className="p-text-4 mb-2">
              <strong>About the author</strong>
            </p>
            <p className="p-text-small-black">
              {RichText.asText(authorData?.data?.author_description)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderUserSays = slice => {
    return (
      <div className="border-top border-bottom quote-box py-3">
        <div className="row d-flex align-items-center">
          <div className="col-lg-3 col-md-12 border-r">
            <div className="text-center">
              <div className="auth_image">
                <img src="/p-icon.png" />
              </div>
              <p className="m-0 p-text-3-fg text-center mt-1">
                {slice?.primary?.user_name}
              </p>
              <p className="m-0 p-text-small-10-black text-center">
                {slice?.primary?.user_designation}
              </p>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <p className="p-display-1 px-3">
              {RichText.asText(slice?.primary?.what_says)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderLeftImageRightText = slice => {
    if (slice.primary.position === "Right") {
      return renderRightImageLeftText(slice);
    } else {
      return (
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card left-position-img">
              <div className="ar_img">
                <img
                  src={slice?.primary?.image?.url}
                  width="100%"
                  height="210px"
                />
              </div>
              <p className="p-text-small m-0 px-3 my-2">
                {slice?.primary?.image_caption}
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>{RichText.asText(slice?.primary?.paragraph_text)}</div>
          </div>
        </div>
      );
    }
  };

  const renderRightImageLeftText = slice => {
    return (
      <div className="row">
        <div className="col-lg-5 col-md-12 pr-5p">
          <div>{RichText.asText(slice?.primary?.paragraph_text)}</div>
        </div>
        <div className="col-lg-7 col-md-12">
          <div className="card">
            <div className="ar_img">
              <img
                src={slice?.primary?.image?.url}
                width="100%"
                height="210px"
              />
            </div>
            <p className="p-text-small m-0 px-3 my-2">
              {slice?.primary?.image_caption}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderLatestUpdates = () => {
    var items = updatesData?.items;
    return (
      <div className="ml-100 my-5 py-5">
        <p className="p-text-3-fgc border-bottom-custom-1 pb-2">
          Latest Updates
        </p>
        {items.map(function (data, i) {
          return (
            <div className="border-bottom mb-3 pb-3">
              <p className="p-text-3-fgc-yellow m-0">{data?.date}</p>
              <p className="p-text-3 mt-2 mb-1">
                {data.trekking_world_heading[0].text}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  const renderUpComingTreks = () => {
    return (
      <div className="">
        <div className="">
          <div className="ml-100 mt-5">
            <p className="p-text-3-fgc border-bottom-custom-1 pb-2">
              Upcoming Treks
            </p>
            {upComingData?.map(function (data, i) {
              const tData = data?.data?.body?.find(
                x => x.slice_type === "trek_banner"
              );
              let url;
              const slugUrl = data?.uid;
              if (slugUrl) {
                url = `/trek/${slugUrl}`;
              }
              return (
                <div className="border-bottom mb-3">
                  <a href={url ? url : "#"} target="new">
                    <div className="ar_right_side_imgs">
                      {/* {tData?.primary?.trek_banner_image?.url && (
                        <Image
                          src={tData?.primary?.trek_banner_image?.url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      )} */}
                      {tData?.primary?.trek_banner_image?.url ? (
                        <Image
                          src={tData?.primary?.trek_banner_image?.url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      ) : (
                        <img src="../ip.png" />
                      )}
                    </div>
                    <p className="p-text-3-fgc mt-2 mb-1">
                      {RichText.asText(data?.primary?.heading1)}
                    </p>
                    <p className="p-text-small">
                      <b>
                        {tData?.primary?.trek_caption?.length > 25
                          ? `${tData?.primary?.trek_caption?.substring(
                            0,
                            25
                          )}...`
                          : tData?.primary?.trek_caption}
                      </b>
                    </p>
                    {/* <div>
                    <Link href={url ? url : "#"} target="new">
                      <button className="btn btn-ih-green">View Details</button>
                    </Link>
                  </div> */}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const greyBgWithGrey = slice => {
    return (
      <div>
        <div className="grey-bg border-top-c">
          {RichText.asText(slice?.primary?.paragraph_text)}
        </div>
      </div>
    );
  };

  const greyBgWithTextAuthorSays = slice => {
    return (
      <div>
        <div className="grey-bg border-top-c">
          <div className="p-2">
            {RichText.asText(slice?.primary?.paragraph_text)}
          </div>
          <div className="border-top border-bottom quote-box bg-white py-3 mb-2">
            <div className="row d-flex align-items-center">
              <div className="col-lg-3 col-md-12 border-r">
                <div className="text-center">
                  <div className="auth_image">
                    <img src={slice?.primary?.user_photo?.url} />
                  </div>
                  <p className="m-0 p-text-3-fg text-center mt-1">
                    {slice?.primary?.user_name}
                  </p>
                  <p className="m-0 p-text-small-10-black text-center">
                    {slice?.primary?.designation}
                  </p>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <p className="p-display-1 px-3">
                  {RichText.asText(slice?.primary?.user_says)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getVideoId = url => {
    const result = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    const videoIdWithParams = result && result[2];

    if (videoIdWithParams !== undefined) {
      const cleanVideoId = videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

      return cleanVideoId;
    } else {
      return null;
    }
  };

  const renderEmbedVideo = slice => {
    //console.log(data.video_image.url);
    const videoId = slice?.primary?.youtube_id?.replace('"', "");
    const videoUrl =
      "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
      <div className="">
        <div
          onClick={() => {
            setTrekVideoUrl(videoUrl);
            setShow(true);
          }}
        >
          <div>
            {imageURL && (
              <div className="ar_video_big_img">
                <div className="d-flex align-items-center justify-content-center w-100 h-100">
                  <div className="text-center">
                    <img
                      src="/v-icon.png"
                      alt="playicon'"
                      className="paly-icon icon-size-50"
                    // onClick={handleShow}
                    />
                  </div>
                </div>
                <Image
                  src={imageURL}
                  // objectFit="cover"
                  // width="1920"
                  // height="1080"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="Click on the image to view the Video"
                  onClick={() => {
                    setTrekVideoUrl(videoUrl);
                    setShow(true);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderLatestVideos = () => {
    const slice = data?.body?.find(x => x.slice_type === "youtube_video_lists");

    return (
      <div>
        {slice?.items?.length > 0 && <div className="ml-100 my-5 py-5">
          <p className="p-text-3-fgc border-bottom-custom-1 pb-2">
            Latest Videos
          </p>
          {slice?.items?.map(function (data, i) {
            //console.log(data.video_image.url);
            const videoId = data?.video_id?.replace('"', "");
            const videoUrl =
              "https://www.youtube.com/embed/" + data.video_id + "?autoplay=1";
            const imageURL = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            console.log(imageURL);
            return (
              <div
                className="card border-bottom mb-3"
                onClick={() => {
                  setTrekVideoUrl(videoUrl);
                  setShow(true);
                }}
              >
                <div className="ar_right_side_imgs">
                  <div className="d-flex align-items-center justify-content-center w-100 h-100">
                    <div className="text-center">
                      <img
                        src="/v-icon.png"
                        alt="playicon'"
                        className="paly-icon icon-size-50"
                      // onClick={handleShow}
                      />
                    </div>
                  </div>
                  {imageURL && (
                    <Image
                      src={imageURL}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                      onClick={() => {
                        setTrekVideoUrl(videoUrl);
                        setShow(true);
                      }}
                    />
                  )}
                </div>
                <div className="p-2">
                  <p className="p-text-3-fgc mt-2 mb-1">
                    {RichText.asText(data?.video_title)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>}
      </div>
    );
  };

  const renderRelatedArticles = () => {
    return (
      <div className="ml-100">
        <p className="p-text-3-fgc border-bottom-custom-1 pb-2">
          Latest Articles
        </p>
        {relatedArticles?.map(function (article, i) {
          let featureImageUrl = "";
          const featureSlice = article?.data?.body?.find(
            x => x.slice_type == "feature_image"
          );
          if (featureSlice != null) {
            featureImageUrl = featureSlice?.primary?.feature_image?.url;
          }
          const title = RichText.asText(article?.data?.title);
          const date = article?.data?.date;
          let author = related_authors && related_authors[i];
          return (
            <div className="border-bottom mb-3">
              <div className="ar_right_side_imgs">
                {featureImageUrl.length > 0 && <img src={featureImageUrl} />}
              </div>
              <p className="p-text-3-fgc mt-2 mb-1">{title}</p>
              <p className="p-text-small-10-gray mb-0">
                By <strong>{author}</strong>
              </p>
              <p className="p-text-small-10-gray">
                {date} <span className="list-dot-style-mob"></span> 6 min read
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  const onReply = formData => {
    setActiveReply(formData);
  };

  const onReplyComments = formData => {
    //console.log(formData);

    let url = location.href.replace(location.origin, "");
    let pageUrl = url.split("/");
    const postName = pageUrl[2]; //postname

    const field1 = "uname_" + activeReply;
    const field2 = "email_" + activeReply;
    const field3 = "comment_" + activeReply;

    console.log(field1 + field2 + field3);

    const userName = document.getElementById(`"${field1}"`).value;
    const email = document.getElementById(`"${field2}"`).value;
    const replyText = document.getElementById(`"${field3}"`).value;

    //console.log(userName + replyText + email);

    let today = new Date();

    if (replyText.trim().length == 0) {
      alert("Reply text should'nt be Empty");
      toast?.current?.show({
        severity: "error",
        summary: `'Reply text should'nt be Empty!'`,
        detail: "Post Comments",
        life: 6000
      });
      return;
    }
    if (userName.trim().length == 0) {
      alert("UserName text should'nt be Empty");
      toast.current.show({
        severity: "error",
        summary: `'Reply UserName should'nt be Empty!'`,
        detail: "Post Comments",
        life: 6000
      });
      return;
    }
    if (email.trim().length == 0) {
      alert("Email text should'nt be Empty");
      toast.current.show({
        severity: "error",
        summary: `'Reply Email should'nt be Empty!'`,
        detail: "Post Comments"
      });
      return;
    }

    if (!ValidateEmail(document.getElementById(`"${field2}"`))) {
      return;
    }

    const postData = {
      id: 0,
      oldCommentId: 0,
      commentPostId: 0,
      commentPostTitle: "",
      commentPostName: postName,
      commentAuthor: userName,
      commentAuthorEmail: email,
      commentAuthorUrl: "",
      commentAuthorIp: "",
      createdAt: today,
      commentContent: replyText,
      commentApproved: false,
      commentParent: 0,
      commentType: "",
      userId: 0,
      commentAlterId: 0,
      votes: 0,
      parentId: formData
    };

    saveWebComments(postName, postData).then(res => {
      toast?.current?.show({
        severity: "success",
        summary: `' Successfully saved'`,
        detail: "Post-Comments",
        life: 6000
      });
      alert("Thank you very much for your comments");
      setActiveReply(0);
    });
  };

  const onPostComments = formData => {
    let url = location.href.replace(location.origin, "");
    let pageUrl = url.split("/");
    const postName = pageUrl[2]; //postname

    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const replyText = document.getElementById("postReplyText").value;

    let today = new Date();

    if (replyText.trim().length === 0) {
      console.log(replyText.trim().length);
      console.log(toast.current);
      alert("Reply text should'nt be Empty");
      toast?.current?.show({
        severity: "error",
        summary: `'Reply text should'nt be Empty!'`,
        detail: "Post Comments",
        life: 6000
      });
      return;
    }
    if (userName.trim().length == 0) {
      alert("UserName text should'nt be Empty");
      toast.current.show({
        severity: "error",
        summary: `'Reply UserName should'nt be Empty!'`,
        detail: "Post Comments"
      });
      return;
    }
    if (email.trim().length === 0) {
      alert("Email text should'nt be Empty");
      toast.current.show({
        severity: "error",
        summary: `'Reply Email should'nt be Empty!'`,
        detail: "Post Comments"
      });
      return;
    }
    if (!ValidateEmail(document.getElementById("email"))) {
      return;
    }

    const postData = {
      id: 0,
      oldCommentId: 0,
      commentPostId: 0,
      commentPostTitle: "",
      commentPostName: postName,
      commentAuthor: userName,
      commentAuthorEmail: email,
      commentAuthorUrl: "",
      commentAuthorIp: "",
      createdAt: today,
      commentContent: replyText,
      commentApproved: false,
      commentParent: 0,
      commentType: "",
      userId: 0,
      commentAlterId: 0,
      votes: 0,
      parentId: 0
    };

    saveWebComments(postName, postData).then(res => {
      toast?.current?.show({
        severity: "success",
        summary: `' Successfully saved'`,
        detail: "Post-Comments",
        life: 6000
      });
      alert("Thank you very much for your comments");
      document.getElementById("userName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("postReplyText").value = "";
    });
  };

  const recursiveReplyrender = commentData => {
    let field1 = "";
    let field2 = "";
    let field3 = "";
    if (activeReply > 0) {
      field1 = "uname_" + commentData?.id;
      field2 = "email_" + commentData?.id;
      field3 = "comment_" + commentData?.id;
    }
    return (
      <div className="pl-l-cus-40">
        <div className="pl-border-yel">
          <div className="d-flex align-items-center">
            <div>
              <div className="auth_image_1">
                <img src="../ip.png" />
              </div>
            </div>
            <div className="mx-2" />
            <div>
              <p className="mb-1 p-text-3">{commentData?.author}</p>
              <p className="m-0 p-text-small-black">
                {moment(commentData?.createdAt).format("DD MMM YYYY")}
              </p>
            </div>
          </div>

          <div className="p-text-4 my-3">
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: commentData?.commentContent
                }}
              />
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end w-100">
          <button
            className="btn btn-btn-gray-new mt-3 mb-2"
            onClick={e => {
              onReply(commentData.id);
            }}
          >
            Reply
          </button>
        </div>
        {activeReply > 0 && activeReply === commentData.id && (
          <div>
            <h5 className="p-text-1">
              <b>LEAVE A REPLY</b>
            </h5>
            <p className="p-text-4">
              Your email address will not be published. Required fields are
              marked
            </p>
            <p>
              <div>
                <label for="name">
                  {" "}
                  Name<span class="required">*</span>
                </label>
                <input
                  type="text"
                  id={`"${field1}"`}
                  rows="3"
                  className="w-100"
                  placeholder="Name"
                ></input>
              </div>
            </p>
            <p>
              <div>
                <label for="name">
                  {" "}
                  Email<span class="required">*</span>
                </label>
                <input
                  type="text"
                  id={`"${field2}"`}
                  rows="3"
                  className="w-100"
                  placeholder="Email"
                ></input>
              </div>
            </p>
            <p>
              <div>
                <label for="name">
                  {" "}
                  Comments<span class="required">*</span>
                </label>
                <textarea
                  id={`"${field3}"`}
                  rows="3"
                  className="w-100"
                  placeholder="post comments"
                ></textarea>
              </div>
              <p aria-hidden="true" id="required-description">
                <span class="required">*</span>Required field
              </p>
            </p>
            <div className="d-flex justify-content-end w-100">
              <button
                className="btn btn-btn-yellow-new mt-3 mb-2"
                onClick={e => {
                  onReplyComments(commentData.id);
                }}
              >
                Post reply
              </button>
            </div>
          </div>
        )}

        {commentData?.replies?.map(commentReply => {
          return <div>{recursiveReplyrender(commentReply)}</div>;
        })}
      </div>
    );
  };

  function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
      return true;
    } else {
      alert("Invalid email address!");
      input.focus();
      return false;
    }
  }

  return (
    <>
      <Toast ref={toast} />
      <div>
        <div className="article_banner_img">
          <img src={featureImageUrl} />
        </div>

        <div className="container">
          <div className="row my-3">
            <div className="col-lg-3 col-md-12 pr-5p pt-4">
              <div className="position-sticky border-0">
                <p className="p-text-3-fgc border-bottom-0 m-0">
                  <span>{RichText.asText(data?.title)}</span>
                </p>
                <p className="border-bottom-custom-1 pb-2 mb-2"></p>
                <p className="p-text-small mb-2">Share this story</p>
                <div>
                  <>
                    <FacebookShareButton
                      url={shareUrl}
                      className="social-share-icons "
                    >
                      <FacebookIcon size={28} round />
                    </FacebookShareButton>
                    <LinkedinShareButton
                      url={shareUrl}
                      className="social-share-icons "
                    >
                      <LinkedinIcon size={28} round />
                    </LinkedinShareButton>
                    <TwitterShareButton
                      url={shareUrl}
                      className="social-share-icons "
                    >
                      <TwitterIcon size={28} round />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={shareUrl}
                      className="social-share-icons "
                    >
                      <WhatsappIcon size={28} round />
                    </WhatsappShareButton>
                  </>
                  {/* <a href="">
                    <span className="social_bg mx-1">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div>
                    <div>
                      <p className="p-text-3-fg">
                        <span className="border-bottom-custom-1 pb-2">
                          {data?.sub_title}
                        </span>
                      </p>
                      <h2 className="title-h2 border-0 mb-0 pb-0">
                        {RichText.asText(data?.title)}
                      </h2>
                      <div className="auth_sec">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="m-0 p-text-small-black">
                              By{" "}
                              <b>
                                {/* {data?.author_first_name}{" "}
                                {data?.author_last_name} */}
                                {authorData?.data?.author_first_name}{" "}
                                {authorData?.data?.author_last_name}
                              </b>
                            </p>
                            <p className="m-0 p-text-small-black">
                              {data?.date}
                            </p>
                          </div>
                          <div>
                            <>
                              <FacebookShareButton
                                url={shareUrl}
                                className="social-share-icons "
                              >
                                <FacebookIcon size={28} round />
                              </FacebookShareButton>
                              <LinkedinShareButton
                                url={shareUrl}
                                className="social-share-icons "
                              >
                                <LinkedinIcon size={28} round />
                              </LinkedinShareButton>
                              <TwitterShareButton
                                url={shareUrl}
                                className="social-share-icons "
                              >
                                <TwitterIcon size={28} round />
                              </TwitterShareButton>
                              <WhatsappShareButton
                                url={shareUrl}
                                className="social-share-icons "
                              >
                                <WhatsappIcon size={28} round />
                              </WhatsappShareButton>
                            </>
                            {/* <a href="">
                              <span className="social_bg mx-1">
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </a>
                            <a href="">
                              <span className="social_bg mx-1">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </a>
                            <a href="">
                              <span className="social_bg mx-1">
                                <i
                                  className="fa fa-linkedin"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </a>
                            <a href="">
                              <span className="social_bg mx-1">
                                <i
                                  className="fa fa-whatsapp"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="postbody" className="border-bottom mb-4 pb-3">
                    {data.body.map((slice, index) => {
                      switch (slice.slice_type) {
                        case "image_with_caption":
                          return (
                            <ImageWithCaption
                              slice={slice}
                              key={`slice-${index}`}
                            />
                          );
                        case "quote":
                          return <Quote slice={slice} key={`slice-${index}`} />;
                        case "text":
                          return <Text slice={slice} key={`slice-${index}`} />;
                        case "HomeBannerWithCaptions  ":
                          return <Text slice={slice} key={`slice-${index}`} />;
                        case "embed_iframe":
                          return (
                            <IframeTag slice={slice} key={`slice-${index}`} />
                          );
                        case "embed_html":
                          return (
                            <EmbedHtml slice={slice} key={`slice-${index}`} />
                          );
                        case "text_and_image_panel":
                          return renderLeftImageRightText(slice);
                        case "user_says_panel":
                          return renderUserSays(slice);
                        case "highlighted_gray_bg_color_panel":
                          return greyBgWithGrey(slice);
                        case "user_says_with_gray_panel":
                          return greyBgWithTextAuthorSays(slice);
                        case "embed_youtube_video":
                          return renderEmbedVideo(slice);

                        default:
                          return null;
                      }
                    })}
                  </div>

                  <div>
                    <h5 className="p-text-1">
                      <b>LEAVE A REPLY</b>
                    </h5>
                    <p className="p-text-4">
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                    <p>
                      <div>
                        <label for="name">
                          {" "}
                          Name<span class="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="userName"
                          rows="3"
                          className="w-100"
                        ></input>
                      </div>
                    </p>
                    <p>
                      <div>
                        <label for="name">
                          {" "}
                          Email<span class="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="email"
                          rows="3"
                          className="w-100"
                        ></input>
                      </div>
                    </p>
                    <p>
                      <div>
                        <label for="name">
                          {" "}
                          Comments <span class="required">*</span>
                        </label>
                        <textarea
                          id="postReplyText"
                          rows="3"
                          className="w-100"
                        ></textarea>
                      </div>
                      <p aria-hidden="true" id="required-description">
                        <span class="required">*</span>Required field
                      </p>
                    </p>
                    <div className="d-flex justify-content-end w-100">
                      <button
                        className="btn btn-btn-yellow-new mt-3 mb-2"
                        onClick={e => {
                          onPostComments();
                        }}
                      >
                        Post reply
                      </button>
                    </div>
                  </div>

                  {indexes.map(index => {
                    const fieldName = `voucher[${index}]`;
                    const sdata = postComments[index];
                    let field1 = "";
                    let field2 = "";
                    let field3 = "";
                    if (activeReply > 0) {
                      field1 = "uname_" + sdata.id;
                      field2 = "email_" + sdata.id;
                      field3 = "comment_" + sdata.id;
                    }

                    return (
                      <div>
                        {/*
                            <div className="my-5">
                              <p className="p-text-1">
                                <b>
                                  <span>"{sdata?.commentPostTitle}"</span>
                                </b>
                              </p>
                            </div>
                         */}

                        <div className="border-bottom pb-4 mb-4">
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="auth_image_1">
                                <img src="../ip.png" />
                              </div>
                            </div>
                            <div className="mx-2" />
                            <div>
                              <p className="mb-1 p-text-3">
                                {sdata?.commentAuthor}
                              </p>
                              <p className="m-0 p-text-small-black">
                                {moment(sdata?.createdAt).format("DD MMM YYYY")}
                              </p>
                            </div>
                          </div>

                          <div className="p-text-4 my-3">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: sdata?.commentContent
                              }}
                            />
                          </div>
                          <div className="d-flex justify-content-end w-100">
                            <button
                              className="btn btn-btn-gray-new mt-3 mb-2"
                              onClick={e => {
                                onReply(sdata.id);
                              }}
                            >
                              Reply
                            </button>
                          </div>

                          {activeReply > 0 && activeReply === sdata.id && (
                            <div>
                              <h5 className="p-text-1">
                                <b>LEAVE A REPLY</b>
                              </h5>
                              <p className="p-text-4">
                                Your email address will not be published.
                                Required fields are marked
                              </p>
                              <p>
                                <div>
                                  <label for="name">
                                    {" "}
                                    Name<span class="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    id={`"${field1}"`}
                                    rows="3"
                                    className="w-100"
                                    placeholder="Name"
                                  ></input>
                                </div>
                              </p>
                              <p>
                                <div>
                                  <label for="email">
                                    {" "}
                                    Email<span class="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    id={`"${field2}"`}
                                    rows="3"
                                    className="w-100"
                                    placeholder="Email"
                                  ></input>
                                </div>
                              </p>
                              <p>
                                <div>
                                  <label for="comments">
                                    {" "}
                                    Comments <span class="required">*</span>
                                  </label>
                                  <textarea
                                    id={`"${field3}"`}
                                    rows="3"
                                    className="w-100"
                                    placeholder="post comments"
                                  ></textarea>
                                </div>
                                <p aria-hidden="true" id="required-description">
                                  <span class="required">*</span>Required field
                                </p>
                              </p>
                              <div className="d-flex justify-content-end w-100">
                                <button
                                  className="btn btn-btn-yellow-new mt-3 mb-2"
                                  onClick={e => {
                                    onReplyComments(sdata.id);
                                  }}
                                >
                                  Post reply
                                </button>
                              </div>
                            </div>
                          )}

                          {/*nested replies */

                            sdata?.replies?.map(rep => {
                              return recursiveReplyrender(rep);
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="col-lg-4 col-md-12">
                  <div className="my-5 py-5 mmy-2 mpy-0">
                    {renderAuthorSlice()}
                  </div>
                  {renderUpComingTreks()}
                  {relatedArticles?.length > 0 && renderRelatedArticles()}
                  {renderLatestVideos()}
                  {renderLatestUpdates()}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-9 col-md-12">
            {renderUpComingTreks()}
        </div>
      </div> */}

          {/* <div className="row">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-lg-4 col-md-12">
             
                 {renderRelatedArticles()}

                 {renderLatestVideos()}

                {renderLatestUpdates()}
            
            </div>
          </div>
        </div>
      </div> */}
        </div>

      </div>
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={trekVideoUrl && trekVideoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
      <style jsx global>
        {customStyles}
      </style>
    </>
  );
};

export default PostRender;
