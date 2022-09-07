import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChooseTreks } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hrefResolver, linkResolver } from "prismic-configuration";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";

const TrekkersStories = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const trekkersStoriesImageArray = slice?.items;

  const [show, setShow] = useState(false);
  const [reveiewInfo, setReveiewInfo] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const router = useRouter();

  //   const goToTrekPage = (e) => {
  //     e.preventDefault()
  //     router.push('/trek/hampta_pass');
  //   };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const sampleData = [
    {
      name: "Amit Jain",
      batch: "March 2022 to Kedarkantha Trek",
      desc: "I was taken aback by the humility and ever smiling and always helping nature of all the people of Indiahikes. Right from the time I first enquired about the Trek, to making payments and to enquire how to prepare and then the Trek journey and finally after finishing the Trek all the people involved at all the levels were always there to help me. Finally it gave the feeling that we all were an extended family. I was Trekking the Kedarkanta with my son Atin age 13 and my brother's son Viraj age 12 and we all enjoyed each and every moment of the Trek and all credit goes to Indiahikes Team. Infact the children have already made me committed that we shall keep doing one trek every year.",
      details: [
        {
          data: "I was taken aback by the humility and ever smiling and always helping nature of all the people of Indiahikes. Right from the time I first enquired about the Trek, to making payments and to enquire how to prepare and then the Trek journey and finally after finishing the Trek all the people involved at all the levels were always there to help me. Finally it gave the feeling that we all were an extended family. I was Trekking the Kedarkanta with my son Atin age 13 and my brother's son Viraj age 12 and we all enjoyed each and every moment of the Trek and all credit goes to Indiahikes Team. Infact the children have already made me committed that we shall keep doing one trek every year.",
        },
      ],
    },
    {
      name: "Shiva Singh",
      batch: "March 2022 to Kedarkantha Trek",
      desc: "It was great experience in trekking with IH team. Thanks for providing great Logistical support. I felt safe and secure with IH team. Team took care of providing good food all the time.",
      details: [
        {
          data: "It was great experience in trekking with IH team. Thanks for providing great Logistical support.",
        },
        { data: "I felt safe and secure with IH team." },
        { data: "Team took care of providing good food all the time." },
        {
          data: "Sometime team is extremely exhausted and feels unable to participate additional activities as part of IH experience or sometime team is required to move quickly after a day hike. I feel like little bit of relaxation or re-organizing the time for such things would help team to recover better and participate in activities better way. Though experience in this trek was far better then my previous IH trek,",
        },
        {
          data: "Green trails is nice idea by IH team and it will definitely help others to understand and adopt learning given by green trail initiative back in their city. I am mostly following in my regular life like saving water, less plastic use, recycle.",
        },
        {
          data: "Experience co-coordinator is very good, supportive and quick is responding. She was able to covey do or don'ts in trek efficient way and reduced all the questions about the trek.",
        },
        {
          data: "Shweta is a great trek lead. I found her very supporting and understanding. She was managing team very well. She very kind and a good communicator. she understood all our concerns and acted very well.",
        },
        { data: "- Regular health check" },
        {
          data: "- Regular check with team regarding their health(if in case of any issues)",
        },
        { data: "- Moral support to team during the trek" },
        { data: "- Making sure no-one is left behind and feeling alone. " },
      ],
    },
    {
      name: "Aparnita Karmalkar",
      batch: "January 2022 to Tamenglong Forest Trek",
      desc: "I have been trekking for many years now. Have done lots of jungle treks. But this trek has been really really different. Its a perfect package of jungle... Streams... Mystic village.... Sunrise....sunsets... Camp sites ...caves... Cooking food... This list is endless.",
      details: [
        {
          data: "I have been trekking for many years now. Have done lots of jungle treks. But this trek has been really really different. Its a perfect package of jungle... Streams... Mystic village.... Sunrise....sunsets... Camp sites ...caves... Cooking food... This list is endless.",
        },
        {
          data: "Things that needs to be changed. The intensity of the trek had to be difficult. First few treks has to be by invite only.",
        },
        {
          data: "Absolutely. Green trails is something i really value and totally believe. This initiative by India hike will definitely go a long way in keeping our mountains clean and healthy. I feel even a single wrapper brought back from the Mountain is worth the initiative.",
        },
        { data: "I learnt loads of skills." },
        { data: "Climbing the mountain with so much of weight." },
        { data: "Cooking our own food" },
        { data: "DIY trek ..is what I can do." },
        { data: "Got a first hand experience of managing the trek." },
        {
          data: "Nandana has been very very helpful. She has been available at every shoutout...whether by mail... whatsapp or call. She had indepth knowledge of every stuff that we had discussion on.",
        },
        { data: "She was like a mother figure to the entire trek." },
        {
          data: "Dhavval is gem of a person. Apart from being a wonderful trek lead he is a very genuine person. He is everready to help anyone at at any point of the day. During the trek, there were times when the decisions had to be changed... Or amended... But he used to be very calm and ever smiling. ",
        },
      ],
    },
    {
      name: "Harshini Ramesh",
      batch: "January 2022 to Dayara Bugyal Trek",
      desc: "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable. It has instilled a positive feedback in me , that what we believe in and the change we wish to see in the world can be brought about by us.",
      details: [
        {
          data: "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable. It has instilled a positive feedback in me , that what we believe in and the change we wish to see in the world can be brought about by us.",
        },
        {
          data: "The trek was amazing. The organisation of the whole trek right from the travel to the base camp is seamless. And your trek guides ( Swaradha , MJ , Jo) I must say handled all the moods of the people and nature that were thrown at them rather gracefully and that too at that altitude and those temperatures.",
        },
        {
          data: "Green Trails is a philosophy all of us must believe in and must live by , I agree with you on this. I practice a sustainable lifestyle at home at least I thought I did until I experienced the degree of practices you follow at such environmental conditions and I realise that I definitely can up my efforts . And I am making changes in my lifestyle to be more sustainable.",
        },
        {
          data: "A skill that I learnt was how to pack your backpack , and how to handle the trek poles. I also was observing how the guides almost like gazelles just glided through the paths when I was struggling to understand where to place a step, I realised the whole body posture helps in playing a role ( a video on how to descend by Swathi ) i recollected some tips and realised that they all fit the checklist the trek leaders were following, so putting into action what i saw and in-person and on the video helped a lot. I had close to no pain or cramps after the descent which is a miracle",
        },
        {
          data: "Prathima is our trek coordinator, she made the experience very welcoming and the ice breaker necessary befor embarking on a journey with complete strangers was done really well.",
        },
        {
          data: "Ms Swaradha , Mr Mrityunjay and Mr Jothi Rajan , they were our trek leaders , I mention them all because each of them showed different leadership qualities , they were amazing as a team as well.",
        },
        {
          data: "Swaradha was committed to the trek not as an employee but as someone who loved trekking, so the trek did not seem like a task.",
        },
        {
          data: "Mrityunjay was a epitome of calmness on summit day , as we were almost an hour behind and it was snowing pretty heavily. I was lagging the whole descent , he just trudged along and for once I did not feel that I'm lagging or in the last or left behind , that boosted my morale . I don't think I thanked him properly , if you can pass on the message Thank you Mrityunjay for boosting my morale. Jothi Ranjan was a complete team player , he was present wherever help was needed , no matter what the work , be it digging the toilet pit or pitching the tents or capturing the most wonderful pictures .",
        },
        {
          data: "In person and and as a team they were wonderful and delivered the spirit of India hikes , of what I have been seeing from the day I started browsing the website. ",
        },
      ],
    },
    {
      name: "Deya Bhattacharjee",
      batch: "December 2021 to Dayara Bugyal Trek",
      desc: "This being the first trek with IH, I am glad to share that it has been one of my best experience ever. The warmth and the care from the entire team had helped all the days on the trek to be wholesome. Starting from the punctuality, to food, from organization to the safety considerations, from the support to the fun part, IH had been very professional and also cooperative. In brief, it had been a great experience.",
      details: [
        {
          data: "This being the first trek with IH, I am glad to share that it has been one of my best experience ever. The warmth and the care from the entire team had helped all the days on the trek to be wholesome. Starting from the punctuality, to food, from organization to the safety considerations, from the support to the fun part, IH had been very professional and also cooperative. In brief, it had been a great experience.",
        },
        {
          data: "I strongly believe in the Green Trails initiative taken by IH. Back at home, I already preach this, use lesser plastics and make sure I reuse them in every possible manner. Before moving out to the mountains, I had been reading about all these on the website and had been so glad to know that I would be a part of this, and saving the mountains. Just keep doing this, and spreading the word.",
        },
        {
          data: "ques. Our trek leader Ankur had been extremely supportive to let us know how to go about things, how to get rid of the fear, the lack of knowledge, and also how to be mentally strong to handle any crisis situation. I learnt that one needs to be compact with their belongings, be ready for challenges as they come their way. Apart from this, being literal, I would say I have learnt the art of pitching and un-pitching the tents.",
        },
        {
          data: "Prathima, the experience Coordinator,  had been very supportive enough, pre as well as post trek. She had been very prompt, to answer to every question and query that I threw down to her at any time. She informed us in details, about the trek, the necessities, the requirements, the fitness regime, packing the belongings, as well as how to be mentally prepared. Even post trek, she was keen enough to communicate with everyone in the group, and acknowledge our experiences and thoughts. In one word, she was cooperative and warm in her approach.",
        },
        {
          data: "Ankur had been my trek leader, and it had been a heart warming experience with him. He is a great person at heart, with a charming personality. He is extremely caring, enthusiastic, supportive and friendly, both with the kids as well as with the elders. Did not find him walking or running through the trails, he actually flies through them all, motivating the entire team throughout. Thanks to him for such an overwhelming experience, with awesome stories to learn from and learning to smile through it all. Missing the entire trek a way too much and specially the morning wakeup calls from him ;)",
        },
      ],
    },
    {
      name: "Pruthvi mj",
      batch: "December 2021 to Dayara Bugyal Trek",
      desc: "It was amazing every trek I do with IH just had it's own unique experience. Would really like to thank the operation team the back end team which we don't see in the camp site helping us throughout to get such a splendid experience. The guides Parwinder bhai and Suraj bhai remarkable Parwinder should do more concerts. The new campus of IH at Raithal is shaping up to be really good and look forward to being there again.",
      details: [
        {
          data: "It was amazing every trek I do with IH just had it's own unique experience. Would really like to thank the operation team the back end team which we don't see in the camp site helping us throughout to get such a splendid experience. The guides Parwinder bhai and Suraj bhai remarkable Parwinder should do more concerts. The new campus of IH at Raithal is shaping up to be really good and look forward to being there again.",
        },
      ],
    },
    {
      name: "Swagata De Khan",
      batch: "November 2021 to Sandakphu Phalut",
      desc: "It was AWESOME. I really didn't expect it to be this well organized. From equipment, staying locations and food - everything came together to make it a memory to cherish lifelong.",
      details: [
        {
          data: "It was AWESOME. I really didn't expect it to be this well organized. From equipment, staying locations and food - everything came together to make it a memory to cherish lifelong.",
        },
      ],
    },
    {
      name: "Anupa Saxena",
      batch: "October 2021 to Deoriatal Chandrashila Trek",
      desc: "My experience with IndiaHikes for the Deoriatal Chandrashila Trek was amazing and very memorable. I absolutely enjoyed the entire experience. Right from the time I signed up",
      details: [
        {
          data: "My experience with IndiaHikes for the Deoriatal Chandrashila Trek was amazing and very memorable. I absolutely enjoyed the entire experience. Right from the time I signed up for the trek, IndiaHikes team provided detailed information like what to pack, how to build fitness for the trek etc. Once the trek started, I was impressed with the way the entire trek was organised - The regular health check-ups to monitor the trekkers' health; The selection of beautiful campsites and equally scenic trails; The delicious food preparations by the kitchen team - All these arrangements were amazing!",
        },
        {
          data: "I absolutely loved all the campsites - the Sari campsite with refreshing green paths against a backdrop of mountains, the Deoriatal campsite with views of snow-covered mountains, the Syalmi campsite with captivating sunset views, and the Baniyakund campsite with green meadows and dramatic skies. The views from the Chandrashila summit were magnificent; the feeling of watching these views is difficult to put into words. Various activities throughout the trek, like tree-hugging in the forest, drinking water directly from the stream, and penning down our thoughts right after the summit climb, made the trek even more valuable, and made me feel closer to nature. A huge thanks to the IndiaHikes trek team - Richa, Kuldeep, Anuj, the kitchen staff and the entire supporting team - for facilitating such a wonderful experience. I also liked the idea of having a debrief meeting after the trek; it gave us a chance to analyse how being close to nature made us feel. It was heartening to hear everyone's experiences and their take-aways from the trek. The trek group was really nice as well; we all got along very well, and it was amazing to see how people were motivating each other. This trek has given me memories which I will cherish forever. I am glad to have been a part of this group.",
        },
        {
          data: "I really liked the sustainable hand-washing practice using the hand-wash contraption. It does save a lot of water, compared to hand-wash using a tap!",
        },
        {
          data: "I did learn some skills that would be useful in my future treks, like proper use of trekking pole, surgeon's knot for shoelaces, sustainable hand-washing and utensil-washing practices.",
        },
        {
          data: "Our experience coordinator for the trek, Nandana, was very helpful in sharing all the required information before the trek started. We got to know a lot of information like what all things to pack, how to build fitness for the trek, and information about the trek itself. We also had a virtual meet-up with the team before the starting of the trek, which was helpful since we got to clarify our questions.",
        },
        {
          data: "I am glad that Richa was was the Trek Leader of our trek. She managed the entire experience very well. She was very motivating and inspiring throughout the trek, and was always available whenever we needed any help. Seeing her passion for nature was very inspiring. I thoroughly enjoyed the activities she encouraged us to do like hugging the trees, and drinking water directly from the river.",
        },
      ],
    },
    {
      name: "Srilakshmi Shankar",
      batch: "October 2021 to Kuari Pass",
      desc: "It was one of a kind. There was high alert rains and landslides and trek had to be cut shot. But the way IndiaHikes team handled with such knowhow was so commendable. Hats of to the team Nishant, Abhishek and the entire team of trekkers and cooks who went great lengths to keep us safe and make sure we travelled back safely.",
      details: [
        {
          data: "It was one of a kind. There was high alert rains and landslides and trek had to be cut shot.",
        },
        {
          data: "But the way IndiaHikes team handled with such knowhow was so commendable. Hats of to the team Nishant, Abhishek and the entire team of trekkers and cooks who went great lengths to keep us safe and make sure we travelled back safely.",
        },
        {
          data: "The food was excellent given the circumstances..there was no compromise. We love you IndiaHikes, waiting to travel with my husband who could not make it this time with me 😊",
        },
      ],
    },
    {
      name: "Liya Bhaumik",
      batch: "October 2021 to Sandakphu Phalut",
      desc: "On indiahikes website every information is well written and the treks are well documented. The rentals is an added bonus. As a first time trekker, I rented a lot of gears . Rent was easy and hassle free. The stay, fooding and lodging were well taken care of.",
      details: [
        {
          data: "On indiahikes website every information is well written and the treks are well documented. The rentals is an added bonus. As a first time trekker, I rented a lot of gears . Rent was easy and hassle free. The stay, fooding and lodging were well taken care of.",
        },
        {
          data: "The trek leader, and the guides were super helpful too. The hosts were nice too.",
        },
      ],
    },
    {
      name: "NILADRI SEKHAR PATRA",
      batch: "October 2021 to Goecha la",
      desc: "Amazing experience I had. Impressive quality of logistics and absolutely delicious food served. Now it comes to the Trek Leader. The trek leader was really great guy to have as leader. Very positive minded he was, which amplified the positivity of the trekkers.",
      details: [
        { data: "Amazing experience I had." },
        {
          data: "Impressive quality of logistics and absolutely delicious food served.",
        },
        { data: "Now it comes to the Trek Leader." },
        {
          data: "The trek leader was really great guy to have as leader. Very positive minded he was, which amplified the positivity of the trekkers.",
        },
      ],
    },
    {
      name: "SOURAV KUMAR BASAK",
      batch: "October 2021 to Goecha la",
      desc: "This was my 3rd trek, and I've done all the 3 treks with Indiahikes. It was again a great experience, would like to do more treks with Indiahikes.",
      details: [
        {
          data: "This was my 3rd trek, and I've done all the 3 treks with Indiahikes. It was again a great experience, would like to do more treks with Indiahikes.",
        },
      ],
    },
    {
      name: "Neha Rochlani",
      batch: "October 2021 to Sandakphu Phalut",
      desc: "It was my first trek and I must say that I decided my 2nd, 3rd and 4th treks while trekking this one!! Needless to say how much I loved the experience!!",
      details: [
        {
          data: "It was my first trek and I must say that I decided my 2nd, 3rd and 4th treks while trekking this one!! Needless to say how much I loved the experience!!",
        },
      ],
    },
    {
      name: "Neha Rochlani",
      batch: "October 2021 to Sandakphu Phalut",
      desc: "Absolutely! I loved thr Green Trails philosophy. I was so use to an eco bag by day 6 that even on day 7 and 8 when i was bk home I was reaching out to collect garbage in that! Ofcourse..this is a practice we must follow whether we are home or on the mountains. Our children deserve a clean and healthy planet!",
      details: [
        {
          data: "Absolutely! I loved thr Green Trails philosophy. I was so use to an eco bag by day 6 that even on day 7 and 8 when i was bk home I was reaching out to collect garbage in that! Ofcourse..this is a practice we must follow whether we are home or on the mountains. Our children deserve a clean and healthy planet!",
        },
      ],
    },
    {
      name: "Maneesh Baid",
      batch: "October 2021 to Experiential Learning - Deoriatal Chandrashila",
      desc: "The experience with Indiahikes was amazing once again. This was my 2nd trek with you and as last time i have no complaints. You guys put so much details into things that matters that as trekkers we just have to go and enjoy the trek.",
      details: [
        {
          data: "The experience with Indiahikes was amazing once again. This was my 2nd trek with you and as last time i have no complaints. You guys put so much details into things that matters that as trekkers we just have to go and enjoy the trek.",
        },
        {
          data: "This being my 1st trek with kids, i was amazed at the amount of security i felt when i left my kids responsibilities on you guys. During the complete accsend or descend  i didn't even know where my kids where but still was sure they'll be safe.",
        },
        { data: "I thank you for the experience and my kids loved it." },
      ],
    },
    {
      name: "Jayasree devineni",
      batch: "October 2021 to Experiential Learning - Dayara Bugyal",
      desc: "The trek has transported me to a different world, walking at my own pace devouring the ever-changing landscape of Dayara’s forest cover. As written by the co-founder Sandhya UC of IH,",
      details: [
        {
          data: "The trek has transported me to a different world, walking at my own pace devouring the ever-changing landscape of Dayara’s forest cover. As written by the co-founder Sandhya UC of IH, is all we have experienced.",
        },
        {
          data: "My very first trek at 63 years old, the oldest in the family trek team, was filled with bountiful energies provided by the 8 year olds. These little ones had no complaints absolutely, in eating whatever is offered and gadgets free days, is amazing.",
        },
        {
          data: "A fantastic learning experience was provided by IH by its trek leader Aditya and his team. Completely new stranger families spent as one family in that week starting from 11th to 16th October 2021.",
        },
        {
          data: "From ‘choice filled’ life to ‘no choice’ days needs to be experienced to know what it means. Thank you, Arjun for creating the “India Hikes” entity.",
        },
        {
          data: "Prathima has provided every bit that was needed before the trek and also has organized an online meeting to clear all doubts. A lot depends on the Coordinator to make it or get dropped. She did a good job.",
        },
      ],
    },
    {
      name: "Veena Rajappa",
      batch: "October 2021 to Sandakphu Phalut",
      desc: "The vision and values of IndiaHikes was experienced and I could really feel and live these through out the trek. It was indeed the best trekking experience that I have had. Our trek lead, was amazing",
      details: [
        {
          data: "The vision and values of IndiaHikes was experienced and I could really feel and live these through out the trek. It was indeed the best trekking experience that I have had. Our trek lead, was amazing in the way she led the team and lived these values in the true spirit. She connected well with each one of us and made it a superb experience over all.",
        },
        {
          data: "I am anyways a person that works on SWM issues in my community and locality here. It was amazing to see the green trail philosophy of leaving the trails better. Picking up small pieces of litter, segregate them at the end of the day, the bio toilets' etc. were an amazing experience and learning.",
        },
      ],
    },
    {
      name: "ROHIT KAUSHAL",
      batch: "October 2021 to Sandakphu Phalut",
      desc: "The reason I trek with India hikes is for the experience which is beyond the physical experience of the trek. And this time too the experience was phenomenal, in fact the way the trek leads try to do different things for example",
      details: [
        {
          data: "The reason I trek with India hikes is for the experience which is beyond the physical experience of the trek. And this time too the experience was phenomenal, in fact the way the trek leads try to do different things for example writing a post card at the summit so that the trekkers retain the experience in their mind and soul + also to build the habit of reflection goes beyond the physical trekking experience, or the daily reflection exercise of drawing the mountain basis the experience was great. Kudos to the team, great job done by the trek lead on this trek",
        },
        {
          data: "As already mentioned, trek leaders are what pull me to trek with India hikes. The way she created bonding with the group, the kind of experiences she curated for the team and the way she leads the team both with authority and care is inspiring to see in a girl at such a young age.",
        },
      ],
    },
    {
      name: "Rohit Chaurasia",
      batch: "October 2021 to Sandakphu Phalut",
      desc: "Definitely it was one my best experience and for sure I am coming back to this trek with better preparation from my side. Green Trails : One of the greatest initiative, i saw my friend changing in",
      details: [
        {
          data: "Definitely it was one my best experience and for sure I am coming back to this trek with better preparation from my side.",
        },
        {
          data: "Green Trails: One of the greatest initiative, i saw my friend changing in front of me understanding the value of nature, respecting the gods that lies in each elements of earth. Now I am more proud and confident to make other aware of this initiative.",
        },
      ],
    },
  ];

  const trekkersStoriesGr = trekkersStoriesImageArray?.map(function (data, i) {
    const trekkers_stories_desc = data.trekkers_stories_desc?.map((desc, j) => {
      return <p key={j}>{desc.text}</p>;
    });
    let url;
    const slugUrl = data?.link_article_url?.slug;
    if (slugUrl) {
      url = linkResolver(data?.link_article_url);
    } else {
      url = data?.link_article_url?.url;
    }
    return (
      <div key={`trekkstory` + i}>
        <div className="mx-4 m-mx-0 cursor-pointer hvr-grow">
          <Link href={url ? url : "#"}>
            <a target="_blank">
              <div className="card_sec">
                <div className="card trek_card">
                  <div className="choose_trek_image">
                    <Image
                      src={data?.trekkers_stories_image?.url}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="50% 50%"
                      alt="imgs"
                      unoptimized
                      // width={350}
                      // height={215}
                    />
                  </div>
                  <div className="p-4">
                    <div>
                      <h3 className="title-diplay-3 ts-lable">
                        {data?.trekkers_stories_title[0]?.text}
                      </h3>
                      <div className="p-display-2">
                        {trekkers_stories_desc?.length > 125
                          ? `${trekkers_stories_desc.substring(0, 125)}...`
                          : trekkers_stories_desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  });

  const trekkersStoriesImage = sampleData?.map(function (data, i) {
    return (
      <>
        <div className="mx-4 m-mx-0" key={`trekkstory` + i}>
          <div className="card_sec">
            <div className="card trek_card review_card">
              <div className="p-4">
                <div>
                  <div className="mb-4">
                    <h6>
                      <b>{data.name}</b>
                    </h6>
                    <p className="m-0 p-display-2">Group of {data.batch}</p>
                    {/* <p className="m-0 p-display-2">{data.batch}</p> */}
                  </div>
                  {/* <h3 className="title-diplay-3 ts-lable">
                    {data.title.length > 25
                      ? `${data.title.substring(0, 55)}...`
                      : data.title}
                  </h3> */}
                  <p className="p-display-2">
                    {data?.desc?.length > 125
                      ? `${data.desc.substring(0, 195)}...`
                      : data.desc}
                  </p>
                </div>
                <div className="d-flex justify-content-end w-100">
                  <button
                    class="btn btn-lg btn-ih-primary text-capitalized hvr-grow mt-3 mb-2"
                    onClick={() => {
                      setReveiewInfo(data);
                      setShow(true);
                    }}
                  >
                    Read More
                  </button>
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
      <div className="my-5 py-3">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3">
            <div className="col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="p-text-4">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">{trekkersStoriesGr}</div>
            <div className="col-lg-8 col-md-6 col-12">
              <div>
                <Slider {...settings}>{trekkersStoriesImage}</Slider>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {ChooseTreks}
        </style>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
        className="review_modal"
      >
        <Modal.Header className="border-0 py-0" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="p-4">
              <div>
                <div className="mb-4">
                  <h6>
                    <b>{reveiewInfo && reveiewInfo.name}</b>
                  </h6>
                  <p className="m-0 p-display-2">Group of</p>
                  <p className="m-0 p-display-2">
                    {reveiewInfo && reveiewInfo.batch}
                  </p>
                </div>
                {/* <h3 className="title-diplay-3 ts-lable">
                  {reveiewInfo && reveiewInfo.title}
                </h3> */}
                <div className="p-display-2">
                  {reveiewInfo &&
                    reveiewInfo.details.map((details) => {
                      return <p className="mb-1">{details?.data}</p>;
                    })}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TrekkersStories;
