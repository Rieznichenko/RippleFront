"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    const videoElement = document.getElementById(
      "splashVideo"
    ) as HTMLVideoElement | null;

    if (typeof window !== "undefined" && window.innerWidth < 768) {
      push("/homepage");
    }

    const handleLoadedMetadata = () => {
      if (videoElement) {
        videoElement.controls = false;
      }
    };

    const handleVideoEnd = () => {
      push("/homepage");
    };

    if (videoElement) {
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.addEventListener("ended", handleVideoEnd); // Add event listener for when the video ends

      return () => {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        videoElement.removeEventListener("ended", handleVideoEnd); // Remove event listener when the component unmounts
      };
    }
    return () => {};
  }, [push]); // Add history to the dependency array

  const handleSkipIntro = () => {
    push("/homepage");
  };

  return (
    <div className="splash_screen">
      <video autoPlay muted id="splashVideo">
        <source src={"/assets/splash_video.mp4"} type="video/mp4" />
      </video>
      <div className="skip_intro_btn " onClick={handleSkipIntro}>
        <Link className="fc-white" href="/homepage">
          Skip Intro
        </Link>
      </div>
    </div>
  );
}
