<template>
    <div class="apply">
        <by-header class="header"></by-header>
        <div class="service">
            <p>欢迎使用本源物联样品申请服务</p>
        </div>
        <div class="form">
            <el-form label-width="229px" class="demo-ruleForm" :model="addForm" :rules="rules" >
                <el-form-item label="公司名称" prop="company">
                    <el-input v-model="addForm.company"></el-input>
                </el-form-item>
                <el-form-item label="公司地址" prop="adress">
                    <el-input v-model="addForm.adress"></el-input>
                </el-form-item>
                <el-form-item label="公司类型" prop="position">
                    <el-input v-model="addForm.position"></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="name">
                    <el-input v-model="addForm.name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="addForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="addForm.email"></el-input>
                </el-form-item>
                <el-form-item label="产品型号" prop="model">
                    <el-input v-model="addForm.model"></el-input>
                </el-form-item>
                <el-form-item label="需求量" prop="number">
                    <el-input v-model="addForm.number"></el-input>
                </el-form-item>
                <el-form-item label-width="270px" style="width:958px" label="申请主题" prop="need">
                    <el-input v-model="addForm.need" style="width:958px"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="res" :model="addForm">
            <div class="data">
                <div class="one">
                    需求描述
                </div>
                <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="addForm.res">
                </el-input>
            </div>
            <div class="btn">提交</div>
        </div>
    </div>
</template>

<script>
import ByHeader from "../../view/ByHeader.vue";
export default {
    name: "detail",
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
                name: '',
                company: '',
                position: '',
                phone: '',
                email: '',
                adress: '',
                model: '',
                number: '',
                need: '',
                res:''
            },
            rules: {
                company: [
                    { required: true, message: '请输入公司名称', trigger: 'blur' },
                ],
                adress: [
                    { required: true, message: '请输入公司地址', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: '请输入电话', trigger: 'blur' },
                    { validator: checkMobile, trigger: "blur" },
                ],
                position: [
                    { required: true, message: '请输入公司类型', trigger: 'blur' },
                ],
                model: [
                    { required: true, message: '请输入产品型号', trigger: 'blur' },
                ],
                
            }
        }
    }
}
</script>
<style scoped lang="less">
.service {
    text-align: center;
    margin-top: 110px;
    p {
        font-weight: 700;
        font-size: 46px;
        color: rgb(0, 0, 0);
    }
}

.form {
    position: relative;
    width: 1260px;
    height: 350px;
    margin: 60px auto;

}

form.el-form.demo-ruleForm.el-form--label-left {
    width: 600px;
}

.el-form-item {
    float: left;
    width: 600px;
    margin-right: 30px;
}

label.el-form-item__label {
    height: 50px;
    background-color: rgb(27, 95, 198);
}

.el-input {
    width: 371px;
    float: left;
}

.one {
    width: 1260;
    height: 50px;
    background-color: rgb(27, 95, 198);
}
</style>

<style>
.el-input__inner {
    height: 51px;
    border-radius: 0;
    border: 1px solid rgba(27, 95, 198, 0.4);
}

label.el-form-item__label {
    height: 50px;
    background-color: rgb(27, 95, 198);
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
}

.res {
    width: 1260px;
    height: 500px;
    margin: -40px auto;
}

.one {
    color: #fff;
    font-size: 20px;
    line-height: 50px;
    padding-left: 10px;
}

.data {
    margin-bottom: 20px;
}

.btn {
    width: 229px;
    height: 50px;
    background-color: rgb(27, 95, 198);
    margin: 20px auto;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}
</style>