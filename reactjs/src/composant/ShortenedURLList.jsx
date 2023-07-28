import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShortenedURLList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/url');
        setUrls(response.data.urls);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchUrls();
  }, []);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="mb-4">Previously Shortened URLs</h2>
          <ul className="list-group">
            {urls.map((url) => (
              <li key={url.id} className="list-group-item">
                <p className="mb-1">Short URL: {url.short_code}</p>
                <p className="mb-1">Long URL: {url.long_url}</p>
                <p>Click Count: {url.clicks_count}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShortenedURLList;
