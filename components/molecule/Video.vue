<template>
  <!-- <div class="video-container h-[300px] md:h-[900px] w-[100vw]">
    <iframe
      src="https://www.youtube.com/embed/LWE3E5bbKh4?autoplay=1&mute=1&loop=1&playlist=LWE3E5bbKh4&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&fs=0" 
      title="TWA" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>
  </div> -->
  <video autoplay loop muted playsinline style="width: 100%; height: auto;">
    <source src="">
  </video>
</template>

<style lang="scss">
.video-container {
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.ytp-watermark yt-uix-sessionlink {
  display: none!important;
}
</style>