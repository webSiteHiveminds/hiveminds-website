import React from 'react';
import styles from "./styles.module.css";
import Link from 'next/link';

const PlainButton = ({text,link,...props}) => {
  return (
    <Link {...props} href={link} className={`${styles.buttonPlain} relative overflow-hidden border-[1.5px] border-[#134bd5] rounded-[40px] font-light  h-fit flex items-center justify-center text-center` }
    data-text={`${text}`} >
        <div className='text-[0.97vw] font-light mobile:text-[3.8vw] tablet:text-[2.5vw]'>{`${text}`}</div>
    </Link>
  );
};

export default PlainButton;
