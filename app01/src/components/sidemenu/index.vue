<template>
    <div class="side-menu">
        <router-link :to="route.path" class="side-menu home" v-for="route in routes" :key="route"><div class="font">{{ route.title }}</div></router-link>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: 'SideMenu',
    data() {
        return {
            routes: [], //route.index 에서 모든 라우팅을 가져올 변수
        }
    },
    created() {
        this.routes = router.options.routes
    }
}
</script>

<style scoped>
    .side-menu {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .side-menu .home {
        height: 10%;
        background: rgb(175, 167, 118) ;
        justify-content: center;
    }
    .side-menu .insert {
        height: 10%;
        background: rgb(175, 167, 118) ;
        justify-content: center;
    }
    .side-menu .list {
        height: 10%;
        background: rgb(175, 167, 118) ;
        justify-content: center;
    }
    .font {

    }
    .router-link-exact-active {
        background: rgb(74, 81, 140) !important;
    }
    a:link { 
        color: red; text-decoration: none;
    }
    a:visited { 
        color: black; text-decoration: none;
    }
</style>
