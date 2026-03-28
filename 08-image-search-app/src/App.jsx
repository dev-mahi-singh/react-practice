import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'
import axios from 'axios'
import Loader from './components/Loader'
import LoadMoreBtn from './components/LoadMoreBtn'

const App = () => {

  const [query, setQuery] = useState('nature');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${apiKey}`);

      if (response.data.results.length === 0) {
        setError("No images found");
      }
      if (page === 1) {
        setImages(response.data.results);
      }
      else {
        setImages(prev => [...prev, ...response.data.results]);
      }
      setError(null);
      setLoading(false);
    }
    catch (error) {
      setError("Something went wrong.");
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchImages();
  }

  useEffect(() => {
    fetchImages();
  }, [page]);


  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-r from-violet-200 to-pink-200 overflow-x-hidden'>
      <Header />
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} loading={loading} />
      {loading && <Loader />}
      <ImageGrid images={images} />
      {error && (
        <p className="text-center text-red-500 mt-4">{error}</p>
      )}
      {!loading && images.length > 0 && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
    </div>
  )
}

export default App