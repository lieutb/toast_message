function toast({ title = '', message = '', type = 'Success', duration = 3000 }) {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const main = $('#toast')

    if (main) {
        const icon = {
            success: 'fa-check-circle',
            error: 'fa-times-circle',
            warning: 'fa-exclamation-triangle'
        }
        const delay = (duration / 1000).toFixed(2)
        const toast = document.createElement('div')

        toast.classList.add('toast', type)
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear .5s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast-icon"><i class="fas ${icon[type]}"></i></div>
            <div class="toast-content">
                <h2 class="toast-title">${title}</h2>
                <h3 class="toast-desc">${message}</h3>
            </div>
            <div class="toast-close"><i class="fas fa-times"></i></div>
        `
        main.append(toast)

        setTimeout(() => {
            main.removeChild(toast)
        }, duration + 1000);
    }
}

function showSuccess() {
    toast({
        title: 'Success',
        message: 'Success Almost before we knew it, we had left the ground',
        type: 'success',
        duration: 3000
    })
}

function showError() {
    toast({
        title: 'Error',
        message: 'Error Almost before we knew it, we had left the ground',
        type: 'error',
        duration: 3000
    })
}

function showWarning() {
    toast({
        title: 'Warning',
        message: 'Warning Almost before we knew it, we had left the ground',
        type: 'warning',
        duration: 3000
    })
}