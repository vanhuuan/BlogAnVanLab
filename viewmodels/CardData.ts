export interface TopicCardData {
    name: string;
    description: string;
    slug: string;
}

export interface BlogCardData {
    id: string;
    name: string;
    description: string;
    slug: string;
}

export interface TableOfContentItem {
    text: string | null;
    id: string | null;
    tagName: string;
    level: number;
}

export interface TableOfContentsProps {
    tableOfContents: TableOfContentItem[];
    onHeaderLinkClick: (id: string | null) => void;
}

export interface CommentProps {
    name: string;
    profilePicture: string;
    date: string;
    content: string;
  }
  
export interface DiscussionSectionProps {
    comments: CommentProps[];
}