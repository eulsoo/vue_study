<template>
   <v-container fill-height style="max-width:450px">
       <v-layout align-center row wrap>
           <v-flex xs12>
               <v-alert :value="isLoginError" :type="altType" flat>
                   <span if="errMessage">{{ errMessage }}</span>
               </v-alert>
               <v-card>
                    <v-toolbar flat>
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div style="padding:30px;">
                        <v-text-field
                        v-model="email"
                        label="이메일을 입력하세요."
                        placeholder="email"
                        ></v-text-field>

                        <v-text-field
                        v-model="password"
                        label="패스워드를 입력하세요."
                        type="password"
                        placeholder="password"
                        ></v-text-field>

                        <v-btn large block depressed color="primary" v-on:click="login({ email, password })">로그인</v-btn>
                        <!-- <v-btn v-on:click="test">테스트</v-btn>
                        <v-btn v-on:click="postTest">포스트테스트</v-btn> -->
                    </div>
               </v-card>
           </v-flex>
       </v-layout>
   </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios';


export default {
    data: function() {
        return {
            email:null,
            password:null
        }
    },
    computed: {
        ...mapState(['isLoginError', 'altType', 'errMessage'])
    },
    methods: {
        ...mapActions(['login']),
        // test:function() {  
        //     axios.get('https://reqres.in/api')
        //     .then( res => {
        //         // handle success
        //         console.log(res);
        //     })
        //     .catch( res => {
        //         // handle error
        //         console.log(err);
        //     })
        //     .finally( () => {
        //         console.log('test');
        //         // always executed
        //     });
        // },
        // postTest:function() {
        //     axios.post('https://reqres.in/api/register', {
        //         "email": "eve.holt@reqres.in",
        //         "password": "pistol"
        //     }).then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        // }
    }
}
</script>