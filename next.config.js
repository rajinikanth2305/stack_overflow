const path = require("path");

module.exports = {
  target: "serverless",
  poweredByHeader: false,
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
    
  },
  images: {
    domains: ['images.prismic.io','img.youtube.com']
  },
  prismic: {
    preview: true
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          {key: "Access-Control-Allow-Credentials", value: "true" },
          {key: "Access-Control-Allow-Origin",value: "*"},
          {key: "Access-Control-Allow-Methods",value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"},
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Access-Control-Allow-Origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
        
            
                {
                    "source": "\/knowledge-base",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/why-choose-us",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/reviews",
                    "destination": "\/",
                    "permanent": true
                },
                // {
                //     "source": "\/green-trails",
                //     "destination": "\/green-trails",
                //     "permanent": true
                // },
                {
                    "source": "\/category\/latest-updates",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/karnataka",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/maharashtra",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/tamil-nadu",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/kerala",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/uttarakhand",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/himachal-pradesh",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/jammu-kashmir",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/west-bengal",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/delhi",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/sikkim",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/experiential-learning",
                    "destination": "\/family-trek-page",
                    "permanent": true
                },
                {
                    "source": "\/for-families-and-junior-youth",
                    "destination": "\/family-trek-page",
                    "permanent": true
                },
                {
                    "source": "\/careers-new",
                    "destination": "\/careers",
                    "permanent": true
                },
                {
                    "source": "\/tag\/career",
                    "destination": "\/careers",
                    "permanent": true
                },
                {
                    "source": "\/tag\/indiahikes",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/tag\/working",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/why-indiahikes",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/category\/get-inspired\/page\/2",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/category\/green-trails\/page\/2",
                    "destination": "\/green-trails",
                    "permanent": true
                },
                {
                    "source": "\/regions\/karnataka\/page\/2",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/maharashtra\/page\/2",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/uttarakhand\/page\/2",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/regions\/himachal-pradesh\/page\/2",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/tag\/family-treks",
                    "destination": "\/family-trek-page",
                    "permanent": true
                },
                {
                    "source": "\/seasons\/winter",
                    "destination": "\/upcoming-treks",
                    "permanent": true
                },
                {
                    "source": "\/tag\/easy-treks-in-uttarakhand",
                    "destination": "\/blog\/easy-treks-in-uttarakhand",
                    "permanent": true
                },
                {
                    "source": "\/tag\/easy-moderate-treks-by-indiahikes",
                    "destination": "\/upcoming-treks",
                    "permanent": true
                },
                {
                    "source": "\/tag\/treks-for-families",
                    "destination": "\/family-trek-page",
                    "permanent": true
                },
                {
                    "source": "\/tag\/moderate-trek",
                    "destination": "\/upcoming-treks",
                    "permanent": true
                },
                {
                    "source": "\/tag\/trek",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/family-children-trek",
                    "destination": "\/family-trek-page",
                    "permanent": true
                },
                {
                    "source": "\/tag\/featured-trek",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/tag\/moderate",
                    "destination": "\/upcoming-treks",
                    "permanent": true
                },
                {
                    "source": "\/tag\/trekking",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/tag\/treks-in-west-bengal",
                    "destination": "\/",
                    "permanent": true
                },
                {
                    "source": "\/indiahikes-trek-safety",
                    "destination": "\/blog\/indiahikes-trek-safety",
                    "permanent": true
                },
                {
                    "source": "\/indiahikes-media-news",
                    "destination": "\/blog\/indiahikes-media-news",
                    "permanent": true
                },
                {
                    "source": "\/useful-articles",
                    "destination": "\/blog\/useful-artilces",
                    "permanent": true
                },
                {
                    "source": "\/category\/expert-opinion-indiahikes",
                    "destination": "\/blog\/expert-opinion-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/category\/trekking-tips",
                    "destination": "\/blog\/trekking-tips",
                    "permanent": true
                },
                {
                    "source": "\/category\/thursday-trek-talk",
                    "destination": "\/blog\/thursday-trek-talk",
                    "permanent": true
                },
                {
                    "source": "\/category\/high-altitude-research",
                    "destination": "\/blog\/high-altitude-research",
                    "permanent": true
                },
                {
                    "source": "\/category\/get-inspired",
                    "destination": "\/blog\/expert-opinion-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/category\/trek-leaders-speak",
                    "destination": "\/blog\/expert-opinion-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/category\/green-trails",
                    "destination": "\/blog\/expert-opinion-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/category\/trekker-blogs",
                    "destination": "\/blog\/expert-opinion-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/himalayan-mountain-challenge-programme",
                    "destination": "\/blog\/himalayan-mountain-challenge-programme",
                    "permanent": true
                },
                {
                    "source": "\/eco-hiking-programme",
                    "destination": "\/blog\/eco-hiking-programme",
                    "permanent": true
                },
                {
                    "source": "\/trek-with-swathi",
                    "destination": "\/blog\/trek-with-swathi",
                    "permanent": true
                },
                {
                    "source": "\/layering-himalayan-winter-trek-jackets",
                    "destination": "\/blog\/layering-himalayan-winter-trek-jackets",
                    "permanent": true
                },
                {
                    "source": "\/new-routes-kedarkantha-brahmatal-winter-trek-2019",
                    "destination": "\/blog\/new-routes-kedarkantha-brahmatal-winter-trek-2019",
                    "permanent": true
                },
                {
                    "source": "\/new-batches-winter-2019-himalayan-treks",
                    "destination": "\/blog\/new-batches-winter-2019-himalayan-treks",
                    "permanent": true
                },
                {
                    "source": "\/himalayan-trek-stand-out-section",
                    "destination": "\/blog\/himalayan-trek-stand-out-section",
                    "permanent": true
                },
                {
                    "source": "\/winter-camping-trekking-tips",
                    "destination": "\/blog\/winter-camping-trekking-tips",
                    "permanent": true
                },
                {
                    "source": "\/har-ki-dun-must-trek-to-ruinsara-tal",
                    "destination": "\/blog\/har-ki-dun-must-trek-to-ruinsara-tal",
                    "permanent": true
                },
                {
                    "source": "\/why-do-people-trek",
                    "destination": "\/blog\/why-do-people-trek",
                    "permanent": true
                },
                {
                    "source": "\/trek-fitness-workouts-indiahikes",
                    "destination": "\/blog\/trek-fitness-workouts-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/what-to-take-himalayan-trek",
                    "destination": "\/blog\/what-to-take-himalayan-trek",
                    "permanent": true
                },
                {
                    "source": "\/how-to-choose-your-first-himalayan-trek",
                    "destination": "\/blog\/how-to-choose-your-first-himalayan-trek",
                    "permanent": true
                },
                {
                    "source": "\/top-thirteen-treks-in-india",
                    "destination": "\/blog\/top-thirteen-treks-in-india",
                    "permanent": true
                },
                {
                    "source": "\/our-treks",
                    "destination": "\/blog\/our-treks",
                    "permanent": true
                },
                {
                    "source": "\/category\/contests",
                    "destination": "\/blog\/category\/contests",
                    "permanent": true
                },
                {
                    "source": "\/why-green-trails",
                    "destination": "\/blog\/why-green-trails",
                    "permanent": true
                },
                {
                    "source": "\/hikingclub",
                    "destination": "\/blog\/hikingclub",
                    "permanent": true
                },
                {
                    "source": "\/everest-base-camp-via-gokyo-ri",
                    "destination": "\/blog\/everest-base-camp-via-gokyo-ri",
                    "permanent": true
                },
                {
                    "source": "\/tag\/working-at-a-startup",
                    "destination": "\/blog\/tag\/working-at-a-startup",
                    "permanent": true
                },
                {
                    "source": "\/climbed-mountain-entrepreneurship",
                    "destination": "\/blog\/climbed-mountain-entrepreneurship",
                    "permanent": true
                },
                {
                    "source": "\/valley-of-flowers-blog-4",
                    "destination": "\/blog\/valley-of-flowers-blog-4",
                    "permanent": true
                },
                {
                    "source": "\/a-reality-check-on-trekking",
                    "destination": "\/blog\/a-reality-check-on-trekking",
                    "permanent": true
                },
                {
                    "source": "\/knowledge-base\/category\/booking-and-registration",
                    "destination": "\/blog\/knowledge-base\/category\/booking-and-registration",
                    "permanent": true
                },
                {
                    "source": "\/safety-indiahikes-trek",
                    "destination": "\/blog\/safety-indiahikes-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/fitness",
                    "destination": "\/blog\/fitness",
                    "permanent": true
                },
                {
                    "source": "\/tag\/high-altitude",
                    "destination": "\/blog\/high-altitude",
                    "permanent": true
                },
                {
                    "source": "\/tag\/preparation",
                    "destination": "\/blog\/tag\/preparation",
                    "permanent": true
                },
                {
                    "source": "\/tag\/safety",
                    "destination": "\/blog\/safety",
                    "permanent": true
                },
                {
                    "source": "\/tag\/trekking-in-the-hima",
                    "destination": "\/blog\/trekking-in-the-hima",
                    "permanent": true
                },
                {
                    "source": "\/trekking-impacts-mind-body-spirit",
                    "destination": "\/blog\/trekking-impacts-mind-body-spirit",
                    "permanent": true
                },
                {
                    "source": "\/salomon-quest-4d-2-gtx-review-indiahikes",
                    "destination": "\/blog\/salomon-quest-4d-2-gtx-review-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/mountain-lovers-gold-calendar-2017",
                    "destination": "\/blog\/mountain-lovers-gold-calendar-2017",
                    "permanent": true
                },
                {
                    "source": "\/support-to-keep-the-himalayas-clean",
                    "destination": "\/blog\/support-to-keep-the-himalayas-clean",
                    "permanent": true
                },
                {
                    "source": "\/what-happens-to-the-wet-wipes-you-leave-behind",
                    "destination": "\/blog\/what-happens-to-the-wet-wipes-you-leave-behind",
                    "permanent": true
                },
                {
                    "source": "\/lohajung-comes-up-with-new-upcycling-ideas-updates-from-roopkund",
                    "destination": "\/blog\/lohajung-comes-up-with-new-upcycling-ideas-updates-from-roopkund",
                    "permanent": true
                },
                {
                    "source": "\/clean-up-lohajung-7-sacks-collected",
                    "destination": "\/blog\/clean-up-lohajung-7-sacks-collected",
                    "permanent": true
                },
                {
                    "source": "\/green-trails-roopkund-1807kgs",
                    "destination": "\/blog\/green-trails-roopkund-1807kgs",
                    "permanent": true
                },
                {
                    "source": "\/young-local-hero-smriti-crafts-way-plastic-waste",
                    "destination": "\/blog\/young-local-hero-smriti-crafts-way-plastic-waste",
                    "permanent": true
                },
                {
                    "source": "\/roopkund-base-camp-zero-waste-journey-updates-lohajung",
                    "destination": "\/blog\/roopkund-base-camp-zero-waste-journey-updates-lohajung",
                    "permanent": true
                },
                {
                    "source": "\/my-experiences-of-being-a-2-time-green-trails-intern",
                    "destination": "\/blog\/my-experiences-of-being-a-2-time-green-trails-intern",
                    "permanent": true
                },
                {
                    "source": "\/green-trails-local-hero-rukmani-devi",
                    "destination": "\/blog\/green-trails-local-hero-rukmani-devi",
                    "permanent": true
                },
                {
                    "source": "\/what-gets-measured-gets-managed-2-model-villages-in-the-making",
                    "destination": "\/blog\/what-gets-measured-gets-managed-2-model-villages-in-the-making",
                    "permanent": true
                },
                {
                    "source": "\/how-do-locals-drive-the-green-trails-mission",
                    "destination": "\/blog\/how-do-locals-drive-the-green-trails-mission",
                    "permanent": true
                },
                {
                    "source": "\/green-trails-latest-updates-from-lohajung-sari-and-jaubhari",
                    "destination": "\/blog\/green-trails-latest-updates-from-lohajung-sari-and-jaubhari",
                    "permanent": true
                },
                {
                    "source": "\/4-schools-12-workshops-and-1370-kgs-of-waste-collected-updates-from-sandakphu",
                    "destination": "\/blog\/4-schools-12-workshops-and-1370-kgs-of-waste-collected-updates-from-sandakphu",
                    "permanent": true
                },
                {
                    "source": "\/how-a-solo-female-traveller-from-germany-found-home-and-peace-in-kuling-the-story-of-local-hero-elisabeth",
                    "destination": "\/blog\/how-a-solo-female-traveller-from-germany-found-home-and-peace-in-kuling-the-story-of-local-hero-elisabeth",
                    "permanent": true
                },
                {
                    "source": "\/dharamji-local-hero-green-trails",
                    "destination": "\/blog\/dharamji-local-hero-green-trails",
                    "permanent": true
                },
                {
                    "source": "\/upcycling-segregation-keep-green-trails-spirit-strong-updates-sandakphu-base-camp",
                    "destination": "\/blog\/upcycling-segregation-keep-green-trails-spirit-strong-updates-sandakphu-base-camp",
                    "permanent": true
                },
                {
                    "source": "\/how-you-can-change-the-mountains-in-just-one-week",
                    "destination": "\/blog\/how-you-can-change-the-mountains-in-just-one-week",
                    "permanent": true
                },
                {
                    "source": "\/11-sacks-of-waste-in-one-day-lohajung",
                    "destination": "\/blog\/11-sacks-of-waste-in-one-day-lohajung",
                    "permanent": true
                },
                {
                    "source": "\/tracking-trash-in-jagatsukh-and-manali-insights-from-our-investigation",
                    "destination": "\/blog\/tracking-trash-in-jagatsukh-and-manali-insights-from-our-investigation",
                    "permanent": true
                },
                {
                    "source": "\/maggi-mountains-green-trails-indiahikes",
                    "destination": "\/blog\/maggi-mountains-green-trails-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/indiahikes-gets-permission-use-haldwani-landfill-non-recyclable-waste",
                    "destination": "\/blog\/indiahikes-gets-permission-use-haldwani-landfill-non-recyclable-waste",
                    "permanent": true
                },
                {
                    "source": "\/6-ways-green-model-village",
                    "destination": "\/blog\/6-ways-green-model-village",
                    "permanent": true
                },
                {
                    "source": "\/setting-examples-green-trails",
                    "destination": "\/blog\/setting-examples-green-trails",
                    "permanent": true
                },
                {
                    "source": "\/making-green-trails-self-sustained",
                    "destination": "\/blog\/making-green-trails-self-sustained",
                    "permanent": true
                },
                {
                    "source": "\/warwan-valley-featured-bangalore-mirror",
                    "destination": "\/blog\/warwan-valley-featured-bangalore-mirror",
                    "permanent": true
                },
                {
                    "source": "\/assess-bmi",
                    "destination": "\/blog\/assess-bmi",
                    "permanent": true
                },
                {
                    "source": "\/life-support-training-for-staff",
                    "destination": "\/blog\/life-support-training-for-staff",
                    "permanent": true
                },
                {
                    "source": "\/challenges-green-trails-fellow-ih",
                    "destination": "\/blog\/challenges-green-trails-fellow-ih",
                    "permanent": true
                },
                {
                    "source": "\/how-an-offline-map-saved-my-life",
                    "destination": "\/blog\/how-an-offline-map-saved-my-life",
                    "permanent": true
                },
                {
                    "source": "\/winner-photographer-september-2019",
                    "destination": "\/blog\/winner-photographer-september-2019",
                    "permanent": true
                },
                {
                    "source": "\/5-things-chhattisgarh-jungle-trek",
                    "destination": "\/blog\/5-things-chhattisgarh-jungle-trek",
                    "permanent": true
                },
                {
                    "source": "\/how-prepared-are-you-for-a-himalayan-winter-trek",
                    "destination": "\/blog\/how-prepared-are-you-for-a-himalayan-winter-trek",
                    "permanent": true
                },
                {
                    "source": "\/sept-photo-contest-nominations",
                    "destination": "\/blog\/sept-photo-contest-nominations",
                    "permanent": true
                },
                {
                    "source": "\/crowd-free-winter-treks",
                    "destination": "\/blog\/crowd-free-winter-treks",
                    "permanent": true
                },
                {
                    "source": "\/birds-photo-deoriatal-chandrashila",
                    "destination": "\/blog\/birds-photo-deoriatal-chandrashila",
                    "permanent": true
                },
                {
                    "source": "\/how-well-do-you-know-himalayan-meadows",
                    "destination": "\/blog\/how-well-do-you-know-himalayan-meadows",
                    "permanent": true
                },
                {
                    "source": "\/dehradun-railway-station-closed-for-3-months-starting-november-10th",
                    "destination": "\/blog\/dehradun-railway-station-closed-for-3-months-starting-november-10th",
                    "permanent": true
                },
                {
                    "source": "\/how-much-do-you-know-about-himalyan-river-confluences",
                    "destination": "\/blog\/how-much-do-you-know-about-himalyan-river-confluences",
                    "permanent": true
                },
                {
                    "source": "\/instagram-ih100k-contest-winners",
                    "destination": "\/blog\/instagram-ih100k-contest-winners",
                    "permanent": true
                },
                {
                    "source": "\/indiahikes-gidara-bugyal-trek-near-gangotri",
                    "destination": "\/blog\/indiahikes-gidara-bugyal-trek-near-gangotri",
                    "permanent": true
                },
                {
                    "source": "\/important-news-update-himachal-pradesh-treks-august-2019",
                    "destination": "\/blog\/important-news-update-himachal-pradesh-treks-august-2019",
                    "permanent": true
                },
                {
                    "source": "\/pin-bhaba-pass-landslide-trail-still-unstable-rockfall",
                    "destination": "\/blog\/pin-bhaba-pass-landslide-trail-still-unstable-rockfall",
                    "permanent": true
                },
                {
                    "source": "\/pin-bhaba-pass-trail-blocked-rockfall-landslide",
                    "destination": "\/blog\/pin-bhaba-pass-trail-blocked-rockfall-landslide",
                    "permanent": true
                },
                {
                    "source": "\/kashmir-evacuation-tourists-2019-advisory-article370",
                    "destination": "\/blog\/kashmir-evacuation-tourists-2019-advisory-article370",
                    "permanent": true
                },
                {
                    "source": "\/himachal-and-uttarakhand-not-affected-by-kashmir-situation",
                    "destination": "\/blog\/himachal-and-uttarakhand-not-affected-by-kashmir-situation",
                    "permanent": true
                },
                {
                    "source": "\/kashmir-season-abrupt-end-all-treks-called-off",
                    "destination": "\/blog\/kashmir-season-abrupt-end-all-treks-called-off",
                    "permanent": true
                },
                {
                    "source": "\/category\/latest-updates\/page\/2",
                    "destination": "\/blog\/category\/latest-updates\/page\/2",
                    "permanent": true
                },
                {
                    "source": "\/experts-trekking-himalayas-article",
                    "destination": "\/blog\/experts-trekking-himalayas-article",
                    "permanent": true
                },
                {
                    "source": "\/family-sustainability-journey",
                    "destination": "\/blog\/family-sustainability-journey",
                    "permanent": true
                },
                {
                    "source": "\/phulara-ridge-trek-highlights",
                    "destination": "\/blog\/phulara-ridge-trek-highlights",
                    "permanent": true
                },
                {
                    "source": "\/kanamo-peak-reasons-to-do",
                    "destination": "\/blog\/kanamo-peak-reasons-to-do",
                    "permanent": true
                },
                {
                    "source": "\/trekking-poles-maintenance",
                    "destination": "\/blog\/trekking-poles-maintenance",
                    "permanent": true
                },
                {
                    "source": "\/6-tips-to-maintain-your-backpack",
                    "destination": "\/blog\/6-tips-to-maintain-your-backpack",
                    "permanent": true
                },
                {
                    "source": "\/trek-leader-outdoor-career-after-indiahikes",
                    "destination": "\/blog\/trek-leader-outdoor-career-after-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/what-makes-kedartal-a-difficult-trek",
                    "destination": "\/blog\/what-makes-kedartal-a-difficult-trek",
                    "permanent": true
                },
                {
                    "source": "\/tarsar-marsar-vs-kashmir-great-lakes-which-trek-choose",
                    "destination": "\/blog\/tarsar-marsar-vs-kashmir-great-lakes-which-trek-choose",
                    "permanent": true
                },
                {
                    "source": "\/khopra-ridge-alternative-annapurna-base-camp",
                    "destination": "\/blog\/khopra-ridge-alternative-annapurna-base-camp",
                    "permanent": true
                },
                {
                    "source": "\/category\/expert-opinion-indiahikes\/page\/2",
                    "destination": "\/blog\/category\/expert-opinion-indiahikes\/page\/2",
                    "permanent": true
                },
                {
                    "source": "\/post-trek-ailments-treatment-prevention",
                    "destination": "\/blog\/post-trek-ailments-treatment-prevention",
                    "permanent": true
                },
                {
                    "source": "\/backpacking-tips-easily-accessible-items",
                    "destination": "\/blog\/backpacking-tips-easily-accessible-items",
                    "permanent": true
                },
                {
                    "source": "\/7-expert-trekking-tips",
                    "destination": "\/blog\/7-expert-trekking-tips",
                    "permanent": true
                },
                {
                    "source": "\/8-hacks-personal-hygiene-on-a-trek",
                    "destination": "\/blog\/8-hacks-personal-hygiene-on-a-trek",
                    "permanent": true
                },
                {
                    "source": "\/how-to-pack-your-trekking-pole",
                    "destination": "\/blog\/how-to-pack-your-trekking-pole",
                    "permanent": true
                },
                {
                    "source": "\/why-no-thermals-while-trekking",
                    "destination": "\/blog\/why-no-thermals-while-trekking",
                    "permanent": true
                },
                {
                    "source": "\/tips-to-prepare-children-for-trek",
                    "destination": "\/blog\/tips-to-prepare-children-for-trek",
                    "permanent": true
                },
                {
                    "source": "\/best-trek-cutlery",
                    "destination": "\/blog\/best-trek-cutlery",
                    "permanent": true
                },
                {
                    "source": "\/tips-cheap-flight-tickets-india",
                    "destination": "\/blog\/tips-cheap-flight-tickets-india",
                    "permanent": true
                },
                {
                    "source": "\/sunglasses-spectacles-trekkers",
                    "destination": "\/blog\/sunglasses-spectacles-trekkers",
                    "permanent": true
                },
                {
                    "source": "\/category\/trekking-tips\/page\/2",
                    "destination": "\/blog\/category\/trekking-tips\/page\/2",
                    "permanent": true
                },
                {
                    "source": "\/author\/pangtey-lavanya",
                    "destination": "\/blog\/author\/pangtey-lavanya",
                    "permanent": true
                },
                {
                    "source": "\/managing-trek-europe-atsunta-pass-georgia",
                    "destination": "\/blog\/managing-trek-europe-atsunta-pass-georgia",
                    "permanent": true
                },
                {
                    "source": "\/nepal-treks-autumn",
                    "destination": "\/blog\/nepal-treks-autumn",
                    "permanent": true
                },
                {
                    "source": "\/category\/thursday-trek-talk\/page\/2",
                    "destination": "\/blog\/category\/thursday-trek-talk\/page\/2",
                    "permanent": true
                },
                {
                    "source": "\/ams-diamox-nifedipine-dexamethasone",
                    "destination": "\/blog\/ams-diamox-nifedipine-dexamethasone",
                    "permanent": true
                },
                {
                    "source": "\/why-non-veg-food-is-not-good-on-a-high-altitude-trek",
                    "destination": "\/blog\/why-non-veg-food-is-not-good-on-a-high-altitude-trek",
                    "permanent": true
                },
                {
                    "source": "\/prevent-altitude-sickness",
                    "destination": "\/blog\/prevent-altitude-sickness",
                    "permanent": true
                },
                {
                    "source": "\/treat-altitude-sickness-ams-hape-hace",
                    "destination": "\/blog\/treat-altitude-sickness-ams-hape-hace",
                    "permanent": true
                },
                {
                    "source": "\/altitude-sickness-ams-hape-hace",
                    "destination": "\/blog\/altitude-sickness-ams-hape-hace",
                    "permanent": true
                },
                {
                    "source": "\/human-body-high-altitude",
                    "destination": "\/blog\/human-body-high-altitude",
                    "permanent": true
                },
                {
                    "source": "\/rules-to-keep-acute-mountain-sickness-at-bay",
                    "destination": "\/blog\/rules-to-keep-acute-mountain-sickness-at-bay",
                    "permanent": true
                },
                {
                    "source": "\/high-altitude-case-study-1-deoriatal",
                    "destination": "\/blog\/high-altitude-case-study-1-deoriatal",
                    "permanent": true
                },
                {
                    "source": "\/what-are-hape-and-hace",
                    "destination": "\/blog\/what-are-hape-and-hace",
                    "permanent": true
                },
                {
                    "source": "\/how-i-dealt-with-acute-mountain-sickness-on-my-28th-trek",
                    "destination": "\/blog\/how-i-dealt-with-acute-mountain-sickness-on-my-28th-trek",
                    "permanent": true
                },
                {
                    "source": "\/lack-oxygen-affects-treks",
                    "destination": "\/blog\/lack-oxygen-affects-treks",
                    "permanent": true
                },
                {
                    "source": "\/chadar-dehydration-ams",
                    "destination": "\/blog\/chadar-dehydration-ams",
                    "permanent": true
                },
                {
                    "source": "\/category\/high-altitude-research\/page\/2",
                    "destination": "\/blog\/category\/high-altitude-research\/page\/2",
                    "permanent": true
                },
                {
                    "source": "\/gadgets-rule-lives-go-trekking",
                    "destination": "\/blog\/gadgets-rule-lives-go-trekking",
                    "permanent": true
                },
                {
                    "source": "\/trek-leading-career-for-women",
                    "destination": "\/blog\/trek-leading-career-for-women",
                    "permanent": true
                },
                {
                    "source": "\/women-trek-leaders-in-himalayas",
                    "destination": "\/blog\/women-trek-leaders-in-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/valley-of-flowers-green-trails-swachh-bharat",
                    "destination": "\/blog\/valley-of-flowers-green-trails-swachh-bharat",
                    "permanent": true
                },
                {
                    "source": "\/career-trek-leader-himalayas",
                    "destination": "\/blog\/career-trek-leader-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/evacuation-safety-recue-gaumukh-tapovan-trek",
                    "destination": "\/blog\/evacuation-safety-recue-gaumukh-tapovan-trek",
                    "permanent": true
                },
                {
                    "source": "\/waste-behavioural-problem-green-trails-tedx-lakshmi",
                    "destination": "\/blog\/waste-behavioural-problem-green-trails-tedx-lakshmi",
                    "permanent": true
                },
                {
                    "source": "\/trekking-himalayas-books",
                    "destination": "\/blog\/trekking-himalayas-books",
                    "permanent": true
                },
                {
                    "source": "\/green-trails-bottle-bricks-darjeeling",
                    "destination": "\/blog\/green-trails-bottle-bricks-darjeeling",
                    "permanent": true
                },
                {
                    "source": "\/why-is-running-a-good-pre-trek-workout",
                    "destination": "\/blog\/why-is-running-a-good-pre-trek-workout",
                    "permanent": true
                },
                {
                    "source": "\/what-it-takes-to-climb-mt-everest-sipra-majumdars-story",
                    "destination": "\/blog\/what-it-takes-to-climb-mt-everest-sipra-majumdars-story",
                    "permanent": true
                },
                {
                    "source": "\/suma-50-year-old-inspiring-trekker",
                    "destination": "\/blog\/suma-50-year-old-inspiring-trekker",
                    "permanent": true
                },
                {
                    "source": "\/how-i-quit-my-job-to-become-a-trek-leader",
                    "destination": "\/blog\/how-i-quit-my-job-to-become-a-trek-leader",
                    "permanent": true
                },
                {
                    "source": "\/trek-leaders-finish-trek-14-hours",
                    "destination": "\/blog\/trek-leaders-finish-trek-14-hours",
                    "permanent": true
                },
                {
                    "source": "\/trek-leader-story",
                    "destination": "\/blog\/trek-leader-story",
                    "permanent": true
                },
                {
                    "source": "\/trekkers-preferences",
                    "destination": "\/blog\/trekkers-preferences",
                    "permanent": true
                },
                {
                    "source": "\/kashmir-great-lakes-trek-one-day",
                    "destination": "\/blog\/kashmir-great-lakes-trek-one-day",
                    "permanent": true
                },
                {
                    "source": "\/birdwatching-on-himalayan-treks",
                    "destination": "\/blog\/birdwatching-on-himalayan-treks",
                    "permanent": true
                },
                {
                    "source": "\/kedarkantha-route-kotgaon-sankri",
                    "destination": "\/blog\/kedarkantha-route-kotgaon-sankri",
                    "permanent": true
                },
                {
                    "source": "\/category\/trek-leaders-speak\/page\/2",
                    "destination": "\/blog\/trek-leaders-speak",
                    "permanent": true
                },
                {
                    "source": "\/how-to-be-a-zero-waste-and-healthy-snacker-on-a-trek",
                    "destination": "\/blog\/how-to-be-a-zero-waste-and-healthy-snacker-on-a-trek",
                    "permanent": true
                },
                {
                    "source": "\/reduce-inorganic-waste-zero",
                    "destination": "\/blog\/reduce-inorganic-waste-zero",
                    "permanent": true
                },
                {
                    "source": "\/tips-for-composting-organic-waste",
                    "destination": "\/blog\/tips-for-composting-organic-waste",
                    "permanent": true
                },
                {
                    "source": "\/a-guide-to-composting-your-wet-waste-with-tips-from-experts",
                    "destination": "\/blog\/a-guide-to-composting-your-wet-waste-with-tips-from-experts",
                    "permanent": true
                },
                {
                    "source": "\/become-a-sustainability-champion",
                    "destination": "\/blog\/become-a-sustainability-champion",
                    "permanent": true
                },
                {
                    "source": "\/manage-sanitary-waste-on-a-trek",
                    "destination": "\/blog\/manage-sanitary-waste-on-a-trek",
                    "permanent": true
                },
                {
                    "source": "\/green-trails-fellowship-experience",
                    "destination": "\/blog\/green-trails-fellowship-experience",
                    "permanent": true
                },
                {
                    "source": "\/supriya-local-hero",
                    "destination": "\/blog\/supriya-local-hero",
                    "permanent": true
                },
                {
                    "source": "\/experience-lifetime-gidara-bugyal",
                    "destination": "\/blog\/experience-lifetime-gidara-bugyal",
                    "permanent": true
                },
                {
                    "source": "\/child-first-trek-experience-himalayas",
                    "destination": "\/blog\/child-first-trek-experience-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/trekking-lifestyle-good-learnings",
                    "destination": "\/blog\/trekking-lifestyle-good-learnings",
                    "permanent": true
                },
                {
                    "source": "\/mom-family-trek",
                    "destination": "\/blog\/mom-family-trek",
                    "permanent": true
                },
                {
                    "source": "\/indiahikes-trek-experience-review",
                    "destination": "\/blog\/indiahikes-trek-experience-review",
                    "permanent": true
                },
                {
                    "source": "\/beas-kund-near-manali-experience-trek",
                    "destination": "\/blog\/beas-kund-near-manali-experience-trek",
                    "permanent": true
                },
                {
                    "source": "\/tips-for-annapurna-base-camp",
                    "destination": "\/blog\/tips-for-annapurna-base-camp",
                    "permanent": true
                },
                {
                    "source": "\/the-five-stages-of-life-on-a-trek",
                    "destination": "\/blog\/the-five-stages-of-life-on-a-trek",
                    "permanent": true
                },
                {
                    "source": "\/trekking-with-dad-kuari-pass-children",
                    "destination": "\/blog\/trekking-with-dad-kuari-pass-children",
                    "permanent": true
                },
                {
                    "source": "\/indiahikes-safety-acute-mountain-sickness",
                    "destination": "\/blog\/indiahikes-safety-acute-mountain-sickness",
                    "permanent": true
                },
                {
                    "source": "\/the-kuari-pass-trek-worst-fears-biggest-learning",
                    "destination": "\/blog\/the-kuari-pass-trek-worst-fears-biggest-learning",
                    "permanent": true
                },
                {
                    "source": "\/a-tryst-with-kanchenjunga-a-trekkers-account-of-his-love-for-the-mountain",
                    "destination": "\/blog\/a-tryst-with-kanchenjunga-a-trekkers-account-of-his-love-for-the-mountain",
                    "permanent": true
                },
                {
                    "source": "\/category\/trekker-blogs\/page\/2",
                    "destination": "\/blog\/category\/trekker-blogs\/page\/2",
                    "permanent": true
                },
                {
                    "source": "\/team-leadership-programme",
                    "destination": "\/blog\/team-leadership-programme",
                    "permanent": true
                },
                {
                    "source": "\/outbound-programme-himalayas-trek",
                    "destination": "\/blog\/outbound-programme-himalayas-trek",
                    "permanent": true
                },
                {
                    "source": "\/how-trekking-can-transform-you-into-a-confident-person",
                    "destination": "\/blog\/how-trekking-can-transform-you-into-a-confident-person",
                    "permanent": true
                },
                {
                    "source": "\/how-trekking-can-boost-your-management-skills",
                    "destination": "\/blog\/how-trekking-can-boost-your-management-skills",
                    "permanent": true
                },
                {
                    "source": "\/how-we-enhance-learnings-for-children-on-our-family-treks",
                    "destination": "\/blog\/how-we-enhance-learnings-for-children-on-our-family-treks",
                    "permanent": true
                },
                {
                    "source": "\/3-hidden-benefits-of-trekking-with-your-family",
                    "destination": "\/blog\/3-hidden-benefits-of-trekking-with-your-family",
                    "permanent": true
                },
                {
                    "source": "\/outbound-training-himalayas",
                    "destination": "\/blog\/outbound-training-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/things-to-get-on-the-himalayan-moutain-challenge",
                    "destination": "\/blog\/things-to-get-on-the-himalayan-moutain-challenge",
                    "permanent": true
                },
                {
                    "source": "\/tag\/himalayan-mountain-challenge",
                    "destination": "\/blog\/tag\/himalayan-mountain-challenge",
                    "permanent": true
                },
                {
                    "source": "\/why-should-you-join-the-eco-hiking-programme",
                    "destination": "\/blog\/why-should-you-join-the-eco-hiking-programme",
                    "permanent": true
                },
                {
                    "source": "\/what-is-an-eco-hiking-programme-like",
                    "destination": "\/blog\/what-is-an-eco-hiking-programme-like",
                    "permanent": true
                },
                {
                    "source": "\/cas-programme-ib-schools-indiahikes",
                    "destination": "\/blog\/cas-programme-ib-schools-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/category\/eco-hiking-programm",
                    "destination": "\/blog\/category\/eco-hiking-programme",
                    "permanent": true
                },
                {
                    "source": "\/tag\/recommended-trek",
                    "destination": "\/blog\/tag\/recommended-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/treks-in-uttarakhand",
                    "destination": "\/blog\/tag\/treks-in-uttarakhand",
                    "permanent": true
                },
                {
                    "source": "\/birds-deoriatal-chandrashila-trek",
                    "destination": "\/blog\/birds-deoriatal-chandrashila-trek",
                    "permanent": true
                },
                {
                    "source": "\/buy-your-trek-equipment-here",
                    "destination": "\/blog\/buy-your-trek-equipment-here",
                    "permanent": true
                },
                {
                    "source": "\/tag\/family-treks-in-himalayas",
                    "destination": "\/blog\/tag\/family-treks-in-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/tag\/indiahikes-treks-in-himalayas",
                    "destination": "\/blog\/tag\/indiahikes-treks-in-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/benefits-of-using-diamox-to-deal-with-ams",
                    "destination": "\/blog\/benefits-of-using-diamox-to-deal-with-ams",
                    "permanent": true
                },
                {
                    "source": "\/tag\/7-day-trek",
                    "destination": "\/blog\/tag\/7-day-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/himalayas",
                    "destination": "\/blog\/tag\/himalayas",
                    "permanent": true
                },
                {
                    "source": "\/tag\/trekking-in-india",
                    "destination": "\/blog\/tag\/trekking-in-india",
                    "permanent": true
                },
                {
                    "source": "\/tag\/best-snow-treks-in-himalayas",
                    "destination": "\/blog\/tag\/best-snow-treks-in-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/tag\/easy-treks-by-indiahikes",
                    "destination": "\/blog\/tag\/easy-treks-by-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/tag\/easy-moderate-trek-in-himalayas",
                    "destination": "\/blog\/easy-moderate-trek-in-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/tag\/himalayan-treks-for-beginners",
                    "destination": "\/blog\/himalayan-treks-for-beginners",
                    "permanent": true
                },
                {
                    "source": "\/tag\/trekking-in-uttarakhand",
                    "destination": "\/blog\/trekking-in-uttarakhand",
                    "permanent": true
                },
                {
                    "source": "\/tag\/winter-treks-in-uttarakhand",
                    "destination": "\/blog\/winter-treks-in-uttarakhand",
                    "permanent": true
                },
                {
                    "source": "\/tag\/trekking-in-the-himalayas",
                    "destination": "\/blog\/trekking-in-the-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/tag\/week-long-trek",
                    "destination": "\/blog\/week-long-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/best-himalayan-trek-for-children",
                    "destination": "\/blog\/best-himalayan-trek-for-children",
                    "permanent": true
                },
                {
                    "source": "\/tag\/best-himalayan-treks-for-beginners",
                    "destination": "\/blog\/best-himalayan-treks-for-beginners",
                    "permanent": true
                },
                {
                    "source": "\/tag\/treks-in-dehradun",
                    "destination": "\/blog\/treks-in-dehradun",
                    "permanent": true
                },
                {
                    "source": "\/tag\/weekend-trek-in-himachal",
                    "destination": "\/blog\/weekend-trek-in-himachal",
                    "permanent": true
                },
                {
                    "source": "\/tag\/weekend-trek-in-uttarakhand",
                    "destination": "\/blog\/weekend-trek-in-uttarakhand",
                    "permanent": true
                },
                {
                    "source": "\/weekend-treks-delhi-manali-himalayas",
                    "destination": "\/blogweekend-treks-delhi-manali-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/tag\/treks-by-indiahikes",
                    "destination": "\/blog\/treks-by-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/tag\/weekend-treks-by-indiahikes",
                    "destination": "\/blog\/weekend-treks-by-indiahikes",
                    "permanent": true
                },
                {
                    "source": "\/tag\/weekend-treks-in-himalayas",
                    "destination": "\/blog\/weekend-treks-in-himalayas",
                    "permanent": true
                },
                {
                    "source": "\/trek500-trekking-pants-review",
                    "destination": "\/blog\/trek500-trekking-pants-review",
                    "permanent": true
                },
                {
                    "source": "\/rental-trekking-shoes",
                    "destination": "\/blogrental-trekking-shoes",
                    "permanent": true
                },
                {
                    "source": "\/tag\/himalayan-winter-treks",
                    "destination": "\/blog\/himalayan-winter-treks",
                    "permanent": true
                },
                {
                    "source": "\/tag\/thursday-trek-talk",
                    "destination": "\/blog\/thursday-trek-talk",
                    "permanent": true
                },
                {
                    "source": "\/tag\/trekking-in-snow",
                    "destination": "\/blog\/trekking-in-snow",
                    "permanent": true
                },
                {
                    "source": "\/tag\/winter-trek-tips",
                    "destination": "\/blog\/winter-trek-tips",
                    "permanent": true
                },
                {
                    "source": "\/tag\/indiahikes-winter-treks",
                    "destination": "\/blog\/indiahikes-winter-treks",
                    "permanent": true
                },
                {
                    "source": "\/tag\/open-dates-to-winter-treks",
                    "destination": "\/blog\/open-dates-to-winter-treks",
                    "permanent": true
                },
                {
                    "source": "\/tag\/secluded-routes",
                    "destination": "\/blog\/secluded-routes",
                    "permanent": true
                },
                {
                    "source": "\/tag\/winter-treks",
                    "destination": "\/blog\/winter-treks",
                    "permanent": true
                },
                {
                    "source": "\/pin-parvati-trek-alternative-pin-bhaba-pass-trek-himachal",
                    "destination": "\/blog\/pin-parvati-trek-alternative-pin-bhaba-pass-trek-himachal",
                    "permanent": true
                },
                {
                    "source": "\/pin-bhaba-vs-pin-parvati",
                    "destination": "\/blog\/pin-bhaba-vs-pin-parvati",
                    "permanent": true
                },
                {
                    "source": "\/trekking-to-audens-col",
                    "destination": "\/blog\/trekking-to-audens-col",
                    "permanent": true
                },
                {
                    "source": "\/tag\/trek-information",
                    "destination": "\/blog\/trek-information",
                    "permanent": true
                },
                {
                    "source": "\/9-tips-to-have-a-good-nights-sleep-on-a-winter-trek",
                    "destination": "\/blog\/9-tips-to-have-a-good-nights-sleep-on-a-winter-trek",
                    "permanent": true
                },
                {
                    "source": "\/brahmatal-trek",
                    "destination": "\/trek\/brahmatal-trek",
                    "permanent": true
                },
                {
                    "source": "\/deoriatal-chandrashila-trek",
                    "destination": "\/trek\/deoriatal-chandrashila-trek",
                    "permanent": true
                },
                {
                    "source": "\/har-ki-dun",
                    "destination": "\/trek\/har-ki-dun",
                    "permanent": true
                },
                {
                    "source": "\/dayara-bugyal-trek",
                    "destination": "\/trek\/dayara-bugyal-trek",
                    "permanent": true
                },
                {
                    "source": "\/mukta-top",
                    "destination": "\/trek\/mukta-top",
                    "permanent": true
                },
                {
                    "source": "\/sandakphu",
                    "destination": "\/trek\/sandakphu-phalut",
                    "permanent": true
                },
                {
                    "source": "\/deoban-weekend-trek",
                    "destination": "\/trek\/deoban-weekend-trek",
                    "permanent": true
                },
                {
                    "source": "\/nag-tibba",
                    "destination": "\/trek\/nag-tibba",
                    "permanent": true
                },
                {
                    "source": "\/kedarkantha-trek",
                    "destination": "\/trek\/kedarkantha-trek",
                    "permanent": true
                },
                {
                    "source": "\/chhattisgarh-jungle-trek-guru-ghasi-das-national-park",
                    "destination": "\/trek\/chhattisgarh-jungle-trek-guru-ghasi-das-national-park",
                    "permanent": true
                },
                {
                    "source": "\/annapurna-base-camp",
                    "destination": "\/trek\/annapurna-base-camp",
                    "permanent": true
                },
                {
                    "source": "\/bali-pass-ruinsara-tal",
                    "destination": "\/trek\/bali-pass-ruinsara-tal",
                    "permanent": true
                },
                {
                    "source": "\/beas-kund",
                    "destination": "\/trek\/beas-kund",
                    "permanent": true
                },
                {
                    "source": "\/bhrigu-lake",
                    "destination": "\/trek\/bhrigu-lake",
                    "permanent": true
                },
                {
                    "source": "\/buran-ghati",
                    "destination": "\/trek\/buran-ghati",
                    "permanent": true
                },
                {
                    "source": "\/chandranahan-lake-trek",
                    "destination": "\/trek\/chandranahan-lake-trek",
                    "permanent": true
                },
                {
                    "source": "\/gaumukh-tapovan",
                    "destination": "\/trek\/gaumukh-tapovan",
                    "permanent": true
                },
                {
                    "source": "\/gidara-bugyal",
                    "destination": "\/trek\/gidara-bugyal",
                    "permanent": true
                },
                {
                    "source": "\/goechala",
                    "destination": "\/trek\/goechala",
                    "permanent": true
                },
                {
                    "source": "\/hampta-pass",
                    "destination": "\/trek\/hampta-pass",
                    "permanent": true
                },
                {
                    "source": "\/kanamo-peak-trek",
                    "destination": "\/trek\/kanamo-peak-trek",
                    "permanent": true
                },
                {
                    "source": "\/kashmir-great-lakes",
                    "destination": "\/trek\/kashmir-great-lakes",
                    "permanent": true
                },
                {
                    "source": "\/kedartal",
                    "destination": "\/trek\/kedartal",
                    "permanent": true
                },
                {
                    "source": "\/khopra-ridge-khayar-lake",
                    "destination": "\/trek\/khopra-ridge-khayar-lake",
                    "permanent": true
                },
                {
                    "source": "\/kuari-pass",
                    "destination": "\/trek\/kuari-pass",
                    "permanent": true
                },
                {
                    "source": "\/pangarchulla",
                    "destination": "\/trek\/pangarchulla",
                    "permanent": true
                },
                {
                    "source": "\/phulara-ridge-trek",
                    "destination": "\/trek\/phulara-ridge-trek",
                    "permanent": true
                },
                {
                    "source": "\/pin-bhaba-pass-trek",
                    "destination": "\/trek\/pin-bhaba-pass-trek",
                    "permanent": true
                },
                {
                    "source": "\/pin-parvati-pass",
                    "destination": "\/trek\/pin-parvati-pass",
                    "permanent": true
                },
                {
                    "source": "\/prashar-lake",
                    "destination": "\/trek\/prashar-lake",
                    "permanent": true
                },
                {
                    "source": "\/roopkund",
                    "destination": "\/trek\/roopkund",
                    "permanent": true
                },
                {
                    "source": "\/rupin-pass",
                    "destination": "\/trek\/rupin-pass",
                    "permanent": true
                },
                {
                    "source": "\/sainj-valley-trek",
                    "destination": "\/trek\/sainj-valley-trek",
                    "permanent": true
                },
                {
                    "source": "\/tarsar-marsar",
                    "destination": "\/trek\/tarsar-marsar",
                    "permanent": true
                },
                {
                    "source": "\/valley-of-flowers",
                    "destination": "\/trek\/valley-of-flowers",
                    "permanent": true
                },
                {
                    "source": "\/warwan-valley",
                    "destination": "\/trek\/warwan-valley",
                    "permanent": true
                },
                {
                    "source": "\/tag\/chandrashila-trek",
                    "destination": "\/trek\/chandrashila-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/deaoriatal-chandrashila-trek",
                    "destination": "\/trek\/deaoriatal-chandrashila-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/himalayan-trek",
                    "destination": "\/trek\/himalayan-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/nag-tibba-trek",
                    "destination": "\/trek\/nag-tibba",
                    "permanent": true
                },
                {
                    "source": "\/tag\/brahmatal-trek",
                    "destination": "\/trek\/brahmatal-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/kedarkantha-trek",
                    "destination": "\/trek\/kedarkantha-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/brahmatal-trek-cost",
                    "destination": "\/trek\/brahmatal-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/brahmatal-trek-dates",
                    "destination": "\/trek\/brahmatal-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/brahmatal-winter-trek",
                    "destination": "\/trek\/brahmatal-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/chandrashila-winter-trek",
                    "destination": "\/trek\/chandrashila-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/deoriatal-chandrashila",
                    "destination": "\/trek\/deoriatal-chandrashila-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/har-ki-dun-trek-dates",
                    "destination": "\/trek\/har-ki-dun",
                    "permanent": true
                },
                {
                    "source": "\/tag\/har-ki-dun-winter-trek",
                    "destination": "\/trek\/har-ki-dun",
                    "permanent": true
                },
                {
                    "source": "\/tag\/kedarkantha-trek-cost-details",
                    "destination": "\/trek\/kedarkantha-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/kedarkantha-trek-dates",
                    "destination": "\/trek\/kedarkantha-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/kedarkantha-winter-trek",
                    "destination": "\/trek\/kedarkantha-trek",
                    "permanent": true
                },
                {
                    "source": "\/tag\/mukta-top-winter-trek",
                    "destination": "\/trek\/mukta-top-trek",
                    "permanent": true
                }
    
    ]
  },
};


