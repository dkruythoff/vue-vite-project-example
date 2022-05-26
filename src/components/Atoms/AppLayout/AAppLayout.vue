<template>
  <div class="layout">
    <header class="header">
      <slot name="header" />
    </header>
    <nav class="nav">
      <slot name="nav" />
    </nav>
    <main class="main">
      <slot name="main" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: minmax(auto, 300px) 1fr;
  grid-template-rows: auto auto 1fr;
  grid-auto-flow: row;
  grid-template-areas:
    "app-header app-header"
    "nav-head main-head"
    "nav main";
  height: 100vh;
}

.header {
  grid-area: app-header;
}
.nav {
  grid-area: nav;
}
.main {
  grid-area: main;
}

.main,
.nav {
  overflow-y: auto;
}
</style>