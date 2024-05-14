

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
}

const NewsCard = async ({news}:{news: NewsArticle}) => {

  return (
    <div key={news.id}>
      <h3>{news.title}</h3>
      <small>{news.publicationTime}</small>
      <p>{news.content}</p>
    </div>
  )
}

export default NewsCard