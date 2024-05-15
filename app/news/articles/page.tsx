import NewsCard, { NewsArticle, Response } from "@/app/components/NewsCard";
import PaginationClient from "@/app/components/PaginationClient";
import { fetchData } from "@/app/utils/utils";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page = 1, size = 10 } = searchParams || {};

  const data = await fetchData<Response<NewsArticle[]>>(
    `http://localhost:8080/news/articles?page=${page}&size=${size}`
  );
  const news = data.data;
  return (
    <main className="max-w-screen-lg mx-auto py-4">
      <div className="flex flex-col gap-4 items-center justify-center">
        {news.map((item, idx) => (
          <NewsCard key={idx} news={item} />
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <PaginationClient totalPage={data.totalPage} page={Number(page)} />
      </div>
    </main>
  );
};

export default page;
