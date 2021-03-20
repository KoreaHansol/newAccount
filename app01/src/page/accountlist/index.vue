<template>
  <div class="container">
    <div class="display-month">
      <div class="move-month-button" @click="moveMonthClickEvent('decrease')">&lt;</div>
      <div>{{ selectYear }}년 {{ selectMonth }}월</div>
      <div class="move-month-button" @click="moveMonthClickEvent('increase')">&gt;</div>
    </div>
    <div class="acclist-title-row">
      <div class="acclist-title-col"><div class="font">날짜</div></div>
      <div class="acclist-title-col"><div class="font">수입</div></div>
      <div class="acclist-title-col"><div class="font">지출</div></div>
      <div class="acclist-title-col"><div class="font">수정</div></div>
      <div class="acclist-title-col"><div class="font">삭제</div></div>
    </div>
    
    <div class="list-container">
      <div class="acclist-row" v-for="acc, idx in filterBySelectDay" :key="idx">
        <div class="acclist-col"><div class="font">{{ acc.date }}</div></div>
        <div class="acclist-col"><div class="font">{{ acc.income }}</div></div>
        <div class="acclist-col"><div class="font">{{ acc.outcome }}</div></div>
        <div class="acclist-col hover"><div class="font">수정</div></div>
        <div class="acclist-col hover"><div class="font">삭제</div></div>
      </div>

      <div class="no-data" v-show="!filterBySelectDay.length"> 
        데이터가 없습니다
      </div>
    </div>
  </div>
  
</template>

<script>
import Calender from '@/components/calander'
import moment from 'moment'
import _ from 'lodash'
export default {
  name: 'accoutlist',
  components: {
    Calender
  },
  data() {
    return {
      selectYear: moment().year(), //현재 년도 - moment로 바꾸기
      selectMonth: moment().month() + 1, //현재 달
    }
  },
  computed: {
    getaccList() {
      return this.$store.getters.getaccList
    },
    filterBySelectDay() { //select된 달만 리스트 필터링 하기위한 메소드
      const filterBySelectDay = _.filter(this.getaccList, acc => {
        return moment(acc.date).format('YYYY-M') === (this.selectYear + '-' + this.selectMonth).toString()
      })
      
      return filterBySelectDay
    }
  },
  created() {
    if(this.$route.params.date) {
      this.selectYear = moment(this.$route.params.date).year()
      this.selectMonth = moment(this.$route.params.date).month() + 1
    }
  },
  methods: {
    moveMonthClickEvent(mode) { //현재 select 된 년도와 달을 조정하기 위한 메소드
      switch(mode) {
        case 'increase':
          if(this.selectMonth >= 12) {
            this.selectMonth = 1
            this.selectYear++
          } else {
            this.selectMonth++
          }
          break
        case 'decrease':
           if(this.selectMonth <= 1) {
            this.selectMonth = 12
            this.selectYear--
          } else {
            this.selectMonth--
          }
          break
      }
    },
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
 .acclist-title-row {
   display: flex;
   height: 10%;
   background: chocolate;
   text-align: center;
 }
 .acclist-title-row .acclist-title-col {
   width: 20%;
   align-self: center;
 }

 .acclist-row {
   display: flex;
   height: 10%;
   flex: 0 0 auto;
   background: darkgrey;
   text-align: center;
 }
 .acclist-row .acclist-col {
   display: flex;
   height: 100%;
   width: 20%;
   align-items: center;
   justify-content: center;
   border: 1px solid;
 }
  .hover:hover {
   cursor: pointer;
 }

 .list-container {
   display: flex;
   overflow: auto;
   flex-direction: column;
   height: 100%;
 }

 .display-month {
    display: flex;
    justify-content: space-between
  }
  .display-month .move-month-button:hover {
    cursor: pointer;
  }
  .no-data {
    text-align: center;
  }
</style>
