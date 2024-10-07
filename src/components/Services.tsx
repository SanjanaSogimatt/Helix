import Header from "./Header"
import Card from "./Card"
import Button from "./Button"

export default function Services (){
    return (
        <>
            <Header title={<>FIND OUT ABOUT OUR <br /> INTERNET SERVICES</>} subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor."/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center max-w-4xl p-4 mx-auto my-8">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Button text="CHECK SERVICES" color="#d7f366"/>
        </>
    )
}