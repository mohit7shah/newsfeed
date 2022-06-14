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
        </b-nav>

        <!-- Right aligned nav items -->
        <b-nav>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search...">
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-form-input>
          </b-nav-form>
        </b-nav>
        <b-nav class="user">
          <b-nav-item href="/login" class="menu1">Login</b-nav-item>
          <b-nav-item href="/signup" class="menu">Sign Up</b-nav-item>
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
  color: #2c3e50;
}

.mr-sm-2 {
  margin-left: 280px;
}

.menu1 {
  margin-left: 300px;
}

.dataname {
  margin-left: 15px;
}

b-nav-item:active {
  color: crimson;
  border-radius: 0.4rem;
}
</style>
