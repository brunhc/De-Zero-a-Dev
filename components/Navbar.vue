<template>
  <div class="navbar">
    <!-- Logotipo ou título à esquerda -->
    <div class="navbar-left">
      <a href="/">
        <img src="~/assets/images/logo.png" alt="Logo" class="navbar-logo" />
      </a>
    </div>

    <!-- Links de navegação -->
    <div class="navbar-right">
      <a href="#codigos" class="navbar-link">Portfólio de Projetos</a>
      <a href="#cursos" class="navbar-link">Certificações</a>
      <a href="#contato" class="navbar-link">Contato</a>
      <a href="#sobre" class="navbar-link">Sobre Mim</a>
    </div>
  </div>
</template>

<style scoped>
/* Configuração da barra principal */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  background-color: #333;
  color: white;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Divide os lados esquerdo e direito */
  padding: 0 1rem;
  box-sizing: border-box;
}

/* Estilização da área da esquerda (logotipo ou título) */
.navbar-left {
  font-weight: bold;
  font-size: 1.2rem;
  white-space: nowrap; /* Garante que o texto não seja quebrado */
  overflow: hidden; /* Impede estouros de texto */
  text-overflow: ellipsis; /* Adiciona "..." se o texto for muito longo */
}

/* Área dos links à direita */
.navbar-right {
  display: flex;
  flex-wrap: wrap; /* Permite que os links quebrem para a próxima linha */
  gap: 1.5rem; /* Espaçamento entre os links */
  justify-content: flex-end; /* Links alinhados à direita */
  min-width: 300px; /* Garante espaço mínimo para os links */
  overflow: hidden; /* Evita que os links "estourem" */
}

/* Links de navegação */
.navbar-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  transition: color 0.3s ease;
  white-space: nowrap; /* Garante que o texto não quebre */
}

.navbar-link:hover {
  color: #4A90E2; /* Cor de destaque ao passar o mouse */
}

/* Responsividade */
@media (max-width: 768px) {
  .navbar-right {
    justify-content: center; /* Centraliza os links em telas menores */
    gap: 1rem; /* Reduz o espaço entre links */
  }
  .navbar-link {
    font-size: 0.9rem; /* Diminui o tamanho do texto em telas menores */
  }
}

.navbar-left {
  display: flex;
  align-items: center; /* Centraliza verticalmente */
}

.navbar-logo {
  height: var(--navbar-height); /* Ajusta à altura da barra */
  max-height: var(--navbar-height); /* Garante que não ultrapasse */
  object-fit: contain; /* Mantém a proporção */
}
</style>
