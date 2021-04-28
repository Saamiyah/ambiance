<template>
<div>
    <div class="relative">
    <p class="font-butterfly text-2xl text-blue-100 top-2 fixed"><quote>Boken or tired, feel the waves, the ocean has healing power.</quote></p>
</div>
  <div class="ocean">
        <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  </div>
</div>
</template>
<style lang="postcss">
// best seen at 1500px or less

html, body { height: 100%; }
body {
  background:radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
  overflow: hidden;
}

.ocean { 
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
}

.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
  position: absolute;
  top: -230px;
  width: 6400px;
  min-height: 300px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -140px;
  animation: wave 4s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 3s ease -1.25s infinite;
  opacity: 1;
}

.wave:nth-of-type(3) {
  top: -190px;
  animation: wave 2s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 2s ease -1.25s infinite;
  opacity: 2;
}
@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
</style>