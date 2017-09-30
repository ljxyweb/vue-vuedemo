<template>
  <section class="cont v-cloak">
    <div class="cont-row">
      <i class="mark icon1"></i>
      <p class="text">地址：{{graphicList.address}}</p>
    </div>
    <a class="cont-row clearfix call" :href="tel">
      <div class="fl">
        <i class="mark icon2"></i>
        <p class="text">电话：{{graphicList.tele}}</p>
      </div>
      <div class="right">拨打</div>
    </a>
    <div class="cont-row">
      <i class="mark icon3"></i>
      <p class="text">人均：¥{{graphicList.perCapita}}</p>
    </div>
    <div class="cont-row">
      <i class="mark icon4"></i>
      <p class="text">营业：{{graphicList.time}}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    graphicList: Object
  },
  computed: {
    tel() {
      return 'tel:' + this.graphicList.tele
    }
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
}

.cont-row {
  padding: .36rem .32rem;
  border-bottom: 1px dotted #d5d8da;
  display: block;
}

.cont-row.call:active {
  opacity: 0.7;
}

.cont-row:last-child {
  border-bottom: none;
}

.cont-row .mark {
  display: inline-block;
  vertical-align: text-top;
  width: .52rem;
  height: .52rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.cont-row .mark.icon1 {
  background-image: url(../../assets/address.png)
}

.cont-row .mark.icon2 {
  background-image: url(../../assets/tele.png)
}

.cont-row .mark.icon3 {
  background-image: url(../../assets/consu.png)
}

.cont-row .mark.icon4 {
  background-image: url(../../assets/time.png)
}

.cont-row .text {
  font-size: 14px;
  line-height: .52rem;
  color: #6d6d6d;
  display: inline-block;
  vertical-align: text-top;
  max-width: 8.3rem;
  box-sizing: border-box;
  padding-left: .12rem;
}

[data-dpr="2"] .cont-row .text {
  font-size: 28px;
}

[data-dpr="3"] .cont-row .text {
  font-size: 42px;
}

.cont-row .right {
  float: right;
  font-size: 14px;
  line-height: .52rem;
  background: url(../../assets/arrow_right.png) no-repeat right center;
  background-size: .16rem .28rem;
  padding-right: .36rem;
  color: #ea5120;
}

[data-dpr="2"] .cont-row .right {
  font-size: 28px;
}

[data-dpr="3"] .cont-row .right {
  font-size: 42px;
}
</style>
