import React from 'react';

interface UnderlineProps {

    children: React.ReactNode;
}

export default function Underline({children}: UnderlineProps) {
    return (
        <span className="hero-hl drawn">
            {children}
            <svg className="hl-svg" viewBox="0 0 420 20" preserveAspectRatio="none">
                <path d="M4,14 C30,9 65,17 100,12 C132,7 165,16 200,11 C235,6 268,15 305,10 C335,6 365,13 395,10 C408,8 416,12 418,11" />
            </svg>
        </span>
    );
}