<template>
  <div id="app" :style="backgroundStyle" @mousemove="updateMousePosition">
    <!-- Barra Superior -->
    <Navbar />

    <!-- Conteúdo Principal -->
    <div class="principal">
      <!-- Coluna Esquerda -->
      <div class="left-column">
        <h1>Um desenvolvedor em desenvolvimento</h1>
        <PreviewCards :cards="cards" :columns="3" />
      </div>

      <!-- Coluna Direita -->
      <div class="right-column">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import PreviewCards from "~/components/PreviewCards.vue";

export default {
  components: {
    Navbar,
    PreviewCards,
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      cards: [
        {
          title: "Página 1",
          link: "/pagina-1",
          image: "https://via.placeholder.com/300x200?text=Preview+1",
        },
        {
          title: "Página 2",
          link: "/pagina-2",
          image: "https://via.placeholder.com/300x200?text=Preview+2",
        },
        {
          title: "Página 3",
          link: "/pagina-3",
          image: "https://via.placeholder.com/300x200?text=Preview+3",
        },
        {
          title: "Página 4",
          link: "/pagina-4",
          image: "https://via.placeholder.com/300x200?text=Preview+4",
        },
        {
          title: "Página 5",
          link: "/pagina-5",
          image: "https://via.placeholder.com/300x200?text=Preview+5",
        },
      ],
    };
  },
  computed: {
    backgroundStyle() {
      return {
        background: `radial-gradient(circle at ${this.mouseX}px ${this.mouseY}px, rgba(103, 83, 151, 0.2), #675397)`,
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
      };
    },
  },
  methods: {
    updateMousePosition(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
  },
};
</script>

<style>
:root {
  --navbar-height: 3rem;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: "Caveat", sans-serif;
}

/* Configuração geral */
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

/* Layout principal */
.principal {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-top: var(--navbar-height);
  overflow-y: auto;
}

.left-column,
.right-column {
  flex: 1;
  padding: 1rem;
}

.left-column {
  background-color: #2B303B; /* Azul-acinzentado escuro */
  color: #FFFFFF; /* Texto branco */
}

.right-column {
  background-color: #F4F6F9; /* Cinza claro */
  color: #333; /* Texto escuro */
}
</style>
