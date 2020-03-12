<template>
  <div>
    <!-- .section -->
    <section class="section">
      <div class="container">
        <div class="column center">
          <p class="is-size-4">
            <i>
              A swedish freelancing company for all webprograming coding
              problems
            </i>
          </p>
        </div>
      </div>
    </section>
    <!-- /.section -->

    <!-- .section -->
    <section class="section">
      <div class="container">
        <div class="columns is-desktop">
          <Info class="column" />
          <Form class="column" />
        </div>
      </div>
    </section>
    <section class="section">
      <Map style="display:flex;" />
    </section>
    <!-- /.section -->
  </div>
</template>

<script>
import Map from "~/components/Map";
import Info from "~/components/Info";
import Form from "~/components/Form";
export default {
  head() {
    return {
      title: "Swecoden - Contact",
      meta: [
        { hid: "description", name: "description", content: "Contact swecoden to get more information about services" }
      ]
    };
  },
  components: { Map, Info, Form }
};
</script>
