<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">漁獲速報</h4>
            <div class="bg-white rounded-sm px-2 text-black">
              <div>
                <div class="flex justify-start items-center">
                  <span class="w-24"> 速報期間： </span>
                  <span class="w-32">
                    <md-datepicker v-model="selectedDate" />
                  </span>
                  <span class="text-lg px-6">~</span>
                  <span class="w-32">
                    <md-datepicker v-model="selectedDate" />
                  </span>
                </div>
              </div>
            </div>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable } from "@/components";

export default {
  components: {
    SimpleTable,
  },
  data: () => ({
    selectedDate: null,
  }),
};
</script>
