<template>
  <div>
    <!-- .section -->
    <section class="section">
      <div class="container">
        <div class="column center">
          <p class="is-size-4">
            <i>A swedish freelancing company for all webprograming coding problems</i>
          </p>
        </div>
      </div>
    </section>
    <!-- /.section -->

    <!-- .section -->
    <section class="section has-background-light">
      <div class="container">
        <div class="columns">
          <div class="column">
            <article class="media notification is-info height-all">
              <figure class="media-left">
                <span class="icon is-medium">
                  <i class="fab fa-2x fa-css3-alt"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">HTML & CSS</h1>
                  <p class="is-size-5">
                    Giving you the leg up on your competition and help customize
                    your website to your needs and wants.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column">
            <article class="media notification is-primary height-all">
              <figure class="media-left">
                <span class="icon is-medium">
                  <i class="fab fa-2x fa-js-square"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">JS</h1>
                  <p class="is-size-5">
                    Helps you with new solutions or helping you with preexisting
                    code that needs to get updated and modernized.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column">
            <article class="media notification is-warning height-all">
              <figure class="media-left">
                <span class="icon is-medium">
                  <i class="fas fa-2x fa-shield-alt"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">Websecurity</h1>
                  <p class="is-size-5">
                    Giving you help with how you can further protect your site
                    from malicious attacks and how to handle them.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- /.section -->

    <!-- .section -->
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <article class="media notification has-background-white">
              <figure class="media-left">
                <span class="icon">
                  <i class="fas fa-lg fa-paint-brush has-text-warning"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">Design</h1>
                  <p class="subtitle is-size-5">
                    Helping you so your design becomes how
                    <strong>you</strong>
                    want it to be.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column is-one-third">
            <article class="media notification has-background-white">
              <figure class="media-left">
                <span class="icon has-text-info">
                  <i class="fab fa-lg fa-wpforms"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">Control</h1>
                  <p class="subtitle is-size-5">
                    Giving you the help and clarity to make it so you can have
                    <strong>full control</strong>.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column is-one-third">
            <article class="media notification has-background-white">
              <figure class="media-left">
                <span class="icon has-text-danger">
                  <i class="fas fa-lg fa-cubes"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">Components</h1>
                  <p class="subtitle is-size-5">
                    Helping you select what components and plugins
                    <strong>works best</strong> for your needs.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column is-one-third">
            <article class="media notification has-background-white">
              <figure class="media-left">
                <span class="icon has-text-grey">
                  <i class="fas fa-lg fa-cogs"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">Modifying</h1>
                  <p class="subtitle is-size-5">
                    Getting old things
                    <strong>up to date</strong> without the hassle of having to
                    renew everything.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column is-one-third">
            <article class="media notification has-background-white">
              <figure class="media-left">
                <span class="icon has-text-primary">
                  <i class="fas fa-lg fa-warehouse"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">Layout</h1>
                  <p class="subtitle is-size-5">
                    Design the
                    <strong>structure</strong> of your webpage according to your
                    needs.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column is-one-third">
            <article class="media notification has-background-white">
              <figure class="media-left">
                <span class="icon has-text-danger">
                  <i class="fas fa-lg fa-eye"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">Overview</h1>
                  <p class="subtitle is-size-5">
                    Making it easy for you to oversee the process without
                    hazzle.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- /.section -->
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Swecoden",
      meta: [
        { hid: "description", name: "description", content: "A swedish freelancing company for all webprograming coding problems" }
      ]
    };
  },
  name: 'HomePage'
}
</script>

<style>
.height-all {
  height: 100%;
}
.title:not(.is-spaced) + .subtitle {
  margin-top: -1rem;
}

.notification {
  padding: 1rem 1rem 1rem 1rem;
}
</style>
