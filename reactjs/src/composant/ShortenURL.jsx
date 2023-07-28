import React, { useState } from 'react';
import axios from 'axios';

const ShortenURL = () => {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');

  const handleShorten = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/url', { long_url: longURL });
      setShortURL(response.data.short_url);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a long URL"
              value={longURL}
              onChange={(e) => setLongURL(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleShorten}>
              Shorten
            </button>
          </div>
          {shortURL && (
            <p className="alert alert-success">
              Short URL: <a href={shortURL}>{shortURL}</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortenURL;
