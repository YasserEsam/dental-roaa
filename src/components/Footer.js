"use client";
import { FaWhatsapp, FaFacebook, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; // استيراد الأيقونات المطلوبة
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <footer className="bg-blue-100 dark:bg-gray-800 py-8 text-gray-800 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* القسم الأول: العنوان ورقم الهاتف */}
          <div className="space-y-4" data-aos="fade-up">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-teal-500 dark:text-teal-300 text-2xl mr-3" />
              <p className="leading-relaxed">
                <strong>العنوان:</strong> صنعاء، شارع الزبيري، أول فكة على اليسار عند مستشفى سيبلاس.
              </p>
            </div>
            <div className="flex items-start">
              <FaPhoneAlt className="text-teal-500 dark:text-teal-300 text-2xl mr-3" />
              <p className="leading-relaxed">
                <strong>رقم الهاتف:</strong>{" "}
                <span dir="ltr" className="inline-block">+967 776 002 001</span>
              </p>

            </div>
          </div>

          {/* القسم الثاني: روابط التواصل الاجتماعي */}
          <div className="flex flex-col items-center md:items-start" data-aos="fade-up">
            <h3 className="text-lg font-semibold mb-4">تابعنا على:</h3>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=61552804534965&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-400"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://wa.me/967776002001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-400"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>

          {/* القسم الثالث: رسالة ترحيبية */}
          <div className="text-center md:text-right" data-aos="fade-up">
            <h3 className="text-lg font-semibold mb-4">أهلاً وسهلاً بكم!</h3>
            <p className="leading-relaxed">
              يسعدنا استقبال استفساراتكم عبر وسائل التواصل المختلفة. نهدف إلى تقديم أفضل الخدمات لعملائنا الكرام.
            </p>
          </div>
        </div>

        {/* حقوق الملكية */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Ghamdan Clinic. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
