<template>
    <div class="car">
        <by-header class="header"></by-header>
        <div class="banner" @click="dialogVisible = true">
            <img src="../../../assets/img/solve/industrial/banner_c.png" alt="">
        </div>
        <el-dialog title="方案获取" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>请详细填写以下资料，我们将第一时间联系您。如有紧急需求请直接拨打
                公司电话：0551-62103798</span>
            <br><br>
            <el-form :model="addForm" :rules="rules" label-position="right" label-width="110px">
                <el-form-item label="公司名称" prop="firm">
                    <el-input v-model="addForm.firm" placeholder="请输入您的公司名称"></el-input>
                </el-form-item>
                <el-form-item label="所属行业" prop="industry">
                    <el-input v-model="addForm.industry" placeholder="请输入您的所属行业"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="addForm.name" placeholder="请输入您的姓名"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="addForm.phone" placeholder="请输入您的联系电话"></el-input>
                </el-form-item>
                <el-form-item label="需求描述" prop="desc">
                    <el-input v-model="addForm.desc" type="textarea" placeholder="请输入您的描述"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">提交</el-button>
            </span>
        </el-dialog>
        <div class="main">
            <div class="background">
                <div class="background-pic">
                    <img src="../../../assets/img/solve/industrial/car_a.png" alt="">
                </div>
                <div class="background-con">
                    <div class="background-title">
                        行业背景
                    </div>
                    <div class="background-text">
                        随着智能制造、智慧工厂应用的快速发展，越来越多的机械设备进行数字化、信息化、网络化改造，传
                        统的制造业作业模式已经不适应现代工业发展的需要。<br>
                        现在叉车AGV的技术现状：<br>
                        （1）对于制造型企业来说，传统AGV存在场地布置时间长、精度低、成本高等问题；<br>
                        （2）传统意义上的AGV避障能力不成熟，运行自动化、智能化程度低；<br>
                        （3）传统布网方式存在连接数少、通信过程易间断、传输不稳定等问题。<br>
                    </div>
                </div>
            </div>
            <div class="case">
                <div class="case-title">案例说明</div>
                <div class="case-one">
                    因此，为了更好实现5G智能制造产业的转型升级，5G与叉车AGV结合无疑是当前工业结构调整的重要举措之一，不仅可以缓解因为劳动力成本上升带来的压力，同时可以提高产量与速率，整体实现生产车间的5G智能化升级，达到提质、降本、增效的目的。<br><br>

                    由此，本源物联提出叉车AGV智能联网解决方案。利用物联网5G技术网络为叉车AGV设备提供网络支持，打造5G无线路由系统方案，通过AGV自动化平台指控，实时传输大量叉车行车数据，利用云端进行计算并回传控制指令，实现叉车无人自动行驶、路径规划、任务下达、装卸操作等功能，完成物料调拨转送、物资运送仓储。着力解决无人叉车的数据传输量大、传输速率过慢等难题，通过AGV调度系统和工厂生产管理系统对接，达成系统全自动下单、工厂智能调度的智慧化生产目标；通过SIM卡管理平台，实时监测分析设备在线使用情况，提升工业互联网平台赋能水平。<br><br>

                    本源5G无线工业路由器BC5521和叉车AGV通过以太网连接，给叉车AGV控制单元提供网络，通过5G网络的超低延时实现厂区全面覆盖；同时叉车AGV通过5G网络实现AGV调度控制系统实时通讯。结合AI自动驾驶技术，灵活实现运输速度的实时变化和运输路线的按需调整。大大的提高了工厂的生产效率及节省了工厂的人工成本，实现工厂智能化、自动化。
                    <div class="case-twoa">
                        <img src="../../../assets/img/solve/industrial/car_b.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="pro-title">
                    产品优势
                </div>
                <div class="pro-con">
                    <div class="pro-a">
                        BC5521 是基于移远 5G 模组 RM500U 开发的一款 5G 工业路由器整机产品，搭载紫光展锐 5G
                        技术平台实现产品的高性能、高集成、高速率等特性；其主要功能是实现终端设备的快速联网，支持单路千兆LAN 口。<br>
                        1）一款带 5G 的同时支持 5G NR/LTE-FDD/LTE-TDD/WCDMA 网络制式的国内全网通工业路由器；<br>
                        2) 支持 1 路千兆 LAN 口；<br>
                        3) 支持 RS485 串口通讯；<br>
                        4) 支持一键重启设备。
                    </div>
                </div>
            </div>
             <div class="app">
                <div class="app-title">
                    应用场景
                </div>
                <div class="app-one">
                    BC5521还可以广泛应用于物联网产业链中的M2M行业，如高清摄像头、巡检机器人、5G远程医疗、5G应急救援、智能电网、智能交通、智能家居、供应链自动化、工业自动化、数字化医疗等。
                </div><br>
                <div class="app-two">
                    <img src="../../../assets/img/solve/industrial/car_c.png" alt="">
                </div>
                <div class="app-three">
                    行业定制方案
                </div>
                <div class="app-four">
                   本源物联长期专注工业联网通讯产品的研发、生产及销售，各类产品广泛应用于通信、银通、安防、汽车等多个领域，还能为客户提供智能停车场传输解决方案、环境监测传输解决方案、摄像头数据远程传输解决方案、电动车智能换电柜联网解决方案等各类数据传输、工业联网解决方案，快速赋能企业智能化升级。
                    <br><br>
                    如有方案需求，欢迎咨询
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ByHeader from "../../../view/ByHeader.vue";
export default {
    components: { ByHeader },
     data() {
        //定义自定义校验手机
        var checkMobile = (rule, value, callback) => {
            const regMobile =
                /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
            if (regMobile.test(value)) {
                return callback();
            }
            callback(new Error("请输入合法的手机号"));
        };
        return {
            addForm: {
                firm: '',
                industry: '',
                name: '',
                phone: '',
                desc: '',
            },
            dialogVisible: false,
            rules: {
                firm: [
                    { required: true, message: '请输入您的公司名称', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: '请输入您的联系电话', trigger: 'blur' },
                    { validator: checkMobile, trigger: "blur" },
                ],
                desc: [
                    { required: true, message: '请输入您的描述', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        }
    }
}
</script>
<style>
.banner {
    margin-top: 72px;
    height: 350px;
}

img {
    width: 100%;
    height: 100%;
}

.main {
    width: 1305px;
    height: 1000px;
    margin: 30px auto;
}

.background {
    height: 309px;
    background-color: rgb(242, 242, 242);
}

.background-pic {
    float: left;
    width: 400px;
    height: 309px;
}

.background-con {
    float: left;
    width: 903px;
    height: 309px;
}

.background-title {
    height: 90px;
    font-weight: 700;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 90px;
}

.background-text {
    width: 814px;
    font-weight: 400;
    font-size: 18px;
    color: #000;
    margin-left: 45px;
}

.case {
    width: 1305px;
    height: 900px;
    background-color: rgb(242, 242, 242);
    margin-top: 30px;
}

.case-title {
    height: 103px;
    font-weight: 700;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 103px;
}

.case-one {
    width: 1221px;
    margin-left: 37px;
    font-weight: 400;
    font-size: 18px;
    color: #000;
}

.case-twoa {
    width: 843px;
    height: 453px;
    margin-top: 25px;
}

.case-twoa img {
    margin-left: 190px;
}

.pro {
    height: 300px;
    background-color: rgb(242, 242, 242);
}

.pro-title {
    height: 100px;
    font-weight: 700;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 100px;
}

.pro-con {
    width: 1171px;
    height: 518px;
    margin-left: 52px;
}

.pro-a {
    font-weight: 400;
    font-size: 18px;
    color: #000;
}

.pro-b {
    font-weight: 700;
    font-size: 18px;
    color: #000;
}


.app {
    margin-top: 30px;
    height: 900px;
    background-color: rgb(242, 242, 242);
}

.app-title {
    height: 103px;
    font-weight: 700;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 100px;
}

.app-one {
    width: 1160px;
    margin-left: 37px;
    color: #000;
}

.app-two {
    width: 1189px;
    height: 420px;
    margin-left: 57px;
}

.app-three {
    height: 130px;
    font-weight: 700;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 130px;
}

.app-four {
    /* margin-top: 29px; */
    width: 1160px;
    margin-left: 37px;
    color: #000;
}
.el-dialog__header {
    background-color: rgb(27, 95, 198);
    text-align: center;
}

.el-dialog__title {
    font-weight: 700;
    font-size: 26px;
    color: #FFF;
}

.el-dialog__body {
    font-weight: 400;
    font-size: 18px;
    color: #000;
}

.el-form-item__label {
    font-weight: 400;
    font-size: 20px;
    color: #000;
}

.el-input {
    width: 92%;
}

.el-textarea {
    width: 93%;
}
</style>