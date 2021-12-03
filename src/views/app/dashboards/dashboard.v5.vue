<template>
  <div class="main-content">
    <breadcumb :page="'Dashboard'" />

    <b-row>
      <b-col md="12" class="mb-30">
        <b-card class="h-100">
          <!-- <b-dropdown
            variant="primary"
            id="dropdown-1"
            text="Month"
            class="mb-2 mr-2"
          >
            <b-dropdown-item>January</b-dropdown-item>
            <b-dropdown-item>February</b-dropdown-item>
            <b-dropdown-item>March</b-dropdown-item>
            <b-dropdown-item>April</b-dropdown-item>
            <b-dropdown-item>May</b-dropdown-item>
            <b-dropdown-item>June</b-dropdown-item>
            <b-dropdown-item>July</b-dropdown-item>
            <b-dropdown-item>August</b-dropdown-item>
            <b-dropdown-item>September</b-dropdown-item>
            <b-dropdown-item>October</b-dropdown-item>
            <b-dropdown-item>November</b-dropdown-item>
            <b-dropdown-item>December</b-dropdown-item>
          </b-dropdown> -->
          <b-dropdown
            variant="primary"
            id="dropdown-1"
            v-model="form.year"
            text="Year"
            class="mb-2 mr-2"
            
          >
            <b-dropdown-item v-for="year in years" 
                    :key="year.value" 
                    :value="year.value"
                    @click="getData(year.value)">{{ year.value }}</b-dropdown-item>
            <!-- <b-dropdown-item >2021</b-dropdown-item> -->
          </b-dropdown>
        </b-card>
      </b-col>
    </b-row>
    
    <b-row>
      <b-col lg="12" md="12" sm="12">
        <b-card title="Users management" class="mb-30">
          <b-row>
            <b-col lg="4" md="6" sm="6">
              <b-card class="card-icon text-center mb-30">
                <i class="i-Data-Upload"></i>
                <p class="text-muted mt-2 mb-2">
                  Total Programs Running <br />
                </p>
                <p class="text-primary text-24 line-height-1 m-0">{{ program_count || 0}}</p>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" sm="6">
              <b-card class="card-icon text-center mb-30">
                <i class="i-Gear"></i>
                <p class="text-muted mt-2 mb-2">
                    Total Tasks Completed
                </p>
                <p class="text-primary text-24 line-height-1 m-0">121</p>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" sm="6">
              <b-card class="card-icon text-center mb-30">
                <i class="i-Bell"></i>
                <p class="text-muted mt-2 mb-2">
                    Inactive Users
                </p>
                <p class="text-primary text-24 line-height-1 m-0">20</p>
              </b-card>
            </b-col>
            <b-col lg="2" md="6" sm="6">
              <b-card class="card-icon-big text-center mb-30">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  Deck Cadets
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">{{userCounts[3].count}}</p>
              </b-card>
            </b-col>
            <b-col lg="2" md="6" sm="6">
              <b-card class="card-icon-big text-center mb-30">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  Engine Cadets
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">{{userCounts[4].count || 0}}</p>
              </b-card>
            </b-col>
            <b-col lg="2" md="6" sm="6">
              <b-card class="card-icon-big text-center mb-30">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  Fourth Engineer
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">{{userCounts[6].count || 0}}</p>
              </b-card>
            </b-col>
            <b-col lg="2" md="6" sm="6">
              <b-card class="card-icon-big text-center mb-30">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  Third Engineer
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">{{userCounts[11].count || 0}}</p>
              </b-card>
            </b-col>
            <b-col lg="2" md="6" sm="6">
              <b-card class="card-icon-big text-center mb-30">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  Second Engineer
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">{{userCounts[9].count || 0}}</p>
              </b-card>
            </b-col>
            <b-col lg="2" md="6" sm="6">
              <b-card class="card-icon-big text-center mb-30">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  Chief Engineer
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">{{userCounts[1].count || 0}}</p>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" sm="6">
              <b-card class="card-icon-big text-center mb-30">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  Third Officer
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">{{userCounts[12].count + userCounts[13].count }}</p>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" sm="6">
              <b-card class="card-icon-big text-center mb-30">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  Second Officer
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">{{userCounts[10].count || 0}}</p>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" sm="6">
              <b-card class="card-icon-big text-center mb-30">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  Chief Officer
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">{{userCounts[2].count || 0}}</p>
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" lg="12">
        <b-card title="Total Tasks Performed (2021)" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="TopBasicCauses.chartOptions"
              :series="TopBasicCauses.chartOptions.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" md="12">
        <b-card title="Top 5 Tasks Performed" class=" mb-30">
          <div class="chart-wrapper" style="height: 500px">
            <v-chart
              :options="ActivitiesWithPPEIssues"
              :autoresize="true"
            ></v-chart>
          </div>
        </b-card>
      </b-col>
      <b-col md="12" lg="6" sm="6">
        <b-card title="SCHEDULES PERFORMANCE - EXPECTED VS COMPLETED" class=" mb-30">
            <div id="basicArea-chart">
                <apexchart
                type="radialBar"
                height="350"
                :options="PSCDEfRatio.chartOptions"
                :series="PSCDEfRatio.series"
                />
            </div>
        </b-card>
     </b-col>
    </b-row>

    <div class="col-md-12">
        <div class="card mb-30">
          <div class="card-body p-0 ">
            <h5 class="card-title border-bottom p-3 mb-2">Top Performers</h5>

            <vue-good-table
              :columns="columns"
              :line-numbers="false"
              styleClass="order-table vgt-table"
              :rows="rows"
            >
            </vue-good-table>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard v5",
  },
  props: {
    title: {
      type: String,
      default: "Awesome Wizard",
    },
  },
  data() {
    return {
        TopBasicCauses,
        ActivitiesWithPPEIssues,
        PSCDEfRatio,
        program_count: '',
        form: {
          year:'',
        },
        years: [
          {value: 2020, text:2020},
          {value: 2021, text:2021},
        ],
        columns: [
        {
          label: "Sr. No.",
          field: "sr_no",
        },
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "Last Name",
          field: "last_name",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Nationality",
          field: "nationality",
        },
        {
          label: "Danos ID",
          field: "unique_id",
        },
        {
          label: "Gender",
          field: "gender",
        },
        {
          label: "Email",
          field: "email",
        },
        // {
        //   label: "Date Of Birth",
        //   field: "dob",
        // },
        {
          label: "Action",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right",
        },
      ],
        rows: [
            // {
            // id: 1,
            // name: "John",
            // img:
            //     '<img src="' +
            //     require("@/assets/images/products/iphone-1.jpg") +
            //     '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            //     require("@/assets/images/products/iphone-2.jpg") +
            //     '" class="rounded-circle avatar-sm" alt="">',
            // span:
            //     '<span class="badge badge-pill badge-outline-primary p-2 ">Delivered</span>',
            // createdAt: "2019-10-31 ",
            // score: 0.03343,
            // action:
            //     '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
            // },
            
        ]
    }
  },

   mounted() {
    this.year = '2021';
    this.getData(this.year);
  },
  methods: {
    async getData(year) {
      // console.log(year);
      this.isLoading = true;
      // this.userCounts = [];
      let userCounts = await axios.get(
        `/user_counts?year=${year}`
      );
      this.userCounts = userCounts.data.data;
      this.program_count = userCounts.data.program_count;
      // this.DeckCadets = this.userCounts[3].count
      // this.EngineCadets = this.userCounts[4].count
      // this.FourthEngineer = this.userCounts[6].count
      // this.ThirdEngineer = this.userCounts[11].count
      // this.SecondEngineer = this.userCounts[9].count
      // this.ChiefEngineer = this.userCounts[1].count
      // this.ThirdOfficer = this.userCounts[12].count + userCounts[13].count
      // this.SecondOfficer = this.userCounts[10].count
      // this.ChiefOfficer = this.userCounts[2].count
      // this.count = userCounts.data.count;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
  }
};

