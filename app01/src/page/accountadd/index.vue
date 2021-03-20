<template>
  <div class="container">
    <div class='cal-area'><Calender @pickDay="setDayFromChild"/></div>

    <div class="area">
        <div class="font">날짜</div>
        <div class="input-area"><input class="inputbox" placeholder="날짜를 선택하세요" v-model="insertDate" readonly/></div>
    </div>
    <div class="area">
        <div class="font">수입</div>
        <div class="input-area"><input class="inputbox" type="number" placeholder="숫자를 입력하세요" v-model="insertIncome"/></div>
    </div>
    <div class="area">
        <div class="font">지출</div>
        <div class="input-area"><input class="inputbox" type="number" placeholder="숫자를 입력하세요" v-model="insertOutcome"/></div>
    </div>
    
    <div class="button-container">
        <div class="button-area">
            <div class="button-font">등록</div>
        </div>
        <div class="button-area">
            <div class="button-font">취소</div>
        </div>
    </div>
  </div>
</template>

<script>
import Calender from '@/components/calander'
export default {
  name: 'accountadd',
  components: {
    Calender
  },
  computed: {
    
  },
  data() {
    return {
      insertDate: '',
      insertIncome: null,
      insertOutcome: null,
    }
  },
  methods: {
    setDayFromChild(day) {
        this.insertDate = day
    }
  }
}
</script>

<style scoped>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .container .cal-area {
        height: 40%;
    }
    .container .area {
        display: flex;
        flex-direction: row;
        height: 10%;
        background: blueviolet;
        border: 1px solid;
    }
    .font {
        text-align: center;
        width: 10%;
        align-self: center;
    }
    .input-area {
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        width: 80%;
        height: 100%;
    }
    .inputbox {
        font-size: 100%;
        text-align: center;
        height: 50%;
        width: 100%;
    }


    .button-container {
        display: flex;
        flex-direction: row-reverse;
        height: 40%;
    }
    .button-container .button-area {
        display: flex;
        height: 20%;
        width: 10%;
        border: 1px solid;
        background: darkolivegreen;
        align-items: center;
        justify-content: center;
    }
    .button-container .button-area:hover {
        cursor: pointer;
        background: tomato;
    }
    .button-font {
        color: white;
    }
</style>
