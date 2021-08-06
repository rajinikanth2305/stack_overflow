import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";
import { Progress } from "reactstrap";

const UserPT = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dummyDataArray = [
    {
      id: 1,
      trekName: "miyar valley Trek",
      batchDate: "16 Sep - 23 Sep 2021",
      participants: 3,
      experienceCoordinator: "Nandana Kamasani",
      trekStatus: "Trek Completed",
      reviewStatus: "no"
    },
    {
      id: 2,
      trekName: "Deoriatal Chandrashila Trek",
      batchDate: "16 Sep - 23 Sep 2021",
      participants: 2,
      experienceCoordinator: "Nandana Kamasani",
      trekStatus: "Trek Completed",
      reviewStatus: "Yes"
    },
    {
      id: 3,
      trekName: "Kashmir great lakes Trek",
      batchDate: "18 Aug - 24 Aug 2019",
      participants: 12,
      experienceCoordinator: "Prathima Chhabria",
      trekStatus: "Cancelled",
      reviewStatus: "-"
    }
  ];

  const dummyData = dummyDataArray.map(function(data, i) {
    return (
      <>
        <div className="card mb-4" key={data.id}>
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="trekimg">
                <img src="/Rectangle_486.png" />
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="py-3 px-5">
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <h3 className="title-h3">{data.trekName}</h3>
                  </div>
                  <div>
                    <p className="m-0 p-text-10-fgb">{data.trekStatus}</p>
                  </div>
                </div>
                <Progress
                  className={
                    data.trekStatus === "Trek Completed"
                      ? "trek-completed-progress"
                      : "trek-cancelled-progress"
                  }
                  value="100"
                />

                <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                  <div>
                    <p className="m-0 p-text-small-fg">batch dates</p>
                    <p className="m-0 p-text-2-fg">{data.batchDate}</p>
                  </div>
                  <div>
                    <p className="m-0 p-text-small-fg">participants</p>
                    <p className="m-0 p-text-2-fg">
                      {data.participants} trekkers
                    </p>
                  </div>
                  <div>
                    <p className="m-0 p-text-small-fg">
                      Experience Coordinator
                    </p>
                    <p className="m-0 p-text-2-fg text-decoration-underline">
                      {data.experienceCoordinator}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <p className="m-0 text-decoration-underline p-text-small-fg">
                      View receipts
                    </p>
                    <p className="m-0 text-decoration-underline p-text-small-fg">
                      View Rented Gear
                    </p>
                  </div>
                  <div>
                    {data.trekStatus === "Trek Completed" && (
                      <button className="btn table-btn-blue">
                        <span className="px-2">Download Certificate</span>
                      </button>
                    )}
                    {data.reviewStatus === "no" && (
                      <button className="btn table-btn-yellow ml-custom-3">
                        Write About Your Experience
                      </button>
                    )}
                    {data.trekStatus === "Cancelled" && (
                      <button className="btn table-btn-green-lg">
                        register again
                      </button>
                    )}
                  </div>
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
      <div>
        <div className="container container-custom p-0">
          <div className="bg-gray-shade">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-12 bg-gray border-right b-right-2px">
                  <div className="mb-2 py-4">
                    <p className="p-text-1 font-weight-bold m-0">
                      Hi Sandhya Uc
                    </p>
                    <p className="p-text-1 font-weight-bold">
                      Welcome To Your Indiahikes Trek Dashboard!
                    </p>
                    <p className="col-md-8 p-text-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequa
                    </p>
                  </div>

                  <div>
                    <h5 className="p-text-2-fg b-left-3px">
                      your Previous Indiahikes treks
                    </h5>

                    <div className="row">
                      <div className="col-lg-12 col-md-12">{dummyData}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 bg-white p-0">
                  <div>
                    <div className="menu-title-bg py-3 px-3">
                      <p className="p-text-2 font-weight-bold m-0">
                        Trekker Dashboard
                      </p>
                    </div>
                    <div className="right-menu-dashboard sticky-top">
                      <ul>
                        <li>
                          <Link href="../../../user-dashboard/user-upcoming-treks">
                            <span>upcoming treks</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-previous-treks">
                            <span className="active-li">previous treks</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-myprofile">
                            <span>my profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-trekvouchers">
                            <span>trek vouchers</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default UserPT;
