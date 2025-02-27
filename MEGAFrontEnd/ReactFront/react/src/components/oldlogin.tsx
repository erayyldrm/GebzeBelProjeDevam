
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
import LoginInnerBgImg from '@react-login-page/page10/inner-bg.jpg';

const Demo = () => (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {/* Video Arka Plan */}
        <video
            autoPlay
            loop
            muted
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
            }}
        >
            <source src="/videobg.mp4" type="video/mp4" />
            Tarayıcınız video desteği sağlamıyor.
        </video>

        {/* LoginPage Bileşeni */}
        <LoginPage
            style={{
                height: 690,
                position: 'relative',
                zIndex: 1,
            }}
        >
            <InnerBox style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
            <InnerBox panel="signup" style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
            <Title />
            <TitleSignup>Sign Up</TitleSignup>
            <TitleLogin>Login</TitleLogin>
            <Logo>
                <LoginLogo />
            </Logo>
            <Email placeholder="Kullanıcı Adı" name="userUserName" />
            <Password placeholder="Şifre" name="userPassword" />
            <Submit keyname="submit">Submit</Submit>
            <Submit keyname="reset">Reset</Submit>

            <Email panel="signup" placeholder="E-mail" keyname="e-mail" />
            <Password panel="signup" placeholder="Şifre " keyname="password" />
            <Password panel="signup" placeholder="Şifre Doğrulama" keyname="confirm-password" />
            <Submit panel="signup" keyname="signup-submit">
                Submit
            </Submit>
            <Submit panel="signup" keyname="signup-reset">
                Reset
            </Submit>
        </LoginPage>
    </div>
);

export default Demo;
