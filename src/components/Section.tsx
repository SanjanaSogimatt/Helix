import Button from "./Button";
import Header from "./Header";

export default function Section(){
    return(
        <>
            <div className="bg-[#000] my-7">
                <div className="flex flex-cols justify-center items-center gap-4">
                    <Header title={<>JOIN OUR <br /> NEWSLETTER</>} subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac rutrum dui, nec porta ex." color='white'/>
                    <Button text="CHECK NOW"/>
                </div>
            </div>
        </>
    )
}