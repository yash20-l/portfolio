import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import BlogNavbar from '../../components/blog/BlogNavbar'
import Button from '../../components/blog/button'

const Blog = () => {

    const router = useRouter()

    const [loading, setloading] = useState(false);
    const [N, setN] = useState(0)
    const [articles, setArticles] = useState([{}])

    useEffect(() => {
        setloading(true)
        axios.post(`http://localhost:3000/api/fetch`, { purpose: 2 }).then(posts => {
            setArticles(posts.data)
            setloading(false)
        })
    }, [])

    const handleOnClick = (slug) => {
        router.push(`http://localhost:3000/blog/${slug}`)
    }

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
                <link rel="icon" href="/yash.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/yash.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Rubik+Bubbles&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
                <title>Blog | Atal Infotech</title>
                <meta name="description" content="Trending Blog Articles. Latest Blog Articles. Popular Blog Articles." />
            </Head>
            <BlogNavbar></BlogNavbar>
            <div className="hero py-8">
                <div className="image relative h-[15vh] md:h-[20vh] lg:h-[35vh]">
                    <Image src="/Carousel/2.webp" fill></Image>
                </div>
            </div>
            <div className='md:grid md:grid-cols-4 md:gap-4 bg-gray-100'>
                <div className="latest col-span-3">
                    <h2 className='text-center text-[2rem] text-gray-700' style={{ fontFamily: "Quicksand, sans-serif" }}>LATEST POSTS</h2>
                    <div className="posts py-8 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                        {articles.map((post) => {
                            if (post.category == 'latest') {
                                return (

                                    <div className="post-box cursor-pointer shadow-md my-4 shadow-gray-700 mx-2 bg-white rounded-xl" onClick={() => { handleOnClick(post.slug) }}>
                                        <div className="image relative rounded-xl w-full h-[20vh]">
                                            <Image src={'/carousel/1.webp'} fill></Image>
                                        </div>
                                        <div className="title px-2 py-4">
                                            <h2 className='text-left text-xl font-[Poppins] font-[500]'>{post.title}</h2>
                                        </div>
                                        <div className="para px-2">
                                            <p className='text-lg font-[Quicksand] text-gray-700'>{post.content.substring(0, 30)}</p>
                                        </div>
                                        <div className="button px-2 py-4">
                                            <Button>Read More</Button>
                                        </div>
                                    </div>

                                )
                            }

                        })}
                    </div>
                </div>
                <div className="latest col-span-3">
                    <h2 className='text-center text-[2rem] text-gray-700' style={{ fontFamily: "Quicksand, sans-serif" }}>DIGITAL MARKETING</h2>
                    <div className="posts py-8 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                        {articles.map((post) => {
                            if (post.category == 'digital-marketing') {
                                return (

                                    <div className="post-box cursor-pointer shadow-md my-4 shadow-gray-700 mx-2 bg-white rounded-xl" onClick={() => { handleOnClick(post.slug) }}>
                                        <div className="image relative rounded-xl w-full h-[20vh]">
                                            <Image src={'/carousel/1.webp'} fill></Image>
                                        </div>
                                        <div className="title px-2 py-4">
                                            <h2 className='text-left text-xl font-[Poppins] font-[500]'>{post.title}</h2>
                                        </div>
                                        <div className="para px-2">
                                            <p className='text-lg font-[Quicksand] text-gray-700' dangerouslySetInnerHTML={{ __html: post.content.substring(0, 200) }}></p>
                                        </div>
                                        <div className="button px-2 py-4">
                                            <Button>Read More</Button>
                                        </div>
                                    </div>

                                )
                            }

                        })}
                    </div>
                </div>
                <div className="latest col-span-3">
                    <h2 className='text-center text-[2rem] text-gray-700' style={{ fontFamily: "Quicksand, sans-serif" }}>WEB DEVELOPMENT</h2>
                    <div className="posts py-8 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                        {articles.map((post) => {
                            if (post.category == 'web-development') {
                                return (

                                    <div className="post-box cursor-pointer shadow-md my-4 shadow-gray-700 mx-2 bg-white rounded-xl" onClick={() => { handleOnClick(post.slug) }}>
                                        <div className="image relative rounded-xl w-full h-[20vh]">
                                            <Image src={`/blog/${post.image}`} fill></Image>
                                        </div>
                                        <div className="title px-2 py-4">
                                            <h2 className='text-left text-xl font-[Poppins] font-[500]'>{post.title}</h2>
                                        </div>
                                        <div className="para px-2">
                                            <span className='text-lg font-[Quicksand] text-gray-700' dangerouslySetInnerHTML={{ __html: `${post.content.substring(0, 200)}...` }}></span>
                                        </div>
                                        <div className="button px-2 py-4">
                                            <Button>Read More</Button>
                                        </div>
                                    </div>

                                )
                            }

                        })}
                    </div>
                </div>

                <div className="sidebar py-y px-2 w-full h-[10rem] bg-white rounded-xl">

                </div>
            </div>

        </div>
    )
}

export default Blog