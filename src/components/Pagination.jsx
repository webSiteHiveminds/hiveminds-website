import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const MAX_NUM_PAGES = 5;

const Pagination = ({ pagesCount, currentPage, basePath }) => {
    const path = `${basePath}/`;

    const hasPreviousPage = pagesCount > 1 && currentPage > 1;
    const hasNextPage = pagesCount > 1 && currentPage < pagesCount;

    function getPages() {
        let pages = pagesCount;
        let start = 0;
        if (pagesCount > MAX_NUM_PAGES) {
            pages = MAX_NUM_PAGES;
            const half = Math.ceil(MAX_NUM_PAGES / 2);
            const isHead = currentPage <= half;
            const isTail = currentPage > pagesCount - half;
            if (!isHead) {
                start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
            }
        }
        return [...new Array(pages)].map((_, i) => i + 1 + start);
    }

    const pages = getPages();

    return (
        <div className="w-fit font-medium mt-10 bg-white border border-slate-300 rounded-full items-center flex py-1 px-4 mx-auto justify-between gap-4">
            <Link className={`${!hasPreviousPage ? 'pointer-events-none opacity-50' : ''}`}
                href={hasPreviousPage ? `${path}page/${currentPage - 1}` : '#'}
                aria-label="Go to Previous Page"
                tabIndex={hasPreviousPage ? 0 : -1}
            >
                <div className='flex text-xl items-center justify-center w-16 h-16 rounded-full transition-colors duration-300 hover:bg-slate-100'>
                    <ArrowLeft className='' />
                </div>
            </Link>

            <ul className='flex w-3/4 justify-between items-center gap-4'>
                {pages.map((page) => {
                    const active = page === currentPage;
                    return active ? (
                        <li key={page} className={`text-xl font-medium w-12 h-12 rounded-full flex justify-center items-center overflow-hidden text-white bg-primary`}>
                            <span className='mt-1' aria-label={`Current Page, Page ${page}`} aria-current="true">
                                {page}
                            </span>
                        </li>
                    ) : (
                        <li key={page} className='text-xl font-medium w-12 h-12 rounded-full flex justify-center items-center overflow-hidden'>
                            <Link className='hover:bg-slate-100 flex w-full h-full items-center justify-center transition-colors duration-300' href={page === 1 ? path : `${path}page/${page}`} aria-label={`Goto Page ${page}`}>
                                <span className='mt-1'>{page}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <Link className={`${!hasNextPage ? 'pointer-events-none opacity-50' : ''}`}
                href={hasNextPage ? `${path}page/${currentPage + 1}` : '#'}
                aria-label="Go to Next Page"
                tabIndex={hasNextPage ? 0 : -1}
            >
                <div className='text-xl flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 hover:bg-slate-100'>
                    <ArrowRight />
                </div>
            </Link>
        </div>
    );
};

export default Pagination;

