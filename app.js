const wavesurfer = wavesurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    scrollParent: false
});


wavesurfer.load("./audio/1.mp3")