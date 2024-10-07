export default function BlogComp({ pic }: any) {
    return (
        <>
            <div className="font-SulphurPoint w-full h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
                <a href="" className="block cursor-pointer">
                    <article className="w-full h-full">
                        <figure className="w-full h-1/2 border-black border-b-2">
                            <img
                                src={pic}
                                alt="thumbnail"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="px-6 py-5 text-left h-full">
                            <h1 className="text-[32px] mb-4">Neo Brutallism</h1>
                            <p className="text-xs mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac rutrum dui, nec porta ex. Curabitur auctor orci lacus, sit amet iaculis ante dapibus ac. Cras sodales mauris quis est varius, a scelerisque ligula imperdiet. Praesent nec elit iaculis, tincidunt lorem nec, maximus quam. Donec justo enim, pellentesque nec tincidunt et, tincidunt sagittis justo.
                            </p>
                           
                        </div>
                    </article>
                </a>
            </div>

        </>
    )
}