// start::TopBasicCauses
export const TopBasicCauses = {
  chartOptions: {
    chart: {
      height: 350,
      type: "bar",
    },
    colors: [
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#546E7A",
      "#26a69a",
      "#D10CE8",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        data: [9, 6, 5, 4, 2, 2, 1, 4, 5, 10, 3, 5],
      },
    ],
    xaxis: {
      categories: [
        "January 2021",
        "February 2021",
        "March 201",
        "April 2021",
        "May 2021",
        "June 2021",
        "July 2021",
        "August 2021",
        "September 2021",
        "October 2021",
        "November 2021",
        "December 2021",
      ],
      labels: {
        style: {
          colors: [
            "#008FFB",
            "#00E396",
            "#FEB019",
            "#FF4560",
            "#775DD0",
            "#546E7A",
            "#26a69a",
            "#D10CE8",
          ],
          fontSize: "14px",
        },
      },
    },
  },
};

// start::ActivitiesWithPPEIssues
export const ActivitiesWithPPEIssues = {
  color: ["#c13018", "#f36d12", "#ebcb37", "#a0b967", "#0d94bc", "#04a9f4"],
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  tooltip: {
    show: true,
    backgroundColor: "rgba(0, 0, 0, .8)",
  },
  xAxis: [
    {
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],

  series: [
    {
      name: "Activities with PPE Issues",
      type: "pie",
      radius: "50%",
      center: "50%",
      data: [
        {
          value: 11,
          name: "Painting",
        },
        {
          value: 6,
          name: "Working Overside",
        },
        {
          value: 4,
          name: "Working Aloft",
        },
        {
          value: 8,
          name: "Chemical Handling",
        },
        {
          value: 5,
          name: "Buffing/Grinding",
        },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

// start::PSCDEfRatio
export const PSCDEfRatio = {
  series: [50],
  chartOptions: {
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          shadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 15,
            fontSize: "22px",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  },
};
</script>

<style>
.gull-border-none {
  border-bottom: none !important;
}
table.tableOne.vgt-table {
  border: none;
}
table.vgt-table td {
  padding: 8px;
}
</style>
