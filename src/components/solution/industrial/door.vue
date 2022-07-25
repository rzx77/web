<template>
    <div class="door">
        <by-header class="header"></by-header>
        <div class="banner" @click="dialogVisible = true">
            <img src="../../../assets/img/solve/industrial/banner_b.png" alt="">
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
                    <img src="../../../assets/img/solve/industrial/door_a.png" alt="">
                </div>
                <div class="background-con">
                    <div class="background-title">
                        行业背景
                    </div>
                    <div class="background-text">
                        2016年新零售概念兴起，智能售货柜开始出现在大众视野，随着物联网和信息技术的发展，人们对智能
                        近日，国内本土疫情频发，呈现点多、面广的态势，随着确诊人员、居家隔离人员逐渐增多，社区工作
                        者日夜作战，如何实行高效便捷的管理措施，“NB-IoT智能门磁”给出了新思路。<br><br>

                        将NB-IoT智能门磁安装在隔离人员门外，当门一打开，就会报警，实时发送信息告知社区管理人员，隔
                        离期满后可以立即拆除，回收循环使用。智能门磁的使用不仅减少了人力、物力投入，还能减少工作人
                        员与隔离人员近距离接触，降低疫情传播风险。
                    </div>
                </div>
            </div>
            <div class="caseb">
                <div class="case-title">案例说明</div>
                <div class="case-one">
                    本源物联推出NB-IoT智能门磁产品助力精细化防疫，该产品通用运营商网络，无线组网，免布线易安装；信号稳定，功耗低；开门即报，即时告警，支持移动和PC端管理。
                </div>
                <div class="case-two">
                    <img src="../../../assets/img/solve/industrial/door_b.png" alt="">
                </div>
            </div>
            <div class="proa">
                <div class="pro-titlea">
                    产品优势
                </div>
                <div class="pro-cona">
                    <div class="pro-aa">
                        本源4G无线数据通信工控板表现出的突出优势在于：
                    </div>
                    <br>
                    <div class="pro-ba">
                        01）云端监控，防疫黑科技
                    </div>
                    <div class="pro-aa">
                        本源物联NB-IoT智能门磁由无线发射模块和磁块两部分组成，将模块和磁块分别安装在门窗的两侧，当二者分离超过1.5CM时，就会产生报警，PC端监管平台实时告警，同时电话、短信同步提醒。

                    </div>
                    <div class="pro-ca">
                        <img src="../../../assets/img/solve/industrial/door_c.png" alt="">
                    </div>
                    <br><br>
                    <div class="pro-aa">
                        该产品配备后台管控系统，运用大数据、泛感知技术轻松实现开/关门提醒、防拆报警/防破解、一键布防/撤防等功能。基于物联网传输数据，不录音、不录像，保障用户隐私安全，24小时实时感应，远程监控门窗开合状态，实时掌握居家隔离人员开门情况。以信息化手段助力疫情防控阻击战，让防疫更加科学高效。
                    </div>
                    <br>
                    <div class="pro-ba">
                        02）无线通讯，快速布防
                    </div>
                    <div class="pro-aa">
                        本源物联NB-IoT智能门磁操作简单，安装便捷；免打孔、免布线，使用强力双面胶固定即可。智能门磁基于NB-IoT技术打造，构建于蜂窝网络，可以直接通过电信、移动、联通基站联网，实时传输报警信息，摆脱了对网关、WiFi的依赖，能独立使用。该产品无需外接电源，采用可拆卸电池设计且续航能力强，具有功耗低、待机时间长的优势。
                    </div>
                    <br>
                    <br>
                    <div class="pro-da">
                        <img src="../../../assets/img/solve/industrial/door_d.png" alt="">
                    </div>
                </div>
            </div>
            <div class="appa">
                <div class="app-titlea">
                    应用场景
                </div>
                <div class="app-onea">
                    本源物联NB-IoT智能门磁将“人防”变为“物防”，节约大量人力、物力，可广泛应用于以下场景：<br><br>

                    1）需要隔离的酒店、家庭、社区。本源物联NB-IoT智能门磁大大提高了疫情防控管理的工作效率，同时也保障了疫情防控工作人员的安全。<br><br>

                    2）封闭管理的园区、社区。对需要临时关闭而不能完全封闭的门、窗等地方进行精准监控和布防。如24h通行出入口、楼梯门、逃生通道等，在人流较大时开启免打扰模式，在管控时间开启异常开关门提醒，可以实现无人化、精简化管理。<br><br>

                    3）智能安防。本产品还可以广泛应用在城市安防、博物馆，监狱，学校，办公室，银行、电力、司法、工厂、公司、仓库等众多领域，实时报警，保护人们生命财产安全。
                </div><br>
                <div class="app-twoa">
                    <img src="../../../assets/img/solve/industrial/door_e.png" alt="">
                </div>
                <div class="app-threea">
                    行业定制方案
                </div>
                <div class="app-foura">
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

.banner img {
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

.caseb {
    width: 1305px;
    height: 780px;
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

.case-two {
    width: 466px;
    height: 577px;
    margin-top: 25px;
}

.case-two img {
    margin-left: 419px;
}

.proa {
    height: 1747px;
    background-color: rgb(242, 242, 242);
}

.pro-titlea {
    height: 100px;
    font-weight: 700;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 100px;
}

.pro-cona {
    width: 1171px;
    height: 518px;
    margin-left: 52px;
}

.pro-aa {
    font-weight: 400;
    font-size: 18px;
    color: #000;
}

.pro-ba {
    font-weight: 700;
    font-size: 18px;
    color: #000;
}

.pro-da {
    width: 1061px;
    height: 564px;
    margin-left: 71px;
}

.appa {
    margin-top: 30px;
    height: 1157px;
    background-color: rgb(242, 242, 242);
}

.app-titlea {
    height: 103px;
    font-weight: 700;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 100px;
}

.app-onea {
    width: 1160px;
    margin-left: 37px;
    color: #000;
}

.app-twoa {
    width: 1024px;
    height: 481px;
    margin-left: 140px;
}

.app-threea{
    height: 130px;
    font-weight: 700;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 130px;
}

.app-foura {
    /* margin-top: 29px; */
    width: 1160px;
    margin-left: 37px;
    color: #000;
}
.el-dialog__header {
    background-color: rgb(27, 95, 198);
    text-align: center;
}

.el-dialog__titlea{
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