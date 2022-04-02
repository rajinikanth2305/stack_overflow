import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Link from "next/link";

const DiyStateList = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;

  const { query } = useRouter();
  const stateName = query && query?.name;
  const [stateList, setStateList] = useState();

  useEffect(() => {
    if (!stateName) {
      return;
    }
    const getStateListData = async () => {
      const client = Client();
      const stateDiyList = await client.query(
        Prismic.Predicates.fulltext(
          "my.document_trek_type.categories",
          stateName
        )
      );
      setStateList(stateDiyList);
    };
    getStateListData();
  }, [stateName]);

  const stateDiyListTreks =
    stateList &&
    stateList?.results?.map(function(data, i) {
      let url;
      const slugUrl = data?.uid;
      if (slugUrl) {
        url = `/documented-trek/${slugUrl}`;
      }
      const getArticleImage = data?.data?.body?.filter(
        x => x.slice_type === "image_with_caption"
      );
      const getArticleHeadingText = data?.data?.body?.find(
        x => x.slice_type === "text"
      );
      return (
        <div className="col-lg-4 col-md-12 col-12" key={i}>
          <div className="hvr-grow cursor-pointer">
            <Link href={url ? url : "#"}>
              <div className="card_sec">
                <span className="trek_status">
                  {data?.data?.categories.match(/Easy/g)
                    ? "Easy"
                    : data?.data?.categories.match(/Moderate/g)
                    ? "Moderate"
                    : data?.data?.categories.match(/Difficult/g)
                    ? "Difficult"
                    : ""}
                </span>
                <div className="card trek_card">
                  <div alt="imgs" className="best_treks_images">
                    <div className="bg_overlay_trek_image_bg h-100">
                      <div className="h-100">
                        <div className="d-flex align-items-end justify-content-center w-100 h-100 px-4 py-3">
                          <div className="w-100">
                            <p className="p-text-1-main m-0">
                              {RichText.asText(data?.data?.title)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {getArticleImage &&
                      getArticleImage[0]?.primary?.image?.url && (
                        <Image
                          src={
                            getArticleImage &&
                            getArticleImage[0]?.primary?.image?.url
                          }
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      )}
                  </div>
                  <div className="px-3 py-2">
                    {/* <div className="d-flex align-items-center card-info-text">
                    <div>
                      <p>{data?.data[0]?.primary?.duration[0]?.text}</p>
                    </div>
                    <div>
                      <p className="list-dot-style px-1">
                        <span>.</span>
                      </p>
                    </div>
                    <div>
                      <p>{data?.data[0]?.primary?.difficulty[0]?.text}</p>
                    </div>
                  </div> */}

                    <div>
                      <p className="p-text-4">
                        {data?.data?.sub_title}
                        {/* {RichText.asText(
                          getArticleImage &&
                            getArticleImage[0]?.primary?.caption
                        )?.length > 120
                          ? `${RichText.asText(
                              getArticleImage &&
                                getArticleImage[0]?.primary?.caption
                            )?.substring(0, 120)}...`
                          : RichText.asText(
                              getArticleImage &&
                                getArticleImage[0]?.primary?.caption
                            )} */}
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-3 p-btn-btm">
                      <div>
                        <button className="btn btn-bihtn-yellow">
                          View Trek
                        </button>
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
      <div className="container my-4">
        <h2 className="title-h2">
          <b>DYI in {stateName && stateName}</b>
        </h2>
        {stateList && stateList?.results?.length > 0 ? (
          <div className="row">{stateDiyListTreks}</div>
        ) : (
          <>
            <div className="d-flex col-lg-12 col-md-12 align-items-center justify-content-center mt-5 mb-3">
              <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-warning mx-2" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default DiyStateList;
