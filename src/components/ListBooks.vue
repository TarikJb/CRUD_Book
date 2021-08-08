<template>
  <div class="container my-5">
    <div class="text-center mb-5">
      <span class="text-secondary text-uppercase">Pricing</span>
      <h1 class="text-capitalize font-weight-bold">
        Our <span style="color: rgb(244 202 194)">Pricing</span>
      </h1>
    </div>

    <p
      style="font-weight: 600;"
      class="col-md-8 mx-auto p-3 mb-4 bg-light text-secondary text-uppercase text-sm"
    >
      Book
    </p>

    <div class="col-md-8 mb-4 mx-auto">
      <div class="d-sm-flex align-items-center justify-content-between">
        <div class="d-sm-flex align-items-center">
          <img
            src="data:image/jpeg;base64,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"
            width="60px"
            class="rounded-circle mr-3"
            alt=""
          />
          <div class="mr-3 mb-3 mb-sm-0">
            <p class="font-weight-bold mb-0">
              <span v-if="!show" @dblclick="show = true"
                >${{ book.name }}
              </span>
            </p>
            <small class="text-secondary"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              iste!</small
            >
          </div>
        </div>
        <h3 class="mb-0 p-0 font-weight-bold">
          <span>${{ book.price }} </span>
        </h3>
      </div>
    </div>

    <p
      style="font-weight: 600;"
      class="col-md-8 mx-auto p-3 mb-4 bg-light text-secondary text-uppercase text-sm"
    >
      Books
    </p>

    <div class="col-md-8 mb-4 mx-auto">
      <div
        class="d-sm-flex align-items-center justify-content-between"
        v-for="item in books"
        :key="item.id"
      >
        <div class="d-sm-flex align-items-center">
          <img
            src="https://cdn.mos.cms.futurecdn.net/XjWDnG7GGv7pZY5pSVhB9d.jpg"
            width="60px"
            class="rounded-circle mr-3"
            alt="img"
          />
          <div class="mr-3 mb-3 mb-sm-0">
            <p class="font-weight-bold mb-0">
              <span v-if="!show" @dblclick="show = true">{{ item.name }} </span>

              <input
                type="text"
                placeholder="Enter Name"
                v-if="show"
                v-model="item.name"
                @keyup.enter="updateBook(item.id, 'name', item.name)"
              />
            </p>
            <small class="text-secondary"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              iste!</small
            >
          </div>
        </div>
        <h3 class="mb-0 p-0 font-weight-bold">
          <span v-if="!show1" @dblclick="show1 = true">${{ item.price }} </span>

          <input
            type="text"
            placeholder="Enter Price"
            v-if="show1"
            v-model="item.price"
            @keyup.enter="updateBook(item.id, 'price', item.price)"
          />
        </h3>
        <router-link
          class="nav-item"
          :to="{ name: 'EditBook', params: { id: item.id } }"
          >Edit</router-link
        >
        <a class="nav-item" @click="deleteBook(item.id)">Delete</a>
        <!--   <div class="fl-right">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ListBooks',
  components: {},
  data() {
    return {
      show: false,
      show1: false,
      book: {},
      books: [],
    }
  },
  created() {
    this.getBook()
    this.getBooks()
  },
  methods: {
    getBook() {
      const url_book = 'https://vuango-books-api.herokuapp.com/books/5'
      axios.get(url_book).then(res => {
        this.book = res.data
      })
    },
    getBooks() {
      const url_listbooks = 'https://vuango-books-api.herokuapp.com/books/'
      axios.get(url_listbooks).then(res => {
        this.books = res.data
      })
    },
    updateBook(id, item, value) {
      const url_book = `https://vuango-books-api.herokuapp.com/books/${id}/?${item}=${value}`
      axios
        .patch(url_book)
        .then(() => {
          alert(`Modification de ${item} avec succes`)
          if (item === 'name') {
            this.show = false
          } else {
            this.show1 = false
          }
        })
        .catch(err => alert(`There are in error in ${err}`))
    },
    deleteBook(id) {
      const url_book = `https://vuango-books-api.herokuapp.com/books/${id}/`
      axios.delete(url_book).then(() => {
        alert('Suppression avec succès')
        this.getBooks()
      })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif !important;
}

.mr-3 {
  margin-right: 1rem;
}

.fl-right {
  float: right;
}

a {
  cursor: pointer;
}
</style>
