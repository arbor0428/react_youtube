import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../component/VideoCard';

export default function Videos() {
    const { keyword } = useParams();
    const {isLoading, error, data: videos} = useQuery(
        ['vides', keyword], async () => {
            return fetch(`/videos/${keyword? 'search' : 'popular'}.json`)
            .then((res) => res.json())
            .then((data) => data.items);
        });
    return (
        <>
            <div>Videos {keyword ? `o${keyword}` : 'x'} </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong</p>}
            {videos && (
                <ul>
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
            ))}
            </ul>
            )}
        </>
    );
}