import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <nav className="w-full relative mx-auto px-4 h-16 items-center bg-transparent max-w-2xl py-5">
            <div className="flex justify-between py-2 ml-4">
                <Link href={"/"}>
                    <h1 className="text-3xl font-bold cursor-pointer">Blog<span className="text-sky-700">SS</span></h1>
                </Link>
                <div className="space-x-6 mr-7">
                    <Link href="http://muhamadalfinpratama.vercel.app" >
                        <Button variant="outline" className="border border-solid border-sky-600 hover:bg-sky-700 hover:text-white font-semibold">Alfin Website</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar