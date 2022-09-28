import { useEffect, useState } from "react";
import Link from "next/link";
import AvailableDates from "./AvailableDates";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { getBatchesByTrekId } from "services/queries";

const TrekCardSliceZone = ({ tData, getFamilyTrek, url, trekId, onlyFamilyTreks }) => {
  const [batchDates, setBatchDates] = useState({});

  useEffect(() => {
    const fetchDates = async () => {
      const results = await getBatchesByTrekId(trekId, 0, 0);

      const batchDates = {};
      results.forEach((batch) => {
        const batchStartDate = new Date(batch.startDate);
        const batchEndDate = new Date(batch.endDate);
        const batchDateUTC = Date.UTC(
          batchStartDate.getFullYear(),
          batchStartDate.getMonth()
        );

        if (batchDates[batchDateUTC]) {
          batchDates[batchDateUTC].push({
            startDate: batchStartDate,
            endDate: batchEndDate,
            status: batch.status,
            familyTrek: batch.familyTrek,
            availableSlots: batch.availableSlots
          });
        } else {
          batchDates[batchDateUTC] = [
            {
              startDate: batchStartDate,
              endDate: batchEndDate,
              status: batch.status,
              familyTrek: batch.familyTrek,
              availableSlots: batch.availableSlots
            },
          ];
        }
      });

      if (onlyFamilyTreks) {
        for (let month in batchDates) {
          batchDates[month] = batchDates[month].filter(trek => trek.familyTrek)

          if (batchDates[month].length === 0) delete batchDates[month]
        }
      }

      setBatchDates(batchDates);
    };

    fetchDates();
  }, []);

  return (
    <div>
      <div className="mx-4 m-mx-0 hvr-grow cursor-pointer">
        <div className="card_sec">
          <div className="card trek_card">
            <Link href={url ? url : "#"}>
              <a>
                <div className="choose_trek_image">
                  {tData?.primary?.trek_banner_image?.url ? (
                    <Image
                      src={tData?.primary?.trek_banner_image?.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                      alt="imgs"
                      unoptimized
                    />
                  ) : (
                    <img src="./ip.png" className="choose_trek_image" />
                  )}
                </div>
                <div className="px-3 py-2">
                  <div className="d-flex align-items-center card-info-text">
                    <div>
                      <p>{tData?.primary?.duration[0]?.text}</p>
                    </div>
                    <div>
                      <p className="list-dot-style px-1">
                        <span>.</span>
                      </p>
                    </div>
                    <div>
                      <p>{tData?.primary?.difficulty[0]?.text}</p>
                    </div>
                  </div>

                  <div>
                    <p className="title-diplay-3-18px text-uppercase frg-mob">
                      <b>
                        {tData?.primary?.trek_caption?.length > 25
                          ? `${tData?.primary?.trek_caption?.substring(
                            0,
                            25
                          )}...`
                          : tData?.primary?.trek_caption}
                      </b>
                    </p>
                    <div className="p-text-4 trek_card_desc_min_height">
                      {/* {RichText.asText(tData?.primary?.sub_heading)} */}
                      {RichText.asText(tData?.primary?.sub_heading)?.length > 75
                        ? `${RichText.asText(
                          tData?.primary?.sub_heading
                        ).substring(0, 75)}...`
                        : RichText.asText(tData?.primary?.sub_heading)}
                    </div>
                    <div className="d-flex align-items-center flex-wrap pt-2 pb-2 ">
                      <div className="flex-grow-1">
                        {getFamilyTrek !== undefined ? (
                          <p className="m-0 fam_trek">
                            <span>*</span> Family trek
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        <button className="btn btn-ih-green">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <AvailableDates batchDates={batchDates} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekCardSliceZone;
