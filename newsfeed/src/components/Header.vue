<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="light" variant="warning">
      <b-navbar-brand href="/" class="dataname"> Newsfeed</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav>
          <b-nav-item href="/" class="menu" active>Home</b-nav-item>
          <b-nav-item href="/about" class="menu">About</b-nav-item>
          <b-nav-item href="/careers" class="menu">Careers</b-nav-item>
          <b-nav-item href="/contact" class="menu">Contact</b-nav-item>
          <b-nav-item href="/login" class="menu">Logout</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script></script>

<style>
#nav {
  text-align: center;
}

#nav b-nav {
  text-decoration: none;
  font-weight: bold;
  color: black;
}

.mr-sm-2 {
  margin-left: 280px;
}

.dataname {
  margin-left: 15px;
}
</style>
