"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Services = () => {
  const services = [
    {
      title: "طب الأسنان التجميلي",
      image: "/images/cosmetic_dentistry.jpg",
      description: "نوفر تقنيات مبتكرة لتحسين ابتسامتك.",
    },
    {
      title: "طب أسنان الأطفال",
      image: "/images/pediatric_dentistry.jpg",
      description: "رعاية لطيفة ومخصصة لصحة أسنان الأطفال.",
    },
    {
      title: "زراعة الأسنان",
      image: "/images/dental_implants.jpg",
      description: "حل دائم لتعويض الأسنان المفقودة.",
    },
    {
      title: "تبييض الأسنان",
      image: "/images/teeth_whitening.jpg",
      description: "ابتسامة مشرقة مع تقنيات تبييض متقدمة.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Make sure the animation happens once
    });
  }, []);

  return (
    <section id="services" className="bg-gradient-to-b from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-12">
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-base font-bold text-teal-500 dark:text-teal-300 font-poppins">
        ماذا نقدم
      </h2>
      <h1 className="text-2xl sm:text-lg font-bold text-indigo-800 dark:text-indigo-300 font-poppins">
        تقديم رعاية الأسنان للعائلات في مجتمعنا
      </h1>
    </div>
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="text-center"
        >
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              className="rounded-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl sm:text-lg font-semibold text-indigo-800 dark:text-indigo-300 font-roboto">
            {service.title}
          </h3>
          <p className="text-gray-600 sm:text-sm dark:text-gray-300 mt-2 font-roboto">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default Services;
