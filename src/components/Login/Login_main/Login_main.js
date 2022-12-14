import "./Login_main.scss";
import {Link} from "react-router-dom";
import {Facebook, KakaoTalk, Naver} from "../Sns";
import Login_hide from "../Login_hide/Login_hide";
import {useState} from "react";
import {customAxios} from "../../../config/axiosConfig";
import {Logo} from "../../common/Logo";

export default function Login_main() {
    const [show, setShow] = useState(false);
    const [request, setRequest] = useState({})

    const handleChange = e => {
        setRequest({
            ...request,
            [e.target.name]: e.target.value
        })
    }

    const login = async () => {
        try {
            const res = await customAxios.post("/auth/login", request);
            localStorage.setItem("token", res.data.accessToken)
            window.location.href = "/"
        } catch (error) {
            alert(error.response.data.status + ": " + error.response.data.message);
        }
    }

    return (
        <>
            <div>
                <div className="logo-div">
                    <Link to="/">
                        <Logo/>
                    </Link>
                </div>
                <div className="login-div">
                    <div className="login-email-input">
                        <input
                            type="email"
                            name="email"
                            position="top"
                            placeholder="이메일"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="login-text-input">
                        <input
                            type="password"
                            name="password"
                            position="bottom"
                            placeholder="비밀번호"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="login-button-div">
                    <button
                        className="login-button"
                        onClick={login}
                    >로그인
                    </button>
                </div>
                <div className="login-option-div">
                    <a>비밀번호 재설정</a>
                    <Link to="/signup">회원가입</Link>
                </div>
                <p className="sns-signup-div">
                    SNS계정으로 간편 로그인/회원가입
                </p>
                <div className="sns-icon">
                    <div className="sns-item">
                        <Facebook/>
                    </div>
                    <div className="sns-item">
                        <KakaoTalk/>
                    </div>
                    <div className="sns-item">
                        <Naver/>
                    </div>
                </div>
                <div className="login-problem-div">
                    <a>로그인에 문제가 있으신가요?</a>
                </div>
                <div className="grey-line-div"/>
                <div className="order-inquiry-div">
                    <button
                        className="order-inquiry-button"
                        type="button"
                        onClick={() => setShow(!show)}
                    >
                        비회원 주문 조회하기
                    </button>
                </div>
                <Login_hide
                    show={show}
                />
            </div>
            <p className="copyright-div">© bucketplace, Co., Ltd.. All Rights Reserved</p>
        </>
    )
        ;
}
