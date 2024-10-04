const topics = [
    {
        title: 'Meditation',
        items: [
            'What is meditation',
            'Meditation for beginners',
            'Benefits of meditation',
            'Guided meditation',
            'Meditation techniques',
        ],
    },
    {
        title: 'Sleep',
        items: [
            'How to sleep better',
            'Meditation for sleep',
            'How to fall back asleep',
            'How to wake up',
            'Sleep hacks',
        ],
    },
    {
        title: 'Stress',
        items: [
            'Meditation for anxiety',
            'How to relieve stress',
            'Meditation for stress',
            'How to relax',
            'How to reduce anxiety',
        ],
    },
    {
        title: 'Mindfulness',
        items: [
            'How to stop worrying',
            'How to form a habit',
            'How to be more grateful',
            'How to be more present',
            'How to improve self-esteem',
        ],
    },
];

const WellnessSection = () => {
    return (
        <section className="wellness-section">
            <div className="wellness-content">
                <div className="topics-grid">
                    {topics.map((topic, index) => (
                        <div key={index} className="topic">
                            <h2>{topic.title}</h2>
                            <ul>
                                {topic.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                            <a href="#" className="see-more">See more →</a>
                        </div>
                    ))}
                </div>
                <div className="image-container">
                    <img
                        src="https://images.ctfassets.net/v3n26e09qg2r/K5SIBuKA1KilgmsvWYOvM/00fe2b2a3908070b0fae607a7c52a73c/visual-dotcom_homepage_editorial_hero_desktop-general-202001008-kh.svg?fm=&w=1080&q=75"
                        alt="Wellness illustration"
                        className="wellness-image"
                    />
                </div>
            </div>
            <style>{`
        .wellness-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: Arial, sans-serif;
        }
        .wellness-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .topics-grid {
          flex: 1 1 60%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .topic {
          margin-bottom: 2rem;
        }
        .topic h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
        }
        .topic ul {
          list-style-type: none;
          padding: 0;
        }
        .topic li {
          margin-bottom: 0.5rem;
          color: #666;
          font-size: 0.9rem;
        }
        .see-more {
          color: #999;
          text-decoration: none;
          font-size: 0.9rem;
        }
        .image-container {
          flex: 1 1 40%;
          min-width: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .wellness-image {
          max-width: 100%;
          height: auto;
        }
        @media (max-width: 768px) {
          .wellness-content {
            flex-direction: column;
          }
          .image-container {
            order: -1;
            margin-bottom: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default WellnessSection;