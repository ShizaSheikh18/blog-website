import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cardData } from "../constant/cards";
export default function Landing(){
    return(
        <div>
            <div className="w-[full] h-[550px] relative">
                <Image src={"/lion.png"} alt="Lion" objectFit="cover" layout="fill" />
                <h1 className="text-[60px] text-white font-bold absolute font-[Poppins] mt-[350px] ml-[90px]">Wild Life <br /> Resourcces,</h1>
            </div>

            <div className="w-[1250px] h-[2000px] mt-[120px] ml-[70px]">
                <h1 className="text-[36px] text-black font-black font-[Lora]">Popular topics</h1>

                <div className="flex items-center mt-[30px] font-[Lora] text-[14px] gap-[20px] font-semibold">
                    <p className="text-yellow-600">All</p>
                    <p className="text-black">InfoBook</p>
                    <p className="text-black">Bytes</p>
                    <p className="text-black">Sounds</p>
                    <p className="text-black">Pets</p>
                    <p className="text-black">Mammals</p>
                    <p className="text-black ml-[820px]">View All</p>
                </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {
                    
         cardData.map((card) => (
                <div className="w-[380px] h-[450px] bg-slate-50 mt-[20px]" key={card.id}>
                    <div className="w-[380px] h-[270px] relative">
                <Image
                src={card.Image}
                alt={card.alt}
              objectFit="cover"
              layout="fill"
                className="rounded-md" />
                </div>
                 <h1 className="text-[36px] text-black font-black font-[Lora] mt-[20px] ml-[40px]">{card.title}</h1>
                 <p className="text-[16px] text-black font-[Poppins] ml-[40px] mr-[20px] mb-[10px]">{card.para}</p>
                 <Link href={`/home/${card.id}`}><div className="flex items-center ml-[40px] " key={card.id}>{card.link}
                 <p className="text-[26px] text-sky-950 font-[Poppins]  font-bold">Learn More</p> <ArrowRight size={20} color="#0e0c2c" className="mt-1 ml-2" />
                 </div></Link>
             </div>
                    
          
         ))
         
         }
</div>
            </div>
        </div>

    )
}