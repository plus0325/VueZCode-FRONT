<template>
  <v-container class="py-16 px-md-16">
    <v-col cols="12" class="px-5 px-md-0 py-10">
      <h1 class="text-h4 text-md-h2">&lt;- Info -&gt;</h1>
      <div class="text-body-1 font-weight-bold">資訊項目</div>
    </v-col>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="500" rounded="xl" variant="text">
          <v-img
            src="https://images.unsplash.com/photo-1622817245531-a07976979cf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1682&q=80"
            height="200px"
            cover
          ></v-img>

          <v-card-title>
            <v-btn block density="default" height="50" color="red" class="text-h4 font-weight-bold my-5">TICKET</v-btn>
          </v-card-title>

          <v-card-subtitle class="text-center pb-5">
            預售票停止販售!
          </v-card-subtitle>
          <v-divider class="mx-10"></v-divider>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
            >
              Explore 展開看更多
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show.ticket ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show.ticket= !show.ticket"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show.ticket">
              <v-divider></v-divider>

              <v-card-text>

                <v-card theme="light">
                  <v-table>
                    <thead>
                      <tr>
                        <th class="text-left">
                          票價種類
                        </th>
                        <th class="text-left">
                          活動票價
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>預售票</td>
                        <td>$1,200</td>
                      </tr>
                      <tr>
                        <td>一般票</td>
                        <td>$1,400</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-card>

                <v-table density="compact" class="my-5">
                  <thead>
                    <tr>
                      <th class="text-left">
                        注意事項
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>● 全區搖滾站席</td>
                    </tr>
                    <tr>
                      <td>● 預售一經完售即不開放現場票</td>
                    </tr>
                    <tr>
                      <td>● 活動為售票十日內，購票者需自行轉讓，無法退換票，請購買者注意</td>
                    </tr>
                    <tr>
                      <td>● 為了防疫登記順暢，本活動採實名制</td>
                    </tr>
                  </tbody>
                </v-table>

              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto" max-width="500" rounded="xl" variant="text">

          <v-img
            src="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            height="200px"
            cover
          ></v-img>

          <v-card-title>
            <v-btn block density="default" height="50" color="green" class="text-h4 font-weight-bold my-5">MAP</v-btn>
          </v-card-title>

          <v-card-subtitle class="text-center pb-5">
            前往ABC三大場地
          </v-card-subtitle>
          <v-divider class="mx-10"></v-divider>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
            >
              Explore 展開看更多
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show.map ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show.map = !show.map"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show.map">
              <v-divider></v-divider>

              <v-card-text>

                <v-card theme="light">
                  <V-img :src="mapImg"></V-img>
                </v-card>

                <v-table density="compact" class="my-5">
                  <thead>
                    <tr>
                      <th class="text-left">
                        前往舞台注意事項
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>● A舞台在最高點</td>
                    </tr>
                    <tr>
                      <td>● B舞台在中間點</td>
                    </tr>
                    <tr>
                      <td>● C舞台在左邊點</td>
                    </tr>
                    <tr>
                      <td>● 垃圾請勿亂丟維持環境</td>
                    </tr>
                  </tbody>
                </v-table>

              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto" max-width="500" rounded="xl" variant="text">

          <v-img
            src="https://images.unsplash.com/photo-1470053118841-6113c089d41f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            height="200px"
            cover
          ></v-img>

          <v-card-title>
            <v-btn block density="default" height="50" color="yellow" class="text-h4 font-weight-bold my-5">ACCESS</v-btn>
          </v-card-title>

          <v-card-subtitle class="text-center pb-5">
            如何移動到VueZCode音樂祭
          </v-card-subtitle>
          <v-divider class="mx-10"></v-divider>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
            >
              Explore 展開看更多
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show.access ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show.access = !show.access"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show.access">
              <v-divider></v-divider>

              <v-card-text>

                <v-card theme="light">
                  <V-img :src="mapImg"></V-img>
                </v-card>

                <v-table density="compact" class="my-5">
                  <thead>
                    <tr>
                      <th class="text-left">
                        前往舞台注意事項
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>● A舞台在最高點</td>
                    </tr>
                    <tr>
                      <td>● B舞台在中間點</td>
                    </tr>
                    <tr>
                      <td>● C舞台在左邊點</td>
                    </tr>
                    <tr>
                      <td>● 垃圾請勿亂丟維持環境</td>
                    </tr>
                  </tbody>
                </v-table>

              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios.js'
import { useUserStore } from '@/stores/user'

// 設一個變數 products 來暫存後端來的資料
const products = reactive([])
const tab = ref(null)
const show = reactive({
  ticket: false,
  map: false,
  access: false
})
const mapImg = ref(new URL('../assets/map.jpg', import.meta.url).href)
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

</style>
