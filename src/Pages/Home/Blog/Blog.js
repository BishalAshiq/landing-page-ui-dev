import React from "react";
import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import BlogCard from "./BlogCard";
import s1 from "../../../images/S-1.jpg";
import s2 from "../../../images/s-2.jpg";
import s3 from "../../../images/s-3.jpg";
import s4 from "../../../images/s-4.jpg";
import s5 from "../../../images/s-5.jpg";


const Blog = () => {
  return (
    <div className="container py-4 px-4 justify content center blog">
      <h2 style={{fontWeight: 600}}>Blog</h2>
      <Swiper
        spaceBetween={70}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <BlogCard data={{imgSrc: s1, title: "WINDOW", text: "Lorem Ipsum que"}}>
          </BlogCard>
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard data={{imgSrc: s2, title: "WINDOW", text: "Consectetur adipiscing sed do"}}>
          </BlogCard>
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard data={{imgSrc: s3, title: "WINDOW", text: "Minim veniam, quis nostrud exercitation"}}>
          </BlogCard>
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard data={{imgSrc: s4, title: "WINDOW", text: "Lorem Ipsum que"}}>
          </BlogCard>
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard data={{imgSrc: s5, title: "WINDOW", text: "Lorem Ipsum que"}}>
          </BlogCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blog;
