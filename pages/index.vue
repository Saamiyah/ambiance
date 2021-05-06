<template>
  <div class="h-screen test">
    <div
      class="text-gray-400 hover:bg-purple-500 p-4 absolute"
      v-if="isPanelClosed"
      @click="showHidePanel()"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </div>
    <aside
      class="h-full w-3/4 sm:w-3/12 md:w-3/12 bg-gradient-to-tr from-purple-900 to-black fixed panel"
      v-else
    >
      <div class="absolute right-1 p-4 text-indigo-50 hover:text-purple-500" @click="showHidePanel()">
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div
        class="mt-12 mx-8 text-sm sm:text-base text-indigo-50 font-rochester cursor-pointer md:text-base"
      >
        <p
          v-for="label in labels"
          :key="label"
          @click="displayAmbiance(label)"
          class="hover:bg-black rounded-lg p-2 m-1"
        >
          {{ label }}
        </p>
      </div>
    </aside>
    <div
      class="text-gray-400 p-4 hover:text-purple-500 cursor-pointer absolute right-0"
      @click="play()"
      v-if="!playing"
    >
      <svg
        enable-background="new 0 0 91 91"
        fill="currentColor"
        height="30px"
        width="30px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 91 91"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            d="M64.501,41.728c-1.25-1.273-8.891-7.173-11.419-8.834c-5.48-3.601-11.287-6.697-16.801-10.254   c-2.157-1.392-5.14,0.428-5.092,2.922c0.183,9.706,0.502,35.322,0.532,38.427c0.012,1.336-0.168,2.985,0.227,4.291   c0.536,1.781,2.951,3.163,4.666,1.897c10.373-7.658,21.555-14.232,32.188-21.53C73.413,45.484,68.924,39.04,64.501,41.728z    M57.561,41.915c1.318,0.709,2.774,1.32,4.21,1.962c-7.582,6.152-15.566,11.869-23.577,17.474c0.024-2.582,0.044-5.167,0.059-7.748   c0.04-7.325,0.104-14.673-0.081-22.004c3.724,2.143,7.499,4.216,11.325,6.143C52.202,39.103,54.892,40.482,57.561,41.915z"
          />
          <path
            d="M43.832,1.828c-1.306-0.024-2.258,0.522-2.858,1.324C23.948,2.786,8.145,17.341,2.613,32.554   c-5.956,16.386-0.171,35.66,13.032,46.847c15,12.713,38.843,12.363,55.442,2.746c15.495-8.975,22.427-27.884,18.616-45.062   C85.055,16.132,64.714,2.198,43.832,1.828z M72.647,73.931c-12.785,10.559-35.526,12.845-49.669,3.923   C10.44,69.939,3.125,53.892,5.967,39.257c1.684-8.655,6.466-16.264,12.821-22.276c6.201-5.863,13.53-9.047,21.424-11.71   c-0.139,1.995,1.066,4.105,3.62,4.08c15.842-0.167,31.835,8.737,38.295,23.559C88.088,46.589,84.224,64.371,72.647,73.931z"
          />
        </g>
      </svg>
    </div>
    <div
      class="text-gray-400 p-4 hover:text-purple-500 cursor-pointer absolute right-0"
      @click="play()"
      v-else
    >
      <svg
        enable-background="new 0 0 91 91"
        fill="currentColor"
        height="30px"
        width="30px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 91 91"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            d="M89.746,37.141C85.096,16.166,64.732,2.218,43.832,1.848c-1.309-0.024-2.262,0.523-2.863,1.325   C23.926,2.807,8.109,17.376,2.571,32.604c-5.963,16.402-0.173,35.694,13.043,46.894c15.015,12.725,38.882,12.375,55.499,2.748   C86.623,73.263,93.563,54.335,89.746,37.141z M72.678,74.021c-12.801,10.57-35.566,12.858-49.723,3.927   C10.405,70.025,3.084,53.963,5.929,39.314c1.685-8.664,6.47-16.28,12.834-22.298c6.205-5.869,13.545-9.056,21.445-11.722   c-0.139,1.997,1.066,4.11,3.624,4.083c15.858-0.167,31.864,8.746,38.333,23.583C88.129,46.652,84.262,64.452,72.678,74.021z"
          />
          <path
            d="M60.338,63.104c0-0.579-0.406-16.702-0.488-21.588c-0.072-4.371-0.225-8.74-0.441-13.107   c-0.105-2.063-0.102-5.71-2.531-6.516c-1.115-0.372-3.807,1.806-3.645,8.293c0.121,4.745-0.734,9.462-1.043,14.201   c-0.299,4.58-0.607,9.162-0.867,13.744c-0.139,2.527-0.824,5.985,0.459,8.32c2.631,4.801,9.561,1.309,8.557-3.34   C60.338,63.107,60.338,63.105,60.338,63.104z"
          />
          <path
            d="M38.556,63.104c0-0.579-0.408-16.702-0.489-21.588c-0.072-4.371-0.225-8.74-0.444-13.107   c-0.103-2.063-0.099-5.71-2.529-6.516c-1.114-0.372-3.806,1.806-3.644,8.293c0.121,4.745-0.736,9.462-1.043,14.201   c-0.299,4.58-0.607,9.162-0.864,13.744c-0.143,2.527-0.827,5.985,0.456,8.32c2.63,4.801,9.563,1.309,8.558-3.34   C38.556,63.107,38.556,63.105,38.556,63.104z"
          />
        </g>
      </svg>
    </div>
    <div class="flex justify-center items-center h-full">
      <img
        :src="require(`~/static/images/gif/${label}.gif`)"
        v-if="label !== 'Ocean'"
      />
      <Waves v-if="label === 'Ocean'" />
      
      <audio autoplay loop ref="audio">
        <source :src="getSource" type="audio/mp3" v-if="label" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<script>
import Waves from "../components/Waves.vue";
//import nature from "../components/nature.vue"
export default {
  components: { Waves
   },
  mounted() {
    // this.displayAmbiance(this.label);
  },
  methods: {
    showHidePanel() {
      this.isPanelClosed = !this.isPanelClosed;
    },
    displayAmbiance(label) {
      this.label = label;
      this.$refs.audio.load();
      if (this.playing) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    play() {
      if (this.playing) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
      this.playing = !this.playing;
    }
  },
  computed: {
    getSource() {
      return `/mp3/${this.label}.mp3`;
    }
  },
  data() {
    return {
      label: "Campfire",
      labels: [
        "Campfire",
        "Library",
        "Witch",
        "Cottage",
        "Rain",
        "Ocean",
        "Enchanted Forest"
      ],
      playing: false,
      isPanelClosed: true
    };
  }
};
</script>

<style>
.test {
  background-color: black;
}
.label:hover {
  box-shadow: inset 12.5em 0 0 0 gray;
}

.panel {
  position: absolute;
  z-index: 1;
}
</style>
