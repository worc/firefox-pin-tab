document.addEventListener('keydown', function (event) {
    const chordHit = event.ctrlKey && event.shiftKey && event.code === 'Period'

    if (chordHit) {
        browser.runtime.sendMessage({ type: 'TOGGLE_ACTIVE_TAB_PINNED' })

    }
})
