import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Blogs from '../Blogs/Blogs';
import './Blog.scss'
import { BlogData } from './BlogData';
const Blog = () => {
    return (
        <Container className="blogContainer">
            <div className="blogTitle">
                <h4>OUR BLOG</h4>
                <h3>From our blog News</h3>
            </div>
            <Row>
                {
                    BlogData.map(data => <Blogs data={data}/>)
                }
            </Row>
        </Container>
    );
};

export default Blog;