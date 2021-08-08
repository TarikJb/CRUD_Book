<template>
  <div class="container mt-5 mb-3 w-50">
    <div class="input-group mb-3">
      <span class="input-group-text" id="name">Name</span>
      <input
        type="text"
        v-model="book.name"
        class="form-control"
        id="name"
        placeholder="Enter Name"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
      <span class="input-group-text">@</span>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">Price</span>
      <input
        type="number"
        v-model="book.price"
        class="form-control"
        id="price"
        placeholder="Enter Price"
        aria-label="Amount (to the nearest dollar)"
      />
      <span class="input-group-text">$</span>
    </div>

    <div class="form-group btn-form">
      <button @click.prevent="SendData()" class="btn btn-primary">
        Add Book
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddBook',
  data() {
    return {
      book: {
        name: '',
        price: 0,
      },
    }
  },
  methods: {
    SendData() {
      const url_addbook = 'https://vuango-books-api.herokuapp.com/books/'
      axios
        .post(url_addbook, this.book)
        .then(() => {
          alert('Add Book Succefully')
          this.book = {
            name: '',
            price: 0,
          }
          this.$router.push({ name: 'ListBooks' })
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
.btn-form {
  text-align: center;
}

.form-control:focus {
  box-shadow: none;
}

.btn-primary {
  color: #fff;
  background-color: #f4cac2;
  border-color: #f4cac2;
}

.btn-primary:hover {
  color: #fff;
  background-color: #f3afa1 !important;
  border-color: #f4cac2 !important;
}
</style>
