<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	export let data;
  const tagsArray = Object.values(data.article.tags);
</script>

<Header></Header>

<article class="article has-background-light  pb-6">
	<section class="hero is-light has-text-centered">
		<div class="hero-body">
			<p class="article__date pb-4">Publicado el {data.article.date}</p>
			<p class="title pb-4">{data.article.title}</p>
			<p class="subtitle">{data.article.author}</p>
			<div class="article__pills is-flex is-justify-content-center is-2">
       
				{#each tagsArray as tag}
					<span class="tag has-background-grey-lighter has-text-black is-medium">{tag}</span>
				{/each}     
			</div>
		</div>
	</section>
	<section class="article__details has-background-light">
		<div class="container">
			<div class="columns">
				<div class="column">
					<div class="article__img is-flex is-justify-content-center">
						<img src={data.article.imagearticle} alt={data.article.title} width="80%" />
					</div>
          <div class="article__texts mt-5">
            <div class="columns">
              <div class="column">

              </div>
              <div class="column is-three-quarters">
                <h4 class="article__h4 title is-3 has-text-black p-3">
                  {data.article.subtitle}
                </h4>
                <p class="article__p is-size-4 has-text-grey p-3">
                  {data.article.text}
                </p>
              </div>
              <div class="column">
                
              </div>
            </div>
           
          </div>
				</div>
			</div>
		</div>
	</section>
</article>

<Footer></Footer>

<style>
  .article__pills{
    gap: 10px;
  }

  .article__socials{
    gap: 20px;
  }
</style>