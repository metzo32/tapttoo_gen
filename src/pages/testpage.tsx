import React from "react";
import s from "../stores/styling";
import Example from "../components/FramerMotions/framerTest";
import HoverButton from "../components/HoverButton";


export default function Nothing() {

  const event = () => {

    console.log("clicked")
  }

  return <HoverButton onClick={event} circle={false} text={"let me finish the song"}/>;
}
