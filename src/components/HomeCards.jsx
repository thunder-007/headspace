import React from 'react';

export default function MentalWellnessCards() {
    const cards = [
        {
            icon: "https://images.ctfassets.net/v3n26e09qg2r/dmvoqWQDeTvaN5aF969lZ/cc73478daad763438f2103ba49845090/Trio-3.svg?fm=&w=256&q=75",
            title: "Everything your mind needs",
            description: "Take care of your mental health with proven courses and expert-led guidance to help you meet your goals."
        },
        {
            icon: "https://images.ctfassets.net/v3n26e09qg2r/42GrxqLrMarmzD8xMITPo4/215f5f81b20ddd926bdd7c6bce81f234/Trio-1.svg?fm=&w=256&q=75",
            title: "Have more good days",
            description: "Let go of everyday stress and anxiety with 500+ guided meditations and programs."
        },
        {
            icon: "https://images.ctfassets.net/v3n26e09qg2r/1hClu9z6IR2dkp3RBDeCI3/50fb094287ecb8df31c37adcd7b17666/Trio-2.svg?fm=&w=256&q=75",
            title: "Get the sleep of your dreams",
            description: "Sleep more soundly every night with bedtime meditations, exercises, and relaxing sounds."
        }
    ];

    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
            }}>
                {cards.map((card, index) => (
                    <div key={index} style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}>
                        <img src={card.icon} alt="" style={{
                            width: '96px',
                            height: '96px',
                            marginBottom: '1rem',
                        }} />
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '0.5rem',
                        }}>{card.title}</h2>
                        <p style={{
                            color: '#666',
                            lineHeight: '1.5',
                        }}>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}