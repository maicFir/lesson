<template>
    <div ref="wrapper" class="list-wrapper">  
        <div class="scroll-content">       
            <slot></slot>
            <div>
                <PullingWord v-show="!inPullUp&&dataList.length>0" :loadingWord="beforePullUpWord"></PullingWord>
                <Loading v-show="inPullUp" :loadingWord='PullingUpWord'></Loading>
            </div>       
        </div>  

        <transition name="pullDown">
           <Loading class="pullDown" v-show="inPullDown" :loadingWord='PullingDownWord'></Loading>
        </transition> 
    </div>
</template>
<script>
import BScroll from "better-scroll";
import Loading from "./components/loading.vue";
import PullingWord from "./components/pulling-word";
const PullingUpWord = "正在拼命加载中...";
const beforePullUpWord = "上拉加载更多";
const finishPullUpWord = "加载完成";

const PullingDownWord = "加载中...";

export default {
  components: {
    Loading,
    PullingWord
  },
  props: {
    dataList: {
      type: Array,
      default: []
    },
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
      inPullUp: false,
      inPullDown: false,
      beforePullUpWord,
      PullingUpWord,
      PullingDownWord,
      continuePullUp: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.initScroll();

      this.scroll.on("pullingUp", () => {
        if (this.continuePullUp) {
          this.beforePullUp();
          this.$emit("onPullUp", "当前状态：上拉加载");
        }
      });

      this.scroll.on("pullingDown", () => {
        this.beforePullDown();
        this.$emit("onPullDown", "当前状态：下拉加载更多");
      });
    }, 20);
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      });
    },
    beforePullUp() {
      this.PullingUpWord = PullingUpWord;
      this.inPullUp = true;
    },
    beforePullDown() {
      this.disable();
      this.inPullDown = true;
    },
    finish(type) {
      this["finish" + type]();
      this.enable();
      this["in" + type] = false;
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  },
  watch: {
    dataList() {
      this.$nextTick(() => {
        this.refresh();
      });
    }
  }
};
</script>
<style lang="stylus">
 @import './scroller.styl';
</style>

