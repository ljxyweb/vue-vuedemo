<template>
    <div class="container">
        <h3>GitHub项目浏览器</h3>
        <div class="searchBox">
            <label for="search" class="searchBox-name"> Full Repo Name</label>
            <input type="text" placeholder="ljxyweb/plugins" class="searchBox-input" id="search" v-model="fullRepoName">
            <button class="search-but" @click="changeRepo">获 取</button>
        </div>
        <file-explorer :fullRepoUrl="fullRepoUrl"></file-explorer>
    </div>
</template>

<script>
import FileExplorer from "./components/FileExplorer.vue"
export default {
    name: 'Github',
    data: function() {
        return {
            fullRepoName: '',
            fullRepoUrl: ''
        }
    },
    components: {
        FileExplorer
    },
    methods: {
        changeRepo() {
            if (this.fullRepoName !== "") {
                this.fullRepoUrl = this.fullRepoName;
            }

        }
    }
}
</script>

<style scoped>
.container {
    padding: 0 40px;
}

.searchBox {
    padding: 15px 0;
}

.searchBox-name {
    font-size: 14px;
    color: black;
    margin-right: 10px;
    line-height: 32px;
}

.searchBox-input {
    font-size: 14px;
    line-height: 20px;
    padding: 5px 15px;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    width: 300px;
}

.search-but {
    width: 100px;
    height: 32px;
    background-color: #28608f;
    color: #fff;
    font-size: 14px;
    line-height: 32px;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
}

.search-but:hover {
    cursor: pointer;
    opacity: 0.7;
}
</style>

<style>
h3 {
    font-size: 28px;
    line-height: 1.5;
    color: #000;
    border-bottom: 1px solid #eee;
}

button:hover {
    cursor: pointer;
    opacity: 0.7;
}
</style>