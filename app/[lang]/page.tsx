import HotBlog from "@/components/home/hotBlog";
import Topics from "@/components/home/topic";
import { Locale } from "@/i18next.config";

export default function Home({lang}: {lang: Locale}) {
  
  return (
    <div>
      <Topics/>
      <HotBlog/>
    </div>
  );
}
