const baseUrl = '/jn-scratch/lib/monacoeditorwork'

window.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        if (label === 'json') {
            return `${baseUrl}/json.worker.bundle.js`
        }
        if (label === 'typescript' || label === 'javascript') {
            return `${baseUrl}/ts.worker.bundle.js`
        }
        return `${baseUrl}/editor.worker.bundle.js`
    }
}
