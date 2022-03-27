<template>
  <div class="reveal">
    <div class="slides">
      <section>
        <p class="b-center report-title" style="font-size: 46px">
          述职报告
          <span class="name">——徐皓</span>
        </p>
      </section>
      <section data-auto-animate>
        <ul class="b-center" style="width: 510px">
          <li>主要工作内容和业绩</li>
          <li>存在的不足和改善措施</li>
        </ul>
      </section>
      <section data-auto-animate>
        <ul class="b-center" style="width: 510px">
          <li>主要工作内容和业绩</li>
          <li>阶段性经验积累和总结</li>
          <li>存在的不足和改善措施</li>
          <li>下一阶段工作计划和目标</li>
        </ul>
        <div
          class="white-point"
          data-id="white-point"
          :class="{ showPoint: showPoint }"
          data-auto-animate-delay="0.3"
          data-auto-animate-easing="ease"
        ></div>
        <div
          data-auto-animate-easing="ease"
          data-auto-animate-duration="0.7"
          class="center-bl"
          data-id="center-text"
          style="
            width: 24px;
            height: 10px;
            opacity: 0;
            border-radius: 1px !important;
          "
        >
          <span style="transform: scale(0.1)">工作内容</span>
        </div>
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
          <li>存在的不足和改善措施</li>
          <li>下一阶段工作计划和目标</li>
        </ul>
        <div
          class="white-point-big"
          data-id="white-point"
          :style="{
            width: `${pointMaxWidth * 2}px`,
            height: `${pointMaxWidth * 2}px`,
            'margin-left': `${-pointMaxWidth}px`,
            'margin-top': `${-pointMaxWidth}px`,
          }"
        ></div>
        <div
          data-auto-animate-delay="0.6"
          data-auto-animate-duration="1.1"
          class="center-bl"
          data-id="center-text"
          data-auto-animate-easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)"
          style="
            width: 240px;
            height: 100px;
            margin-left: -120px;
            margin-top: -50px;
            opacity: 1;
          "
        >
          <span>工作内容</span>
        </div>
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
          >
            <span
              style="opacity: 0"
              :data-id="'taskText' + index"
              data-auto-animate-easing="ease"
              data-auto-animate-delay="0"
              data-auto-animate-duration="0.2"
              >{{ item.text }}</span
            >
          </div>
        </div>
      </section>
      <section data-auto-animate data-background="rgb(204, 204, 204)">
        <div
          class="white-point-big"
          data-id="white-point"
          :style="{
            width: `${pointMaxWidth * 2}px`,
            height: `${pointMaxWidth * 2}px`,
            'margin-left': `${-pointMaxWidth}px`,
            'margin-top': `${-pointMaxWidth}px`,
          }"
        ></div>
        <div
          class="center-bl"
          data-id="center-text"
          style="
            width: 240px;
            height: 100px;
            margin-left: -120px;
            margin-top: -50px;
            opacity: 1;
            color: #fff;
          "
        >
          <span>工作内容</span>
        </div>
        <div
          class="task-box-offset"
          :data-id="'task' + index"
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
          >
            <span style="opacity: 1" :data-id="'taskText' + index">{{
              item.text
            }}</span>
          </div>
        </div>
        <div
          class="task-text"
          data-id="task-text1"
          style="top: 535px; opacity: 0"
        >
          <span>完成大小需求：<span style="color: #f9ff2e">36个</span></span>
        </div>
        <div
          class="task-text"
          data-id="task-text2"
          style="top: 666px; opacity: 0"
        >
          <span>修复bug：<span style="color: #f9ff2e">400+</span></span>
        </div>
      </section>
      <section
        data-auto-animate
        data-auto-animate-easing="cubic-bezier(0.860, 0.000, 0.070, 1.000)"
        data-auto-animate-duration="1.1"
        data-background="rgb(204, 204, 204)"
      >
        <div
          class="center-bl"
          data-id="center-text"
          data-auto-animate-delay="0.1"
          data-auto-animate-duration="1.5"
          style="
            width: 240px;
            height: 100px;
            margin-left: -120px;
            margin-top: -226px;
            opacity: 1;
            color: #fff;
          "
        >
          <span>工作内容</span>
        </div>
        <div
          data-auto-animate-easing="cubic-bezier(0.755, 0.050, 0.855, 0.060)"
          :data-auto-animate-duration="item.duration"
          class="task-box-offset"
          :data-id="'task' + index"
          v-for="(item, index) in tasks"
          :key="index"
          :style="{
            width: item.width - 4 + 'px',
            height: item.height - 4 + 'px',
            top: item.top + 420 + 'px',
            left: item.left - 80 + 'px',
            opacity: 0,
          }"
        >
          <div
            class="content"
            :style="{ transform: `rotate(${item.rotate}deg)` }"
          ></div>
        </div>
        <div
          class="task-text"
          style="top: 305px"
          data-id="task-text1"
          data-auto-animate-duration="1.5"
          data-auto-animate-delay="0.1"
        >
          <span>完成大小需求：<span style="color: #f9ff2e">36个</span></span>
        </div>
        <div
          class="task-text"
          style="top: 368px"
          data-id="task-text2"
          data-auto-animate-duration="1.5"
          data-auto-animate-delay="0.1"
        >
          <span>修复bug：<span style="color: #f9ff2e">400+</span></span>
        </div>
      </section>
      <section data-background="#4d7e65" data-background-transition="zoom">
        <section>
          <div class="b-center" style="font-size: 67px">工作经验总结</div>
        </section>
        <section>
          <div class="b-center">
            <p style="font-size: 52px">业务上</p>
            <p class="fragment">对M-Design的使用更加熟练</p>
            <p class="fragment">与csm进行比较</p>
            <p class="fragment">发现需要注意的细节</p>
          </div>
        </section>
        <section>
          <div class="b-center">
            <p style="font-size: 52px">开发上</p>
            <p class="fragment">熟悉项目结构</p>
            <p class="fragment">了解各个组件的作用和关联</p>
            <p class="fragment">有利于及时的定位问题</p>
          </div>
        </section>
        <section>
          <div class="b-center">
            <p style="font-size: 52px">协作上</p>
            <p class="fragment">与后端分工协作</p>
            <p class="fragment">需求不明确的地方与产品探讨</p>
            <p class="fragment">测试反馈的bug及时修复</p>
          </div>
        </section>
      </section>
      <section data-background="#b5533c" data-background-transition="zoom">
        <section>
          <div class="b-center" style="font-size: 67px">
            存在的不足和改善措施
          </div>
        </section>
        <section>
          <div class="b-center">
            <p style="font-size: 52px">主动性</p>
            <p class="fragment">主动性稍有欠缺，在工作上应更加积极主动一些</p>
          </div>
        </section>
        <section>
          <div class="b-center">
            <p style="font-size: 52px">建模知识</p>
            <p class="fragment">sysml的建模基础知识薄弱</p>
            <p class="fragment">功能考虑的不全面</p>
            <p class="fragment">空闲时间加以补充</p>
          </div>
        </section>
        <section>
          <div class="b-center">
            <p style="font-size: 52px">沟通少</p>
            <p class="fragment">平时与同事沟通少</p>
            <p class="fragment">多多交流 交换意见</p>
          </div>
        </section>
      </section>
      <section
        data-auto-animate
        data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
      >
        <div class="b-center" style="width: 510px; height: 220px">
          <h2>计划和目标</h2>
          <div class="r-hstack justify-center">
            <div
              data-id="box1"
              style="
                background: #999;
                width: 50px;
                height: 50px;
                margin: 10px;
                border-radius: 5px;
              "
            ></div>
            <div
              data-id="box2"
              style="
                background: #999;
                width: 50px;
                height: 50px;
                margin: 10px;
                border-radius: 5px;
              "
            ></div>
            <div
              data-id="box3"
              style="
                background: #999;
                width: 50px;
                height: 50px;
                margin: 10px;
                border-radius: 5px;
              "
            ></div>
          </div>
        </div>
      </section>
      <section
        data-auto-animate
        data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
      >
        <div class="b-center" style="width: 510px; height: 220px">
          <div class="r-hstack justify-center">
            <div
              data-id="box1"
              data-auto-animate-delay="0"
              class="fl-center"
              style="
                background: cyan;
                width: 150px;
                height: 100px;
                margin: 10px;
              "
            >
              <p class="fragment plan-text">新版本</p>
            </div>
            <div
              data-id="box2"
              class="fl-center"
              data-auto-animate-delay="0.1"
              style="
                background: magenta;
                width: 150px;
                height: 100px;
                margin: 10px;
              "
            >
              <p class="fragment plan-text">新功能</p>
            </div>
            <div
              data-id="box3"
              class="fl-center"
              data-auto-animate-delay="0.2"
              style="
                background: yellow;
                width: 150px;
                height: 100px;
                margin: 10px;
              "
            >
              <p class="fragment plan-text">自身技术</p>
            </div>
          </div>
          <h2 style="margin-top: 20px">计划和目标</h2>
        </div>
      </section>
      <section
        data-auto-animate
        data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
      >
        <div class="b-center">
          <div class="r-stack">
            <div
              data-id="box1"
              style="
                background: cyan;
                width: 300px;
                height: 300px;
                border-radius: 200px;
              "
            ></div>
            <div
              data-id="box2"
              style="
                background: magenta;
                width: 200px;
                height: 200px;
                border-radius: 200px;
              "
            ></div>
            <div
              data-id="box3"
              style="
                background: yellow;
                width: 100px;
                height: 100px;
                border-radius: 200px;
              "
            ></div>
          </div>
          <h2 style="margin-top: 20px">谢谢</h2>
        </div>
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
const scale = ref(1);
const sectionWidth = ref(0);
const sectionHeight = ref(0);

