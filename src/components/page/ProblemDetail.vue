<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> Problems
                </el-breadcrumb-item>
                <el-breadcrumb-item>ProblemDetail</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 主体部分 -->
        <el-row :gutter="10" v-loading="loading">
            <el-col :span="20">
                <!-- 题目部分 -->
                <el-card :body-style="{ padding: '0px 20px 20px 20px'}">
                    <div slot="header" class="problem-info-header">
                        <span class="problem-header">{{problem.title}}</span>
                    </div>
                    <div class="problem-container">
                        <p class="problem-title">Description</p>
                        <p class="problem-content" v-html="problem.description"></p>

                        <p class="problem-title">Input</p>
                        <p class="problem-content" v-html="problem.description_input">测试输入测试输入测试输入</p>

                        <p class="problem-title">Output</p>
                        <p class="problem-content" v-html="problem.description_output">测试输出测试输出测试输出测试输出</p>

                        <el-row :gutter="10" v-for="(sample, index) in problem.samples" :key="index">
                            <el-col :span="12">
                                <p class="problem-title">Input #{{index + 1}}</p>
                                <el-card class="problem-sample"
                                         shadow="hover"
                                         :body-style="{padding: '10px 20px'}">
                                    <p>{{sample.input}}</p>
                                </el-card>
                            </el-col>
                            <el-col :span="12">
                                <p class="problem-title">Output #{{index + 1}}</p>
                                <el-card class="problem-sample"
                                         shadow="hover"
                                         :body-style="{padding: '10px 20px'}">
                                    <p>{{sample.output}}</p>
                                </el-card>
                            </el-col>
                        </el-row>


                        <div v-if="problem.hint.length !== 0">
                            <p class="problem-title">Hint</p>
                            <p class="problem-content" v-html="problem.hint"></p>
                        </div>

                        <div v-if="problem.source.length !== 0">
                            <p class="problem-title">Source</p>
                            <p class="problem-content" v-html="problem.source"></p>
                        </div>

                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card class="problem-info">
                    <p class="problem-info-right">{{problem.display_id}}</p>
                    <p>ID</p>

                    <hr/>
                    <p class="problem-info-right">{{problem.time_limit}}MS</p>
                    <p>Time Limit</p>
                    <hr/>
                    <p class="problem-info-right">{{problem.memory_limit}}KB</p>
                    <p>Memory Limit</p>
                    <hr/>
                </el-card>
                <el-card class="problem-info-submit">

                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import api from '../../api';

    export default {
        name: 'problemDetail',
        data() {
            return {
                loading: true,
                problem: {
                    display_id: '',
                    title: '',
                    description: '',
                    hint: '',
                    description_input: '',
                    description_output: '',
                    source: '',
                    create_time: 0,
                    last_update_time: 0,
                    time_limit: 0,
                    memory_limit: 0,
                    samples: [],
                    submission_number: 0,
                    ac_number: 0,
                    wa_number: 0,
                    tle_number: 0,
                    mle_number: 0,
                    re_number: 0,
                    ce_number: 0,
                    submit: []
                },
                echartsjs: {
                    title: {
                        text: '同名数量统计'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        right: 10,
                        top: 20,
                        bottom: 20,
                        data: ['AC', 'WA', 'TLE', 'MLE', 'RE', 'CE']
                    }
                }
            };
        },
        mounted() {
            const problemId = this.$route.params.problemId;
            api.getProblemDetail(problemId).then(value => {
                this.problem = {
                    ...value,
                    samples: JSON.parse(value.samples.replace(/[\n]/g, '\\n')),
                    submit: [value.samples.ac_number, value.samples.wa_number, value.samples.tle_number,
                        value.samples.mle_number, value.samples.re_number, value.samples.ce_number]
                };
            }).catch(err => {
                this.$message.error('加载失败了 QAQ');
                console.error(err);
            }).then(value => {
                setInterval(() => {
                    this.loading = false;
                }, 300);
            });

        },
        methods: {}
    };
</script>

<style scoped>
    .problem-header {
        font-size: 20px;
    }

    .problem-container {
        margin: 0 30px;
    }

    .problem-container .problem-content {
        margin: 10px 15px;
    }

    .problem-container .problem-title {
        margin-top: 20px;
        color: #409EFF;
    }

    .problem-sample {
        width: 90%;
        margin-top: 10px;
    }

    .problem-sample p {
        font-size: 15px;
        font-family: Consolas, Monaco, "microsoft yahei", 'PingFang SC', "Helvetica Neue", Helvetica, arial, STHeiTi, sans-serif;

    }

    .problem-info-submit {
        margin-top: 20px;
    }

    .problem-info p {
        font-size: 13px;
        margin-top: 7px;
    }


    .problem-info hr {
        border-top: 1px solid #EBEEF5;
        border-right: 0;
        border-left: 0;
        border-bottom: 0;

    }

    .problem-info .problem-info-right {
        float: right;
    }

    .card-header {
        width: 200%;
    }


</style>