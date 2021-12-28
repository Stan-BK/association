<template>
  <div>
    <Announcement :info="{
        follow: true
      }">
      <template #title>
        ...
      </template>
      <template #info>
        用户
      </template>
    </Announcement>
  </div>
</template>
<script>
export default {
  name: 'Subarea',
  layout: 'base',
  
}
</script>