import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';


export default function VideoCard({ video, type}) {
    const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
    const navigate = useNavigate();
    const isList = type === 'list';
    return (
        <li 
        className={isList ? 'w-full flex gap-3 my-2 cursor-pointer' : 'cursor-pointer'}
        onClick={()=> {
                navigate(`/videos/watch/${video.id}`, {state: {video}});
            }}
        >
            <div className={isList ?'w-2/5 rounded-xl overflow-hidden' :'w-full rounded-xl overflow-hidden'}>
                <img className='w-full h-full' src={thumbnails.medium.url} alt={title} />
            </div>
            <div className={isList ?'w-3/5' :''}>
                <p className='font-semibold my-2 line-clamp-2'>{title}</p>
                <p className='text-sm opacity-80'>{channelTitle}</p>
                <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
            </div>
        </li>
    );
}

