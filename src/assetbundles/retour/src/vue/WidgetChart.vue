<template>
    <apexcharts width="100%" height="200px" type="donut" :options="chartOptions" :series="series"></apexcharts>
</template>

<script>

    import Axios from 'axios';
    import ApexCharts from 'vue-apexcharts';

    // Configure the api endpoint
    const configureApi = (url) => {
        return {
            baseURL: url,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        };
    };
    // Query our API endpoint via an XHR GET
    const queryApi = (api, uri, params, callback) => {
        api.get(uri, {params: params})
            .then((result) => {
                if (callback) {
                    callback(result.data);
                }
            })
            .catch((error) => {
            console.error(error);
        })
    };

    // Our component exports
    export default {
        components: {
            'apexcharts': ApexCharts,
        },
        props: {
            title: String,
            subTitle: String,
            days: String,
            apiUrl: {
                type: String,
                default: '',
            },
        },
        methods: {
            // Load in our chart data asynchronously
            getSeriesData: async function() {
                const chartsAPI = Axios.create(configureApi(this.apiUrl));
                await queryApi(chartsAPI, '', {days: this.days}, (data) => {
                    this.series = data;
                });
            }
        },
        created: function() {
            this.getSeriesData();
        },
        data: function() {
            return {
                chartOptions: {
                    chart: {
                        id: 'vuechart-widget',
                        toolbar: {
                            show: false,
                        },
                    },
                    colors: ['#008FFB', '#DCE6EC'],
                    labels: [
                        '404 hits',
                        '404 hits handled'
                    ],
                },
                series: [50, 50],
            }
        },
    }
</script>
