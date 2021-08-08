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
      <button @click.prevent="EditData()" class="btn btn-primary">
        Edit Book
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditBook',
  data() {
    return {
      book: [],
    }
  },
  created() {
    const id = this.$route.params.id
    const url_book = `https://vuango-books-api.herokuapp.com/books/${id}/`
    axios.get(url_book).then(res => {
      this.book = res.data
    })
  },
  methods: {
    EditData() {
      const id = this.$route.params.id
      const url_editbook = `https://vuango-books-api.herokuapp.com/books/${id}/`

      axios
        .put(url_editbook, this.book)
        .then(() => {
          alert('Edit Book Succefully')
          this.$router.push('/ListBooks')
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
