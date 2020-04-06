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

        <el-row :gutter="10">
            <el-col :span="19">
                <el-card :body-style="{ padding: '0px 20px 20px 20px'}">
                    <div slot="header" class="problem-info-header">
                        <span class="problem-header">A + B Problem</span>
                    </div>
                    <div class="problem-container">
                        <p class="problem-title">Description</p>
                        <p class="problem-content">测试文本测试测试文本测试文本测试文测试文本测试测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本文本测试文本测试文本测试测试文本测试测试文本测试文本测试文测试文本测试测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本文本测试文本测试文本测试测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本文本测试文本本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本文本测试文本本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本文本测试文本</p>

                        <p class="problem-title">Input</p>
                        <p class="problem-content">测试输入测试输入测试输入</p>

                        <p class="problem-title">Output</p>
                        <p class="problem-content">测试输出测试输出测试输出测试输出</p>

                        <el-row :gutter="10">
                            <el-col :span="12">
                                <p class="problem-title">Input #1</p>
                                <el-card class="problem-sample"
                                         shadow="hover"
                                         :body-style="{padding: '10px 20px'}">
                                    <p>101 101</p>
                                    <p>20120 123</p>
                                    <p>12 123</p>
                                    <p>412 456</p>
                                </el-card>
                            </el-col>
                            <el-col :span="12">
                                <p class="problem-title">Output #1</p>
                                <el-card class="problem-sample"
                                         shadow="hover"
                                         :body-style="{padding: '10px 20px'}">
                                    <p>101 101</p>
                                    <p>20120 123</p>
                                    <p>12 123</p>
                                    <p>412 456</p>
                                </el-card>
                            </el-col>
                        </el-row>

                        <p class="problem-title">Hint</p>
                        <p class="problem-content">测试Hint测试Hint测试Hint测试Hint</p>

                        <p class="problem-title">Source</p>
                        <p class="problem-content">测试Source测试Source测试Sourcv</p>

                    </div>
                </el-card>
            </el-col>
            <el-col :span="5">
                <el-card style="font-size: 12px">
                    <p>测试</p>
                </el-card>
            </el-col>


        </el-row>







    </div>
</template>

<script>
export default {
    name: 'problemDetail',
    data() {
        return {

        }
    },
    methods: {
    }
};
</script>

<style scoped>
    .problem-header {
        font-size: 20px;
    }

    .problem-container {
        margin: 0 30px;
    }

    .problem-container .problem-content{
        margin: 10px 15px;
    }

    .problem-container .problem-title{
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




</style>