export default function Shape({width,height}:any) {
    return (
        <>
            <div className="flex flex-cols overflow-hidden relative">
                <div className="relative">
                    <svg width={width} height={height} viewBox="0 0 453 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M300.929 277.652C98.8869 357.868 -1.41779 318.476 0.0151365 159.477C1.44806 0.478914 102.469 -39.6288 303.078 39.1542C503.688 117.937 502.971 197.437 300.929 277.652Z" fill="#E1FDFE" />
                    </svg>
                </div>
                <div className="relative -ml-40">
                    <svg width={width} height={height} viewBox="0 0 453 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M152.071 40.3479C354.113 -39.8676 454.418 -0.476074 452.985 158.523C451.552 317.521 350.531 357.629 149.922 278.846C-50.6878 200.063 -49.9713 120.563 152.071 40.3479Z" fill="#F7FFDA" />
                    </svg>
                </div>
            </div>
        </>
    );
}
