<template>
  <div class="container">
    <div class="display-month">
      <div class="move-month-button" @click="moveMonthClickEvent('decrease')">&lt;</div>
      <div>{{ selectYear }}년 {{ selectMonth }}월</div>
      <div class="move-month-button" @click="moveMonthClickEvent('increase')">&gt;</div>
    </div>

    <!-- 요일 -->
    <div class="day-of-week">
      <div class="day-area" v-for="day in dayOfWeek" :key="day">
        <div class="day-font">{{ day }}</div>
      </div>
    </div>
    
    <div class="">

    </div>
  </div>
</template>

<script>

export default {
  name: 'calander',
  data() {
    return {
      selectYear: 2021, //현재 년도
      selectMonth: 3, //현재 달
      dayOfWeek: ['월', '화', '수', '목', '금', '토', '일'], // 요일은 고정
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
    }
  }
}
</script>

<style scoped lang="scss">
// 루트
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: red;
  }

  // 상단 - 요일
  .day-of-week {
    display: flex;
    flex-direction: row;
    background: yellow;
    height: 14%;
  }
  .day-of-week .day-area {
    display: flex;
    flex: 1 auto;
    width: 14%;
    height: 100%;
    border: solid 1px;
    justify-content: center;
  }
  .day-of-week .day-area .day-font {
    align-self: center;
  }

  // 상단 - 화살표쪽
  .display-month {
    display: flex;
    justify-content: space-between
  }
  .display-month .move-month-button:hover {
    cursor: pointer;
  }
</style>
