<template>
  <div>
    <h1>All Users({{ count }})</h1>
    <h3>서울 사람 {{ seouls }}({{ percent }}%)</h3>
    <v-list two-line>
      <v-list-tile 
        v-for="(user, index) in allUsers"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import { mapState, mapGetters} from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({ // computed처럼 어떤 처리된 데이터를 사용할 때
      count: 'allUsersCount',
      seouls: 'countOfSeoul',
      percent: 'percentOfSeoul',
      all: 'allUsers'
    }),
    ...mapState(['allUsers']) // 단순한 객체나 배열등의 데이터를 불러서 앉혀 놓을때
    // ...mapGetters(['allUsersCount', 'countOfSeoul', 'percentOfSeoul'])
    // vue의 mapGetters기능을 이용해서 $store.state.allUsersCount형식으로 쓰지 않아도 됨.
  },
  mounted() {
    EventBus.$on('signUp', users => {
      this.$store.state.allUsers.push(users)
    })
  }
}
</script>
