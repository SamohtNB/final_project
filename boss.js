const app = Vue.createApp({
    data() {
        return {
            image: '/img/dragon.png',
            variants: [
              { id: 1344, color: 'rgb(125, 73, 192)', image: '/img/dragon.png' },
              { id: 1345, color: 'rgb(25, 24, 24)', image: '/img/wither.png' },
              { id: 1346, color: 'rgb(16, 79, 90)', image: '/img/warden.png' },
              { id: 1347, color: 'rgb(232, 240, 176)', image: '/img/guardian.png' },
              { id: 1348, color: 'transparent', image: '/img/herobrine.png' },
            ]
        }
    },
    methods: {
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
