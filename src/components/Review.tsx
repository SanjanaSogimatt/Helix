import Header from "./Header";
import ReviewComp from "./ReviewComp";

export default function Review() {
    return (
        <>
            <Header
                title={<>WHAT OUR<br /> CUSTOMERS SAY</>}
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac "
            />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                        {/* text ,src,name,alt */}
                        <ReviewComp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor." src="./pic1.webp" name="Mia Ericson" alt="Clues" />
                        <ReviewComp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor." src="./pic1.webp" name="Mia Ericson" alt="Clues" />
                        <ReviewComp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor." src="./pic1.webp" name="Mia Ericson" alt="Clues" />
                        <ReviewComp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor." src="./pic1.webp" name="Mia Ericson" alt="Clues" />
                        <ReviewComp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor." src="./pic1.webp" name="Mia Ericson" alt="Clues" />
                        <ReviewComp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor." src="./pic1.webp" name="Mia Ericson" alt="Clues" />
                    </div>
                </div>
            </div>
        </>
    );
}
