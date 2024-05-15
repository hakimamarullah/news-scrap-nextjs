import BackButton from "@/app/components/BackButton";
import { NewsArticle, Response } from "@/app/components/NewsCard";
import { fetchData } from "@/app/utils/utils";
import dayjs from "dayjs";

const ViewNews = async ({ params }: { params: { id: number } }) => {
  const data = await fetchData<Response<NewsArticle>>(
    `http://localhost:8080/news/view/${params.id}`
  );
  const news: NewsArticle = data.data;
  const formattedTime = dayjs(news.publicationTime).format("DD MMM YYYY HH:mm");
  const [prefix, content] = news.content.split(" - ");

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="flex items-center mb-4">
          <BackButton />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center capitalize">
          {news.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          Published on: {formattedTime}
        </p>
        <p className="text-lg leading-relaxed text-gray-800 text-justify">
          <strong>{prefix}</strong> - {content}
        </p>
        <p className="text-lg text-gray-800 mt-4">
          <i>
            <strong>Source:</strong>{" "}
          </i>
          <a
            href={news.url}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {news.url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ViewNews;
