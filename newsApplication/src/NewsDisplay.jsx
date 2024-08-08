import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching the news articles:', error);
      });
  }, []);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">News Application</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-xl  "
      />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Link</th>
          
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map((article, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                <img src={article.urlToImage} alt={article.title} className="w-20 h-20 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">{article.title}</td>
              <td className="py-2 px-4 border-b">{article.description}</td>
              <td className="py-2 px-4 border-b">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsDisplay;