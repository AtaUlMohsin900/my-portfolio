import Link from "next/link"

export default function BlogCard2({ item }: any) {
    return (
        <>
            <Link href={`/blog/${item.id}`}>
                <img src={`/assets/images/blog/${item.img}`} alt="img" className="img-fluid" />
            </Link>
            <Link href={`/blog/${item.id}`} rel="bookmark">{item.title}</Link>
            <br />
        </>
    )
}
