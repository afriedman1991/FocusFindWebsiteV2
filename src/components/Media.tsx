export default function Media() {
    return (
        <div id="Media" className="relative py-24 sm:py-32 flex items-center justify-center isolate overflow-x-hidden overflow-y-auto py-24 sm:py-16 min-h-screen">
            <div className="mx-auto flex items-center justify-center max-w-xs flex-col gap-y-4">
                <iframe className="w-460 h-260" width="560" height="315" src="https://www.youtube.com/embed/NaaZTINIz20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h1 className="order-first w-screen text-center text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl text-shadow">Check out our trailer</h1>
            </div>
        </div>
    )
}