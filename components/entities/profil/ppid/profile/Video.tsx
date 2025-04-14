export const Video = () => (
    <div className="rounded-2xl shadow-lg p-8 relative overflow-hidden">
        <div className="relative">
            <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                <video
                    src="https://your-cdn-link.com/video.mp4"
                    className="w-full h-full"
                    controls
                    poster="/images/video-placeholder.jpg"
                />
            </div>
        </div>
    </div>
);
