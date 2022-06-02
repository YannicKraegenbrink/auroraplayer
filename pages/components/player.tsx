import React, { useState } from 'react';
import ReactPlayer from 'react-player'


import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faPaste, faVolumeUp } from '@fortawesome/free-solid-svg-icons'



export default function Player(): JSX.Element {

    const [PlayPause, setPlayPause] = useState(false);

    const [volume, setVolume] = React.useState<number>(30);
    const [trueVolume, setTrueVolume] = useState(0.3);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setVolume(newValue as number);

        setTrueVolume(volume / 100);
    };

    function playPauseAudio() {
        if (PlayPause) {
            setPlayPause(false);
        }
        if (!PlayPause) {
            setPlayPause(true);
        }
    }

    const [textInput, setTextInput] = useState("youtube.com/watch?v=dQw4w9WgXcQ");

    const handleTextInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTextInput(event.target.value);
    }

    const [isPaste, setPaste] = useState(false);

    const paste = () => {



        if (isPaste) {
            setPaste(false);
        }
        if (!isPaste) {
            setPaste(true);
        }

    }

    const [isVolumeIcon, setVolumeIcon] = useState(false);

    function volumeIcon() {
        if (isVolumeIcon) {
            setVolumeIcon(false);
        }
        if (!isVolumeIcon) {
            setVolumeIcon(true);
        }
    }

    return (
        <>
            <div className="Player">
                <div className="Link">
                    <IconButton onClick={paste} color="primary">
                        <FontAwesomeIcon icon={faPaste} />
                    </IconButton>
                    {isPaste == true &&
                        <TextField id="standard-basic" label="link" variant="standard" value={textInput} onChange={handleTextInputChange} fullWidth />
                    }
                </div>
                <ReactPlayer url={textInput}
                    playing={PlayPause}
                    volume={trueVolume}
                    controls={false} />
                <div className="Controls">
                    <IconButton onClick={playPauseAudio} color="primary" size="large">
                        {PlayPause == true && <FontAwesomeIcon icon={faPauseCircle} />}
                        {PlayPause == false && <FontAwesomeIcon icon={faPlayCircle} />}
                    </IconButton>
                    <IconButton onClick={volumeIcon}>
                        <FontAwesomeIcon icon={faVolumeUp} color="primary" />
                    </IconButton>
                    {isVolumeIcon == true && <Slider aria-label="Volume" value={volume} onChange={handleChange} />}
                </div>
            </div>
        </>
    );
}