// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // تضمين ملفات الصفحات
    "./src/components/**/*.{js,ts,jsx,tsx}", // تضمين ملفات المكونات
    "./src/app/**/*.{js,ts,jsx,tsx}", // تضمين ملفات التطبيق
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // تعريف ألوان متغيرة
        foreground: "var(--foreground)", // تعريف ألوان متغيرة
      },
    },
  },
  darkMode: 'class', // تفعيل الوضع الليلي باستخدام الكلاس
  plugins: [], // إضافة أي مكونات إضافية لاحقًا
};

export default tailwindConfig;
