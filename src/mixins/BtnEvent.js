import router from '@/router'

export default {
    data: () => ({
        btnEventsCurrentPathNum: 0
    }),
    computed: {
        btnEventsRouterPaths: function () {
            return ["profile", "works", "slides"];
        },
        btnEventsRouterPathsLen: function () {
            return this.btnEventsRouterPaths.length;
        },
    },
    methods: {
        btnEventsGetRouterPath(num) {
            const paths = this.btnEventsRouterPaths;
            return paths[num];
        },
        btnEventsPrev() {
            this.btnEventsCurrentPathNum -= 1;
            if (this.btnEventsCurrentPathNum < 0) {
                this.btnEventsCurrentPathNum = 0;
            } else {
                router.push(this.btnEventsGetRouterPath(this.btnEventsCurrentPathNum));
            }
        },
        btnEventsNext() {
            this.btnEventsCurrentPathNum += 1;
            if (this.btnEventsCurrentPathNum >= this.btnEventsRouterPathsLen) {
                this.btnEventsCurrentPathNum = this.btnEventsRouterPathsLen - 1
            } else {
                router.push(this.btnEventsGetRouterPath(this.btnEventsCurrentPathNum))
            }
        },
        btnEventsMove(e) {
            switch (e.code) {
                case 'ArrowUp':
                    this.btnEventsPrev();
                    break;
                case 'ArrowDown':
                    this.btnEventsNext();
                    break;
            }
        },
        btnEventsInit() {
            this.btnEventsCurrentPathNum = this.btnEventsRouterPaths.indexOf(this.$route.path.slice(1));
            document.addEventListener("keydown", this.btnEventsMove);
        }
    },
}