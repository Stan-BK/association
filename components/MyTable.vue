<template>
  <div class="table">
    <table class="tb" :class="$store.state.isDarkMode ? 'dark-table' : ''">
      <thead>
        <tr>
          <th v-for="item of prop" :key="item">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of tableData" :key="index">
          <td v-for="(value, key) in item" :key="key">{{ value }}</td>
          <td><slot v-bind="dataMap.get(item)"></slot></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    prop: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      dataMap: new Map()
    }
  },
  computed: {
    tableData() {
      return this.data.map(item => {
        const obj = {}
        this.prop.forEach(key => {
          if (Object.prototype.hasOwnProperty.call(item, key)) {
            obj[key] = item[key]
          } else {
            obj[key] = undefined
          }
        })
        this.dataMap.set(obj, item)
        return obj
      })
    }
  }
}
</script>
<style scoped>
.table {
  padding: 20px;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 2px;
  overflow-y: scroll;
}
.tb {
  width: 100%;
  border-collapse: collapse;
}
.dark-table{
  color: #fff;
}
th{
  padding: 10px 20px;
}
thead tr {
  border-bottom: 1px solid #bbb;
}
tr {
  border-bottom: 1px solid #eee;
}
td {
  width: auto;
  padding: 20px 20px;
  text-align: center;
  vertical-align: baseline;
}
</style>