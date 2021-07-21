import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";

const VoucherList = () => {
  return (
    <>
      <div className="mt-4">
        <div className="container">
          <div>
            <p className="p-text-1 font-weight-bold mb-5">
              <span className="border-bottom-custom-1 pb-2">
                your Indiahikes trekking history
              </span>
            </p>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <p className="p-text-1 font-weight-bold">
                All your Indiahikes trek bookings
              </p>
              <div className="table-responsive">
                <table class="table table-dashboard-voucher">
                  <thead>
                    <tr className="header-bg">
                      <th className="w-20per">trek name</th>
                      <th className="w-20per">batch dates</th>
                      <th className="w-15per">participants</th>
                      <th className="w-15per">Experience Coordinator</th>
                      <th className="w-15per">trekking equipment</th>
                      <th className="w-15per">booking status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dayara Bugyal trek</td>
                      <td>16 Sep 2019 to 23 Sep 2019</td>
                      <td>3 trekkers</td>
                      <td className="text-decoration-underline">
                        Download receipts
                      </td>
                      <td className="text-decoration-underline text-info">
                        Download Certificate
                      </td>
                      <td>
                        <button className="btn table-btn-green-lg w-100">
                          completed
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>kashmir great lakes trek</td>
                      <td>07 Aug 2019 to 14 Aug 2019</td>
                      <td>1 trekker</td>
                      <td className="text-decoration-underline">
                        Download receipts
                      </td>
                      <td className="text-decoration-underline text-info">
                        Not applicable
                      </td>
                      <td>
                        <button className="btn table-btn-maroon w-100">
                          cancelled
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>roopkund trek</td>
                      <td>23 May 2016 to 31 May 2016</td>
                      <td>2 trekker</td>
                      <td className="text-decoration-underline">
                        Download receipts
                      </td>
                      <td className="text-decoration-underline text-info">
                        Download Certificate
                      </td>
                      <td>
                        <button className="btn table-btn-green-lg w-100">
                          completed
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-12">
              <p className="p-text-1 font-weight-bold">Trek Vouchers</p>
              <div className="table-responsive">
                <table class="table table-dashboard-voucher-style-1">
                  <thead>
                    <tr className="header-bg">
                      <th className="w-20per">Voucher Code</th>
                      <th className="w-20per">Valid till</th>
                      <th className="w-15per">Voucher Amount</th>
                      <th className="w-15per">Amount Used</th>
                      <th className="w-15per">Balance Amount</th>
                      <th className="w-15per">Voucher Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>24tgsdu7i353</td>
                      <td>16 Sep 2021</td>
                      <td>Rs. 10,560</td>
                      <td>Rs. 0</td>
                      <td>Rs. 0</td>
                      <td>
                        <button className="btn table-btn-yellow w-100">
                          Active
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>24tgsdu7i353</td>
                      <td>16 Sep 2021</td>
                      <td>Rs. 10,560</td>
                      <td>Rs. 0</td>
                      <td>Rs. 0</td>
                      <td>
                        <button className="btn table-btn-gray w-100">
                          Expired
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>24tgsdu7i353</td>
                      <td>16 Sep 2021</td>
                      <td>Rs. 10,560</td>
                      <td>Rs. 0</td>
                      <td>Rs. 0</td>
                      <td>
                        <button className="btn table-btn-gray w-100">
                          Used
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-12">
              <p className="p-text-1 font-weight-bold">Backpack Offloading</p>
              <div className="table-responsive">
                <table class="table table-dashboard-voucher-style-2">
                  <thead>
                    <tr className="header-bg">
                      <th className="w-20per">trek name</th>
                      <th className="w-20per">batch dates</th>
                      <th className="w-15per">participants</th>
                      <th className="w-15per">Payment Receipts</th>
                      <th className="w-15per">Offloading Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dayara Bugyal trek</td>
                      <td>16 Sep 2019 to 23 Sep 2019</td>
                      <td>3 trekkers</td>
                      <td className="text-decoration-underline">
                        Download receipts
                      </td>
                      <td>
                        <button className="btn table-btn-gray w-100">
                          Used
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>kashmir great lakes trek</td>
                      <td>07 Aug 2019 to 14 Aug 2019</td>
                      <td>1 trekker</td>
                      <td className="text-decoration-underline">
                        Download receipts
                      </td>
                      <td>
                        <button className="btn table-btn-maroon w-100">
                          cancelled
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default VoucherList;
