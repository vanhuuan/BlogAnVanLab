"use client";

import Editor from "@/components/editor/Editor";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { Option } from "react-tailwindcss-select/dist/components/type";

export default function UpdateBlogs() {
  const [topics, setTopics] = useState<Option[]>([
    { value: "C#", label: "C#" },
    { value: "Java", label: "Java" },
  ]);

  const [selectTopics, setSelectTopics] = useState<Option[]>([
    {
      value: "C#",
      label: "C#",
    },
  ]);

  return (
    <div className="grid grid-cols-10 gap-4 mt-5">
      <div className="col-span-1"></div>
      <div className="col-span-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
            Thông tin bài viết
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Tên bài viết
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="false"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Thể loại bài viết
              </label>
              <div className="mt-2">
                <Select
                  primaryColor={"indigo"}
                  options={topics}
                  value={selectTopics}
                  isClearable={true}
                  isSearchable={true}
                  onChange={(e) => {
                    setSelectTopics(e as Option[]);
                    console.log(e);
                  }}
                  placeholder="Topics"
                  isMultiple={true}
                  searchInputPlaceholder="Tìm kiếm topics"
                />
              </div>
            </div>
          </div>
        </div>
        <Editor />
        <div className="mt-6 flex items-center justify-end gap-x-6 mb-5">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Lưu
          </button>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}
