export default function BlogTopic({ params }: { params: { id: string } }) {
    console.log(params)
    return <>
        Blog &apos; s Topics <br/>
        <a href="/topics/blogs/123">Xem 1 topic</a>
    </>
}