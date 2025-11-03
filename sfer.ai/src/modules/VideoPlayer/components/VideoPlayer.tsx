import React, { useRef, useState, useCallback, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, className = '' }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [showControls, setShowControls] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false);

    const hideTimerRef = useRef<number | null>(null);

    const showControlsWithTimer = useCallback(() => {
        setShowControls(true);
        setIsHovered(true);

        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
        }

        hideTimerRef.current = window.setTimeout(() => {
            if (!isPlaying) return;
            setShowControls(false);
            setIsHovered(false);
        }, 3000);
    }, [isPlaying]);

    const handleMouseEnter = () => {
        showControlsWithTimer();
    };

    const handleMouseMove = () => {
        showControlsWithTimer();
    };

    const handleMouseLeave = () => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }
        if (isPlaying) {
            setShowControls(false);
            setIsHovered(false);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
                setHasPlayed(true);
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setDuration(videoRef.current.duration || 0);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

    useEffect(() => {
        return () => {
            if (hideTimerRef.current) {
                clearTimeout(hideTimerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative bg-black rounded-xl overflow-hidden ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                className="w-full aspect-video"
                poster={poster}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                onEnded={() => {
                    setIsPlaying(false);
                    setShowControls(true);
                }}
                onClick={togglePlay}
            >
                <source src={src} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
            {!isPlaying && (
                <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/40 hover:bg-black/30 transition-all duration-300 group"
                >
                    <div className={`flex items-center gap-3 ${hasPlayed ? 'bg-blue-600/90 group-hover:bg-blue-500' : 'bg-white'} rounded-full p-3 transition-all duration-300 group-hover:scale-105 shadow-2xl`}>
                        <svg className={`w-8 h-8 ${hasPlayed ? 'text-white' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        {!hasPlayed && duration > 0 && (
                            <span className="text-blue-600 font-medium pr-2">
                                {formatTime(duration)}
                            </span>
                        )}
                    </div>
                </button>
            )}
            <div className={`
                absolute bottom-0 left-0 right-0 p-4 transition-all duration-300
                ${showControls || !isPlaying ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                ${isHovered ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' : ''}
            `}>
                <div className="mb-3">
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1.5 bg-blue-900/60 rounded-lg appearance-none cursor-pointer slider hover:h-2 transition-all duration-200"
                        style={{
                            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${progressPercentage}%, rgba(59, 130, 246, 0.4) ${progressPercentage}%, rgba(59, 130, 246, 0.4) 100%)`
                        }}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={togglePlay}
                            className="text-white hover:text-blue-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/10"
                        >
                            {isPlaying ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            )}
                        </button>
                        <span className="text-sm text-blue-200 font-medium min-w-[100px]">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                        <div className="flex items-center space-x-2 opacity-0 md:opacity-100 transition-opacity duration-200">
                            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-16 h-1 bg-blue-900/60 rounded-lg appearance-none cursor-pointer volume-slider"
                                style={{
                                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${volume * 100}%, rgba(59, 130, 246, 0.4) ${volume * 100}%, rgba(59, 130, 246, 0.4) 100%)`
                                }}
                            />
                        </div>
                    </div>
                    <button
                        onClick={() => videoRef.current?.requestFullscreen()}
                        className="text-blue-300 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-white/10"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                        </svg>
                    </button>
                </div>
            </div>
            {isPlaying && !showControls && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-60">
                    <div className="flex space-x-1">
                        <div className="w-1 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-1 h-4 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-1 h-4 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                </div>
            )}
        </div>
    );
};
