import LoginPage, {
    Email,
    Password,
    InnerBox,
    TitleSignup,
    TitleLogin,
    Submit,
    Title,
    Logo,
}
from '@react-login-page/page10';
import LoginLogo from 'react-login-page/logo';
import LoginImg from '@react-login-page/page10/bg.png';
import LoginInnerBgImg from '@react-login-page/page10/inner-bg.jpg';

const Demo = () => (
    <LoginPage
        style={{
            height: '100vh', // Tam ekran yüksekliği ayarlandı
            backgroundImage: `url(${LoginImg})`,
            backgroundSize: 'cover', // Arka planın ekranı tamamen kaplamasını sağlar
            backgroundPosition: 'center',
            '--login-inner-image': `url("${LoginInnerBgImg}")`
        }}
    >
        <InnerBox style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
        <InnerBox panel="signup" style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
        <Title />
        <TitleSignup>Kayıt Ol</TitleSignup>
        <TitleLogin>Giriş Yap</TitleLogin>
        <Logo>
            <LoginLogo/>
        </Logo>
        <Email placeholder="E-Mail" name="userUserName" />
        <Password placeholder="Parola" name="userPassword" />
        <Submit keyname="submit">Kaydet</Submit>
        <Submit keyname="reset">Reset</Submit>

        <Email panel="signup" placeholder="E-mail" keyname="e-mail" />
        <Password panel="signup" placeholder="Parola" keyname="password" />
        <Password panel="signup" placeholder="Parola (Tekrar)" keyname="confirm-password" />
        <Submit panel="signup" keyname="signup-submit">Kayıt Ol</Submit>
        <Submit panel="signup" keyname="signup-reset">Giriş Yap</Submit>
    </LoginPage>
);

export default Demo;
