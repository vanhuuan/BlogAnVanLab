"use client";

import HeaderBlogCard from "@/components/card/blogHeaderCard";
import BottomBlogInfo from "@/components/card/countInfoBlog";
import TableOfContent from "@/components/tableOfContent/tableOfContent";
import DiscussionSection from "@/components/comment/Comment";
import BlogContent from "@/components/blogContent";
import { TableOfContentItem, TableOfContentsProps } from "@/viewmodels/CardData";
import { useEffect, useState } from "react";

  const comments = [
    {
      name: 'Michael Gough',
      profilePicture: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      date: '2022-02-08',
      content: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools is as important as the creation of the design strategy.',
    },
    {
      name: 'Jese Leos',
      profilePicture: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      date: '2022-02-12',
      content: 'Much appreciated! Glad you liked it ☺️',
    }
]

export default function Blog({ params }: { params: { id: string } }) {
    console.log("Blog id", params)
    const [htmlContent, setHtmlContent] = useState<String>('');
    return <>
        <div className="max-w-5xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto flex">
            <div>
                <div className="max-w-3xl"></div>
                <HeaderBlogCard />
                <BlogContent id={params.id} setContent={setHtmlContent}/>
                <BottomBlogInfo />
                <DiscussionSection comments={comments} />
            </div>
            <TableOfContent data={htmlContent} />
        </div >
    </>
}
