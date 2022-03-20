<template>
  <div class="reveal">
    <div class="slides">
      <section>
        <p class="b-center report-title">
          述职报告
          <span class="name">——徐皓</span>
        </p>
      </section>
      <section data-auto-animate>
        <ul class="b-center">
          <li>主要工作内容和业绩</li>
          <li>工作精力、跨部门工作效果</li>
          <li>存在的不足和改善措施</li>
          <li>下一阶段工作计划和目标</li>
        </ul>
      </section>
      <section data-auto-animate>
        <ul class="b-center">
          <li>主要工作内容和业绩</li>
          <li>阶段性经验积累和总结</li>
          <li>工作精力、跨部门工作效果</li>
          <li>存在的不足和改善措施</li>
          <li>晋升前后差异</li>
          <li>下一阶段工作计划和目标</li>
        </ul>
        <div
          class="white-point"
          data-id="white-point"
          :class="{ showPoint: showPoint }"
          data-auto-animate-delay="0.6"
        ></div>
        <img
          src="../assets/text.png"
          class="center-bl"
          data-id="center-text"
          style="width: 1px; height: 1px; opacity: 0"
          alt=""
        />
      </section>
      <section
        data-auto-animate
        data-auto-animate-easing="cubic-bezier(0.860, 0.000, 0.070, 1.000)"
        data-auto-animate-duration="1.1"
      >
        <ul class="b-center">
          <li>主要工作内容和业绩</li>
          <li>阶段性经验积累和总结</li>
          <li>工作精力、跨部门工作效果</li>
          <li>存在的不足和改善措施</li>
          <li>晋升前后差异</li>
          <li>下一阶段工作计划和目标</li>
        </ul>
        <div
          class="white-point-big"
          data-id="white-point"
          :style="{
            width: `${pointMaxWidth}px`,
            height: `${pointMaxWidth}px`,
            'margin-left': `${-pointMaxWidth / 2}px`,
            'margin-top': `${-pointMaxWidth / 2}px`,
          }"
        ></div>
        <img
          src="../assets/text.png"
          alt=""
          data-auto-animate-delay="0.6"
          class="center-bl"
          data-id="center-text"
          data-auto-animate-easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)"
          style="
            width: 329.5px;
            height: 80px;
            margin-left: -164.75px;
            margin-top: -40px;
            opacity: 1;
          "
        />
      </section>
      <section data-transition="zoom">
        <p>工作内容和业绩</p>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Reveal from "reveal.js";

const showPoint = ref(false);
const pointWidth = ref(12);
const pointMaxWidth = ref(0);
const scale = ref(0);
const sectionWidth = ref(0);
const sectionHeight = ref(0);

onMounted(() => {
  let deck = new Reveal({});
  deck.initialize();

  deck.on("slidetransitionend", (event) => {
    if (event.indexh === 2) {
      showPoint.value = true;
    }
  });

  deck.on("resize", (event) => {
    console.log("event", event);
    scale.value = event.scale;
    sectionWidth.value = event.size.width;
    sectionHeight.value = event.size.height;
  });

  window.onresize = () => {
    pointMaxWidth.value = window.innerWidth / scale.value;
  };
});
</script>

<style scoped lang="scss">
.reveal {
  background-color: #1a1626;
  section {
    height: 100%;
  }
  img {
    margin: 0;
  }
  p,
  div,
  span,
  li {
    white-space: nowrap;
  }
  .b-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .center-bl {
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .report-title {
    .name {
      position: absolute;
      left: 50%;
      font-size: 30px;
      transform: translate(55px, 55px);
    }
  }
  .white-point {
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -222px;
    margin-top: -143px;
    opacity: 0;
    &.showPoint {
      opacity: 1;
    }
  }
  .white-point-big {
    // margin-left: -50vw;
    // margin-top: -50vw;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
  }
}
</style>
