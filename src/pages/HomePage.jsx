import React, { useState } from "react";
import { AudioPlayer } from "react-audio-player-component";
export default function HomePage() {
  return (
    <AudioPlayer
      src="https://ia600504.us.archive.org/18/items/nitaneisop/01%20%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%95%E0%B9%88%E0%B8%B2.ogg"
      minimal={false}
      width={350}
      trackHeight={75}
      barWidth={1}
      gap={1}
      visualise={true}
      backgroundColor="#FFF8DE"
      barColor="#C1D0B5"
      barPlayedColor="#99A98F"
      skipDuration={2}
      showLoopOption={true}
      showVolumeControl={true}
      onplaying={() => console.log("playing")}
      onpause={() => console.log("paused")}

      // seekBarColor="purple"
      // volumeControlColor="blue"
      // hideSeekBar={true}
      // hideTrackKnobWhenPlaying={true}
    />
  );
  // return (
  //   <div className="bg-blue-300 rounded-br-lg overflow-y-scroll max-h-screen h-screen">
  //     homepage
  //   </div>
  // );
}
