<template>
    <div class="notice-and-hotsunrin main-page-item">
        <div class="main-page-content-wrap notice">
            <div class="main-page-item-title">
                <h3>공지</h3>

                <img
                    src="@/assets/more.svg"
                    alt="공지 더보기 버튼"
                    @click="$router.push({ name: 'notice' })"
                />
            </div>

            <div class="main-page-item-content">
                <div v-for="(i, j) in noticeMain" :key="j" class="notice-list">
                    <NoticeIcon :type="i.type" />
                    <p
                        class="title text-truncated"
                        @click="$router.push(`/notice/${i.id}`)"
                    >
                        {{ i.title }}
                    </p>
                </div>
            </div>
        </div>

        <div class="main-page-content-wrap hotsunrin">
            <div class="main-page-item-title">
                <h3>핫선린</h3>
                <router-link
                    :to="{ name: 'publicCommunity'}"
                >
                    <img src="@/assets/more.svg" alt="핫선린 더보기 버튼" />
                </router-link>
            </div>

            <div class="main-page-item-content">
                <div
                    v-for="(i, j) in boardData"
                    :key="j"
                    class="hotsunrin-list"
                    @click="
                        $router.push({
                            name: `postDetail`,
                            params: { postId: j },
                        })
                    "
                >
                    <div class="heart-count">{{ i.heartCount }}</div>
                    <p class="title text-truncated">{{ i.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NoticeIcon from "@/components/NoticeIcon";

import { mapState } from "vuex";

export default {
    name: "NoticeAndHotSunrin",
    data() {
        return {
            boardData: [
                {
                    heartCount: 13,
                    title: "선린인터넷고등학교 인트라넷 오픈(할 수 있는거죠...?)",
                    writer: "송우진",
                    timeStamp: new Date(),
                },
                {
                    heartCount: 13,
                    title: "선린인터넷고등학교 인트라넷 오픈(할 수 있는거죠...?)",
                    writer: "송우진",
                    timeStamp: new Date(),
                },
                {
                    heartCount: 13,
                    title: "선린인터넷고등학교 인트라넷 오픈(할 수 있는거죠...?)",
                    writer: "송우진",
                    timeStamp: new Date(),
                },
            ],
        };
    },
    methods: {},
    components: {
        ...mapState(["noticeMain"]),
        NoticeIcon,
    },
    mounted() {},
    computed: {
        ...mapState(["noticeMain"]),
    },
};
</script>

<style scoped>
.main-page-item-content {
    display: flex;
    flex-direction: column;
    gap: 9px;
}
.main-page-item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main-page-item-title img {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
    border-radius: 50%;
    cursor: pointer;
}

.main-page-content-wrap {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 8px;
}

.notice-list {
    display: flex;
    height: 30px;
    gap: 12px;
    cursor: pointer;
    align-items: center;
}

.notice-list .title {
    flex: 1;
    font-weight:500;
}
.notice-list .title:hover {
    text-decoration: underline;
}

.hotsunrin-list {
    padding: 0 8px;
    height: 25px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight:500;
    cursor: pointer;
}

.hotsunrin-list .title:hover {
    text-decoration: underline;
}

.hotsunrin-list .heart-count {
    color: #ff4949;
    font-size: 12px;
    font-weight: bold;
}

.hotsunrin-list .heart-count {
    color: #ff4949;
    font-size: 12px;
    font-weight: bold;
}

.notice-list:last-child,
.hotsunrin-list:last-child {
    margin-bottom: 0px;
}
</style>
