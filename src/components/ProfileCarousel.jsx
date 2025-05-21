// ProfileCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; // <-- Social Icons
import "swiper/css";
import "swiper/css/pagination";
import "./ProfileCarousel.css";

const profiles = [
  {
    id: 1,
    name: "Shri Digvijay Joshi",
    title: "Propertier ",
    avatar: "",
    background: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Shri Shripad Deshpande ",
    title: "Propertier Partner ",
    avatar: "",
    background: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
  // ...Add all 13 profiles with different backgrounds
  {  
    id: 3,
    name: "Mr. Prajyot Visal",
    title: "Sr. Engineer ( Design & Project )",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Mr. Nagesh Thite ",
    title: "Purchase Manager ",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Mr. Ajai Kulkarni ",
    title: "Engineer ( Design & Project ) ",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "Mr. Aniket Jorkar ",
    title: "Production Engineer ",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    name: "Mr. Sarthak Jagade",
    title: "Production Associate",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 8,
    name: "Mr. Ramchandra Chintamwad",
    title: "Account Executive",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 9,
    name: "Mr. Vikas Dighe",
    title: "Production Manager ",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 10,
    name: "Mr. Surendra Pardesi",
    title: "Sr. Manager",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 11,
    name: "Mr. Lalit Patil",
    title: "Operations Head ",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 12,
    name: "Mr. Siddhart",
    title: "Purchase Executive",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 13,
    name: "Emily Davis",
    title: "Project Manager",
    avatar: "",
    background: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
  },
  
  // (Continue filling others similarly)
];

const ProfileCarousel = () => {
  return (
    <div className="carousel-container" id ='profile'>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {profiles.map((profile) => (
          <SwiperSlide key={profile.id}>
            <div className="profile-card" style={{ backgroundImage: `url(${profile.background})` }}>
              <div className="overlay">
                <img src={profile.avatar} alt={profile.name} className="avatar" />
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
                <div className="social-icons">
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaGithub /></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileCarousel;
