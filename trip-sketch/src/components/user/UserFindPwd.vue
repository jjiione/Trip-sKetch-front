<template>
  <div id="user-login-top">
    <div id="user-login-form">
      <form class="form-signin" style="margin-top: 5%" @submit.prevent="onSubmit" v-if="initFlag">
        <img
          class="mb-4"
          src="@/assets/tripsketch_logo-removebg-preview.png"
          alt=""
          width="60%"
          height=""
        />
        <h1 class="h3 mb-3 fw-normal" style="margin-top: 10px">비밀번호 찾기</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="userId"
            v-model="userinfo.userId"
            ref="userId"
            placeholder="아이디를 입력하세요"
          />
        </div>

        <div>
          <button
            class="w-100 btn btn-lg btn-primary"
            type="submit"
            style="background-color: black; height: min-content"
            @click="next"
          >
            다음
          </button>
        </div>
        <div class="pull-left" style="margin-top: 30px">
          <h6>
            <a href="#" class="link footer-link"
              ><router-link :to="{ name: 'usersignup' }" style="color: gray"
                >Create Account</router-link
              ></a
            >
          </h6>
        </div>
        <p class="mt-5 mb-3 text-muted">&copy; trip-sketch</p>
      </form>

      <form
        class="form-signin"
        style="margin-top: 5%"
        @submit.prevent="onSubmit"
        v-if="!IdNotFoundflag"
      >
        <img
          class="mb-4"
          src="@/assets/tripsketch_logo-removebg-preview.png"
          alt=""
          width="60%"
          height=""
        />
        <h1 class="h3 mb-3 fw-normal" style="margin-top: 10px">비밀번호 찾기</h1>

        <div class="form-floating">
          <select
            name="question"
            id="question"
            v-model="userinfo.question"
            ref="question"
            class="form-control"
          >
            <option value="" disabled selected>비밀번호 확인 질문을 선택하세요</option>
            <option value="기억에 남는 추억의 장소는?">기억에 남는 추억의 장소는?</option>
            <option value="자신의 인생 좌우명은?">자신의 인생 좌우명은?</option>
            <option value="가장 기억에 남는 선생님 성함은?">가장 기억에 남는 선생님 성함은?</option>
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
        </div>

        <div class="form-floating">
          <input
            type="text"
            placeholder="비밀번호 질문 답변"
            name="answer"
            id="answer"
            ref="answer"
            v-model="userinfo.answer"
            class="form-control"
          />
        </div>
        <div>
          <button
            class="w-100 btn btn-lg btn-primary"
            type="submit"
            style="background-color: black; height: min-content"
            @click="checkQuestion"
          >
            다음
          </button>
        </div>
        <div class="pull-left" style="margin-top: 30px">
          <h6>
            <a href="#" class="link footer-link"
              ><router-link :to="{ name: 'usersignup' }" style="color: gray"
                >Create Account</router-link
              ></a
            >
          </h6>
        </div>
        <p class="mt-5 mb-3 text-muted">&copy; trip-sketch</p>
      </form>

      <form
        class="form-signin"
        style="margin-top: 5%"
        @submit.prevent="onSubmit"
        v-if="!questionError"
      >
        <img
          class="mb-4"
          src="@/assets/tripsketch_logo-removebg-preview.png"
          alt=""
          width="60%"
          height=""
        />
        <h1 class="h3 mb-3 fw-normal" style="margin-top: 10px">비밀번호 찾기</h1>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="userPwd"
            v-model="userinfo.userPwd"
            ref="userPwd"
            placeholder="새 비밀번호"
          />
        </div>

        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="newUserPwd"
            v-model="userinfo.newUserPwd"
            ref="newUserPwd"
            placeholder="새 비밀번호 확인"
          />
        </div>

        <div>
          <button
            class="w-100 btn btn-lg btn-primary"
            type="submit"
            style="background-color: black; height: min-content"
            @click="resetpwd"
          >
            비밀번호 변경
          </button>
        </div>
        <div class="pull-left" style="margin-top: 30px">
          <h6>
            <a href="#" class="link footer-link"
              ><router-link :to="{ name: 'usersignup' }" style="color: gray"
                >Create Account</router-link
              ></a
            >
          </h6>
        </div>
        <p class="mt-5 mb-3 text-muted">&copy; trip-sketch</p>
      </form>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
