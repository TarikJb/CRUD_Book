<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-org">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Books</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link " to="/ListBooks"
              >List Books</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AddBook">Add Book</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif !important;
}

.mr-3 {
  margin-right: 1rem;
}

.bg-org {
  background-color: #f4cac2 !important;
}
</style>
