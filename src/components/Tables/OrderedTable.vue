<template>
  <div>
    <md-table v-model="currentVessel" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="船隻名稱">{{ item.properties.ShipName }}</md-table-cell>
        <md-table-cell md-label="船團名稱"> -- </md-table-cell>
        <md-table-cell md-label="船隻類型">漁船</md-table-cell>
        <md-table-cell md-label="狀態">正常</md-table-cell>
        <md-table-cell md-label="位置">{{ item.properties.Longitude }}, {{ item.properties.Latitude }}</md-table-cell>
        <md-table-cell md-label="最近紀錄時間">{{ item.properties.Record_Time }}</md-table-cell>
        <md-table-cell md-label="警報"> -- </md-table-cell>
        <md-table-cell md-label="詳細" class="cursor-pointer">
          <a @click="$router.push('/user')">詳細</a>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mockData } from '@/mockData/mock-data.js'

export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      vessel: mockData.features,
      users: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout",
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas",
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park",
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester",
        },
      ],
    };
  },
  computed: {
    currentVessel() {
      const data = this.vessel.filter(v => v.properties.ShipName && v.properties.Ship_and_Cargo_Type == 31)
      console.log(data)
      return data
    },
  }
};
</script>