const tasks = [
  {
    text: "instance",
    width: 90,
    height: 89,
    left: 203,
    top: 186,
    rotate: 0,
    duration: 1,
  },
  {
    text: "模型库",
    width: 88,
    height: 67,
    left: 429,
    top: 110,
    rotate: -10,
    duration: 1.1,
  },
  {
    text: "attached file",
    width: 90,
    height: 89,
    left: 702,
    top: 112,
    rotate: -12,
    duration: 1.4,
  },
  {
    text: "靶式符号",
    width: 90,
    height: 89,
    left: 921,
    top: 418,
    rotate: -21,
    duration: 1.3,
  },
  {
    text: "",
    width: 34,
    height: 34,
    left: 949,
    top: 231,
    rotate: 0,
    duration: 1.6,
  },
  {
    text: "实例表",
    width: 88,
    height: 67,
    left: 165,
    top: 58,
    rotate: -32,
    duration: 1,
  },
  {
    text: "",
    width: 48,
    height: 36,
    left: 338,
    top: 393,
    rotate: 33,
    duration: 1.3,
  },
  {
    text: "标准用例",
    width: 89,
    height: 67,
    left: 139,
    top: 310,
    rotate: -8,
    duration: 1.3,
  },
  {
    text: "图片库",
    width: 64,
    height: 64,
    left: 174,
    top: 445,
    rotate: -19,
    duration: 1.2,
  },
  {
    text: "黑盒表",
    width: 94,
    height: 92,
    left: 480,
    top: 480,
    rotate: 4,
    duration: 1.1,
  },
  {
    text: "通用表",
    width: 96,
    height: 73,
    left: 886,
    top: 90,
    rotate: 33,
    duration: 1.3,
  },
  {
    text: "快速创建IBD",
    width: 137,
    height: 135,
    left: 709,
    top: 448,
    rotate: 14,
    duration: 0.9,
  },
  {
    text: "ICD表",
    width: 78,
    height: 59,
    left: 1000,
    top: 340,
    rotate: -8,
    duration: 1.4,
  },
  {
    text: "",
    width: 39,
    height: 38,
    left: 342,
    top: 507,
    rotate: -5,
    duration: 1.2,
  },
  {
    text: "bug修复",
    width: 68,
    height: 67,
    left: 549,
    top: 21,
    rotate: -5,
    duration: 1.2,
  },
  {
    text: "属性组",
    width: 65,
    height: 64,
    left: 323,
    top: 44,
    rotate: 12,
    duration: 1.1,
  },
  {
    text: "导航图",
    width: 78,
    height: 59,
    left: 778,
    top: 258,
    rotate: 10,
    duration: 1.1,
  },
];

const resize = () => {
  pointMaxWidth.value = window.innerWidth / scale.value;
};

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
  resize();
  window.onresize = resize;
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
  .task-text {
    position: absolute;
    width: 400px;
    left: 50%;
    margin-left: -200px;
    text-align: center;
    color: rgb(0, 0, 0);
  }
  .center-bl {
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #e5637c;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 4px 10px -5px rgb(0 0 0 / 50%), 0 15px 30px 0 rgb(0 0 0 / 30%);
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
    margin-left: -224px;
    margin-top: -88px;
    opacity: 0;
    &.showPoint {
      opacity: 1;
    }
  }
  .white-point-big {
    background-color: rgb(204, 204, 204);
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
      background-color: #fff;
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  .task-box-offset {
    position: absolute;
    z-index: 99;
    background-color: transparent;
    top: 50%;
    left: 50%;
    opacity: 1;
    .content {
      background-color: #fff;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(26, 32, 44);
      font-size: 16px;
      box-shadow: 4px 4px 4px -5px rgb(0 0 0 / 50%);
    }
  }
  .custom-ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      display: flex;
    }
  }
  .plan-text {
    margin: 0;
    color: #000;
    font-size: 36px;
  }
  .fl-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
