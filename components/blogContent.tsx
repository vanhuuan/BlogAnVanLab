"use client";

import { useEffect, useState } from "react";

const scrollToHeader = (id: string | null) => {
    if (id) {
        const headerElement = document.getElementById(id);
        if (headerElement) {
            headerElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

const generateHeadingIds = (content: string) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(content, 'text/html');
    const headings = htmlDoc.querySelectorAll('h1, h2, h3, h4, h5, h6');

    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      if (!heading.id) {
        heading.id = `heading-${i}`;
      }
    }

    return htmlDoc.documentElement.innerHTML;
  };

export default function BlogContent({ id, setContent }: {id: String, setContent: (data: String) => void }){

    const [htmlContent, setHtmlContent] = useState<String>('');
    const [tableOfContents, setTableOfContents] = useState<TableOfContentItem[]>([]);
    const ex: TableOfContentsProps = {
        onHeaderLinkClick: scrollToHeader,
        tableOfContents: tableOfContents
    }
    const [tableProps, setTableProps] = useState<TableOfContentsProps>(ex)

    const generateTableOfContents = (html: String) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html.toString(), 'text/html');

        const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

        const tocData: TableOfContentItem[] = [];
        headings.forEach((heading, index) => {
            const headingText = heading.textContent || '';
            const headingId = heading.getAttribute('id');
            const tagName = heading.tagName.toLowerCase();
            const level = parseInt(tagName.substring(1), 10);
            tocData.push({
                text: headingText,
                id: headingId,
                tagName,
                level,
            });
        });

        setTableOfContents(tocData);
        const toc: TableOfContentsProps = {
            onHeaderLinkClick: scrollToHeader,
            tableOfContents: tocData
        };
        setTableProps(toc)
    };

    useEffect(() => {
        const fetchHtmlContent = async () => {
            try {
                const response = await fetch(
                    'https://firebasestorage.googleapis.com/v0/b/bosha-4df95.appspot.com/o/books%2F643656928e27bd8b1165473a%2F643656938e27bd8b1165473c.html?alt=media&token=3b115118-9b7a-445f-87ac-0bcaaac485eb'
                );
                const data = await response.text();
                const processedHtmlContent = generateHeadingIds(data);
                setHtmlContent(processedHtmlContent);
                generateTableOfContents(processedHtmlContent);
                setContent(processedHtmlContent)
            } catch (error) {
                console.error('Error fetching HTML content:', error);
            }
        };

        fetchHtmlContent();
    }, []);

    return  <div className="space-y-5 md:space-y-8 my-5" dangerouslySetInnerHTML={{ __html: htmlContent }}>

    </div >
}