import React, {JSX, useState} from 'react';

import "./news.css"
import {Link} from "react-router-dom";
import {news} from "../../constants/newList";
import ReactPaginate from 'react-paginate';
import Helmet from "react-helmet";


const items = news.map((newsContent, index) => (
    <Link key={index} to={newsContent.link} className="news_div">
        <div className="news_photo_div">
            <img className="news_photo" src={newsContent.image} alt={newsContent.title}/>
        </div>
        <div className="news_info">
            <div className="news_date">
                {newsContent.date}
            </div>
            <div className="news_title">
                {newsContent.title}
            </div>
            <div className="news_brief">
                {newsContent.brief}
            </div>
        </div>
    </Link> ));
interface NewsProps {
    itemsPerPage: number,
}
const News:React.FC<NewsProps> = ({itemsPerPage}) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);

    const handlePageClick = (event: {selected: number}) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    const currentPage = Math.round(itemOffset / itemsPerPage);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    return (
        <div className="page_content">
            <Helmet
                title="Новости"
            />
            <div className="page_name">
                Новости
            </div>
            <div className="news">
                <Items currentItems={currentItems} />
            </div>
            <nav aria-label="Page navigation comments" className="mt-4">
                <ReactPaginate
                    previousLabel="предыдущий"
                    nextLabel="следующий"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={pageCount}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    activeClassName="active"
                    hrefBuilder={(page, pageCount, selected) =>
                        page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                    }
                    hrefAllControls
                    forcePage={currentPage}
                />
            </nav>
        </div>
    );
}

interface ItemsProps {
    currentItems: JSX.Element[],
}
const Items:React.FC<ItemsProps> = ({currentItems}) => {
    return (
        <>
            {currentItems &&
                currentItems.map((item: JSX.Element) => (
                    <div>
                        {item}
                    </div>
                ))}
        </>
    );
}


export default News;
