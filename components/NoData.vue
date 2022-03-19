<template>
  <div class="no-data">
    <span><slot>没有内容</slot></span>
  </div>
</template>
<style>
.no-data {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(61, 183, 240, 0.363);
  text-shadow: 1px 1px 2px rgb(61, 184, 240);
  font-size: 1.5em;
  user-select: none;
}
</style>