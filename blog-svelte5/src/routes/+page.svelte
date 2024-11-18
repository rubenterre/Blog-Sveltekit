<script>
  import { articles } from '$lib/articles.js'; 
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>


<Header />

  <section class="hero is-light is-medium">
    <div class="hero-body has-text-centered">
      <p class="title">BLOG DE NOVEDADES</p>
      <p class="subtitle">Novedades y notas de prensa</p>
    </div>
    <div class="container">
      <div class="columns is-multiline mb-6">
        {#each articles as article}
        <div class="column is-one-third">
          <div class="cardblog">
              <div class="cardblog__image">
                <img src={article.image} alt={article.title} width="100%">
              </div>
              <div class="cardblog__details p-5">
                <h4 class="cardblob__h4 title is-5">
                  {article.title}
                </h4>
                <p class="cardblog__p">{article.description}</p>
              </div>
              <div class="cardblog__action p-5">          
                <button class="button is-black">
                  <a class="has-text-white" href="/article/{article.slug}">Leer más</a>
                </button>

              </div>
          </div>
        </div>
        {/each}
      </div>
    </div>
    
  </section>


<Footer />

<style>

.cardblog{
box-shadow: 9px 10px 48px -13px rgba(0,0,0,0.75);
border-radius: 10px;
}

.cardblog__image{
  object-fit: cover;
}

.cardblog__image img{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  
}

</style>