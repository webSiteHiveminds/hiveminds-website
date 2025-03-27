import React from 'react';
import ShareDetails from './ShareDetails';
import styles from "./blogstyles.module.css"

const Content = ({ slug, date, content }) => {

    return (
        <>
            <section className='h-full w-screen py-[5vw]' id='blog-detail'>
                <div className='container-lg w-full h-full flex items-start justify-between mobile:flex-col tablet:flex-col'>
                    <ShareDetails slug={slug} date={date} />
                    <div className='w-[65%] h-full space-y-[1.5vw] mobile:w-full mobile:mt-[4vw] mobile:space-y-[4vw] tablet:w-full'>
                        <div
                            className={`${styles.blogContent}`}
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content;