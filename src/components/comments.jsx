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
    }, [videoId]);

    return (
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
    );
};

export default YouTubeComments;