"use client"

import { apiUrl } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";

const VideoPopup = () => {
    const [open, setOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.post(`${apiUrl}/popupvideo`);

        if (res.data?.success && res.data?.video_url) {
          let embedUrl = res.data.video_url;

          // FIX: convert "&amp;" → "&"
          embedUrl = embedUrl.replace(/&amp;/g, "&");

          setVideoUrl(embedUrl);
          setOpen(true);
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  if (loading || !open || !videoUrl) return null;

    return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          position: "relative",
          padding: 20,
          maxWidth: 400,
          width: "95%",
        }}
      >
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: 0,
            right: 5,
            border: "none",
            background: "none",
            fontSize: 22,
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          ×
        </button>

        <div style={{ width: "100%", aspectRatio: "16/9" }}>
          <iframe
            width="100%"
            height="230"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
