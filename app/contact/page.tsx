'use client'

import { useRouter } from 'next/navigation';
import PageLayout from '@/components/pagelayout';
import React, { useState } from 'react'

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTextAreaValue(event.target.value);
  };

  const router = useRouter();

  let toSend = 'mailto:wasee.alam@mail.utoronto.ca?body=';

  return (
    <main className="flex flex-col min-h-screen justify-start p-24">
      <PageLayout target="/" currPage="<" slideAnimation='slide-out'>
        <div className="slide-out flex flex-col mb-16">
        <h3 className="text-2xl mb-4">Contact Me:</h3>
        <form className="flex flex-col">
            <textarea placeholder="Your Message" rows={4} className="mb-4 p-2 border border-gray-500 rounded text-black"
              value={textAreaValue}
              onChange={handleChange}
            />
            <button type="submit" 
              className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600"
              onClick={() => router.push(toSend.concat(textAreaValue))}>
                Send Email
            </button>
        </form>
        </div>
      </PageLayout>
    </main>
  );
}
