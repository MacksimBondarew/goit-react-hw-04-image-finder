import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { fetchImages } from 'services/images-api';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader/Loader';
import { Information, Error } from './App.styled';

const App = () => {
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState('idle');
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function fetchStart() {
            try {
                const { hits, totalHits } = await fetchImages(query, page);

                if (hits.length < 1 || query.trim() === '') {
                    setStatus('error');
                } else {
                    const newImages = page === 1 ? hits : [...images, ...hits];
                    setImages(newImages);
                    setTotal(totalHits);
                    setStatus('ok');
                }
            } catch (error) {
                setStatus('error');
            }
        }

        if (query !== '' && page > 0) {
            fetchStart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, page]);

    const queryImages = request => {
        setQuery(request);
        setPage(1);
        setStatus('pending');
    };
    const addOnePoingPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const totalPages = Math.ceil(total / 12);
        if (status === 'idle') {
            return (
                <>
                    <SearchBar onSubmit={queryImages} />
                    <Information>
                        Please enter something in the search and click on the
                        button
                    </Information>
                </>
            );
        }
        if (status === 'pending') {
            return (
                <>
                    <SearchBar onSubmit={queryImages} />
                    <ImageGallery images={images} />
                    <Loader />;
                </>
            );
        }
        if (status === 'ok') {
            return (
                <>
                    <SearchBar onSubmit={queryImages} />
                    <ImageGallery images={images} />
                    {totalPages > page && (
                        <Button addOnePoingPage={addOnePoingPage} />
                    )}
                </>
            );
        }
        if (status === 'error') {
            return (
                <>
                    <SearchBar onSubmit={queryImages} />
                    <Error>
                        Sorry, an error occurred while loading this page. Please
                        try again later
                    </Error>
                </>
            );
        }
};

export default App;
