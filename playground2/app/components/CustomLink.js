'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CustomLink({ href, children }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://newapp-env.eba-pthqr4ag.us-east-1.elasticbeanstalk.com/createThread');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Pass the data to the /chat route
            router.push({
                pathname: href,
                query: { data: JSON.stringify(data) },
            });
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <a href={href} onClick={handleClick}>
            {loading ? 'Loading...' : children}
        </a>
    );
}
