"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import { FaTooth, FaShieldAlt } from "react-icons/fa"; // استيراد الأيقونات المناسبة
import "aos/dist/aos.css"; // استيراد أنماط AOS

const DentalSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن
      easing: "ease-in-out",
      once: true, // يحدث الأنيميشن مرة واحدة فقط
    });
  }, []);

  return (
    <section
       id="about"
      className="bg-gradient-to-b from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-12"
      data-aos="fade-up" // إضافة الأنيميشن للقسم بأكمله
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div
          className="lg:w-1/2 text-center"
          data-aos="fade-right" // أنيميشن النصوص من اليمين
        >
          <h2 className="text-6xl text-teal-500 dark:text-teal-300 font-poppins mb-4 font-extrabold">
            ممارستنا
          </h2>
          <h1 className="text-4xl font-bold text-indigo-800 dark:text-indigo-300 font-poppins mb-6 leading-tight">
            نحن نقدم خدمات طبية عالية الجودة
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            نقدم لكم خدمات متقدمة في مجال طب الأسنان باستخدام أحدث التقنيات لضمان حصولكم على رعاية صحية متكاملة. فريقنا المتخصص جاهز لتلبية كافة احتياجاتكم.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="text-teal-500 text-2xl">
                <FaTooth />
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-center">
                طاقم محترف ذو خبرة عالية.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-teal-500 text-2xl">
                <FaShieldAlt />
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-center">
                أنظمة رقابة جودة لضمان أفضل النتائج.
              </p>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div
          className="lg:w-1/2 relative flex justify-center items-center"
          data-aos="fade-left" // أنيميشن الصور من اليسار
        >
          <div className="shield-frame p-6 shadow-xl">
            <Image
              src="/images/modern-dental.jpg"
              alt="عيادة أسنان حديثة"
              width={500}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-500 dark:bg-teal-700 text-white px-4 py-2 rounded-full shadow-lg"
            data-aos="zoom-in" // أنيميشن التكبير
          >
            <p className="font-bold"> الرقم</p>
            <p className="text-sm" dir="ltr">+967 776 002 001</p>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .shield-frame {
          position: relative;
          background: linear-gradient(to bottom, #e0e0e0);
          clip-path: path(
            "M 0 0 H 400 V 350 C 400 350 200 500 0 350 V 0 Z"
          );
          width: 400px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default DentalSection;
