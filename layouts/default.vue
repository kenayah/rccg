<template lang=pug>
v-app
  v-container
    v-toolbar.leMenu( :dense='true' :flat='true')
      v-toolbar-title.teal--text {{ titre }}
      v-spacer
      v-toolbar-items.teal--text
        v-btn.teal--text(text :flat='true') A PROPOS
        v-btn.teal--text(text :flat='true') EVENEMENTS
        v-btn.teal--text(text :flat='true') SERMONS
        v-btn.teal--text(text :flat='true') BLOG
        v-btn.teal--text(text :flat='true') CONTACT
  v-content
      nuxt .


  v-footer( :fixed='fixed' app)
    span © 2019
</template>

<script>
  export default {
    data() {
      return {
        titre: 'R C C G',
        publicKey: 'BIorPE4JQ7pvW3A_00_4cxwDDjDwWnQJ29Jhh5WMV3KJzxcMXiWC10iEZiDvmsPMPdV7sN09Uey0oCLP8kVtaQw'
      }
    }
  }
</script>

<style>
  v-btn {
    text-decoration-color: teal
  }
</style>
