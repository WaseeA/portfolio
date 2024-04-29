// components/pagelayout.tsx
import React from 'react';
import Image from "next/image";
import FloatingButton from './floatingbutton';

interface LayoutProps {
  children: React.ReactNode;
  slideAnimation?: string;
  currPage: string
  target: string;
}

const PageLayout: React.FC<LayoutProps> = ({ children, target, currPage, slideAnimation = 'slide-in' }) => {
    let style = slideAnimation.concat(" flex flex-wrap mb-16");

    return (
    <div>
      <FloatingButton currentPage={currPage} targetPath={target}></FloatingButton>

      <div className={style}>
          <div className="mr-8">
            <Image src="/headshot.jpg" alt="Your Image" width={150} height={150} />
          </div>
          <div className="max-w-sm">
            <h1 className="text-4xl">Hi I'm Wasee</h1>
            <p className="text-1xl">
              I'm a 3rd-Year Undergraduate Student at the University of Toronto
              currently completing a Specialist in Computer Science. <br />
              <br />
              Take a look at some of my projects! <br />
            </p>
          </div>
        </div>

        {children}
    </div>
  );
};

export default PageLayout;
