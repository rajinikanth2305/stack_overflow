import { useEffect, useState } from "react";
import Link from "next/link";
import AvailableDates from "./AvailableDates";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { getBatchesByTrekId } from "services/queries";

const TrekCardSliceZoneMobile = ({ tData, getFamilyTrek, url, trekId, onlyFamilyTreks }) => {
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
    <div className="col-12">
      <div className="card_sec hvr-grow">
        <div className="card trek_card_mb mb-4">
          <Link href={url ? url : "#"}>
            <a>
              <div className="d-flex">
                <div className="trek-banner-image">
                  {tData?.primary?.trek_banner_image?.url && (
                    <Image
                      src={tData?.primary?.trek_banner_image?.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                      alt="imgs"
                      unoptimized
                    />
                  )}
                </div>
                <div className="px-3 pt-2">
                  <div>
                    <h3 className="m-title-3 text-uppercase">
                      {tData?.primary?.trek_caption?.length > 20
                        ? `${tData?.primary?.trek_caption.substring(0, 20)}...`
                        : tData?.primary?.trek_caption}
                    </h3>
                    <p className="m-display-2">
                      {RichText.asText(tData?.primary?.sub_heading)}
                    </p>
                    <p className="m-card-info-text m-0">
                      <span className="list-dot-style-mob"></span>{" "}
                      {tData?.primary?.duration[0]?.text}
                    </p>
                    <p className="m-card-info-text m-0">
                      <span className="list-dot-style-mob"></span>{" "}
                      {tData?.primary?.difficulty[0]?.text}
                    </p>
                    {getFamilyTrek === undefined ? (
                      <p className="m-card-info-text">
                        <span className="list-dot-style-mob"></span> Family trek
                      </p>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-items-center flex-wrap pt-2">
                      <div className="pb-3">
                        {/* <Link href={url ? url : "#"}> */}
                        <button className="btn m-btn-ih-green px-2">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <AvailableDates batchDates={batchDates} mobile />
        </div>
      </div>
    </div>
  );
};

export default TrekCardSliceZoneMobile;
