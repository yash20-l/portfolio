import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import BlogNavbar from '../../components/blog/BlogNavbar'
import { AiFillLike, AiOutlineClockCircle, AiOutlineComment } from 'react-icons/ai'
import axios from 'axios'
let Scroll   = require('react-scroll');
let scroll = Scroll.animateScroll;
import styles from "../../styles/Home.module.css"
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import slugify from 'slugify'

const blogPost = ({article}) => {
    const router = useRouter()
    let toc = []
    let commentlength = 0

    const content = unified()
        .use(rehypeParse, {
            fragment: true,
        })
        .use(() => {
            return (tree) => {
                visit(tree, 'element', (node) => {
                    if (node.tagName === 'h2') {
                        const id = slugify(`${node.children[0].value}`);
                        node.properties.id = id;
                        node.properties.name = id;
                        node.properties.class =styles.postHeading

                        toc.push({
                            id: `${id}`,
                            title: `${node.children[0].value}`,
                            position: node.position.start.offset
                        })
                        console.log(node);
                    }
                })
            }
        })
        .use(rehypeStringify)
        .processSync(article.content)
        .toString();

    const handletoc = (name) => {
        scroll.scrollTo(name)
    }

    return (
        <div>
            <Head>
                <link rel="icon" href="/yash.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/yash.ico" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:wght@300;500;700&family=Rubik+Bubbles&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
                <title>{article.title} - Atal Infotech</title>
            </Head>
            <BlogNavbar></BlogNavbar>
            <div className="heading w-full h-[50vh] bg-blue-800 flex flex-col items-start justify-center">
                <div className="heading-content">
                    <h1 className='px-2 text-left text-white text-[2rem] font-[Poppins] font-[600]'>{article.title}</h1>
                    <div className="likesection py-[1rem] px-2 flex flex-row items-start">
                        <div className='flex flex-row items-center justify-between'>
                            <AiFillLike size={20} color="white"></AiFillLike>
                            <span className='text-xl text-white font-[Poppins] font-[300] px-2'>{article.likes} &#183;</span>
                        </div>

                        <div className='flex flex-row items-center justify-center'>
                            <AiOutlineComment size={20} color="white"></AiOutlineComment>
                            <span className='text-xl text-white font-[Poppins] font-[300] px-2'>{commentlength}	&#183;</span>
                        </div>
                        <div className='flex flex-row items-center justify-center'>
                            <AiOutlineClockCircle size={20} color="white"></AiOutlineClockCircle>
                            <span className='text-xl text-white font-[Poppins] font-[300] px-2'>{article.readtime} min read</span>
                        </div>
                    </div>
                    <div className="breadcrumb">
                        <h2 className='px-2 py-4 font-[300] text-left text-xl text-white' style={{ fontFamily: "Quicksand, sans-serif" }}>Home {`>`} Blog {`>`} {article.title}</h2>
                    </div>
                </div>

            </div>
            <div className="mainsection flex flex-col-reverse md:grid md:grid-cols-4 md:gap-4">
                <div className="content py-8 md:col-span-3">
                    <div className="wrapper px-4">
                        <span dangerouslySetInnerHTML={{ __html: article.content }} className="py-4 mx-2 font-[Quicksand] font-[700] text-left text-gray-700  text-[1.2rem]"></span>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="table px-2 w-full py-4 rounded-xl bg-gray-200">
                        <h2 className='py-4 text-center font-[Poppins] font-[500] text-xl  text-black'>Table of contents</h2>
                        <div className="list">
                            <ul>
                                {toc.map(({ id, title, position }) => {
                                    return (
                                        <li id={id} className="py-2 px-2 cursor-pointer" onClick={() => { handletoc(position) }}><span className='text-blue-600 text-xl hover:text-blue-700'>{title}</span></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps (context) {
    const  res = await axios.post('http://localhost:3000/api/fetch', {
                slug: context.query.post,
                purpose: 0
            })
    const article = await res.data  
    return {
        props : {article}
    }     
}

export default blogPost