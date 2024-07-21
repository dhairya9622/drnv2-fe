'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NewComponent({data}) {


    return (
        <div>
            <h1>Data from API</h1>
            <pre>{data}</pre>
        </div>
    );
}
