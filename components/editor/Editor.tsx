"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Editor() {
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "light");
  }, []);

  const onChangeText = (txt: string) => {
    console.log(txt);
    setValue(txt);
  };

  return (
    <div data-color-mode={theme}>
      <MDEditor
        value={value}
        onChange={(e) => onChangeText(e!)}
        height={800}
        textareaProps={{
          placeholder: "Hãy nhập nội dung bài viết",
        }}
        autoFocus={true}
        visibleDragbar={false}
      />
    </div>
  );
}
