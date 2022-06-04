import { RichText } from "prismic-reactjs";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import { customStyles } from "styles";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  getUserVoucher,
  getWooCustomerId,
  getWooCustomerOrders
} from "../../../../services/queries";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { Toast } from "primereact/toast";
import { Checkbox } from "primereact/checkbox";
import moment from "moment";
import { useRouter } from "next/router";

const RentGear = forwardRef((props, ref) => {
  const [showOffRentContents, setShowRentContents] = useState(false);
  const [wooCustomer, setWooCustomer] = useState(undefined);
  const [wooOrders, setWooOrders] = useState([]);
  const [order, setOrder] = useState(undefined);
  const [render, setRender] = useState(false);
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const router = useRouter();
  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    changeState(data) {
      initData(data);
    }
  }));

  const initData = data => {
    // console.log(data);
    if (deriveBookingState(data) == true) {
      
      /*if (wooOrders.length == 0) {
        getWooCustomerId(data.email).then(customerData => {
          if (customerData.length > 0) {
            const customer_id = customerData[0].id;
            // console.log(customer_id);
            setWooCustomer(customerData[0]);
            getWooCustomerOrders(customer_id).then(orders => {
              // console.log(orders);
              setWooOrders(orders);
              const filteredOrder = filterTrek(data, orders);
              preparePresentation(filteredOrder);
            });
          } else {
            preparePresentation(undefined);
          }
        });
      } else {
        const filteredOrder = filterTrek(data, wooOrders);
        preparePresentation(filteredOrder);
      }
    }*/
    //// load the rental gear orders....
  }
  };

  const preparePresentation = order => {
    if (order !== undefined) {
      setOrder(order);
      const arr = Array.from(new Array(order?.line_items), (x, i) => i);
      setIndexes(arr);
      setCounter(arr.length);
      setRender(true);
    } else {
      setOrder(undefined);
      setIndexes([]);
      setCounter(0);
      setRender(false);
    }
  };

  const filterTrek = (bookingTrekData, orders) => {
    let filterOrder = undefined;
    const trekName = "Kedarkantha Trek321"; //" "bookingTrekData.trekName;
    const startDate = bookingTrekData.startDate;
    const endDate = bookingTrekData.endDate;

    orders.map(order => {
      const trek = order.meta_data.find(
        me => me.key.toLowerCase() === "ih_order_trek_name"
      );
      const dt1 = order.meta_data.find(
        me => me.key.toLowerCase() === "ih_order_trek_start_date"
      ); //6th Feb, 2022
      const dt2 = order.meta_data.find(
        me => me.key.toLowerCase() === "ih_order_trek_end_date"
      ); // 11th Feb, 2022

      //   console.log(dt1);
      //   console.log(dt2);
      //   console.log(trek);

      if (
        trek !== undefined &&
        trek.value.toLowerCase() === trekName.toLowerCase()
      ) {
        const fmt1 = moment(startDate).format("Do MMM, YYYY");
        const fmt2 = moment(endDate).format("Do MMM, YYYY");
        console.log(fmt1);
        console.log(fmt2);

        if (fmt1 === dt1.value && fmt2 === dt2.value) {
          //filterResults.push(order);
          filterOrder = order;
          return filterOrder;
          console.log("order-pushed");
        }
      }
    });
    return filterOrder;
  };

  const deriveBookingState = activeBooking => {
    if (activeBooking.bookingState === "COMPLETED") {
      setShowRentContents(true);
      return true;
    } else {
      setShowRentContents(false);
      return false;
    }
  };

  const navigateRentalStore = orderId => {
    router.push(`/https://store.indiahikes.com/my-orders?orderId=${orderId}`);
  };

  return (
    <>
      {showOffRentContents === true ? (
        <div>
          <div>
            <h5 className="p-text-3-fg b-left-blue-3px mb-3">Rent gear</h5>
            <p className="col-md-8 p-text-4">
              <>
                Why buy when you can rent?
                <br />
                We have introduced high-quality gear at very low rates for more
                and more people to rent. We strongly believe this will help
                people spend less and trek more.
              </>
            </p>
            <div className="d-flex justify-content-end">
              <span className="btn table-btn-yellow hvr-grow">
                <a href="https://store.indiahikes.com" target="new">
                  Rent gear
                </a>
              </span>
            </div>
          </div>
          {render == true ? (
            <div>
              <p className="mb-0">
                <span className="p-text-3-fg-book px-2">
                  &nbsp; Order number:{" "}
                </span>{" "}
                <span className="p-text-3-fg">{order.id}</span>
              </p>
              <p className="mb-0">
                <span className="p-text-3-fg-book px-2">
                  &nbsp; Order status:{" "}
                </span>{" "}
                <span className="p-text-3-fg">{order.status}</span>
              </p>

              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="grey-bg">
                    {indexes?.map(index => {
                      const item = order?.line_items[index];
                      return (
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <p className="p-text-3-fgc mb-0">
                              {index}.{item?.name}
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-fgc mb-0">
                              Rs. {item?.total}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                    <div className="d-flex justify-content-end align-items-center mb-2">
                      <div>
                        <p className="p-text-3-fgc mb-0 c-p-5-2 border-top-rear-2 pt-1">
                          Total
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-fgc mb-0 border-top-rear-2 pt-1">
                          Rs. {order?.total}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center mb-2">
                      <div>
                        <p className="p-text-3-fgc mb-0 c-p-5-2 border-bottom-rear-2 pb-1">
                          Indiahikes discount
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-fgc mb-0 border-bottom-rear-2 pb-1">
                          -Rs. {order?.discount_total}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center mb-2">
                      <div>
                        <p className="p-text-3-fgc mb-0 c-p-5-2">YOU PAID</p>
                      </div>
                      <div>
                        {order.date_paid !== "" ? (
                          <p className="p-text-3-fgc mb-0">
                            Rs. {order?.total}
                          </p>
                        ) : (
                          <p className="p-text-3-fgc mb-0">Rs. 0</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-end mt-4">
                    <span className="btn table-btn-yellow">
                      <a
                        href="https://store.indiahikes.com/my-orders"
                        target="new"
                      >
                        Modify/ Rent more
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="p-text-4 mb-0">
              <strong>
                {/* Rent Gear information is not found for this Trek name and Date */}
              </strong>
            </p>
          )}
        </div>
      ) : (
        <p className="p-text-4 mb-0">
          Rent a Gear action will enable after the trek-payment
        </p>
      )}
    </>
  );
});

export default RentGear;
