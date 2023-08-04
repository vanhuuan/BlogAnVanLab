export default function BlogTopic({ params }: { params: { id: string } }) {
    console.log(params)
    return <>
        Blog's Topics
        <a href="/topics/blogs/123">Xem 1 topic</a>
    </>
}