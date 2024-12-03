export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increase() {
            this.count++;
        },
        decrease() {
            // counter 숫자가 0 이하로 내려가지 않도록.
            if (this.count === 0) return;
            this.count--;
        },
    },
}