export default {
  name: "UserFindPwd",
  data() {
    return {
      userinfo: {
        userId: "",
        userPwd: "",
        newUserPwd: "",
        question: "",
        answer: "",
      },
      initFlag: Boolean,
      IdNotFoundflag: Boolean,
    };
  },
  created() {
    this.initFlag = true;
    this.IdNotFoundflag = true;
    this.questionError = true;
  },
  methods: {
    next() {
      // 사용자 입력값 체크하기
      // 작성자아이디, 제목, 내용이 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = "";
      !this.userinfo.userId &&
        ((msg = "아이디를 입력해주세요"), (err = false), this.$refs.userId.focus());
      if (!err)
        Swal.fire({
          icon: "error",
          title: msg,
          // text: msg,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
      else this.findQuestion();
    },
    findQuestion() {
      // 비동기
      // TODO : 글번호에 해당하는 글정보 등록.
      let userinfo = new Array();
      if (localStorage.userinfo) userinfo = JSON.parse(localStorage.userinfo);
      userinfo.push(this.userinfo);
      localStorage.setItem("userinfo", JSON.stringify(userinfo));
      this.initFlag = false;
      this.IdNotFoundflag = false;
    },
    checkQuestion() {
      // 사용자 입력값 체크하기
      // 작성자아이디, 제목, 내용이 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = "";
      !this.userinfo.question &&
        ((msg = "비밀번호 찾기 질문을 선택해주세요"), (err = false), this.$refs.question.focus());
      err &&
        !this.userinfo.answer &&
        ((msg = "비밀번호 찾기 답변을 입력해주세요"), (err = false), this.$refs.answer.focus());
      if (!err)
        Swal.fire({
          icon: "error",
          title: msg,
          // text: msg,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
      else this.viewResetForm();
    },
    viewResetForm() {
      // 비동기
      // TODO : 글번호에 해당하는 글정보 등록.
      let userinfo = new Array();
      if (localStorage.userinfo) userinfo = JSON.parse(localStorage.userinfo);
      userinfo.push(this.userinfo);
      localStorage.setItem("userinfo", JSON.stringify(userinfo));
      this.IdNotFoundflag = true;
      this.questionError = false;
    },
    resetpwd() {
      let err = true;
      let msg = "";
      !this.userinfo.userPwd &&
        ((msg = "새 비밀번호를 입력해주세요"), (err = false), this.$refs.userPwd.focus());
      err &&
        !this.userinfo.newUserPwd &&
        ((msg = "비밀번호가 일치하지 않습니다"), (err = false), this.$refs.newUserPwd.focus());
      if (!err)
        Swal.fire({
          icon: "error",
          title: msg,
          // text: msg,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
      else {
        Swal.fire({
          title: "정말로 그렇게 하시겠습니까?",
          text: "다시 되돌릴 수 없습니다. 신중하세요.",
          icon: "warning",

          showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
          confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
          cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
          confirmButtonText: "승인", // confirm 버튼 텍스트 지정
          cancelButtonText: "취소", // cancel 버튼 텍스트 지정

          reverseButtons: true, // 버튼 순서 거꾸로
        }).then((result) => {
          // 만약 Promise리턴을 받으면,
          if (result.isConfirmed) {
            // 만약 모달창에서 confirm 버튼을 눌렀다면

            Swal.fire("승인이 완료되었습니다.", "", "success");
            this.$router.push({ name: "userlogin" });
          }
        });
      }
    },
  },
};
</script>

<style>
#user-login-top {
  background: url("@/assets/login.jpg");
  background-repeat: none;
  /* width: 100%; */
  height: 110vh;
  /* min-height: 100%; */
  background-size: cover;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#user-login-form {
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.form-floating label {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.form-floating label::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

.floatingInput {
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-bottom: 5px;
  transition: all 0.3s ease;
}

.form-floating input:focus {
  outline: none;
}
.form-floating input:focus + .label-name .floatingInput,
.form-floating input:valid + .label-name .floatingInput {
  transform: translateY(-150%);
  font-size: 14px;
  left: 0px;
}
.form-floating input:focus + .label-name::after,
.form-floating input:valid + .label-name::after {
  transform: translateX(0%);
}
.form-floating {
  margin-bottom: 10px;
  border-radius: 1px;
}
</style>
