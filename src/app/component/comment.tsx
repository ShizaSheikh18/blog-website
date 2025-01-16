export default function Comment(){
    return(
        <div>
            <h1 className="text-[40px] text-black font-bold font-[Lora]">Comments:</h1>
            <input type="text" placeholder="Enter your Comments" className="w-[800px] h-[150px] border-black rounded-md border-2 mr-[100px]" />
        <button type="submit" className="w-[100px] h-[50px] border-black rounded-md border-1 bg-green-900 text-white text-[18px] font-[Lora]" >Submit</button>
        </div>
    )
}