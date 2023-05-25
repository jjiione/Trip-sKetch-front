<template>
  <section class="bg-light">
    <div class="container py-4">
      <div class="text-center">
        <span class="h1 text-center text-dark">회원 정보</span>
      </div>
      <form>
        <div class="form-group">
          <dl>
            <dt>
              <label for="userName" class="form-label mt-4">이름</label>
            </dt>
            <dd>
              <input
                type="text"
                class="form-control w-100"
                id="userName"
                aria-describedby="emailHelp"
                v-model="user.userName"
                ref="userName"
              />
            </dd>
          </dl>
        </div>
        <div class="form-group">
          <dl>
            <dt>
              <label for="userId" class="form-label">아이디</label>
            </dt>
            <dd>
              <input
                type="text"
                class="form-control w-100"
                id="userId"
                aria-describedby="emailHelp"
                v-model="user.userId"
                readonly
                ref="userId"
              />
            </dd>
          </dl>
        </div>
        <div class="form-group">
          <dl>
            <dt>
              <label class="form-label" for="userPwd">비밀번호</label>
            </dt>
            <dd>
              <input
                type="password"
                class="form-control is-valid w-100"
                id="userPwd"
                name="userPwd"
                v-model="user.userPwd"
                ref="userPwd"
                @blur="pwdCheck"
              />
            </dd>
          </dl>
        </div>

        <div class="form-group">
          <dl>
            <dt>
              <label class="form-label" for="confirmPwd">비밀번호 재확인</label>
            </dt>
            <dd>
              <input
                type="password"
                class="form-control w-100"
                id="confirmPwd"
                name="confirmPwd"
                v-model="confirmPwd"
                @blur="confirmPwdCheck"
              />
            </dd>
          </dl>
        </div>
        <div class="form-group">
          <dl>
            <dt>
              <label for="userEmail" class="form-label">이메일</label>
            </dt>
            <dd>
              <input
                type="text"
                class="form-control w-100"
                id="email"
                aria-describedby="emailHelp"
                v-model="user.email"
                ref="email"
              />
            </dd>
          </dl>
        </div>
        <!-- <div class="bir_wrap">
					<dl>
						<dt>
							<label class="form-label">생년월일</label>
						</dt>
						<dd>
							<div class="bir_yy">
								<span class="ps_box">
									<input
										type="text"
										class="form-control"
										id="yy"
										placeholder="년(4자)"
										maxlength="4"
									/>
								</span>
							</div>
							<div class="bir_mm">
								<span class="ps_box focus">
									<select class="form-control" id="mm">
										<option>월</option>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8</option>
										<option>9</option>
										<option>10</option>
										<option>11</option>
										<option>12</option>
									</select>
								</span>
							</div>
							<div class="bir_dd">
								<span class="ps_box">
									<input type="text" class="form-control" id="dd" placeholder="일" maxlength="2" />
								</span>
							</div>
						</dd>
					</dl>
				</div> -->
        <div class="">
          <dl>
            <dt>
              <label for="question" class="form-label">비밀번호 확인 질문</label>
            </dt>
            <dd>
              <select class="form-control" id="question" v-model="user.question" ref="question">
                <option value="" disabled selected>비밀번호 확인 질문을 선택하세요</option>
                <option value="기억에 남는 추억의 장소는?">기억에 남는 추억의 장소는?</option>
                <option value="자신의 인생 좌우명은?">자신의 인생 좌우명은?</option>
                <option value="가장 기억에 남는 선생님 성함은?">
                  가장 기억에 남는 선생님 성함은?
                </option>
                <option value="타인이 모르는 자신만의 신체비밀이 있다면?">
                  타인이 모르는 자신만의 신체비밀이 있다면?
                </option>
                <option value="추억하고 싶은 날짜가 있다면?">추억하고 싶은 날짜가 있다면?</option>
                <option value="받았던 선물 중 기억에 남는 독특한 선물은?">
                  받았던 선물 중 기억에 남는 독특한 선물은?
                </option>
                <option value="유년시절 가장 생각나는 친구 이름은?">
                  유년시절 가장 생각나는 친구 이름은?
                </option>
                <option value="인상 깊게 읽은 책 이름은?">인상 깊게 읽은 책 이름은?</option>
                <option value="자신이 두번째로 존경하는 인물은?">
                  자신이 두번째로 존경하는 인물은?
                </option>
                <option value="친구들에게 공개하지 않은 어릴 적 별명이 있다면?">
                  친구들에게 공개하지 않은 어릴 적 별명이 있다면?
                </option>
                <option value="초등학교 때 기억에 남는 짝꿍 이름은?">
                  초등학교 때 기억에 남는 짝꿍 이름은?
                </option>
                <option value="다시 태어나면 되고 싶은 것은?">다시 태어나면 되고 싶은 것은?</option>
                <option value="내가 좋아하는 캐릭터는?">내가 좋아하는 캐릭터는?</option>
              </select>
              <input
                type="text"
                class="form-control w-100"
                id="answer"
                placeholder="비밀번호 확인 질문 답변"
                v-model="user.answer"
                ref="answer"
              />
            </dd>
          </dl>
        </div>
        <div class="d-grid gap-2 text-center">
          <button
            class="btn btn-primary btn-lg"
            type="button"
            style="background-color: cornflowerblue"
            @click="modify"
          >
            수정하기
          </button>
          <!-- <button
            class="btn btn-primary btn-lg danger"
            type="button"
            style="float: right; background-color: red"
          >
            취소
          </button> -->
        </div>
      </form>
    </div>
  </section>
