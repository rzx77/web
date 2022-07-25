<template>
    <div class="sale">
        <by-header class="header"></by-header>
        <div class="banner" @click="dialogVisible = true">
            <img src="../../../assets/img/solve/industrial/banner_a.png" alt="">
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
                    <img src="../../../assets/img/solve/industrial/sale_a.png" alt="">
                </div>
                <div class="background-con">
                    <div class="background-title">
                        行业背景
                    </div>
                    <div class="background-text">
                        2016年新零售概念兴起，智能售货柜开始出现在大众视野，随着物联网和信息技术的发展，人们对智能
                        售货柜提出了更智能、更方便的需求，RFID、称重等方式因为人工成本大、补货难等缺点逐渐被市场淘
                        汰，动态视觉识别售货柜成为主流，但某些动态视觉识别售货柜存在顾客购物视频难采集、视频数据传
                        输不稳定、网络易间断等问题。<br><br>

                        由此，本源物联智能售货柜云端监控解决方案应运而生，帮助售货柜实现智能升级。
                    </div>
                </div>
            </div>
            <div class="case">
                <div class="case-title">案例说明</div>
                <div class="case-onea">
                    本源物联推出的智能售货柜云端监控解决方案以物联网、大数据、移动通信等新一代技术为支撑，提供稳定的无线监控和视频数据传输，助力设备厂商降低运维成本、增强用户黏度、提高销售收入。<br><br>
                    该场景下，本源4G无线数据通信工控板可为智能售货柜提供双路USB摄像头，采集客户购物过程的视频数据，然后以4G无线的方式将视频数据传输至后台服务器进行分析，从而实现智能无人零售的购物体验。
                </div>
                <div class="case-twoa">
                    <img src="../../../assets/img/solve/industrial/sale_b.png" alt="">
                </div>
            </div>
            <div class="pro">
                <div class="pro-title">
                    产品优势
                </div>
                <div class="pro-con">
                    <div class="pro-a">
                        本源4G无线数据通信工控板表现出的突出优势在于：
                    </div>
                    <br>
                    <div class="pro-b">
                        01）USB2.0外设
                    </div>
                    <div class="pro-a">
                        支持2个USB2.0外设，可用于外接USB摄像头，实时监控，提供高度清晰的视频数据。
                    </div>
                    <br>
                    <div class="pro-b">
                        02）稳定透传
                    </div>
                    <div class="pro-a">
                        基于高通方案EC20模组开发，支持RS232和RS485串口数据通信，不宕机，防掉线，可快速稳定地进行视频数据传输，适应无人值守场景使用。
                    </div>
                    <br>
                    <div class="pro-b">
                        03）支持多种网络制式
                    </div>
                    <div class="pro-a">
                        提供7*24小时联网，支持LTE-FDD/LTE-TDD/WCDMA/TD-SCDMA/EVDO/CDMA/GSM等多种网络制式，为智能售货柜的日常工作保驾护航。
                    </div>
                    <br>
                    <div class="pro-b">
                        4）语音功能
                    </div>
                    <div class="pro-a">
                        支持一路SPEAKER进行语音播放。
                    </div>
                    <br>
                    <div class="pro-b">
                        5）硬件可靠
                    </div>
                    <div class="pro-a">
                        内置硬件看门狗电路，保护设备稳定运行。
                    </div>
                    <br>
                    <div class="pro-b">
                        6）远程管理
                    </div>
                    <div class="pro-a">
                        支持远程管理平台，工作人员可通过平台远程查看模块的工作状况，避免因网络故障影响智能售货柜的正常运行。
                    </div>
                </div>
            </div>
            <div class="app">
                <div class="app-title">
                    应用场景
                </div>
                <div class="app-one">
                    该产品能广泛应用于各类带有零售功能的智能售货机，如零食售卖机、自助果汁机、自助咖啡机、成人用品售卖机、盒饭售卖机、自助快递柜等。
                </div><br>
                <div class="app-two">
                    <img src="../../../assets/img/solve/industrial/sale_c.png" alt="">
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
    height: 925px;
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

.case-onea {
    width: 1221px;
    margin-left: 37px;
    font-weight: 400;
    font-size: 18px;
    color: #000;
}

.case-twoa {
    margin-top: 25px;
}

.pro {
    height: 660px;
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
    height: 938px;
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
    width: 1024px;
    height: 481px;
    margin-left: 140px;
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