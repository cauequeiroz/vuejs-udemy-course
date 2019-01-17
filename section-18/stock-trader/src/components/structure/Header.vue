<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand" tag="a">stock trader</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/stocks" class="nav-link" tag="a">stocks</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portfolio" class="nav-link" tag="a">portfolio</router-link>
        </li>
      </ul>

      <ul class="navbar-nav mr-4">
        <li class="nav-item">
          <a class="nav-link" href="#">end day</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">save</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">load</a>
        </li>
      </ul>

      <span class="navbar-text mr-2 border px-3">
        funds: <strong>${{ $store.state.funds }}</strong>
      </span>
    </div>
  </nav>
</template>
