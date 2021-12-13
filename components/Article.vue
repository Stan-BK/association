<template>
  <div class="article">
    <slot></slot>
    <div class="article-utils">
      <i class="fa fa-thumbs-up" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
    </div>
  </div>
</template>
<style scoped>
.article {
  width: 100%;
  background-color: #fff;
  padding: 30px;
  box-sizing: border-box;
}
.article-utils {
  width: 100%;
}
</style>