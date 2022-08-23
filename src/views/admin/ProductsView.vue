<template>
<div id="admin-products">
  <v-row>
    <v-col cols="12">
      <h1 class="text-center">商品管理</h1>
    </v-col>
    <v-divider></v-divider>
    <v-col cols="12">
      <v-btn @click="openDialog('', -1)">新增商品</v-btn>
    </v-col>
    <v-col cols="12">
      <v-table>
        <thead>
          <tr>
            <th>商品編號</th>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>管理</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, idx) in products" :key="product._id">
            <td> {{ product._id }}</td>
            <td>
              <v-img :src="product.image" class="my-2"></v-img>
            </td>
            <td> {{ product.name }}</td>
            <td>
              <v-btn @click="openDialog(order._id, idx)" variant="outlined" plain size="x-small" rounded="lg">編輯</v-btn>
            </td>
          </tr>
          <tr v-if=" products.length === 0 " >
            <td colspan="3" class="text-center">沒有商品</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>

  <!-- 點新增商品會跳出對話框 -->
  <v-dialog v-model="form.dialog" persistent>
    <v-card>
      <v-form v-model="form.valid" @submit.prevent="submitForm" >
        <v-card-title>
          <!-- 當我商品表單沒東西的話標題會顯示新增商品。有東西就是編輯商品 -->
          <div class="text-h5"> {{ form._id.length > 0 ?'編輯商品': '新增商品' }}</div>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <!-- <v-col cols="12">
                <v-text-field label="商品編號" :value="form._id"></v-text-field>
              </v-col> -->
              <v-col cols="12">
                <v-text-field label="商品名稱" v-model="form.name" :rules="[rules.required]" type="text"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="價格" v-model="form.price" :rules="[rules.required, rules.price]" type="number" min="0"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select label="分類" v-model="form.category" :items="categorise" :rules="[rules.required]"></v-select>
              </v-col>
              <v-col cols="12">
                <v-file-input label="商品圖片" v-model="form.image" show-size accept="image/*"  :rules="[rules.size]"></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-textarea label="商品介紹" v-model="form.description"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-checkbox label="是否上架" v-model="form.sell"></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-container class="d-flex">
            <v-spacer/>
            <v-btn @click="form.dialog = false" color="error" variant="tonal" :disadled="form.submitting">取消</v-btn>
            <v-btn type="submit" variant="tonal" :loading="form.submitting">確認送出</v-btn>
          </v-container>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
// 引入攔截器 補上使用者的token，帶入到 headers 當中
import { apiAuth } from '@/plugins/axios'

// ------------------------------------
// 控制彈跳對話框(預設是關閉)
// ------------------------------------
// const dialog = ref(false)

// ------------------------------------
// 請求取得 await apiAuth.get('/products/all')取得資料的暫存區  (init)
// ------------------------------------
const products = reactive([])

// 前台會需要的資料(預設狀態) ===================
// 內容可參考後端的 models/products.js 資料庫欄位內容
const form = reactive({
  _id: '',
  name: '',
  price: '',
  description: '',
  // v-file-input API model-value:[array]
  // https://next.vuetifyjs.com/en/api/v-file-input/
  image: [],
  sell: false,
  category: '',
  idx: -1,
  // 控制彈跳對話框(預設是關閉)
  dialog: false,
  // 表單送出前的驗證(判斷表單有沒有驗證成功)
  valid: false,
  // 表單提交的時候（是否有讀取轉動的畫面）
  submitting: false
})
const categorise = reactive(['衣服', '其他'])

// ------------------------------------
// 驗證規範區 rules
// ------------------------------------
// 另外個方法以規矩先訂好來套
// views/front/RegisterView.vue 驗證表單規有另外的寫法
const rules = reactive({
  required (v) {
    return !!v || '必填'
  },
  price (v) {
    return v > -1 || '必須大於等於０'
  },
  size (v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024) || '檔案格式不符'
  }
})

// ------------------------------------
// openDialog (點選後打開表單後的處理 新增/編輯)
// ------------------------------------
const openDialog = (_id, idx) => {
  // _id來判斷
  form._id = _id

  if (idx > -1) {
    // 判斷 idx > -1(代表有東西)（打開編輯的時候帶入原本的新增內容)
    form.name = products[idx].name
    form.price = products[idx].price
    form.category = products[idx].category
    form.sell = products[idx].sell
    form.description = products[idx].description
  } else {
    // 沒有東西的話。資料就是清空（還原預設值）
    form.name = ''
    form.price = ''
    form.category = ''
    form.sell = false
    form.description = ''
  }

  form.image = []
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

// ------------------------------------
// submitForm (送出修改內容表單)
// ------------------------------------
const submitForm = async () => {
  if (!form.valid) { return }
  // 表單按扭轉圈圈
  form.submitting = true
  // 送出後 前端產生 formData 資料內容
  const formData = new FormData()
  // 一個一個寫
  // formData.append('name, form.name)
  // formData.append(, form.name)
  // 迴圈塞
  for (const key in form) {
    // https://www.jstips.co/zh_tw/javascript/even-simpler-way-of-using-indexof-as-a-contains-clause/
    // ['_id', 'idx', 'dialog', 'valid', 'submitting']這些都不要塞進去formData
    if (['_id', 'idx', 'valid', 'submitting'].includes(key)) {
      // 不加進去（continue：跳過一次，然後繼續下一次迴圈）
      continue
    } else if (key === 'image') {
      // 如果是圖片。只要塞進去第一個就好
      formData.append(key, form[key][0])
    } else {
      formData.append(key, form[key])
    }
  }

  try {
    // form._id 來判斷有沒有東西來選擇新增或編輯
    if (form._id.length === 0) {
      // [ 新增商品 ]
      // 後端資料請求來源為 routes/userss.js
      // router.patch('/:id', auth.jwt, admin, editAllUser)
      // 後端資料來源routes/products.js
      // router.post('/', content('multipart/form-data'), auth.jwt, admin, upload, createProduct)
      const { data } = await apiAuth.post('/products', formData)
      // 把新增回傳的結果push上去
      products.push(data.result)
      Swal.fire({
        title: 'success //成功',
        text: '新增成功'
      })
    } else {
      // [ 編輯商品 ]
      // 後端資料來源routes/products.js
      // router.patch('/:id', content('multipart/form-data'), auth.jwt, admin, upload, editProduct)
      const { data } = await apiAuth.patch('/products/' + form._id, formData)

      products[form.idx] = data.result
      Swal.fire({
        title: 'success //成功',
        text: '編輯成功'
      })
    }
    //  失敗表單對話框關閉
    // form.dialog = false
    form.dialog = false
  } catch (error) {
    Swal.fire({
      title: 'ERROR //失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  // 完成後表單按鈕停止轉圈
  form.submitting = false
}

// ------------------------------------
// init 頁面打開讀入初始化
// ------------------------------------
const init = async () => {
  try {
    // router.get('/all', auth.jwt, admin, getAllProducts)
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: 'ERROR //失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()

</script>

<!--

  商品不做刪除。只做下架(怕訂單會有問題)

  v-dialog (vuetify 對話框)
  (vuetify 對話框) persistent 代表彈出來的框要點確認或取消按鈕才關閉。按旁邊空白或其他地方是沒反應

  v-text-field (表單框)

  v-spacer (一種 placeholder，佔位用的)

  accept="image/*" (原生JS指定的類型檔案)

  text-h5 (vuetify 設定文字尺寸)
  https://vuetifyjs.com/zh-Hans/styles/text-and-typography/#section-63927248

-->
