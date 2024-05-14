import NewsCard, { NewsArticle, Response } from "./components/NewsCard";

export default async function Home() {
  const response = await fetch("http://localhost:8080/news");
  const data: Response<NewsArticle[]> = await response.json();
  const news: NewsArticle[] = data.data;

  return (
    <main>
      <h1>News Scrap</h1>
      {news.map((item, idx)=> <NewsCard key={idx} news={item}/>)}
    </main>
  );
}
