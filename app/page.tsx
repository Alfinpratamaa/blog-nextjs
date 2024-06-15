import { Card, CardContent } from "@/components/ui/card";
import { SimpleBlogField } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 10 // revalidate every 10 seconds

async function getData() {
  const query = `
  *[_type == 'blog']{
    title,
    author,
    dateReleased,
    smallDescription,
    "currentSlug" : slug.current,
    titleImage
  }`;

  const data: SimpleBlogField[] = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log(data.map((blog: SimpleBlogField) => blog));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-5 pb-20">
      {data.map((blog: SimpleBlogField, index: number) => (
        <Link href={`/read/${blog.currentSlug}`} key={index}>
          <Card className="flex flex-col h-full hover:bg-opacity-80 hover:shadow-xl hover:-translate-y-5 transition-all duration-300 ease-in-out">
            <Image
              src={urlFor(blog.titleImage).url() || '/placeholder-image.jpg'}
              alt={blog.title}
              className="rounded-t-lg h-[200px] object-cover"
              width={500}
              height={200}
            />
            <CardContent className="flex flex-col justify-between mt-5">
              <h3 className="text-lg line-clamp-2">{blog.title}</h3>
              <div className="flex text-[12px] mt-2 text-slate-600 justify-between">
                <p>{blog.author}</p>
                <p>{blog.dateReleased}</p>
              </div>
              <p className="line-clamp-3 mt-3">{blog.smallDescription}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
