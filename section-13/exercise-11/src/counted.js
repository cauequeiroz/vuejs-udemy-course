export const counted = {
    data() {
        text: 'global'
    },
    computed: {
        counted() {
            return `${this.text} (${this.text.length})`;
        }
    }
}