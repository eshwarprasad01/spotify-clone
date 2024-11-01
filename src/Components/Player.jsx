import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";

export default function Player() {
  const {
    track,
    seekBar,
    seekBg,
    playerStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] flex justify-between items-center text-white px-4 ">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div className="flex flex-col gap-1 justify-around text-sm">
          <p className="font-semibold">{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt=""
          />

          {playerStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-4">
          <p>
            {String(time.currentTime.minute).padStart(2, "0")}:
            {String(time.currentTime.second).padStart(2, "0")}
          </p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 w-0 border-none bg-green-800 rounded-full"
            />
          </div>
          <p>
            {String(time.totalTime.minute).padStart(2, "0")}:
            {String(time.totalTime.second).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 rounded h-1"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
}
