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
          data-auto-animate-delay="0.3"
          data-auto-animate-easing="ease"
        ></div>
        <img
          data-auto-animate-easing="ease"
          data-auto-animate-duration="0.7"
          src="../assets/text.png"
          class="center-bl"
          data-id="center-text"
          style="width: 1px; height: 1px; opacity: 0"
          alt=""
        />
        <div
          data-auto-animate-easing="ease"
          data-auto-animate-duration="0.2"
          class="task-box"
          :data-id="'task' + index"
          v-for="(item, index) in tasks"
          :key="index"
          :style="{
            width: item.width - 4 + 'px',
            height: item.height - 4 + 'px',
            'margin-top': -item.height / 2 + 'px',
            'margin-left': -item.width / 2 + 'px',
          }"
        >
          <div
            class="content"
            :style="{ transform: `rotate(${item.rotate}deg)` }"
          ></div>
        </div>
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
          data-auto-animate-duration="1.1"
          class="center-bl"
          data-id="center-text"
          data-auto-animate-easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)"
          style="
            width: 400px;
            height: 100px;
            margin-left: -200px;
            margin-top: -50px;
            opacity: 1;
          "
        />
        <div
          class="task-box-offset"
          :data-id="'task' + index"
          data-auto-animate-delay="0.8"
          data-auto-animate-duration="1.3"
          data-auto-animate-easing="cubic-bezier(0.230, 1.000, 0.320, 1.000)"
          v-for="(item, index) in tasks"
          :key="index"
          :style="{
            width: item.width - 4 + 'px',
            height: item.height - 4 + 'px',
            top: item.top + 20 + 'px',
            left: item.left - 80 + 'px',
          }"
        >
          <div
            class="content"
            :style="{ transform: `rotate(${item.rotate}deg)` }"
          ></div>
        </div>
      </section>
      <section data-transition="zoom">
        <p style="color: rgba(237, 100, 166, 1)">工作内容和业绩</p>
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

const tasks = [
  {
    text: "",
    width: 90,
    height: 89,
    left: 203,
    top: 186,
    rotate: 0,
  },
  {
    text: "",
    width: 88,
    height: 67,
    left: 429,
    top: 110,
    rotate: -10,
  },
  {
    text: "",
    width: 90,
    height: 89,
    left: 702,
    top: 112,
    rotate: -12,
  },
  {
    text: "",
    width: 90,
    height: 89,
    left: 921,
    top: 418,
    rotate: -21,
  },
  {
    text: "",
    width: 34,
    height: 34,
    left: 949,
    top: 231,
    rotate: 0,
  },
  {
    text: "",
    width: 88,
    height: 67,
    left: 165,
    top: 58,
    rotate: -32,
  },
  {
    text: "",
    width: 48,
    height: 36,
    left: 338,
    top: 393,
    rotate: 33,
  },
  {
    text: "",
    width: 89,
    height: 67,
    left: 139,
    top: 310,
    rotate: -8,
  },
  {
    text: "",
    width: 59,
    height: 59,
    left: 174,
    top: 445,
    rotate: -19,
  },
  {
    text: "",
    width: 94,
    height: 92,
    left: 480,
    top: 480,
    rotate: 4,
  },
  {
    text: "",
    width: 96,
    height: 73,
    left: 886,
    top: 90,
    rotate: 33,
  },
  {
    text: "",
    width: 137,
    height: 135,
    left: 709,
    top: 448,
    rotate: 14,
  },
  {
    text: "",
    width: 78,
    height: 59,
    left: 1000,
    top: 340,
    rotate: -8,
  },
  {
    text: "",
    width: 39,
    height: 38,
    left: 342,
    top: 507,
    rotate: -5,
  },
  {
    text: "",
    width: 58,
    height: 57,
    left: 549,
    top: 21,
    rotate: -5,
  },
  {
    text: "",
    width: 55,
    height: 54,
    left: 323,
    top: 44,
    rotate: 12,
  },
  {
    text: "",
    width: 78,
    height: 59,
    left: 778,
    top: 258,
    rotate: 10,
  },
];

onMounted(() => {
  let deck = new Reveal({ maxScale: 1.0 });
  deck.initialize({ width: 960, height: 700 });

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
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
  }
  .task-box {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    .content {
      background-color: rgba(246, 224, 94, 1);
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  .task-box-offset {
    position: absolute;
    z-index: 101;
    background-color: transparent;
    top: 50%;
    left: 50%;
    opacity: 1;
    .content {
      background-color: rgba(246, 224, 94, 1);
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
}
</style>
