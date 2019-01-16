<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">stock trader</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">stocks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">portfolio</a>
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
        funds: <strong>$10.000,02</strong>
      </span>
    </div>
  </nav>
</template>
