
const HeadspaceStats = () => {
    const stats = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF9500" />
                </svg>
            ),
            value: '4.9 Stars',
            description: 'Average rating',
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#FF9500" />
                    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 18H4V6H20V18Z" fill="#FF9500" />
                </svg>
            ),
            value: '611.9K Ratings',
            description: 'On iOS and Google Play',
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 17V19H2V17H16ZM18.5 2C19.3 2 20 2.7 20 3.5V20.5C20 21.3 19.3 22 18.5 22C17.7 22 17 21.3 17 20.5V3.5C17 2.7 17.7 2 18.5 2ZM9.5 17C10.3 17 11 17.7 11 18.5V20.5C11 21.3 10.3 22 9.5 22C8.7 22 8 21.3 8 20.5V18.5C8 17.7 8.7 17 9.5 17ZM9.5 2C10.3 2 11 2.7 11 3.5V14.5C11 15.3 10.3 16 9.5 16C8.7 16 8 15.3 8 14.5V3.5C8 2.7 8.7 2 9.5 2ZM3.5 17C4.3 17 5 17.7 5 18.5V20.5C5 21.3 4.3 22 3.5 22C2.7 22 2 21.3 2 20.5V18.5C2 17.7 2.7 17 3.5 17ZM3.5 2C4.3 2 5 2.7 5 3.5V14.5C5 15.3 4.3 16 3.5 16C2.7 16 2 15.3 2 14.5V3.5C2 2.7 2.7 2 3.5 2Z" fill="#FF9500" />
                </svg>
            ),
            value: '100M Downloads',
            description: 'Across all platforms',
        },
    ];

    return (
        <section style={{
            fontFamily: 'Arial, sans-serif',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '60px 20px',
            textAlign: 'center',
        }}>
            <h2 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#3F3F3F',
                marginBottom: '60px',
                lineHeight: '1.2',
            }}>
                Join millions getting more mindful with Headspace
            </h2>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '30px',
            }}>
                {stats.map((stat, index) => (
                    <div key={index} style={{
                        backgroundColor: '#FFF5EB',
                        borderRadius: '12px',
                        padding: '30px',
                        width: '280px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}>
                        <div style={{
                            marginBottom: '20px',
                        }}>
                            {stat.icon}
                        </div>
                        <div style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                            color: '#3F3F3F',
                            marginBottom: '10px',
                        }}>
                            {stat.value}
                        </div>
                        <div style={{
                            fontSize: '16px',
                            color: '#6B6B6B',
                        }}>
                            {stat.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeadspaceStats;