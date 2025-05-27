import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">مقارنة السفر</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-200 transition duration-300">الرئيسية</a></li>
            <li><a href="/flights" className="hover:text-blue-200 transition duration-300">رحلات الطيران</a></li>
            <li><a href="/hotels" className="hover:text-blue-200 transition duration-300">الفنادق</a></li>
            <li><a href="/contact" className="hover:text-blue-200 transition duration-300">اتصل بنا</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-blue-800 text-white p-6 text-center text-sm mt-auto">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} موقع مقارنة السفر. جميع الحقوق محفوظة.
          <div className="mt-2">
            <a href="/privacy-policy" className="hover:underline mx-2">سياسة الخصوصية</a> | 
            <a href="/terms-of-service" className="hover:underline mx-2">شروط الاستخدام</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;