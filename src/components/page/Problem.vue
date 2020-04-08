<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 问题列表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <!--                <el-button-->
                <!--                    type="primary"-->
                <!--                    icon="el-icon-delete"-->
                <!--                    class="handle-del mr10"-->
                <!--                    @click="delAllSelection"-->
                <!--                >批量删除</el-button>-->
                <!--                <el-select v-model="query.address" placeholder="地址" class="handle-select mr10">-->
                <!--                    <el-option key="1" label="广东省" value="广东省"></el-option>-->
                <!--                    <el-option key="2" label="湖南省" value="湖南省"></el-option>-->
                <!--                </el-select>-->
                <!--                <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>-->
                <!--                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>-->
            </div>
            <el-table
                    :data="problemList"
                    border
                    class="table"
                    ref="multipleTable"
                    header-cell-class-name="table-header"
                    v-loading="loading"
            >
                <el-table-column
                        label="ID"
                        width="100">
                    <template slot-scope="scope">
                        <el-link @click="onProblemClick(scope.row.display_id)">{{scope.row.display_id}}</el-link>
                    </template>

                </el-table-column>

                <el-table-column
                        label="Title">
                    <template slot-scope="scope">
                        <el-link @click="onProblemClick(scope.row.display_id)">{{scope.row.title}}</el-link>
                    </template>
                </el-table-column>



                <el-table-column
                        prop="submission_number"
                        label="Total Submit"
                        width="150">
                </el-table-column>
                <el-table-column
                        label="AC Rate"
                        width="150">
                    <template slot-scope="scope">
                        <p>{{parseFloat(scope.row.ac_number/scope.row.submission_number*100).toFixed(2)}}%</p>
                    </template>
                </el-table-column>


            </el-table>
            <div class="pagination">
                <el-pagination
                        background
                        layout="total, prev, pager, next"
                        :current-page="page.pageIndex"
                        :page-size="page.pageSize"
                        :total="page.count"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../api';

    export default {
        name: 'problem',
        data() {
            return {
                loading: true,
                page: {
                    count: 0,
                    pageSize: 20,
                    pageIndex: 1
                },
                problemList: []
            };
        },
        created() {
            this.getProblemList();
        },
        methods: {
            getProblemList() {
                this.loading = true;
                api.getProblemList().then(value => {
                    this.problemList = value.results;
                    this.page.count = value.count;
                }).catch(error => {
                    this.$message.error('加载失败了 QAQ');
                    console.error(error);
                }).then(() => {
                    this.loading = false;
                });
            },
            onProblemClick(displayId) {
                this.$router.push(`problem/${displayId}/`)
            }
        }
    };
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }

    .mr10 {
        margin-right: 10px;
    }

    .table-td-thumb {
        display: block;
        margin: auto;
        width: 40px;
        height: 40px;
    }
</style>