</template>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
import { mapState } from "vuex";
import axios from "axios";
const memberStore = "memberStore";
const url = "http://localhost:80/mypage/userinfo";
export default {
  name: "UserInfo",
  data() {
    return {
      user: Object,
      confirmPwd: "",
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  created() {
    this.user = this.userInfo;
    this.confirmPwd = this.userInfo.userPwd;
  },
  methods: {
    async modify() {
      if (!this.pwdCheck()) return;
      if (!this.confirmPwdCheck()) return;
      let err = true;
      let msg = "";
      !this.user.userName &&
        ((msg = "이름을 입력해주세요"), (err = false), this.$refs.userName.focus());
      err &&
        !this.user.email &&
        ((msg = "이메일을 입력해주세요"), (err = false), this.$refs.email.focus());
      err &&
        !this.user.userId &&
        ((msg = "아이디를 입력해주세요"), (err = false), this.$refs.userId.focus());
      err &&
        !this.user.userPwd &&
        ((msg = "비밀번호를 입력해주세요"), (err = false), this.$refs.userPwd.focus());
      err &&
        !this.user.question &&
        ((msg = "비밀번호 확인 질문을 입력해주세요"), (err = false), this.$refs.question.focus());
      err &&
        !this.user.answer &&
        ((msg = "비밀번호 질문 답변을 입력해주세요"), (err = false), this.$refs.answer.focus());

      if (!err) {
        alert(msg);
        return;
      }
      //   if (this.confirmPwd != this.user.userPwd) {
      //     alert("비밀번호가 일치하지 않습니다.");
      //     return;
      //   }
      // 비동기
      await axios.put(url, {
        userName: this.user.userName,
        email: this.user.email,
        userId: this.user.userId,
        userPwd: this.user.userPwd,
        answer: this.user.answer,
        question: this.user.question,
      });
      // this.$router.push({ name: "MainPage" });
      const Toast = Swal.mixin({
        toast: true,
        position: "center-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "회원 정보 수정 완료",
        timer: 1300,
        position: "center",
      });
    },
    pwdCheck() {
      if (this.user.userPwd.length < 8) {
        document.getElementById("userPwd").className = "form-control is-invalid w-100";
        alert("비밀번호를 8자리 이상 입력하세요.");
        return false;
      }
      //비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
      var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

      if (!pwdCheck.test(this.user.userPwd)) {
        document.getElementById("userPwd").className = "form-control is-invalid w-100";
        alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
        return false;
      }

      document.getElementById("userPwd").className = "form-control is-valid w-100";
      return true;
    },
    confirmPwdCheck() {
      if (this.confirmPwd != this.user.userPwd) {
        document.getElementById("confirmPwd").className = "form-control is-invalid w-100";
        alert("비밀번호가 일치하지 않습니다.");
        return false;
      } else {
        document.getElementById("confirmPwd").className = "form-control is-valid w-100";
        return true;
      }
    },
  },
};
</script>
<style scoped>
* {
  color: black;
}
.bg-light {
  height: 1053px;
  padding-top: 55px;
  padding-bottom: 75px;
}
.flex-fill.mx-xl-5.mb-2 {
  margin: 0 auto;
  width: 700px;
  padding-right: 7rem;
  padding-left: 7rem;
}
.container.py-4 {
  margin: 0 auto;
  width: 503px;
}
.d-grid.gap-2 {
  padding-top: 30px;
}

.bir_yy,
.bir_mm,
.bir_dd {
  width: 160px;
  display: table-cell;
}
.bir_mm + .bir_dd,
.bir_yy + .bir_mm {
  padding-left: 10px;
}
</style>
