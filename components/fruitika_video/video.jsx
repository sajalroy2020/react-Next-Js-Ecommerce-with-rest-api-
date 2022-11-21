import Image from "next/image";

export default function Video(){

    const handleClick = (e)=>{
        e.preventDefault();
        setVideoOpen(true);
    }

    return(
        <div>
            <div className="poster">
                <Image src='/all-img/product-img-3.jpg' width="400" height="400" alt='product' />
                <button onClick={handleClick} className="video_btn" aria-label="play Button">
                    <Image src="/all-img/video-btn.png" width="100" height="100" alt='btn' />
                </button>
            </div>
        </div>
    )
} 