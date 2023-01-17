// import React, { useRef } from 'react'
// import { Editor } from '@tinymce/tinymce-react';
// import axios from 'axios';
// const newBlog = () => {

//     const titleref = useRef(null);
//     const contentref = useRef(null);
//     const keywordsref = useRef(null);
//     const categoryref = useRef(null);
//     const imageref = useRef(null);

//     const handleOnClick = () => {
//         let title = titleref.current.value
//         let keywords = keywordsref.current.value
//         let category = categoryref.current.value
//         let content = contentref.current.getContent()
//         let image = imageref.current.files[0]

//         let formdata = new FormData()

//         formdata.append('title', title)
//         formdata.append('keywords', keywords)
//         formdata.append('category', category)
//         formdata.append('content', content)
//         formdata.append('image', image)

//         let data = {
//             title : title,
//             content : content,
//             keywords: keywords,
//             category : category,
//             image : image
//         }

//         let config = {
//             headers: {
//                 "Content-Type": "multipart/form-data"
//             }
//         }

//         axios.post('http://localhost:3000/api/insertpost', data, config).then(retdata => {
//             console.log(retdata.data);
//         }).catch((err) => {console.error(err);})
//     }
//     return (
//         <div>
//             <div className="details px-[1rem] md:px-[2rem] w-full">
//                 <h1 className='text-center text-black text-2xl text-[Poppins] py-4 font-[700]'>Create new post</h1>
//                 <input className=' py-2 px-2 text-[1rem] text-gray-800 font-[Poppins] font-[500] border-2 border-blue-500 outline-none w-full' type="text" placeholder='Enter title' ref={titleref} />
//                 <input className='my-4 py-2 px-2 text-[1rem] text-gray-800 font-[Poppins] font-[500] border-2 border-blue-500 outline-none w-full' type="text" placeholder='Enter some keywords (seperate by using commas)' ref={keywordsref} />
//                 <input className=' py-2 px-2 text-[1rem] text-gray-800 font-[Poppins] font-[500] border-2 border-blue-500 outline-none w-full' type="text" placeholder='Enter category' ref={categoryref} />
//                 <input className='my-4 py-2 px-2 text-[1rem] text-gray-800 font-[Poppins] font-[500] border-2 border-blue-500 outline-none w-full' type="file" placeholder='Select Image' ref={imageref} />
//                 <Editor
//                     onInit={(evt, editor) => contentref.current = editor}
//                     apiKey='xtqjv78whj2uwlzjh47orm31bemh1mqrvfaengsv5slqj2ve'
//                     initialValue="<p>Lel's create something fantastic !</p>"
//                     init={{
//                         plugins: 'link image code',
//                         toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
//                     }}
//                 />
//                 <button className='px-4 my-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 font-[Poppins] font-[500] text-white' onClick={handleOnClick}>Update</button>
//             </div>
//         </div>
//     )
// }

// export default newBlog