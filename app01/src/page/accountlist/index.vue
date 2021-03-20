<template>
  <div class="container">
    <div class="acclist-title-row">
      <div class="acclist-title-col"><div class="font">날짜</div></div>
      <div class="acclist-title-col"><div class="font">수입</div></div>
      <div class="acclist-title-col"><div class="font">지출</div></div>
      <div class="acclist-title-col"><div class="font">수정</div></div>
      <div class="acclist-title-col"><div class="font">삭제</div></div>
    </div>
    
    <div class="list-container">
      <div class="acclist-row" v-for="acc, idx in dummy" :key="idx">
        <div class="acclist-col"><div class="font">{{ acc.date }}</div></div>
        <div class="acclist-col"><div class="font">{{ acc.income }}</div></div>
        <div class="acclist-col"><div class="font">{{ acc.outcome }}</div></div>
        <div class="acclist-col hover"><div class="font">수정</div></div>
        <div class="acclist-col hover"><div class="font">삭제</div></div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Calender from '@/components/calander'
export default {
  name: 'accoutlist',
  components: {
    Calender
  },
  data() {
    return {
      dummy: [
        { date: '2020-10-15', income: 50000, outcome: 40000 },
        { date: '2020-11-15', income: 50000, outcome: 40000 },
        { date: '2020-12-15', income: 50000, outcome: 40000 },
        { date: '2020-1-15', income: 50000, outcome: 40000 },
        { date: '2020-2-15', income: 50000, outcome: 40000 },
        { date: '2020-3-15', income: 50000, outcome: 40000 },
        { date: '2020-10-15', income: 50000, outcome: 40000 },
        { date: '2020-11-15', income: 50000, outcome: 40000 },
        { date: '2020-12-15', income: 50000, outcome: 40000 },
        { date: '2020-1-15', income: 50000, outcome: 40000 },
        { date: '2020-2-15', income: 50000, outcome: 40000 },
        { date: '2020-3-15', income: 50000, outcome: 40000 },
        { date: '2020-10-15', income: 50000, outcome: 40000 },
        { date: '2020-11-15', income: 50000, outcome: 40000 },
        { date: '2020-12-15', income: 50000, outcome: 40000 },
        { date: '2020-1-15', income: 50000, outcome: 40000 },
        { date: '2020-2-15', income: 50000, outcome: 40000 },
        { date: '2020-3-15', income: 50000, outcome: 40000 }
      ]
    }
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
   flex: 1 0 auto;
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
</style>
