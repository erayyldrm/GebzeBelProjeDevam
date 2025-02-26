import LoginPage, {
    Email,
    Password,
    InnerBox,
    TitleSignup,
    TitleLogin,
    Submit,
    Title,
    Logo,
} from '@react-login-page/page10';
import LoginLogo from 'react-login-page/logo';
import LoginImg from '@react-login-page/page10/bg.png';
import LoginInnerBgImg from '@react-login-page/page10/inner-bg.jpg';

const Demo = () => (
    <LoginPage
        style={{ height: 690, backgroundImage: `url(${LoginImg})`, '--login-inner-image': `url("${LoginInnerBgImg}")` }}
    >
        <InnerBox style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
        <InnerBox panel="signup" style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
        <Title />
        <TitleSignup>注册</TitleSignup>
        <TitleLogin>登录</TitleLogin>
        <Logo>
            <LoginLogo />
        </Logo>
        <Email placeholder="请输入用户名" name="userUserName" />
        <Password placeholder="请输入密码" name="userPassword" />
        <Submit keyname="submit">提交</Submit>
        <Submit keyname="reset">重置</Submit>

        <Email panel="signup" placeholder="E-mail" keyname="e-mail" />
        <Password panel="signup" placeholder="请输入密码" keyname="password" />
        <Password panel="signup" placeholder="请输入确认密码" keyname="confirm-password" />
        <Submit panel="signup" keyname="signup-submit">
            注册
        </Submit>
        <Submit panel="signup" keyname="signup-reset">
            重置
        </Submit>
    </LoginPage>
);

export default Demo;