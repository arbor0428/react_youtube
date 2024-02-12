import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeComments = () => {
    const [videoId, setVideoId] = useState('YOUR_VIDEO_ID'); // Replace with your actual YouTube video ID
    const [comments, setComments] = useState([]);

    
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`
                );

                const commentData = await Promise.all(response.data.items.map(async item => {
                    const author = item.snippet.topLevelComment.snippet.authorDisplayName;
                    const text = item.snippet.topLevelComment.snippet.textOriginal;
                    const authorChannelId = item.snippet.topLevelComment.snippet.authorChannelId.value;

                    // Fetching author profile image
                    const profileImageResponse = await axios.get(
                        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${authorChannelId}&key=${apiKey}`
                    );

                    const profileImageUrl = profileImageResponse.data.items[0].snippet.thumbnails.default.url;

                    return { author, text, profileImageUrl };
                }));

                setComments(commentData);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [videoId]);


    return (
    <div>
        <h2>YouTube Comments</h2>
        <ul>
        {comments.map((comment, index) => (
            <li className='flex align-center' key={index}>
                <img src={comment.profileImageUrl} alt={comment.author} />
                <div>
                    <strong>{comment.author}:</strong> 
                    <span>{comment.text}</span>
                </div>
            </li>
        ))}
        </ul>
    </div>
    );
};

export default YouTubeComments;