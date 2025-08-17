import BlogPost from '@/components/blog/BlogPost'
import Layout from '@/components/layout/Layout'

export default function Blog() {
    return (
        <>
            <Layout>
                <BlogPost showItem={6} style={1} showPagination />
            </Layout>
        </>
    )
}
