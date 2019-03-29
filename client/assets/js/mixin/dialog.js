/**
 * @file description
 * @author email
 */
export default {
    model: {
        prop: 'dialogData',
        event: 'change'
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        dialogData: {
            type: Object,
            default() {
                return {};
            }
        },
        command: {
            type: String,
            default: 'showDetail'
        }
    },
    data() {
        return {
            show: false,
            copyiedData: {}
        };
    },
    methods: {
        open() {
            this.show = true;
        },
        close() {
            this.show = false;
        },
        fetchParent() {
            this.close();
            this.$parent.fetch();
        },
        getUpdatedAttrs() {
            let data = this.dialogData;
            let copiedData = this.copyiedData;
            let attrs = {};
            for (let key in data) {
                if (data[key] !== copiedData[key]) {
                    attrs[key] = data[key];
                }
            }

            return attrs;
        },
        handleSureEvent() {
            this.$emit('okBtnClicked');
        }
    }
};
