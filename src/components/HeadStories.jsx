import { useState, useEffect } from 'react';

const stories = [
    {
        quote: "Your app brings so much peace and tolerance to our home.",
        author: "Rachael, UK",
        description: "on meditation's positive effect on family life"
    },
    {
        quote: "I came to learn that the storyline in my head ... was holding me back.",
        author: "Peter, Belgium",
        description: "on what he learned when sitting with himself"
    },
    {
        quote: "Headspace provides me with ... a connection to myself, and a disconnection from negative thoughts, feelings, and sensations.",
        author: "Keri, UK",
        description: "on finding her happy place"
    },
    {
        quote: "Changing ... allowed me to change my life.",
        author: "Davide, London",
        description: "on using meditation to transform his life"
    },
];

export default function HeadspaceStories() {
    const [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextStory = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    };

    const prevStory = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
    };

    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">Headspace Stories</h2>
                <div className="relative">
                    <div className="flex justify-center items-center">
                        {stories.map((story, index) => (
                            <div
                                key={index}
                                className={`w-80 p-6 rounded-lg transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-white shadow-lg scale-105 z-10'
                                        : index === (currentIndex - 1 + stories.length) % stories.length ||
                                        index === (currentIndex + 1) % stories.length
                                            ? 'bg-gray-200 scale-95 opacity-70'
                                            : 'hidden'
                                }`}
                            >
                                <blockquote className="text-2xl font-light italic mb-4 text-gray-600">
                                    {story.quote}
                                </blockquote>
                                <p className="font-semibold text-gray-800">{story.author}</p>
                                <p className="text-sm text-gray-500">{story.description}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={prevStory}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={nextStory}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
