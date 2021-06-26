import React, { useRef, useEffect, useState } from "react";
import {
  TrekBannerWithCaption,
  TrekOverView,
  TrekVideosComponent,
  TrekExpertSpeak,
  TrekGallery,
  KnowYourTrek,
  FamilyTrek,
  GetReadyForTrek,
  TrekWhatSays,
  SustainableTrekking,
  BookYourTrek,
  OtherTreksLike
  // QuickItineraryComponent
} from "./slices";
import { trekStyle } from "styles";
const useMountEffect = fun => useEffect(fun, []);

/**
 *  slice zone component
 */

const TrekSliceZone = ({ sliceZone }) => {
  const [wPosition, setWPosition] = useState(0);

  const [
    wtrekOverviewPositionPosition,
    setWtrekOverviewPositionPosition
  ] = useState(0);
  const trek_overviews = useRef(0);
  const executeScrolltrek_overview = () =>
    trek_overviews.current.scrollIntoView();
  useMountEffect(executeScrolltrek_overview);

  const [trekVideosPosition, settrekVideosPosition] = useState(0);
  const trekVideos = useRef(0);
  const executeScrollTrekVideos = () => trekVideos.current.scrollIntoView();
  useMountEffect(executeScrollTrekVideos);

  const [expertSpeakIdPosition, setexpertSpeakId] = useState(0);
  const expertSpeakId = useRef(0);
  const executeScrollexpertSpeakId = () =>
    expertSpeakId.current.scrollIntoView();
  useMountEffect(executeScrollexpertSpeakId);

  const [trekGalleryIdPosition, settrekGalleryId] = useState(0);
  const trekGalleryId = useRef(0);
  const executeScrolltrekGalleryId = () =>
    trekGalleryId.current.scrollIntoView();
  useMountEffect(executeScrolltrekGalleryId);

  const listenScrollEvent = e => {
    setWPosition(window.scrollY);
    setWtrekOverviewPositionPosition(
      trek_overviews.current && trek_overviews.current.offsetTop
    );
    settrekVideosPosition(trekVideos.current && trekVideos.current.offsetTop);
    setexpertSpeakId(expertSpeakId.current && expertSpeakId.current.offsetTop);
    settrekGalleryId(trekGalleryId.current && trekGalleryId.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const trekBanner = sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "trek_banner":
        return <TrekBannerWithCaption slice={slice} key={`slice-${index}`} />;
      // case "trek_overview":
      //   return <TrekOverView slice={slice} key={`slice-${index}`} />;
      // case "trek_videos":
      //   return <TrekVideosComponent slice={slice} key={`slice-${index}`} />;
      // case "expert_speak":
      //   return <TrekExpertSpeak slice={slice} key={`slice-${index}`} />;
      // case "trek_discovered_pictures":
      //   return <TrekGallery slice={slice} key={`slice-${index}`} />;
      // case "know_your_trek":
      //   return <KnowYourTrek slice={slice} key={`slice-${index}`} />;
      // case "trek_family_trek":
      //   return <FamilyTrek slice={slice} key={`slice-${index}`} />;
      // case "trek_family_trek":
      //   return <GetReadyForTrek slice={slice} key={`slice-${index}`} />;
      // case "trek_what_trekkers_say":
      //   return <TrekWhatSays slice={slice} key={`slice-${index}`} />;
      // case "sustainable_trekking":
      //   return <SustainableTrekking slice={slice} key={`slice-${index}`} />;
      // case "book_your_trek":
      //   return <BookYourTrek slice={slice} key={`slice-${index}`} />;
      // case "others_treks_like":
      //   return <OtherTreksLike slice={slice} key={`slice-${index}`} />;
      // case "whyit_so_different":
      //   return <QuickItineraryComponent slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
  const expertSpeak = sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "expert_speak":
        return (
          <div ref={expertSpeakId}>
            <TrekExpertSpeak slice={slice} key={`slice-${index}`} />
          </div>
        );
      default:
        return null;
    }
  });
  const trekGallery = sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "trek_discovered_pictures":
        return (
          <div ref={trekGalleryId}>
            <TrekGallery slice={slice} key={`slice-${index}`} />
          </div>
        );
      default:
        return null;
    }
  });
  const otherSec = sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "know_your_trek":
        return <KnowYourTrek slice={slice} key={`slice-${index}`} />;
      case "trek_family_trek":
        return <FamilyTrek slice={slice} key={`slice-${index}`} />;
      case "trek_family_trek":
        return <GetReadyForTrek slice={slice} key={`slice-${index}`} />;
      case "trek_what_trekkers_say":
        return <TrekWhatSays slice={slice} key={`slice-${index}`} />;
      case "sustainable_trekking":
        return <SustainableTrekking slice={slice} key={`slice-${index}`} />;
      case "book_your_trek":
        return <BookYourTrek slice={slice} key={`slice-${index}`} />;
      case "others_treks_like":
        return <OtherTreksLike slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
  return (
    <>
      <div className="row" style={{margin: '0'}}>
        <div className="col-md-12" style={{padding: '0'}}>{trekBanner}</div>
      </div>
      <div className="container">
        <div className="row" style={{margin: '0'}}>
          <div className="col-lg-10 col-md-12 border-line-right">
            {sliceZone.map((slice, index) => {
              switch (slice.slice_type) {
                case "trek_overview":
                  return (
                    <div ref={trek_overviews}>
                      <TrekOverView slice={slice} key={`slice-${index}`} />;
                    </div>
                  );
                case "trek_videos":
                  return (
                    <div ref={trekVideos}>
                      <TrekVideosComponent
                        slice={slice}
                        key={`slice-${index}`}
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
          <div className="col-lg-2 col-md-12 d-m-none">
            <div className="sticky-top">
              <div className="right-nav-details my-5 pt-4">
                <ul>
                  <li
                    onClick={executeScrolltrek_overview}
                    className={
                      wPosition === wtrekOverviewPositionPosition
                        ? "highlight"
                        : ""
                    }
                  >
                    <span>highlights</span>
                  </li>
                  <li
                    onClick={executeScrollTrekVideos}
                    className={
                      wPosition === trekVideosPosition ? "highlight" : ""
                    }
                  >
                    <span>Trek Videos</span>
                  </li>
                  <li
                    onClick={executeScrollexpertSpeakId}
                    className={
                      wPosition === expertSpeakIdPosition ? "highlight" : ""
                    }
                  >
                    Expert Speak
                  </li>
                  <li
                    onClick={executeScrolltrekGalleryId}
                    className={
                      wPosition === trekGalleryIdPosition ? "highlight" : ""
                    }
                  >
                    Photo Gallery
                  </li>
                </ul>
              </div>
              <div className="right-nav-details sec-2 my-3">
                <ul>
                  <li>Know Your Trek</li>
                  <li>get ready for your trek</li>
                  <li>why trek with indiahikes</li>
                  <li>view dates / register</li>
                </ul>
              </div>
              <style jsx global>
                {trekStyle}
              </style>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{margin: '0'}}>
        <div className="col-lg-12 col-md-12">{expertSpeak}</div>
      </div>
      <div className="row" style={{margin: '0'}}>
        <div className="col-lg-12 col-md-12">{trekGallery}</div>
      </div>
      <div className="row" style={{margin: '0'}}>
        <div className="col-lg-12 col-md-12">{otherSec}</div>
      </div>
    </>
  );
};
export default TrekSliceZone;
