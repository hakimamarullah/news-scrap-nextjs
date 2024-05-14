import dynamic from "next/dynamic";

const NewsListDynamic = dynamic(() => import("./components/NewsList"));

export default async function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center overflow-x-auto">
      <main className="max-w-screen-lg mx-auto py-4">
        <NewsListDynamic />
      </main>
    </div>
  );
}
