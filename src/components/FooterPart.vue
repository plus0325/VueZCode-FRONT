<template>
  <v-container class="py-16" id="footer">
    <v-divider class="my-3 divider"></v-divider>
    <v-footer color="transparent">
      <v-row class="justify-space-between align-center">
        <v-col cols="4" md="4">
          <v-img :src="logoImg" max-width="100"></v-img>
        </v-col>
        <v-col cols="8" md="4" class="d-flex order-md-2">
          <v-row class="justify-end">
            <v-btn class="mx-1 text-white" variant="text" icon="mdi-facebook"></v-btn>
            <v-btn class="mx-1 text-white" variant="text" icon="mdi-twitter"></v-btn>
            <v-btn class="mx-1 text-white" variant="text" icon="mdi-linkedin"></v-btn>
            <v-btn class="mx-1 text-white" variant="text" icon="mdi-instagram"></v-btn>
          </v-row>
        </v-col>
        <v-col class="text-center  my-5 mt-md-4 order-md-1" style="color:#9E9E9E;" cols="12" md="4">
          &copy;Copyright {{ new Date().getFullYear() }} — <strong>VueZCode</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>

  <!-- <v-container class="py-16" id="footer">
    <v-footer color="transparent">
      <v-row justify="center" no-gutters >
        <v-col cols="2">
          <v-img :src="logoImg"></v-img>
        </v-col>
        <v-col></v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="4">
          <v-row flex-row>
            <v-btn class="mx-2 text-white" variant="text" icon="mdi-facebook"></v-btn>
            <v-btn class="mx-2 text-white" variant="text" icon="mdi-twitter"></v-btn>
            <v-btn class="mx-2 text-white" variant="text" icon="mdi-linkedin"></v-btn>
            <v-btn class="mx-2 text-white" variant="text" icon="mdi-instagram"></v-btn>
          </v-row>
        </v-col>
        <v-divider class="my-3 my-md-8"></v-divider>
        <v-col class="text-center text-white my-5 mt-md-4" cols="12">
          &copy;Copyright s{{ new Date().getFullYear() }} — <strong>VueZCode</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-container> -->
</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios.js'
import { useUserStore } from '@/stores/user'

// 設一個變數 products 來暫存後端來的資料
const products = reactive([])
const tab = ref(null)

const logoImg = ref(new URL('../assets/logo-white.png', import.meta.url).href)
// 加入購物車需用到後端的使用者資料來操作
const user = useUserStore()
const { addCart } = user

// ------------------------------------
// init 頁面打開讀入初始化 (取得商品資料讓前台有東西跑出來)
// ------------------------------------
const init = async () => {
  try {
    // 管理員的商品頁面 取得資料的方式(apiAuth)因為是要看全部商品以及看使用者(要有JWT攔截補上)
    // const { data } = await apiAuth.get('/products/all')
    // ---------------------------------------------------P

    // 所以我們這邊只要取得連結後端的 api 就好
    const { data } = await api.get('/products')
    // 將後端資料放入前端暫存區
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      title: 'ERROR //失敗',
      text: '伺服器錯誤'
    })
  }
}
init()

</script>

<style>
  /* * { outline: solid 1px red; } */

.rounded-card {
  border-radius: 30px;
}
.v-container .divider {
  width: 100%;
}

</style>
