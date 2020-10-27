import React from 'react';
import './Blogs.css';
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";
import BlogPost from '../BlogPost/BlogPost';


const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
    author:'Dr. Wilson Harry',
    authorImg : wilson,
    date : '23 April 2019'
  },

   {
    title: "Two time brush in a day can keep you healthy",
    description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
    author:'Dr. Ema Gomez',
    authorImg : ema,
    date : '23 April 2019'
  },

   {
    title: "The tooth cancer is taking a challenge",
    description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
    author:'Dr. Aliza Farari',
    authorImg : aliza,
    date : '23 April 2019'
  },
];


const Blogs = () => {
    return (
      <section className="blogs my-5">
        <div className="container">
          <div className="section-header text-center">
            <h5 className="text-brand">OUR BLOG</h5>
            <h1>From Our Blog News</h1>
          </div>

          <div className="card-deck mt-5">
              {
                  blogData.map(blog => <BlogPost blog={blog} key={blog.title}></BlogPost>)
              }
          </div>
        </div>
      </section>
    );
};

export default Blogs;