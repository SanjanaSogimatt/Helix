import BlogComp from "./BlogComp"
import Button from "./Button"
import Header from "./Header"
export default function Blog(){
    return(
        <>
            <div>
                <Header title={<>INDUSTRY NEWS AND <br /> UPDATES</>} subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac rutrum dui, nec porta ex." color='black'/>
                <div className="w-1/2 md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center max-w-4xl p-4 mx-auto my-8">
                    <BlogComp pic="./pic1.jpg"/>
                    <BlogComp pic="./pic2.jpg"/>
                    <BlogComp pic="./pic3.jpg"/>
                    <BlogComp pic="./pic4.jpg"/>
                    <BlogComp pic="./pic5.jpg"/>
                    <BlogComp pic="./pic6.jpg"/>
                </div>
                <Button text="MORE ARTICLES" color='#4feef4'/>
            </div>
        </>
    )
}