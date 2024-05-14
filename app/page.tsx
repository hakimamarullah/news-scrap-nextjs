import NewsCard, { NewsArticle, Response } from "./components/NewsCard";
import PaginationClient from "./components/PaginationClient";
import { fetchData } from "./utils/utils";

export default async function Home() {
  const data = await fetchData<Response<NewsArticle[]>>(
    "http://localhost:8080/news/articles"
  );
  const news: NewsArticle[] = data.data;

  return (
    <div className="min-h-screen flex justify-center items-center overflow-x-auto">
      <main className="max-w-screen-lg mx-auto py-4">
        <div className="grid grid-cols-1 gap-4">
          {news.map((item, idx) => (
            <NewsCard key={idx} news={item} />
          ))}
        </div>
        <div className="flex justify-center pt-4">
          <PaginationClient totalPage={data.totalPage} initialPage={1} />
        </div>
      </main>
    </div>
  );
}
