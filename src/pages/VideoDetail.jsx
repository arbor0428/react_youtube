import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import axios from 'axios';

export default function VideoDetail() {
    const {
        state: { video },
    } = useLocation();
    const {title, channelId, channelTitle, description} = video.snippet;

    //comments
    const [comments, setComments] = useState([]);

    useEffect(() => {
    const fetchComments = async () => {
        try {
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${video.id}&key=${apiKey}`
        );

        const commentData = response.data.items.map(item => ({
            author: item.snippet.topLevelComment.snippet.authorDisplayName,
            text: item.snippet.topLevelComment.snippet.textOriginal,
        }));

        setComments(commentData);
        } catch (error) {
        console.error('Error fetching comments:', error);
        }
    };

    fetchComments();
    }, [video.id]);



    return (
    <section className='flex flex-col gap-4 lg:flex-row md:px-4'>
        <article className='basis-3/4'>
            <div className='overflow-hidden w-full rounded-xl '>
                <iframe 
                    id="player" 
                    type="text/html" 
                    width="100%" 
                    height="640"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameborder="0"
                    title={title}
                />
            </div>
            <div className='py-4'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <ChannelInfo id={channelId} name={channelTitle} />
                <pre className='whitespace-pre-wrap bg-neutral-100 py-4 px-3 box-border rounded-lg text-sm'>{description}</pre>
            </div>
            <div>
                <h2>YouTube Comments</h2>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.author}:</strong> {comment.text}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
        <section className='basis-1/4'>
            <RelatedVideos id={video.id} />
        </section>
    </section>
    );
}
