import React from 'react';

const DropdownItem = ({ href, children }) => (
    <li>
        <a href={href} className="text-base text-gray-600 hover:text-gray-800 transition-colors">
            {children}
        </a>
    </li>
);

const DropdownMenu = () => (
    <div className="absolute left-0 mt-2 w-screen max-w-md bg-white shadow-lg rounded-b-lg z-10">
        <div className="grid grid-cols-2 gap-4 p-6">
            <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">What we offer</h3>
                <ul className="mt-4 space-y-4">
                    <DropdownItem href="/meditation">Meditation</DropdownItem>
                    <DropdownItem href="/mindfulness">Mindfulness</DropdownItem>
                    <DropdownItem href="/sleep">Sleep</DropdownItem>
                    <DropdownItem href="/mental-health-coaching">Mental Health Coaching</DropdownItem>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">How we help</h3>
                <ul className="mt-4 space-y-4">
                    <DropdownItem href="/stress-anxiety">Stress and everyday anxiety</DropdownItem>
                    <DropdownItem href="/sleep-better">Sleep better</DropdownItem>
                    <DropdownItem href="/mental-health">Mental Health</DropdownItem>
                </ul>
            </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
            <a href="/explore" className="text-base font-medium text-blue-600 hover:text-blue-500">
                Explore all content <span aria-hidden="true">&rarr;</span>
            </a>
        </div>
    </div>
);

export default DropdownMenu;
