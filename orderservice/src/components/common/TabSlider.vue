<template>
  <div class="tab">
    <div class="cont">
      <p class="pl21">{{cardItem.name}}</p>
      <p class="type c_gray">{{cardItem.type}}</p>
      <div class="g-col3 clearfix">
        <div class="g-col3-patch">
          <p>折扣</p>
          <p class="text c_yellow">{{cardItem.discount}}</p>
        </div>
        <div class="g-col3-patch">
          <p>余额</p>
          <p class="text">¥{{cardItem.balance}}</p>
        </div>
        <div class="g-col3-patch">
          <p>积分</p>
          <p class="text">{{cardItem.integration}}</p>
        </div>
      </div>
    </div>
    <ul class="nav">
      <li v-for="(item,index) in cardList" :key="item.id" class="dot" :class="[currentCard===index?'on':'']"></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    cardList: Array,
    currentCard: Number
  },
  data() {
    return {
      ele: null,
      startPos: null,
      endPos: null,
      isScrolling: 0
    }
  },
  computed: {
    cardItem() {
      return this.cardList[this.currentCard]
    },
    cardLength() {
      return this.cardList.length
    }
  },
  methods: {
    start(event) {
      let touch = event.targetTouches[0] // touches数组对象获得屏幕上所有的touch，取第一个touch
      this.startPos = { x: touch.pageX, y: touch.pageY, time: +new Date() } // 取第一个touch的坐标值
      this.ele.addEventListener('touchmove', this.move, false)
      this.ele.addEventListener('touchend', this.end, false)
    },
    move(event) {
      let touch = event.changedTouches[0]
      this.endPos = { x: touch.pageX - this.startPos.x, y: touch.pageY - this.startPos.y }
      this.isScrolling = Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1 : 0// isScrolling为1时，表示纵向滑动，0为横向滑动
      if (this.isScrolling === 0) {
        event.preventDefault()
      }
    },
    end(event) {
      let duration = +new Date() - this.startPos.time // 滑动的持续时间
      if (this.isScrolling === 0) { // 当为水平滚动时
        if (Number(duration) > 10) {
          // 判断是左移还是右移，当偏移量大于10时执行
          if (this.endPos.x > 10) {
            if (this.currentCard + 1 < this.cardLength) {
              this.$emit('slide', this.currentCard + 1)
            }
          } else if (this.endPos.x < -10) {
            if (this.currentCard - 1 >= 0) {
              this.$emit('slide', this.currentCard - 1)
            }
          }
        }
      }
    }
  },
  mounted() {
    if ('ontouchstart' in window) {
      this.ele = document.querySelector('.cont')
      this.ele.addEventListener('touchstart', this.start, false)
    }
  },
  beforeDestroy() {
    this.ele.removeEventListener('touchstart', this.start, false)
    this.ele.removeEventListener('touchmove', this.move, false)
    this.ele.removeEventListener('touchend', this.end, false)
  }
}
</script>
<style scoped>
.cont {
  width: 9.48rem;
  background: url(../../assets/card-vip.png) no-repeat center;
  background-size: cover;
  border-radius: .12rem;
  font-size: 12px;
  line-height: 1;
  color: #fff;
  padding-top: .44rem;
  margin: 0 auto;
}

[data-dpr="2"] .cont {
  font-size: 24px;
}

[data-dpr="3"] .cont {
  font-size: 36px;
}

.cont .type {
  padding: .68rem 0;
  text-align: center;
  font-size: 36px;
}

[data-dpr="2"] .cont .type {
  font-size: 72px;
}

[data-dpr="3"] .cont .type {
  font-size: 108px;
}

.g-col3 {
  background-color: rgba(88, 94, 61, 0.5);
}

.g-col3-patch {
  float: left;
  width: 33.33%;
  padding: .28rem 0;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  border-right: 1px dotted #686d53;
  background-color: rgba(51, 58, 26, 0.5);
}

.g-col3-patch:last-child {
  border-right: none;
}

.g-col3-patch .text {
  padding-top: .12rem;
  font-weight: bolder;
  font-size: 16px;
}

[data-dpr="2"] .g-col3-patch .text {
  font-size: 32px;
}

[data-dpr="3"] .g-col3-patch .text {
  font-size: 48px;
}

.nav {
  padding-top: .28rem;
  text-align: center;
}

.nav .dot {
  display: inline-block;
  margin-right: .2rem;
  width: .16rem;
  height: .16rem;
  border-radius: .08rem;
  background-color: #b9b9bd;
}

.nav .dot:last-child {
  margin-right: 0;
}

.nav .dot.on {
  background-color: #999;
}
</style>

