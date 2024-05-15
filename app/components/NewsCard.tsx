import dayjs from "dayjs";
import Link from "next/link";

export interface Response<T> {
  page: number;
  size: number;
  totalPage: number;
  data: T;
}

export interface NewsArticle {
  id: number;
  title: string;
  publicationTime: number;
  content: string;
  url: string;
}

const NewsCard = async ({ news }: { news: NewsArticle }) => {
  const formattedTime = dayjs(news.publicationTime).format("DD MMM YYYY HH:mm");
  const [prefix, content] = news.content.split(" - ");
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {formattedTime}
        </span>
        <div>
          <Link href={`/news/view/${news.id}`}>
            <p className="font-bold text-xl mb-2 capitalize">{news.title}</p>
          </Link>
        </div>
        <p className="text-gray-700 text-base line-clamp-4">
          <strong>{prefix}</strong> - {content}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
