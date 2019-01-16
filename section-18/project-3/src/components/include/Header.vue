<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Stock Trader</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Stocks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
            Storage
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Save data</a>
            <a class="dropdown-item" href="#">Load data</a>
          </div>
        </li>
      </ul>

      <span class="navbar-text">
        Founds: <strong>$10.000,02</strong>
      </span>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>
