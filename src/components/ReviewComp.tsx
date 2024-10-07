export default function ReviewComp({text,src,name,alt}:any) {
    return(
        <>
            <div className="w-auto p-4 text-center font-SulphurPoint">
                <div className="flex flex-col items-center">
                    <p className="w-1/2 md:w-auto">{text}</p>
                    <img src={src} alt="" className="w-16 h-16 rounded-full"/>
                    <h2>{name}</h2>
                    <h3>{alt}</h3>
                </div>
            </div>
        </>
    )
}