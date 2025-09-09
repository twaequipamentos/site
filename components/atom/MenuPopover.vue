<template>
  <nav>
    <ul>
      <li>
        <a href="#" @click.prevent="goToPage('quem-somos')" class="highlight-menu text-uppercase text-sm">{{$t('menu.whoWeAre')}}</a>
      </li>
      <li>
        <a href="#" @click.prevent="goToPage('treinamentos')" class="highlight-menu text-uppercase text-sm">{{$t('menu.trainings')}}</a>
      </li>
      <li>
        <a href="#" @click.prevent="goToPage('projetos')" class="highlight-menu text-uppercase text-sm">{{$t('menu.projects')}}</a>
        <!-- <div class="dropdown text-sm">
          <a href="/projetos#curva-duto-lavador-gases">Curva e Duto Lavador de Gases</a>
          <a href="/projetos#duto-gases">Dutos de Gases</a>
          <a href="#">Economizador</a>
          <a href="#">Guincho Hilo</a>
          <a href="#">Lavador de Gases</a>
        </div> -->
      </li>
      <li>
        <a href="#" @click.prevent="goToPage('manutencao')" class="highlight-menu text-uppercase text-sm">{{$t('menu.maintenance')}}</a>
        <!-- <div class="dropdown text-sm">
          <a href="#">Cozedores</a>
          <a href="#">Cristalizadores</a>
          <a href="#">Lavadores de Gases</a>
          <a href="#">Sementeira</a>
        </div> -->
      </li>
      <li>
        <a href="#" @click.prevent="goToPage('locacao-guindastes')" class="highlight-menu text-uppercase text-sm">{{$t('menu.craneRental')}}</a>
      </li>
      <li>
        <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas sobre Equipamentos Industriais e Serviços')}`" class="highlight-menu text-uppercase text-sm" target="_blank"> {{ $t('menu.contact') }} </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  const router = useRouter()

  const goToPage = (path: any) => {
		router.push({path: path});
	}
</script>

<style lang="scss">
    /* Navbar */
    nav {
      padding: 10px 20px;
    }

    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    nav ul li {
      position: relative;
      margin-right: 20px;
    }

    nav a {
      color: white;
      text-decoration: none;
      padding: 10px 15px;
      display: inline-block;
      position: relative;
    }

    /* underline customizado */
    nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 4px; /* distância do texto */
      width: 100%;
      height: 2px; /* espessura */
      background: red; /* cor do underline */
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.25s ease-out;
      border-radius: 2px;
    }

    nav .highlight-menu:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    /* Dropdown Card */
    nav ul li .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background: black;
      // border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      padding: 10px;
      display: none;
      min-width: 200px;
      z-index: 10;
    }

    nav ul li:hover .dropdown {
      display: flex;
      flex-direction: column;
      animation: fadeIn 0.1s ease-in-out;
    }

    .dropdown a {
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
    }

    .dropdown a:hover {
      color: #dfdfdf;
    }

    /* Animação */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }
</style>