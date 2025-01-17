import Image from "next/image";

const Main = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* صورة الخلفية */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/professional-dentist-tools-dental-office.jpg"
          alt="عيادة الأسنان"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority={true}
        />
      </div>

      {/* طبقة الشفافية */}
      <div className="absolute inset-0 bg-black bg-opacity-55 -z-10"></div>

      {/* المحتوى */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center lg:text-right flex flex-col lg:flex-row items-center gap-8">
        <div className="text-white lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white">
            حافظ على ابتسامتك <br /> صحية وجميلة
          </h1>
          <p className="text-gray-200 dark:text-gray-400 mt-4">
             نوفر لك خدمات رعاية الأسنان بأعلى جودة مع فريق متخصص
            في جميع أنواع العلاجات.
          </p>
          
        </div>

        {/* مساحة فارغة لصورة الجانب الأيمن */}
        <div className="hidden lg:block lg:w-1/2"></div>
      </div>
    </section>
  );
};

export default Main;
