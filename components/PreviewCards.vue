<template>
    <div class="card-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :style="getCardStyle(columns)"
      >
        <a :href="card.link" class="card-link">
          <img :src="card.image" :alt="card.title" class="card-image" />
          <h3 class="card-title">{{ card.title }}</h3>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cards: {
        type: Array,
        required: true,
      },
      columns: {
        type: Number,
        required: true,
        default: 2, // Número padrão de colunas
      },
    },
    methods: {
      getCardStyle(columns) {
        return {
          flex: `0 1 calc(${100 / columns}% - 1rem)`, // Ajusta largura com espaçamento
          maxWidth: `calc(${100 / columns}% - 1rem)`,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap; /* Permite quebra de linha */
    gap: 1rem; /* Espaçamento entre os cards */
    justify-content: center; /* Alinhamento central */
    padding: 1rem;
  }
  
  .card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
  }
  
  .card:hover {
    transform: scale(1.05); /* Animação de zoom ao passar o mouse */
  }
  
  .card-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%; /* Garantir que o link ocupa toda a altura do card */
  }
  
  .card-image {
    width: 100%;
    height: auto;
    object-fit: cover; /* Garante que a imagem preencha o espaço do card */
  }
  
  .card-title {
    padding: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
  }
  </style>
  