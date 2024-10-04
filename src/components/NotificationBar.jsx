import { useState } from 'react';

const NotificationBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Function to handle dismissing the notification
    const dismissNotification = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className='bg-sky-500 p-4 flex justify-center items-center text-white text-lg relative'>
                    <a className='text-center underline'>Get 14 days free now</a>
                    <span className="mx-2">&#8594;</span>
                    {/* Close icon */}
                    <button
                        onClick={dismissNotification}
                        className='absolute right-4 text-white text-xl font-bold cursor-pointer'
                    >
                        &#10005; {/* This is the "X" (wrong) symbol */}
                    </button>
                </div>
            )}
        </>
    );
};

export default NotificationBar;
