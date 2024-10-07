import Shape from "./Shape";

export default function Header({ title, subtitle, color = 'black' }: any) {
    return (
        <>
            <div className="relative flex flex-col justify-center items-center py-8" style={{ color: color }}>
                {/* Shape positioned absolutely */}
                <div className="absolute inset-0 flex justify-center items-center -z-10">
                    <Shape width="300" height="400" />
                </div>
                <h1 className="text-6xl font-bold font-SulphurPoint text-center p-4 z-10">{title}</h1>
                <p className="text-center text-sm font-SulphurPoint z-10">{subtitle}</p>
            </div>
        </>
    );
}
