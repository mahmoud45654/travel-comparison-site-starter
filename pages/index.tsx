import Head from 'next/head';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>موقع مقارنة السفر | رحلات وفنادق</title>
        <meta name="description" content="ابحث وقارن أرخص أسعار رحلات الطيران والفنادق" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-10 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-800 mb-6">
          أهلاً بك في <span className="text-blue-600">موقع مقارنة السفر</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
          مكانك الأول للبحث عن أرخص رحلات الطيران وأفضل عروض الفنادق.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            البحث عن رحلات الطيران
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-blue-800 font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            البحث عن الفنادق
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Home;