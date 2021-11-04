import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article/Article';

export default function ArticleList({ articles }) {
    const list = articles.map(({ title, author, description }) => (
        <li key={`${title}`}>
            <Article title={title} author={author} description={description} />
        </li>
        ));
        <ul aria-label="articles">{list}</ul>;
};

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })
    ),
};