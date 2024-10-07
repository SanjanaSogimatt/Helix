import Button from "./Button";
import Header from "./Header";

export default function Newsletter(){
    return(
        <>
            <div className="bg-[#000] my-7">
                <div className="flex flex-cols justify-center items-center gap-4">
                    <Header title={<>QUESTIONS? <br /> CHECK OUT OUR FAQ</>} subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac rutrum dui, nec porta ex." color='white'/>
                    <Button text="CHECK NOW"/>
                </div>
            </div>
        </>
    )
}