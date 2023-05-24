<template>
    <div>
        <div class="container">
            <div class="slide-container">
                <div class="slide-image" v-for="(data, idx) in imgList" :key="idx">
                    <img :src="data" alt="">
                </div>


            </div>
            <div class="slide-container-bottom"></div>
        </div>

        <div>
            <div>여행지 : {{ place.title }}</div>
            <div>시도 : {{ place.sidoName }}</div>
            <div>구군 : {{ place.gugunName }}</div>
            <div>여행지 정보 : {{ detail.expguide }}</div>
            <div>휴무일 : {{ detail.restdate }}</div>
            <div class="button_base_in b11_3d_jumpback" style="margin-top: 10px" data-target="#myModal">
                <div>Review 작성</div>
            </div>
        </div>

    </div>
</template>

<script>

import axios from "axios";
const addr = "http://localhost:80/place/";

export default {
    data() {
        return {
            imgList: [],
        };
    },
    props: {
        detail: {
            contentid: Number,
            contenttypeid: String,
            heritage1: String,
            heritage2: String,
            heritage3: String,
            infocenter: String,
            opendate: String,
            restdate: String,
            expguide: String,
            expagerange: String,
            accomcount: String,
            useseason: String,
            usetime: String,
            parking: String,
            chkbabycarriage: String,
            chkpet: String,
            chkcreditcard: String,
        },
        place: {
            gugunName: String,
            sidoName: String,
            title: String,
            contentId: Number,
        },
    },
    created() {
        axios
            .get(addr + this.place.contentId + '/images')
            .then((response) => {
                this.imgList = response.data;
                console.log(this.imgList);
            })
            .catch((error) => {
                console.dir(error);
            });
    }

};
</script>

<style scoped>
.button_base_in {
    border: 0;
    font-size: 18px;
    position: relative;
    top: 50%;
    left: 50%;
    /* margin-top: -25px; */
    margin-left: -100px;
    width: 200px;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-user-select: none;
    cursor: default;
}

.button_base {
    border: 0;
    font-size: 18px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -100px;
    width: 200px;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-user-select: none;
    cursor: default;
}

.button_base:hover {
    cursor: pointer;
}

/* ### ### ### 11 */
.b11_3d_jumpback {
    perspective: 500px;
    -webkit-perspective: 500px;
    -moz-perspective: 500px;
}

.b11_3d_jumpback div {
    color: #000000;
    background-color: #ffffff;
    border: #000000 solid 1px;
    padding: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.b11_3d_jumpback:hover div {
    color: #ffffff;
    background-color: #000000;
    animation: b11_3d_jump 0.3s ease-out;
    -webkit-animation: b11_3d_jump 0.3s ease-out;
    -moz-animation: b11_3d_jump 0.3s ease-out;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
}

@-webkit-keyframes b11_3d_jump {
    from {
        transform: translateZ(0px) rotateX(0deg);
        -webkit-transform: translateZ(0px) rotateX(0deg);
        -moz-transform: translateZ(0px) rotateX(0deg);
        background-color: #ffffff;
        color: #000000;
    }

    49.99% {
        transform: translateZ(100px) rotateX(90deg);
        -webkit-transform: translateZ(100px) rotateX(90deg);
        -moz-transform: translateZ(100px) rotateX(90deg);
        background-color: #808080;
        color: #000000;
    }

    50.00% {
        transform: translateZ(100px) rotateX(-90deg);
        -webkit-transform: translateZ(100px) rotateX(-90deg);
        -moz-transform: translateZ(100px) rotateX(-90deg);
        background-color: #000000;
        color: #808080;
    }

    to {
        transform: translateZ(0px) rotateX(0deg);
        -webkit-transform: translateZ(0px) rotateX(0deg);
        -moz-transform: translateZ(0px) rotateX(0deg);
        background-color: #000000;
        color: #ffffff;
    }
}

@-moz-keyframes b11_3d_jump {
    from {
        transform: translateZ(0px) rotateX(0deg);
        -webkit-transform: translateZ(0px) rotateX(0deg);
        -moz-transform: translateZ(0px) rotateX(0deg);
        background-color: #ffffff;
        color: #000000;
    }

    49.99% {
        transform: translateZ(100px) rotateX(90deg);
        -webkit-transform: translateZ(100px) rotateX(90deg);
        -moz-transform: translateZ(100px) rotateX(90deg);
        background-color: #808080;
        color: #000000;
    }

    50.00% {
        transform: translateZ(100px) rotateX(-90deg);
        -webkit-transform: translateZ(100px) rotateX(-90deg);
        -moz-transform: translateZ(100px) rotateX(-90deg);
        background-color: #000000;
        color: #808080;
    }

    to {
        transform: translateZ(0px) rotateX(0deg);
        -webkit-transform: translateZ(0px) rotateX(0deg);
        -moz-transform: translateZ(0px) rotateX(0deg);
        background-color: #000000;
        color: #ffffff;
    }
}



.container {
    position: relative;
    background-color: black;
    width: 400px;
    height: 400px;
    display: flex;
    overflow: hidden;
}

.slide-container {
    display: flex;
    justify-content: center;
    align-items: center;

    animation: loop 10s linear infinite;
}

/* 애니메이션 스탑 */
.container:hover>.slide-container {
    animation-play-state: paused;
}

.slide-image {
    width: 200px;
    height: 300px;
    margin: 5px;
    cursor: pointer;
    transition: transform 3s ease;
}

/* 이미지 hover시 커짐 */
.slide-image:hover {
    transform: scale(1.5);
}

.slide-image>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/*********** 필름 효과 ***********/
.container::before {
    content: '';
    position: absolute;
    top: 10px;
    width: 100%;
    height: 20px;
    background-image: linear-gradient(90deg,
            white 1%, black 1%,
            black 4%, white 4%,
            white 8%, black 8%,
            black 12%, white 12%,
            white 16%, black 16%,
            black 20%, white 20%,
            white 24%, black 24%,
            black 28%, white 28%,
            white 32%, black 32%,
            black 36%, white 36%,
            white 40%, black 40%,
            black 44%, white 44%,
            white 48%, black 48%,

            black 52%, white 52%,
            white 56%, black 56%,
            black 60%, white 60%,
            white 64%, black 64%,
            black 68%, white 68%,
            white 72%, black 72%,
            black 76%, white 76%,
            white 80%, black 80%,
            black 84%, white 84%,
            white 88%, black 88%,
            black 92%, white 92%,
            white 96%, black 96%,
            black 99%, white 99%);
}

.container::after {
    content: '';
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 20px;
    background-image: linear-gradient(90deg,
            white 1%, black 1%,
            black 4%, white 4%,
            white 8%, black 8%,
            black 12%, white 12%,
            white 16%, black 16%,
            black 20%, white 20%,
            white 24%, black 24%,
            black 28%, white 28%,
            white 32%, black 32%,
            black 36%, white 36%,
            white 40%, black 40%,
            black 44%, white 44%,
            white 48%, black 48%,

            black 52%, white 52%,
            white 56%, black 56%,
            black 60%, white 60%,
            white 64%, black 64%,
            black 68%, white 68%,
            white 72%, black 72%,
            black 76%, white 76%,
            white 80%, black 80%,
            black 84%, white 84%,
            white 88%, black 88%,
            black 92%, white 92%,
            white 96%, black 96%,
            black 99%, white 99%);
}

@keyframes loop {
    100% {
        transform: translateX(-100%);
    }
}

@-webkit-keyframes loop {
    100% {
        transform: translateX(-100%);
    }
}
</style> 

