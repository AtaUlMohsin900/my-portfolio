import Layout from "@/components/layout/Layout"
import Brands1 from "@/components/sections/Brands1"
import Home2 from "@/components/sections/Home2"
import Testimonials1 from "@/components/sections/Testimonials1"
import Coporation2 from "@/components/sections/Coporation2"
import Static2 from "@/components/sections/Static2"
import Service2 from "@/components/sections/Service2"
import Projects2 from "@/components/sections/Projects2"
import Skills2 from "@/components/sections/Skills2"
import Blog2 from "@/components/sections/Blog2"
import Experience2 from "@/components/sections/Experience2"
import Education2 from "@/components/sections/Education2"
import Contact2 from "@/components/sections/Contact2"


export default function Home() {

	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<Home2 />
				<Static2 />
				<Coporation2 />
				<Service2 />
				<Experience2 />
				<Education2 />
				<Projects2 />
				<Skills2 />
				{/* <Brands1 />
				<Testimonials1 /> */}
				<Blog2 />
				<Contact2 />
			</Layout>
		</>
	)
}