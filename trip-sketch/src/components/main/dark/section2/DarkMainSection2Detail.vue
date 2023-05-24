<template>
    <div>

        <div class="container">
            <div class="slide-container">
                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="">
                </div>

                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
                        alt="">
                </div>

                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
                        alt="">
                </div>

                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
                        alt="">
                </div>

                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fCVFQSVCMyVBMCVFQyU5NiU5MSVFQyU5RCVCNHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
                        alt="">
                </div>
            </div>

            <div class="slide-container">
                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="">
                </div>

                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
                        alt="">
                </div>

                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
                        alt="">
                </div>

                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
                        alt="">
                </div>

                <div class="slide-image">
                    <img src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fCVFQSVCMyVBMCVFQyU5NiU5MSVFQyU5RCVCNHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
                        alt="">
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
            <div class="button_base_in b11_3d_jumpback" @click="showmodal" style="margin-top: 10px" data-toggle="modal"
                data-target="#myModal">
                <div>Detail</div>
            </div>
        </div>

    </div>
</template>

<script>



export default {
    data() {
        return {};
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

    animation: loop 3s linear infinite;
}

/* 애니메이션 스탑 */
.container:hover>.slide-container {
    animation-play-state: paused;
}

.slide-image {
    width: 100px;
    height: 100px;
    margin: 5px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

/* 이미지 hover시 커짐 */
.slide-image:hover {
    transform: scale(1.1);
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

