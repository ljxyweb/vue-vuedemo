<template>
    <div>
        <h6>当前路径：{{path}}
            <button class="but-return" @click="goBack" v-show="path!=='/'">返回</button>
        </h6>
        <ul class="fa-ul">
            <li v-for="item in sortedFiles">
                <template v-if="item.type==='dir'">
                    <i class="fa-li fa fa-folder black"></i>
                    <a href="#" @click="changePath(item.path)">{{item.name}}</a>
                </template>
                <template v-else-if="item.type==='file'">
                    <i class="fa-li fa fa-file-text-o white"></i>{{item.name}}
                    <a :href="item.download_url" class="fa fa-download download" download></a>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "FileExplorer",
    props: {
        fullRepoUrl: {
            type: String,
            required: true
        }
    },
    data: function() {
        return {
            path: "/",
            files: []
        }
    },
    computed: {
        sortedFiles() {
            return this.files.slice(0).sort(function(a, b) {
                if (a.type !== b.type) {
                    if (a.type === 'dir') {
                        return -1
                    } else {
                        return 1
                    }
                } else {
                    if (a.name < b.name) {
                        return -1
                    } else {
                        return 1
                    }
                }
            })
        }
    },
    methods: {
        getFiles() {
            this.$htttp.get('https://api.github.com/repos/' + this.fullRepoUrl + '/contents' + this.path)
                .then(response => {
                    this.files = response.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        changePath(path) {
            this.path = '/' + path
            this.getFiles()
        },
        goBack() {
            this.path = this.path.split('/').slice(0, -1).join('/')
            if (this.path === '') this.path = '/'
            this.getFiles()
        },

    },
    watch: {
        fullRepoUrl(newVal, oldVal) {
            this.path = '/';
            this.files = [];
            this.getFiles()
        }
    }
}
</script>

<style scoped>
h6 {
    font-size: 14px;
    line-height: 2.5;
    border-bottom: 2px solid #e3e3e3;
    margin: 10px 0;
}

.but-return {
    width: 100px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #fff;
    background-color: #38b9a6;
    float: right;
    border: none;
    border-radius: 5px;
}

li {
    font-size: 14px;
    color: #3777ab;
    line-height: 30px;
    border-bottom: 1px solid #eee;
}

a {
    text-decoration: none;
    color: #3777ab;
}

li>i {
    padding-top: 7px;
}

li>i.black {
    color: black;
}

li>i.white {
    color: gray;
}

li>a.download {
    float: right;
    padding-top: 8px;
    padding-right: 5px;
    color: #14b3c7;
}
</style>

