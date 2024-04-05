import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './floatingbutton.module.css';

interface FloatingButtonProps {
  targetPath: string; // The target page's path
  currentPage: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ targetPath, currentPage }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(targetPath); // Use the targetPath prop for navigation
  };

  return (
    <div>
        <button className={styles.floatingButton} onClick={handleClick}>
        {currentPage}
        </button>
    </div>
  );
};

export default FloatingButton;
