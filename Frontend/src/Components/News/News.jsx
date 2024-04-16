import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=Farmer&sortBy=popularity&apiKey=dcc235505e3c4443b824a53a99b5db68"
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <Mainpanel /> */}
      <div className="container mt-4">
        <div className="row ">
          {newsData.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Cards
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                url={article.url}
                publishedAt={article.publishedAt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
