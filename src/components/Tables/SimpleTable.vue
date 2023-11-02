<template>
  <div>
    <md-table v-model="mockData" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell><md-icon>edit</md-icon></md-table-cell>
        <md-table-cell md-label="年度">{{ item.year }}</md-table-cell>
        <md-table-cell md-label="黑鮪">{{ item.bluefin }}</md-table-cell>
        <md-table-cell md-label="黃鰭鮪">{{ item.yellowfin }}</md-table-cell>
        <md-table-cell md-label="大目鮪">{{ item.bigeye }}</md-table-cell>
        <md-table-cell md-label="長鰭鮪">{{ item.albacore }}</md-table-cell>
        <md-table-cell md-label="北劍">{{ item.northswordtail }}</md-table-cell>
        <md-table-cell md-label="南劍">{{ item.southswordtail }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mockData } from "@/mockData";

export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout",
        },
        {
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas",
        },
        {
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park",
        },
        {
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester",
        },
        {
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
        },
        {
          name: "Mason Porter",
          salary: "$78,615",
          country: "Chile",
          city: "Gloucester",
        },
      ],
      mockData,
    };
  },
};
</script>
