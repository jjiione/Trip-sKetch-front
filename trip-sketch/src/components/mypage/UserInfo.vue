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
              <label for="name" class="form-label mt-4">이름</label>
            </dt>
            <dd>
              <input
                type="text"
                class="form-control w-100"
                id="name"
                aria-describedby="emailHelp"
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
                id="exampleInputEmail"
                aria-describedby="emailHelp"
              />
            </dd>
          </dl>
        </div>
        <div class="form-group has-success">
          <dl>
            <dt>
              <label class="form-label" for="inputValid">비밀번호</label>
            </dt>
            <dd>
              <input type="password" class="form-control is-valid w-100" id="inputValid" />
            </dd>
          </dl>
        </div>

        <div class="form-group has-danger">
          <dl>
            <dt>
              <label class="form-label" for="inputInvalid">비밀번호 재확인</label>
            </dt>
            <dd>
              <input type="password" class="form-control is-invalid w-100" id="inputInvalid" />
            </dd>
          </dl>
        </div>
        <div class="bir_wrap">
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
        </div>
        <div class="form-group">
          <dl>
            <dt>
              <label for="exampleSelect1" class="form-label">비밀번호 확인 질문</label>
            </dt>
            <dd>
              <select class="form-control" id="exampleSelect1">
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
                id=""
                placeholder="비밀번호 확인 질문 답변"
              />
            </dd>
          </dl>
        </div>
        <div class="d-grid gap-2 text-center">
          <button
            class="btn btn-primary btn-lg"
            type="button"
            style="background-color: cornflowerblue"
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

<script>
export default {
  name: "UserInfo",
};
</script>
<style>
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
