<template>
    <div class="position-relative">
      <div class="position-absolute top-0 end-0">
        <md-menu md-direction="bottom-end">
          <md-button class="md-icon-button mt-1 me-1" md-menu-trigger >
            <md-icon >menu</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item><md-button to="/"  md-icon="search">Home</md-button></md-menu-item>
            <md-menu-item><md-button to="/clients"  md-icon="search">Clients</md-button></md-menu-item>
            <md-menu-item><md-button to="/clients"  md-icon="search">Music profile</md-button></md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </div>
</template>

<script>

export default {
    name: 'Nav'
}
</script>

<style>
  .md-menu {
    margin: 24px;
  }
</style>