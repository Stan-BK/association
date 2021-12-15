<template>
  <div>
    <Article>
    </Article>
    <Article>
      <h1>This is content too</h1>
      <template v-slot:comment>
        <p>This is Comment</p>
      </template>
    </Article>
  </div>
</template>
<script>
export default {
  layout: 'base',
}
</script>