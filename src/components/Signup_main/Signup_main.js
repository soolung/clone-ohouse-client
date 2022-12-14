import "./Signup_main.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import {customAxios} from "../../config/axiosConfig";

export default function Signup_main() {
    const [request, setRequest] = useState({
        emailAddress: ""
    });

    const handleChange = e => {
        setRequest({
            ...request, [e.target.name]: e.target.value
        })
    }

    const signup = async () => {
        try {
            request.email = request.emailHead + '@' + request.emailAddress;
            const res = await customAxios.post("/auth", request);
            window.location.href = "/login"
        } catch (error) {
            alert(error.response.data.status + ": " + error.response.data.message);
        }
    }

    return (<>
        <div className="signup-div">
            <h1 className="signup-email-h1">이메일</h1>
            <div className="email-form">
            <span>
                <input
                    type="email"
                    placeholder="이메일"
                    className="front-emailform-div"
                    name="emailHead"
                    onChange={handleChange}
                />
            </span>
                <span className="golbang-e">@</span>
                <span>
            <select
                className="email-end-select"
                name="emailAddress"
                onChange={handleChange}
                value={request.emailAddress}
            >
                <option value="" disabled>선택해주세요.</option>
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="daum.net">daum.net</option>
              <option value="gmail.com">gmail.com</option>
              <option value="nate.com">nate.com</option>
              <option value="hotmail.com">hotmail.com</option>
              <option value="outlock.com">outlock.com</option>
              <option value="icloud.com">icloud.com</option>
            </select>
          </span>
            </div>
            <button className="email-certify-button">이메일 인증하기</button>
            <h1 className="signup-pswd-h1">비밀번호</h1>
            <p className="signup-pswd-p">
                영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </p>
            <div className="pswd-input-div">
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="pswd-input"
                    name="password"
                    onChange={handleChange}
                />
            </div>
            <h1 className="signup-pswd-h1">비밀번호 확인</h1>
            <div className="pswd-input-div">
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    className="pswd-input"
                    name="re-password"
                    onChange={handleChange}
                />
            </div>
            <h1 className="signup-pswd-h1">닉네임</h1>
            <p className="signup-pswd-p">
                다른 유저와 겹치지 않도록 입력해주세요 (2~15자)
            </p>
            <div className="pswd-input-div">
                <input
                    type="password"
                    placeholder="별명 (2~15자)"
                    className="pswd-input"
                    name="nickname"
                    onChange={handleChange}
                />
            </div>
            <h1 className="signup-pswd-h1">약관동의</h1>
            <div className="agreed-term-div">
                <label>
                    <div className="term-underbar">
                        <input type="checkbox" className="signup-term-input"/>
                        <p className="term-p">전체동의</p>
                        <p className="term-sub-p">선택항목에 대한 동의 포함</p>
                    </div>
                    <div className="termbox">
                        <input type="checkbox" className="termbox-check"/>
                        <p className="termbox-p">만 14세 이상입니다</p>
                        <p className="pilsu">(필수)</p>
                    </div>
                    <div className="termbox">
                        <input type="checkbox" className="termbox-check"/>
                        <p className="termbox-p">이용약관</p>
                        <p className="pilsu">(필수)</p>
                    </div>
                    <div className="termbox">
                        <input type="checkbox" className="termbox-check"/>
                        <p className="termbox-p">개인정보 수집 및 이용동의</p>
                        <p className="pilsu">(필수)</p>
                    </div>
                    <div className="termbox">
                        <input type="checkbox" className="termbox-check"/>
                        <p className="termbox-p">개인정보 마케팅 및 활용동의</p>
                        <p className="choice">(선택)</p>
                    </div>
                    <div className="termbox">
                        <input type="checkbox" className="termbox-check"/>
                        <p className="termbox-p">
                            이벤트, 쿠폰, 특가, 알림 메일 및 SMS 등 수신
                        </p>
                        <p className="choice">(선택)</p>
                    </div>
                </label>
            </div>
            <button className="signup-button" onClick={signup}>회원가입하기</button>
            <p className="have-you-id">
                이미 아이디가 있으신가요? <Link to="/login">로그인</Link>
            </p>
        </div>
    </>);
}
