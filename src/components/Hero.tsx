import Button from "./Button";
import Shape from "./Shape";

export default function Hero() {
    return (
        <>
            <div className="relative flex flex-col h-screen justify-center items-center overflow-hidden">
                {/* Shape positioned absolutely */}
                <div className="absolute inset-0 flex justify-center items-center -z-10">
                    <Shape width="453" height="318" />
                </div>
                <h1 className="text-8xl font-bold font-SulphurPoint text-center z-10">
                    ALL YOU NEED <br /> AND MORE
                </h1>
                <p className="text-center text-sm font-SulphurPoint z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
                </p>
                <div className="flex flex-rows m-2 z-10">
                    <Button text="Check services" color="#00E1EF" />
                    <Button text="More templates" />
                </div>
            </div>
        </>
    );
}
