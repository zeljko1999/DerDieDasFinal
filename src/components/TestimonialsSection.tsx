import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import Img from "./Img";

const TestimonialsSection = () => (
  <div className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Iskustva naših polaznika
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        className="custom-swiper pb-10 overflow-x-hidden"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((e, t) => (
          <SwiperSlide className="w-full h-auto" key={t}>
            <div className="relative flex flex-col h-full">
              <div
                className="relative flex-grow border-2 border-gray-300 rounded-lg p-6 mb-8 shadow-md classic-speech-bubble bg-stone-50"
              >
                <div className="absolute top-2 left-3 text-6xl text-black font-serif leading-none">
                  ”
                </div>
                <div className="flex justify-center pt-2  px-2 py-1">
                  <div className="flex items-center space-x-1 p-2 rounded-md bg-gradient-to-r from-slate-700 to-gray-900">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        className="w-4 h-4 text-amber-400 fill-current"
                        key={i}
                      />
                    ))}
                  </div>
                </div>
                <div className="px-6 py-2">
                  <p className="text-black text-sm leading-relaxed italic">
                    {e.text}
                  </p>
                </div>
                <div className="absolute bottom-2 right-3 text-6xl text-black font-serif leading-none flex items-end">
                  „
                </div>
                <div className="absolute bottom-0 left-8 transform translate-y-full">
                  <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent border-t-gray-300" />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[2px] w-0 h-0 border-l-[13px] border-r-[13px] border-t-[18px] border-l-transparent border-r-transparent border-t-stone-200" />
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-auto pt-2">
                <Img
                  name={e.image}
                  alt={e.name}
                  sizes="48px"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-base text-gray-800">
                    {e.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{e.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default TestimonialsSection;
