"use client"

import { useEffect, useState } from "react";

const VideoPopup = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true); // Open the popup when the page loads
    }, []);

    return (
        open && (
            <div style={{
                position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
                background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
            }}>
                <div style={{
                    background: "#fff", borderRadius: "12px", position: "relative",
                    padding: 20, maxWidth: 400, width: "95%"
                }}>
                    <button
                        onClick={() => setOpen(false)}
                        style={{
                            position: "absolute", top: 0, right: 5,
                            border: "none", background: "none", fontSize: 22, cursor: "pointer"
                        }}
                        aria-label="Close"
                    >×</button>
                    <div style={{ width: "100%", aspectRatio: "16/9" }}>
                        <iframe
                            width="100%"
                            height="230"
                            src="https://www.youtube.com/embed/Ga2MiFoibG4?feature=oembed&amp;amp;modestbranding=1&amp;amp;showinfo=0&amp;amp;rel=0g"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        )
    );
};

export default VideoPopup;
