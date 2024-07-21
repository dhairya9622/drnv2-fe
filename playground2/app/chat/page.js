'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ChatPage() {
    const searchParams = useSearchParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const dataParam = searchParams.get('data');
        if (dataParam) {
            setData(JSON.parse(dataParam));
        }
    }, [searchParams]);

    return (
        <div>
            <h1>Chat Page</h1>
            <pre>{data ? JSON.stringify(data, null, 2) : 'No data available'}</pre>
        </div>
    );
}
