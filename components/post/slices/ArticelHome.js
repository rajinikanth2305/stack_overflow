import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";

/**
 * Quote slice component
 */
const ArticelHome = ({ slice }) => (
  <div>
    <div className="article_banner_img">
      <img src="/Exclusion_1.png" />
    </div>

    <div className="container">
      <div className="row my-3 pr-4">
        <div className="col-lg-3 col-md-12 pr-5p">
          <div className="position-sticky border-0">
            <p className="p-text-3-fgc border-bottom-0 m-0">
              <span>
                How To Choose Trek Pants — The Ultimate Trekking Pants Guide
                2020
              </span>
            </p>
            <p className="border-bottom-custom-1 pb-2 mb-2"></p>
            <p className="p-text-small mb-2">Share this story</p>
            <div>
              <a href="">
                <span className="social_bg mx-1">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </span>
              </a>
              <a href="">
                <span className="social_bg mx-1">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </span>
              </a>
              <a href="">
                <span className="social_bg mx-1">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </span>
              </a>
              <a href="">
                <span className="social_bg mx-1">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div>
            <p className="p-text-3-fg mb-4">
              <span className="border-bottom-custom-1 pb-2">
                THURSDAY TREK TALK
              </span>
            </p>
            <h2 className="title-h2 border-0 mb-0 pb-0">
              How To Choose Trek Pants — The Ultimate Trekking Pants Guide 2021
            </h2>
            <div className="auth_sec">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <p className="m-0 p-text-small-black">
                    By <b>Arjun Majumdar</b>
                  </p>
                  <p className="m-0 p-text-small-black">24 January, 2020</p>
                </div>
                <div>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12"></div>
      </div>

      <div className="row my-3">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="border-bottom mb-4 pb-3">
                <p className="p-text-4 mb-4 ar_p">
                  Here is a guide on how to choose the perfect trek pants
                  without losing your mind
                </p>
                <p className="p-text-4 mb-4 ar_p">
                  Buying trek pants can get confusing as they are not everyday
                  wear. You can’t just buy them off the shelf. Why? Because not
                  knowing what qualities to look for in a trek pants can keep
                  you confused for hours
                </p>
                <p className="p-text-4 mb-4 ar_p">
                  That’s where this guide on{" "}
                  <a href="" className="text-decoration-underline">
                    how to choose a trek pant
                  </a>{" "}
                  comes to your aide. It’s a bit of a deep-dive, so stay on
                  until the end. (And, bookmark it to save time later)
                </p>
                <p className="p-text-4 mb-4 ar_p">
                  I also want you to know I am not a brand endorser of any of
                  these pants. These are good pants used extensively by a group
                  of people who mistreat them the most — our trek leaders. They
                  put them through the ultimate test almost every day of their
                  lives.
                </p>
              </div>

              <div className="">
                <p className="p-text-4 mb-4 ar_p">
                  <strong>And for ease of navigation,</strong> here’s a quick
                  table of contents that lists everything you will find in this
                  guide:{" "}
                </p>

                <ul className="ar_menu_links">
                  <li>
                    <span>How To Choose Good Trekking Pants</span>
                  </li>
                  <li>
                    <span>3 Types Of Trekking Pants To Choose From</span>
                  </li>
                  <li>
                    <span>Trekking Pants For Women</span>
                  </li>
                  <li>
                    <span>8 Best Trekking Pants From Decathlon</span>
                  </li>
                  <li>
                    <span>
                      Most Commonly Asked Questions Around Trekking Pants
                    </span>
                  </li>
                </ul>

                <p className="p-text-4 my-4">
                  With that structure in mind, let’s start with the first
                  section.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="text-center">
                <div className="auth_image">
                  <img src="/p-icon.png" />
                </div>
                <p class="m-0 p-text-3-fg text-center mt-1">Arjun Majumdar</p>
                <p class="m-0 p-text-small-black text-center">
                  Founder, CEO, Indiahikes
                </p>
              </div>

              <div className="grey-bg border-top-c">
                <p className="p-text-4 mb-2">
                  <strong>About the author</strong>
                </p>
                <p className="p-text-small-black">
                  An entrepreneur by profession and a trekker by passion, Arjun
                  started Indiahikes in 2008. With a vision to explore and
                  document new trails, solve problems in the mountains and
                  implement sustainable ways of trekking. Arjun leads
                  Indiahikes, a community that has changed the face of trekking
                  in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-9 col-md-12">
          <p className="p-text-1 border-l mb-4">
            <strong>How To Choose Good Trekking Pants</strong>
          </p>

          <div>
            <p className="p-text-4 mb-4 ar_p">
              <strong>A. Look At The Material</strong>
            </p>
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <p className="p-text-4 mb-4 ar_p">
                  It’s important to know which material works for trekking
                  pants. For the wrong one will make you really uncomfortable on
                  a trek.
                </p>
                <p className="p-text-4 mb-4 ar_p">
                  Ideally, your trek pants must be made out of Polyamide. It is
                  a wonder material that is a combination of fibers, either
                  polyester+elastane if it’s stretchable or 100 % polyester for
                  regular trekking pants. This combination feels like a God-sent
                  answer to what we wanted in trekking pants. And I will tell
                  you why.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12"></div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-lg-5 col-md-12 pr-5p">
              <div>
                <p className="p-text-4 mb-4 ar_p">
                  Polyamides are specially designed for sportswear. They are
                  incredibly durable and strong. If you don’t get polyamides,
                  then a high polyester blend will do.
                </p>
                <p className="p-text-4 mb-4 ar_p">
                  But, how do you know if your trek pants are made of Polyamide?
                  Look for the fabric material in the label.
                </p>
                <p className="p-text-4 mb-4 ar_p">
                  Moving on, there are four other things to look for — the
                  material of your pants must be lightweight, quick-dry, easy to
                  clean and breathable.
                </p>
                <p className="p-text-4 mb-4 ar_p">
                  Now, let’s see why they are important.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="card">
                <div className="ar_img">
                  <img src="/Image_277.png" width="100%" height="310px" />
                </div>
                <p className="p-text-small m-0 px-3 my-2">
                  A view of the Gokyo village from Gokyo Ri. The Gokyo Ri route
                  is much more rewarding than the main EBC route. Picture by
                  Geet Tryambake
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <p className="p-text-4 mb-4 ar_p">
                <strong>1. Lightweight:</strong> The wrong kind of pants will
                weigh you down on a big trip, like a trek. Here, even a few
                grams matter. So, weigh your options (literally) while choosing
                clothes for a trek. Don’t let your pants weigh more than 150
                grams. That’s half the weight of your typical city trouser
                (250-500 grams)!
              </p>
              <p className="p-text-4 mb-4 ar_p">
                And that difference comes in because of the polyamides. They
                make your trek pants much lighter than regular pants and makes
                them easier to carry. In fact, this is why Sandhya UC,
                Co-founder and COO of Indiahikes, loves her trekking pants and
                takes special care of them.
              </p>

              <div className="border-top border-bottom quote-box py-3">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-3 col-md-12 border-r">
                    <div className="text-center">
                      <div className="auth_image">
                        <img src="/p-icon.png" />
                      </div>
                      <p class="m-0 p-text-3-fg text-center mt-1">
                        Arjun Majumdar
                      </p>
                      <p class="m-0 p-text-small-10-black text-center">
                        Founder, CEO, Indiahikes
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-12">
                    <p className="p-display-1 px-3">
                      I keep my trekking pants only for treks. I also use them
                      for long-distance travels because they are so light. On my
                      recent trip to Spain, my backpack for a 10-day trip
                      weighed less than 7 kgs with 5 changes of clothes. That’s
                      what lightweight clothes do to you. You can take more for
                      less.
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-4 pt-2">
                <p className="p-text-4 mb-4 ar_p">
                  {" "}
                  <strong>2. Quick-dry:</strong> Weather is unpredictable on a
                  Himalayan trek. Dark clouds simply roll in unannounced and
                  soak you in a surprise shower. Regardless of the season. If
                  you’ve ever trekked in the Himalayas you will know this.{" "}
                </p>

                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="card left-position-img">
                      <div className="ar_img">
                        <img src="/Image_277.png" width="100%" height="310px" />
                      </div>
                      <p className="p-text-small m-0 px-3 my-2">
                        Your trekking pants will get wet while crossing a stream
                        | Picture by Swathi Chatrapathy
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div>
                      <p className="p-text-4 mb-4 ar_p">
                        More than that, there is always mud, slush and wet
                        patches to negotiate on a trek.In times like these,
                        wearing trekking pants that dry quickly is important.
                        Good news — pants made of polyamide or high polyester do
                        that beautifully.
                      </p>
                      <p className="p-text-4 mb-4 ar_p">
                        On the other hand, the surface of certain trek pants,
                        like Men’s Mountain Trekking Trousers – TREK 900 are
                        treated, so instead of getting absorbed, water droplets
                        simply roll off.
                      </p>
                      <p className="p-text-4 mb-4 ar_p">
                        Apart from keeping you dry, the polyamides in trek pants
                        can also keep you dry, shares Senior Trek Leader
                        Dushyant Sharma.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border-top border-bottom quote-box py-3">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-3 col-md-12 border-r">
                        <div className="text-center">
                          <div className="auth_image">
                            <img src="/p-icon.png" />
                          </div>
                          <p class="m-0 p-text-3-fg text-center mt-1">
                            Dushyant Sharma
                          </p>
                          <p class="m-0 p-text-small-10-black text-center">
                            Senior Trek Leader & Video Content Creator
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12">
                        <p className="p-display-1 px-3">
                          Quick-dry pants have a unique quality — they are
                          warmer than usual trousers or track pants made of
                          cotton. See, cotton is designed to keep you cool, and
                          that’s not favourable in cold, Himalayan temperatures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12"></div>
          </div>
        </div>
      </div>
    </div>
    <style jsx global>
      {customStyles}
    </style>
  </div>
);

export default ArticelHome;
