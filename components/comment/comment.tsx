import { CommentProps, DiscussionSectionProps } from "@/viewmodels/CardData";
import CreateComment from "@/components/comment/CreateComment";
import { useState } from "react";

const Comment: React.FC<CommentProps> = ({ name, profilePicture, date, content }) => {
    const [openSetting, setOpenSetting] = useState<boolean>(false)
  return (
    <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img className="mr-2 w-6 h-6 rounded-full" src={profilePicture} alt={name} />
            {name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400"><time dateTime={date}>{date}</time></p>
        </div>
        <div>
        {/* Dropdown menu */}
        <button
          className="inline-flex sticky items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
          onClick={() => { setOpenSetting(!openSetting) }}
        >
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </button>
        <div
          className={`${openSetting ? "" : "hidden"} fix z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
          id={`dropdownComment${name}`}
        >
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Chỉnh sửa</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Xóa</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Báo cáo</a>
            </li>
          </ul>
        </div>
        
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{content}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
          <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          Trả lời
        </button>
      </div>
    </article>
  );
};

const DiscussionSection: React.FC<DiscussionSectionProps> = ({ comments }) => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Bình luận ({comments.length})</h2>
        </div>
        <CreateComment />
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default DiscussionSection;
