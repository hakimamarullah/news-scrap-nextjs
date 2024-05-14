"use client";

import { Pagination } from "@nextui-org/pagination";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";
import NewsCard, { NewsArticle, Response } from "./NewsCard";

const NewsList = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const data = await fetchData<Response<NewsArticle[]>>(
        `http://localhost:8080/news/articles?page=${page}&size=10`
      );
      setNews(data.data);
      setTotalPage(data.totalPage);
    })();
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {news.map((item, idx) => (
          <NewsCard key={idx} news={item} />
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <Pagination
          isCompact
          showControls
          total={totalPage}
          page={page}
          initialPage={page}
          onChange={(n) => setPage(n)}
        />
      </div>
    </>
  );
};

export default NewsList;
