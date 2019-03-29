<template>
    <div class="file-uploader">
		<uploader :options="uploaderOptions"
                  :file-status-text="statusText"
                  @file-success="handleFileUploadedSuccess"
                  @file-error="handleFileUploadedError"
                  @file-complete="handleFileUploadedComplete"
                  @file-progress="handleFileProgress"
		>
			<slot></slot>
		</uploader>
    </div>
</template>

<script>
let fileServer = '/api/fileserver?method=putfile&space=hpthindtest';
let uuid = null;
export default {
    name: 'file-uploader',
    components: {},
	props: {
		options: {
			type: Object,
			default() {
				return {};
			}
		},
        statusText: {
            type: Object,
            default() {
                return {
                    success: '上传成功',
                    error: '上传失败',
                    uploading: '正在上传',
                    paused: '暂停中',
                    waiting: '等待中'
                };
            }
        }
	},
	data() {
    	return {
            uploaderOptions: {
    	        target: fileServer,
                chunkSize: 1024 * 1024 * 1024, // 默认分片1G
                withCredentials: true,
                maxChunkRetries: 10,
                chunkRetryInterval: 2000,
                simultaneousUploads: 1,
                fileParameterName: 'data',
                testChunks: false,
                processResponse(response, cb) {
                    uuid = response;
                    cb(null, response);
                },
                processParams(params) {
                    let offset = 0;
                    let chunkNumber = params.chunkNumber;
                    let chunkSize = params.chunkSize;
                    let filename = params.filename;
                    let args = {};
                    offset += (chunkNumber - 1) * chunkSize;
                    args.file = filename;
                    if (chunkNumber > 1) {
                        args.offset = offset;
                        args.uuid = uuid;
                    }
                    this.target = fileServer;
                    for (let key in args) {
                        this.target += `&${key}=${args[key]}`;
                    }
                    return {};
                }
            }
        };
	},
    methods: {
        handleFileUploadedCatchAll(err) {
            this.$emit('file-catch-all', ...arguments);
        },
        handleBeforeFileUpload(file) {
            this.$emit('file-uploaded', ...arguments);
        },
        handleFileUploadedSuccess(rootFile, file, message, chunk) {
            this.$emit('file-success', ...arguments);
        },
        handleFileUploadedComplete(rootFile) {
            this.$emit('file-complete', ...arguments);
        },
        handleFileProgress(rootFile, file, chunk) {
            this.$emit('file-progress', ...arguments);
        },
        handleFileUploadedError(rootFile, file, message, chunk) {
            this.$emit('file-error', ...arguments);
        }
    },
	mounted() {
        this.$nextTick(() => {
            let defaultOptions = this.uploaderOptions;
            this.uploaderOptions = Object.assign({}, defaultOptions, this.options);
            if (!this.uploaderOptions.target) {
                this.$message.error('没有指定上传地址');
                return false;
            }
        });
	}
};
</script>

<style lang="less" scoped>
.file-uploader {
	.uploader-btn {
		padding: 4px 5px;
		border: 1px solid #dcdfe6;
		color: #606266;
		font-weight: 500;
		border-radius: 3px;
        &:hover{
            background: rgba(78, 195, 180, 0.4) !important;
        }
	}
}
</style>
