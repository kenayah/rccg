<template lang=pug>
  section
    <!--v-carousel(cycle height='400' :show-arrows="false" hide-delimiter-background show-arrows-on-hover)
      v-carousel-item(v-for='(slide, i) in slides' :key='i')
        v-sheet(:color='colors[i]' height='100%')
          v-layout(align-center fill-height justify-center)
              .display-3 &nbsp; {{ codes[i] }}-->

    section


    v-parallax(dark src='hero-vert.png')
      v-layout(align-center column justify-center)
        RCCGLogo.mb-5
        h1.display-2.font-weight-thin.mb-4 ÉGLISE CHRÉTIÈNNE RACHETÉS DE DIEU
        //-h3.subheading.mt-2.white--text Jesus Christ Est le Même, Hier, Aujourd'hui, et Eternellement

    section.heb13-8.grey--text.pt-5
      v-layout.my-12(column wrap align-center)
        v-flex.my-4(xs12 sm4)
          .text-center
            h2.headline Jesus Christ Est le Même, Hier, Aujourd'hui, et Eternellement
            span(justify-left).subheading.
              Hebreux 13:8, et plus . . .
        v-flex(xs12)
          v-container(grid-list-xl)
            v-layout(row wrap align-center)
              v-flex(xs12 md4)
                v-card.transparent(flat)
                  v-card-text.text-center
                    v-icon.blue--text.text--lighten-2(x-large) mdi-palette
                  v-card-title.layout.justify-center(primary-title)
                    .headline.text-center NOTRE MISSION
                  v-card-text.
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              v-flex(xs12 md4)
                v-card.transparent(flat)
                  v-card-text.text-center
                    v-icon.blue--text.text--lighten-2(x-large) mdi-flash
                  v-card-title.layout.justify-center(primary-title)
                    .headline L'EVEIL DE L'ÂME
                  v-card-text.
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              v-flex(xs12 md4)
                v-card.transparent(flat)
                  v-card-text.text-center
                    v-icon.blue--text.text--lighten-2(x-large) mdi-wrench
                  v-card-title.layout.justify-center(primary-title)
                    .headline.text-center TÉMOIGNAGES
                  v-card-text.
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.

</template>

<script>
import RCCGLogo from '~/components/RCCGLogo.vue'

export default {
  components: {
    RCCGLogo
  },
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      codes: [
        'Jesus est Seigneur!!!',
        'Jesus est le même hier, aujord\'hui et éternellement',
        'DIEU est Amour',
        'Nul ne vient au Père sans passer par moi',
        'Jesus is the same yesterday, today and forever!!!'
      ],

    }
  },
}

</script>

<style>
  h1, h2, h3 {
    text-shadow: 1px 1px #000 /*a497b1*/;
  }
  h3 {
    letter-spacing: 0.1em;
  }
  .heb13-8 {
    /*background-color:#A497B1;*/
  }
  .laHeadline {
    color: #028b2c;
  }
</style>
