"use client"
import Comment from "@/app/component/comment";
import Image from "next/image";
import { cardData } from "@/app/constant/cards";
import { useParams } from "next/navigation";
export default function Dynamic(){
const {id} = useParams();
const card = cardData.find((b) => b.id === Number (id))

if(!card) return <p> Blog not found!</p>
    return(
      <div>
                  <div className="w-[full] h-[500px] relative">
                                  <Image src={card.Image1} alt={card.alt} objectFit="cover" layout="fill" />
                                  <h1 className="text-[95px] text-white font-bold absolute font-[Poppins] mt-[350px] ml-[90px]">{card.title}</h1>
                              </div>

          <div className="mt-[50px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.habitat}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.detail}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.distribution}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.details}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.migration}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.Detail}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.population}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.Details}</div>
          <div className="mt-[20px] text-[65px] text-green-900 font-bold font-[Lora] ml-[90px]">{card.size}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.Size}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.body}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.Shape}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Coloration}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.Color}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Head}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.head}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Nose}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.nose}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Dentition}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.dentition}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.hand}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.feet}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.arm}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.arms}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Skin}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.skin}</div>
          <div className="mt-[20px] text-[65px] text-green-900 font-bold font-[Lora] ml-[90px]">{card.Senses}</div>
          <div className=" text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.hear}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.hearing}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.eye}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.Eyesight}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Taste}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.taste}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Smell}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.smell}</div>
          <div className="mt-[20px] text-[65px] text-green-900 font-bold font-[Lora] ml-[90px]">{card.Communication}</div>
          <div className=" text-[55px] text-black font-bold font-[Lora] ml-[90px]">{card.Sound}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.Production}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Language}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.language}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Visual}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.visual}</div>
          <div className="mt-[20px] text-[65px] text-green-900 font-bold font-[Lora] ml-[90px]">{card.Behavior}</div>
          <div className=" text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Observation}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.observation}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Social}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.social}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Individual}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.individual}</div>
          <div className="mt-[20px] text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.protection}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.care}</div>
          <div className="mt-[20px] text-[65px] text-green-900 font-bold font-[Lora] ml-[90px]">{card.Eating}</div>
          <div className=" text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.Food}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.Intake}</div>
          <div className=" text-[50px] text-black font-bold font-[Lora] ml-[90px]">{card.hunting}</div>
          <div className="mt-[5px] text-[20px] text-black font-[Poppins] ml-[130px] mr-[50px]">{card.Hunting}</div>
          <div className="ml-[150px] mt-[50px]">
            <Comment/>
            </div>
          

                             
                        
                
            
        
        
        </div>
    )
}