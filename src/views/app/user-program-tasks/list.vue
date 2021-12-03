<template>
  <div class="main-content">
    <breadcumb :page="'User Program Task'" :folder="'User Program Tasks'" />
    <!-- User & Program Details Card -->
    <b-row>
      <b-col md="6">
        <b-card class="mb-4">
          <div class="content">
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">User Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.user_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">First Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.first_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Email</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.email }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Phone</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.phone }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card class="mb-4">
          <div class="content">
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.program_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Description</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.program_description }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Instructor</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.instructor }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Hours</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.hours }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!-- /User & Program Details card -->
    <b-card>
      <vue-good-table
        :columns="columns"
        :line-numbers="true"
        :search-options="{
          enabled: true,
          placeholder: 'Search this table',
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records',
        }"
        styleClass="tableOne vgt-table"
        :rows="user_program_tasks"
      >
        <div slot="table-actions" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            :to="
              '/app/user-program/' +
                user_program.id +
                '/user-program-tasks/create'
            "
            ><i class="i-Add text-white mr-2"> </i>Add User Program Task
          </b-button>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a
              :href="
                '/app/user-program/' +
                  user_program.id +
                  '/user-program-tasks/' +
                  props.row.id
              "
            >
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
          </span>
          <span v-if="props.column.field == 'ship' && props.row.ship">
            {{ props.row.ship.description }}
          </span>
          <span v-if="props.column.field == 'program_task'">
            {{ props.row.program_task.task }}
          </span>
          <span v-if="props.column.field == 'marks_obtained'">
            {{ props.row.marks_obtained }}
          </span>
          <span v-if="props.column.field == 'is_completed'">
            {{ props.row.is_completed == 0 ? "NO" : "YES" }}
          </span>
          <span v-if="props.column.field == 'completion_date'">
            {{ props.row.completion_date }}
          </span>
          <span v-if="props.column.field == 'imagepath1'">
            <a :href="mediaUrl + props.row.imagepath1" target="_blank">
              {{ props.row.imagepath1 }}
            </a>
          </span>
          <span v-if="props.column.field == 'imagepath2'">
            <a :href="mediaUrl + props.row.imagepath2" target="_blank">
              {{ props.row.imagepath2 }}
            </a>
          </span>
          <span v-if="props.column.field == 'imagepath3'">
            <a :href="mediaUrl + props.row.imagepath3" target="_blank">
              {{ props.row.imagepath3 }}
            </a>
          </span>
          <span v-if="props.column.field == 'imagepath4'">
            <a :href="mediaUrl + props.row.imagepath4" target="_blank">
              {{ props.row.imagepath4 }}
            </a>
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "User Program Tasks",
  },
  data() {
    return {
      columns: [
        {
          label: "Ship",
          field: "ship",
        },
        {
          label: "Program Tasks",
          field: "program_task",
        },
        {
          label: "Marks Obtained",
          field: "marks_obtained",
        },
        {
          label: "is Completed",
          field: "is_completed",
        },
        {
          label: "Completion Date",
          field: "completion_date",
        },
        {
          label: "ImagePath 1",
          field: "imagepath1",
        },
        {
          label: "ImagePath 2",
          field: "imagepath2",
        },
        {
          label: "ImagePath 3",
          field: "imagepath3",
        },
        {
          label: "ImagePath 4",
          field: "imagepath4",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      user: {},
      program: {},
      user_program: {},
      user_program_tasks: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData(page = 1) {
      this.isLoading = true;
      // User Program Task log
      let user_program_tasks = await axios.get(
        `/user_programs/${this.$route.params.user_program_id}/user_program_tasks`
      );
      this.user_program_tasks = user_program_tasks.data.data;

      //UserProgram Data
      let user_program = await axios.get(
        `/user_programs/${this.$route.params.user_program_id}`
      );
      this.user_program = user_program.data.data;
      this.user = this.user_program.user;
      this.program = this.user_program.program;

      this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
