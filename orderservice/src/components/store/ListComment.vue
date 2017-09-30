<template>
  <section class="cont">
    <div class="cont-total clearfix">
      <p class="name">顾客评价</p>
      <p class="text">共{{evalList.total}}条，好评率{{evalList.rate}}</p>
    </div>
    <div class="cont-detail">
      <div class="g-col3  clearfix">
        <div class="g-col3-patch">
          <p class="fs16 c_black">菜肴口味</p>
          <div class="mt15">
            <i v-for="n in 5" :key="n" class="icon" :class="[n<=evalList.taste?'on':'']"></i>
          </div>
          <p class="fs13 c_79 mt15">{{evalList.taste}}分</p>
        </div>
        <div class="g-col3-patch">
          <p class="fs16 c_black">上菜速度</p>
          <div class="mt15">
            <i v-for="n in 5" :key="n" class="icon" :class="[n<=evalList.speed?'on':'']"></i>
          </div>
          <p class="fs13 c_79 mt15">{{evalList.speed}}分</p>
        </div>
        <div class="g-col3-patch">
          <p class="fs16 c_black">就餐环境</p>
          <div class="mt15">
            <i v-for="n in 5" :key="n" class="icon" :class="[n<=evalList.envir?'on':'']"></i>
          </div>
          <p class="fs13 c_79 mt15">{{evalList.envir}}分</p>
        </div>
      </div>
      <ul class="g-list">
        <li class="g-list-row fs12" v-for="item in evalList.list">
          <div class="top clearfix">
            <img :src="item.url" alt="头像" class="image fl">
            <span class="fs13 c_79 fl">{{item.name}}</span>
            <p class="right" :class="[item.eval===1?'good':'bad']">{{item.eval===1?'好评':'差评'}}</p>
          </div>
          <p class="c3">{{item.text}}</p>
          <time class="c_79">{{item.time}}</time>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    evalList: Object
  }
}
</script>
<style scoped>
.cont {
  width: 9.48rem;
  background-color: #f5f2f3;
  border-radius: .12rem;
  color: #6d6d6d;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.cont-total {
  padding: .36rem;
  font-size: 12px;
  color: #797979;
  line-height: .48rem;
  background-color: #edeaf0;
}

[data-dpr="2"] .cont-total {
  font-size: 24px;
}

[data-dpr="3"] .cont-total {
  font-size: 36px;
}

.cont-total .name {
  float: left;
  background: url(../../assets/eval.png) no-repeat left center;
  background-size: contain;
  padding-left: .72rem;
  font-size: 14px;
}

[data-dpr="2"] .cont-total .name {
  font-size: 28px;
}

[data-dpr="3"] .cont-total .name {
  font-size: 42px;
}

.cont-total .text {
  float: right;
  background: url(../../assets/arrow_right_gray.png) no-repeat right center;
  background-size: .16rem .28rem;
  padding-right: .28rem;
}

.cont-detail {
  background-color: #f7f6fa;
  padding-bottom: .44rem;
}

.g-col3 {
  padding-top: .52rem;
}

.g-col3-patch {
  float: left;
  width: 33.33%;
  line-height: 1;
  text-align: center;
}

.g-col3-patch .icon {
  background: url(../../assets/star.png) no-repeat center;
  background-size: .36rem .32rem;
  width: .44rem;
  height: .44rem;
  display: inline-block;
}

.g-col3-patch .icon.on {
  background-image: url(../../assets/star_bg.png)
}

.g-list {
  background-color: #f8f7fb;
  color: #424242;
}

.g-list-row {
  padding: .76rem .28rem 0;
  line-height: 2;
}

.g-list-row .top {
  line-height: 1rem;
}

.g-list-row .top .image {
  width: 1rem;
  height: 1rem;
}

.g-list-row .top .right {
  padding-left: .44rem;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: .32rem;
  float: right;
}

.g-list-row .top .right.good {
  background-image: url(../../assets/good.png)
}
</style>
