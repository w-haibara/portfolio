import router from '@/router'

export default {
    data: () => ({
        pageScrollCurrentPathNum: 0,
        pageScrollY: 0,
        pageScrollPreY: 0,
    }),
    computed: {
        pageScrollRouterPaths: function () {
            return ["profile", "works", "slides"];
        },
        pageScrollRouterPathsLen: function () {
            return this.pageScrollRouterPaths.length;
        },
    },
    methods: {
        pageScrollGetRouterPath(num) {
            const paths = this.pageScrollRouterPaths;
            return paths[num];
        },
        pageScrollPrev() {
            this.pageScrollCurrentPathNum -= 1;
            if (this.pageScrollCurrentPathNum < 0) {
                this.pageScrollCurrentPathNum = 0;
            } else {
                router.push(this.pageScrollGetRouterPath(this.pageScrollCurrentPathNum));
            }
        },
        pageScrollNext() {
            this.pageScrollCurrentPathNum += 1;
            if (this.pageScrollCurrentPathNum >= this.pageScrollRouterPathsLen) {
                this.pageScrollCurrentPathNum = this.pageScrollRouterPathsLen - 1
            } else {
                router.push(this.pageScrollGetRouterPath(this.pageScrollCurrentPathNum))
            }
        },
        pageScrollKeyMove(e) {
            switch (e.code) {
                case 'ArrowUp':
                    this.pageScrollPrev();
                    break;
                case 'ArrowDown':
                    this.pageScrollNext();
                    break;
            }
        },
        pageScrollWheelMove(y) {
            const th = 370;
            if (y < -th) {
                this.pageScrollY = 0;
                this.pageScrollPrev();
            } else if (y > th) {
                this.pageScrollY = 0;
                this.pageScrollNext();
            }
        },
        pageScrollIntegral(event) {
            event.preventDefault();
            const y = event.deltaY;
            if (y * this.pageScrollPreY >= 0) {
                this.pageScrollY += y;
            }
            this.pageScrollPreY = y;
            this.pageScrollWheelMove(this.pageScrollY);
        },
        pageScrollInit() {
            this.pageScrollCurrentPathNum = this.pageScrollRouterPaths.indexOf(this.$route.path.slice(1));
            document.addEventListener("keydown", this.pageScrollKeyMove);
            document.addEventListener("wheel", this.pageScrollIntegral, { passive: false });
        }
    },
}