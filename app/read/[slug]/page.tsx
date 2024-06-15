import { BlogDetailField } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 10 // revalidate every 10 seconds

async function getData(slug: string) {
    const query = `
  *[_type == 'blog' && slug.current == '${slug}']{
  "currentSlug" : ${slug},
    title,
    author,
    dateReleased,
    content,
    titleImage
}[0]`;

    const data = await client.fetch(query)
    return data

}

const page = async ({ params }: { params: { slug: string } }) => {

    console.log("current slug : ", params.slug)

    const data: BlogDetailField = await getData(params.slug)

    console.log("data : ", data)

    return (
        <div className="mt-10 min-h-screen">
            <h1>
                <span className="block text-black text-center text-primary font-semibold tracking-wide uppercase">
                    Muhamad Alfin Pratama - <span className="text-sky-700">BLOG</span>
                </span>
                <span className="mt-4 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                    {data.title}
                </span>
            </h1>
            <Image priority src={urlFor(data.titleImage).url()} alt={'/placeholder-image.jpg'} width={800} height={800} className="mt-5 rounded-lg h-[200px] border " />
            <div className="mt-5 flex justify-between text-sm text-gray-600">
                <p>{data.author}</p>
                <p>{data.dateReleased}</p>
            </div>
            <div className="mt-10 prose prose-xl prose-blue pb-20 max-w-2xl">
                <PortableText value={data.content} />
            </div>
        </div>
    )

}

export default page