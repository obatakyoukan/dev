<template>
 <div id="form">
  <BookInfo :book="book"></BookInfo>
  <hr />
  <el-form ref="form" :model="form" :rules="rules" label-width="120px" >
   <el-form-item label="開始日">
    <el-date-picker type="date" v-model="form.read"></el-date-picker>
   </el-form-item>
   <div>
    <div v-html="memomark" />
   </div>
   <el-form-item label="メモ" prop="memo">
    <el-input type="textarea" size="large" v-model="form.memo"></el-input>
   </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="onsubmit">Register</el-button>
    <el-button type="primary" @click="ondelete">Delete</el-button>
   </el-form-item>
  </el-form>
 </div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex'
import BookInfo from '@/components/BookInfo.vue'
import { UPDATE_CURRENT, UPDATE_BOOK, DELETE_BOOK } from '@/store/mutation-types'

import marked from 'marked'

export default {
 name: 'book-form',
 components: {
  BookInfo
 },
 data() {
  return {
   book: {},
   form: {
    read: new Date(),
    memo: ''
   },
   rules: {
    memo: [
     //{ required: true, message: 'Input memo.', trigger: 'blur' }
    ]
   }
  }
 },
 computed: {
  ...mapGetters( [ 'current', 'getBookById' ]),
  memomark: function(){
   return marked(this.form.memo)
  }
 },
 created() {
  if (!this.current) {
   this.$router.push('/')
  }
  this.book = Object.assign({}, this.current)
 },
 mounted() {
  let b = this.getBookById(this.book.id)
  if (b) {
   this.form.read = b.read
   this.form.memo = b.memo
  }
 },
 methods: {
  ...mapActions([UPDATE_BOOK, UPDATE_CURRENT, DELETE_BOOK]),
  onsubmit() {
   //this.$refs['form'].validate((valid) => {
   // if (valid) {
     this[UPDATE_BOOK](
      Object.assign({}, this.book, this.form)
     )
     this[UPDATE_CURRENT](null)
     this.$notify({
      title: 'Reading Recorder',
      message: this.$createElement('p', {style: 'color: #009'},
       'Success!'),
       duration: 2000
     })
     this.form.read = new Date()
     this.form.memo = ''
     this.$router.push('/')
    //}
   //})
  },
  ondelete() {
   //this.$refs['form'].validate((valid) => {
   // if (valid) {
     this[DELETE_BOOK](
      Object.assign({}, this.book, this.form)
     )
     this[UPDATE_CURRENT](null)
     this.$notify({
      title: 'Delete Data',
      message: this.$createElement('p', {style: 'color: #009'},
       'Success!'),
       duration: 2000
     })
     this.form.read = new Date()
     this.form.memo = ''
     this.$router.push('/')
    //}
   //})
  }
 }

}
</script>

<style scoped>
#form {
 margin-top: 15px;
}
</style>
