"use client";

import { TableOfContentItem, TableOfContentsProps } from "@/viewmodels/CardData";
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

export default function TableOfContent({data}: {data: String}) {

    const [tableOfContents, setTableOfContents] = useState<TableOfContentItem[]>([]);
    const ex: TableOfContentsProps = {
        onHeaderLinkClick: scrollToHeader,
        tableOfContents: tableOfContents
    }
    const [tableProps, setTableProps] = useState<TableOfContentsProps>(ex)

    useEffect(() => {
        generateTableOfContents(data)
    }, [data])

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

    const renderTableOfContents = (items: TableOfContentItem[]) => {
        const minLevel = Math.min(...items.map((item) => item.level));
        const renderedItems: JSX.Element[] = [];

        const renderItemsRecursive = (item: TableOfContentItem, index: number) => {
            const children: TableOfContentItem[] = []

            let bfLv: number = item.level
            for(let child of items.slice(index + 1)){
                if( item.level >= child.level ) break;
                if( child.level == item.level + 1) children.push(child)
            }
            if (children.length === 0 || item.level > children[0].level) {
                return (
                    <li key={item.id ?? ''}>
                        <a
                            href={`#${item.id}`}
                            className={`hover:text-blue-600 dark:text-white text-gray-800 mx-1`}
                            onClick={() => table.onHeaderLinkClick(item.id)}
                        >
                            {item.text}
                        </a>
                    </li>
                );
            } else {
                return (
                    <li key={item.id ?? ''}>
                        <a
                            href={`#${item.id}`}
                            className={`hover:text-blue-600 dark:text-white text-gray-800 mx-1`}
                            onClick={() => table.onHeaderLinkClick(item.id)}
                        >
                            {item.text}
                        </a>
                        <ul className="pl-4">{children.map((child, i) => renderItemsRecursive(child, index + 1 + i))}</ul>
                    </li>
                );
            }
        };

        items.forEach((item, index) => {
            if (item.level === minLevel) {
                renderedItems.push(renderItemsRecursive(item, index));
            }
        });

        return (
            <ul className="space-y-2">
                {renderedItems}
            </ul>
        );
    };

    return <div className={`dark:bg-gray-800 p-3 min-w-fit ml-2 sticky top-0 h-screen overflow-y-auto`}>
        <h2 className={`text-xl font-semibold mb-4 text-black dark:text-white`}>
            Mục lục
        </h2>
        <hr className="my-2" />
        {renderTableOfContents(tableProps.tableOfContents)}
    </div>
}