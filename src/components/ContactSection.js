"use client";
import { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد أنيميشن AOS

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // تفعيل الأنيميشن
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-teal-500 dark:text-teal-300 font-poppins mb-4">التواصل معنا</h2>
        <h1 className="text-4xl font-bold text-indigo-800 dark:text-indigo-300 font-poppins">معلومات التواصل</h1>
      </div>

      {/* استخدام flexbox لتوزيع العناصر */}
      <div className="flex justify-between items-start max-w-6xl mx-auto px-4">
        {/* معلومات التواصل مع التأثير */}
        <div className="w-1/2 text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed px-4" data-aos="fade-up">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-teal-500 dark:text-teal-300 text-2xl mr-3" />
            <p className="leading-relaxed">
              <strong>العنوان:</strong> صنعاء، شارع الزبيري، أول فكة على اليسار عند مستشفى سيبلاس.
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-teal-500 dark:text-teal-300 text-2xl mr-3" />
            <p className="leading-relaxed"><strong>رقم الهاتف:</strong> +967 776 002 001</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
