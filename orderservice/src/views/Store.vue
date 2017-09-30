<template>
  <div v-if="loading" class="loading">
    loading
  </div>
  <div class="wrap-center store-cont" v-else>
    <div class="pt150">
      <section class="store-dis v-cloak">
        <img :src="storeInfo.url" alt="商店头像" class="image">
        <p class="p1">{{storeInfo.name}}</p>
        <p class="p2">
          <span class="vam">欢迎光临，{{ownInfo.name}}</span>
          <span class="mark">
            <i class="icon">{{ownInfo.degree}}</i>{{ownInfo.degreeText}}</span>
        </p>
      </section>
      <tab-slider @slide="slideEvent" :card-list="cardList" :current-card="currentCard" class="mt42"></tab-slider>
      <list-graphic :graphic-list="storeInfo" class="mt51"></list-graphic>
      <list-comment :eval-list="evalList" class="mt21"></list-comment>
    </div>
    <nav class="nav">
      <ul class="nav-link fs12 clearfix">
        <router-link to="/takeaway" tag="li" class="icon1">叫外卖</router-link>
        <router-link to="/code" tag="li" class="icon2"></router-link>
        <router-link to="/queue" tag="li" class="icon3">排队</router-link>
        <router-link to="/order" tag="li" class="icon4">到店点菜</router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
import TabSlider from '../components/common/TabSlider'
import ListGraphic from '../components/store/ListGraphic'
import ListComment from '../components/store/ListComment'
export default {
  data() {
    return {
      loading: false,
      ownInfo: null,
      storeInfo: null,
      cardList: null,
      currentCard: 0,
      evalList: null
    }
  },
  components: { TabSlider, ListGraphic, ListComment },
  methods: {
    slideEvent(index) {
      this.currentCard = index
    },
    getData() {
      this.$htttp.all([this.$htttp.get('/api/relation'), this.$htttp.get('/api/store'), this.$htttp.get('/api/cards'), this.$htttp.get('/api/evaluation')])
        .then(this.$htttp.spread((re, st, ca, ev) => {
          this.loading = false
          if (re.status === 200) {
            this.ownInfo = re.data
          }
          if (st.status === 200) {
            this.storeInfo = st.data
          }
          if (ca.status === 200) {
            this.cardList = ca.data
          }
          if (ev.status === 200) {
            this.evalList = ev.data
          }
        }))
    }
  },
  created() {
    this.loading = true
    this.getData()
  }
}
</script>
<style scoped>
.loading {
  font-size: 22px;
  line-height: 2;
  color: #000;
  text-align: center;
}

.store-cont {
  background: url(../assets/bg-store.png) repeat center top;
}

.store-dis {
  padding-top: 1rem;
  text-align: center;
}

.store-dis .image {
  width: 1.6rem;
}

.store-dis .p1 {
  font-size: 17px;
  line-height: 1;
  color: #303d23;
  font-weight: bolder;
  padding-top: .52rem;
}

[data-dpr="2"] .store-dis .p1 {
  font-size: 34px;
}

[data-dpr="3"] .store-dis .p1 {
  font-size: 51px;
}

.store-dis .p2 {
  font-size: 13px;
  line-height: .56rem;
  color: #424242;
  padding-top: .44rem;
}

[data-dpr="2"] .store-dis .p2 {
  font-size: 26px;
}

[data-dpr="3"] .store-dis .p2 {
  font-size: 39px;
}

.store-dis .mark {
  margin-left: .16rem;
  padding: 0 .2rem 0 .6rem;
  line-height: .56rem;
  height: .56rem;
  border-radius: .28rem;
  background-color: #961e00;
  color: #fff;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.store-dis .mark .icon {
  position: absolute;
  width: .56rem;
  height: .56rem;
  top: 0;
  left: 0;
  background-color: #e02200;
  font-weight: bolder;
  border-radius: .28rem;
  text-align: center;
}

.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(222, 217, 227, 0.9)
}

.nav-link {
  line-height: 1;
  width: 9.48rem;
  margin: .25rem auto;
}

.nav-link>li {
  width: 1.4rem;
  height: 1.4rem;
  margin-left: .24rem;
  margin-right: .4rem;
  background-color: #faf9fa;
  padding-top: .84rem;
  color: #424242;
  background-repeat: no-repeat;
  background-position: center .2rem;
  background-size: .8rem .6rem;
  border-radius: .7rem;
  float: left;
  text-align: center;
}

.nav-link>li:first-child {
  margin-right: 1.87rem;
}

.nav-link>li:last-child {
  margin-right: .24rem;
}

.nav-link>li.icon1 {
  background-image: url(../assets/takeaway.png)
}

.nav-link>li.icon2 {
  background: url(../assets/code.png) no-repeat center #dc3112;
  background-size: .8rem .6rem;
}

.nav-link>li.icon3 {
  background-image: url(../assets/queue.png)
}

.nav-link>li.icon4 {
  background-image: url(../assets/shoppingcart.png)
}
</style>

