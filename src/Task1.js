import React, { useState } from 'react';
import DivRGB from './DisplayDivRGB';
import Buttons from './ButtonsRGB';
export default function Task1() {
    const [R, setR] = useState(100);
    const [G, setG] = useState(100);
    const [B, setB] = useState(100);
    return <>
        <Buttons Text={"+1"} Color="Red" Type={R} set={setR}></Buttons>
        <Buttons Text={"-1"} Color="Red" Type={R} set={setR}></Buttons>
        <Buttons Text={"+1"} Color="Green" Type={G} set={setG}></Buttons>
        <Buttons Text={"-1"} Color="Green" Type={G} set={setG}></Buttons>
        <Buttons Text={"+1"} Color="Blue" Type={B} set={setB}></Buttons>
        <Buttons Text={"-1"} Color="Blue" Type={B} set={setB}></Buttons>
        <DivRGB R={R} G={G} B={B} />
    </>
}