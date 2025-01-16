import Image from "next/image";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import { Search } from "lucide-react";
import Link from "next/link";
export default function Header(){
    return(
        <div >
        <div className="w-[full] h-[80px] bg-emerald-950  pt-[8px] flex items-center">
           <div className="text-[20px] font-bold font-[Spartan] text-white ml-[70px]">
                ANIMAL INFOMATION
           </div>

           <nav className="flex gap-8 text-[14px] font-[Roboto] text-white border-r-[2px] border-white pr-[17px] ml-[550px]">
                    <Link href="/home">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Articles</Link>
                    <Link href="/">ContactUs</Link>
           </nav>

           <div className="flex gap-6 ml-[17px] border-r-[2px] border-white pr-[17px]">
            <Image src={"/facebook.png"} alt="Facebook" width={20} height={20} />
           <Twitter color="white" fill="white" size={20}/>
      <Youtube color="#ffffff" size={20} />
           </div>
           <Search size={20} color="#ffffff" className="ml-[17px]" />


        </div>
        </div>
    )
}

