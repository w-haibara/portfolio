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
        pageScrollRouterPathsNum: function () {
            return this.pageScrollRouterPaths.length;
        },
        pageScrollWheelAccuracy: function () {
            return 100
        },
        pageScrollTh: function () {
            return 8;
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
            if (this.pageScrollCurrentPathNum >= this.pageScrollRouterPathsNum) {
                this.pageScrollCurrentPathNum = this.pageScrollRouterPathsNum - 1
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
        pageScrollWheelMove(event) {
            event.preventDefault();
            const y = event.deltaY / this.pageScrollWheelAccuracy;
            if (this.pageScrollCurrentPathNum == 0) {
                this.pageScrollY = Math.max(this.pageScrollY + y, 0);
            } else if (this.pageScrollCurrentPathNum == this.pageScrollRouterPathsNum - 1) {
                this.pageScrollY = Math.min(this.pageScrollY + y, this.pageScrollY + this.pageScrollTh);
            } else {
                this.pageScrollY += y;
            }
            if (this.pageScrollY < this.pageScrollTh * Math.max(this.pageScrollCurrentPathNum, 0)) {
                this.pageScrollPrev();
            } else if (this.pageScrollY > this.pageScrollTh * Math.min(this.pageScrollCurrentPathNum + 1, this.pageScrollRouterPathsNum)) {
                this.pageScrollNext();
            }
        },
        pageScrollInit() {
            this.pageScrollCurrentPathNum = this.pageScrollRouterPaths.indexOf(this.$route.path.slice(1));
            this.pageScrollY = this.pageScrollTh * this.pageScrollCurrentPathNum;
            document.addEventListener("keydown", this.pageScrollKeyMove);
            document.addEventListener("wheel", this.pageScrollWheelMove, { passive: false });
        }
    },
}