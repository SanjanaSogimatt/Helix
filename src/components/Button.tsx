export default function Button({text,color}:any) {
    return (

        <div className="flex justify-evenly space-x-6 font-SulphurPoint">
            <button
                className="h-12 border-black border-2 p-2.5 bg-[#fff] shadow-[3px_3px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-sm hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] m-2"
            style={{backgroundColor:color}}
            >
                {text}
            </button>
        </div>

    )
}