browser.runtime.onMessage.addListener(function (event) {
    if (event.type === 'TOGGLE_ACTIVE_TAB_PINNED') {
        console.log('gonna pin or unpin this tab')
        browser.tabs.query({ currentWindow: true, active: true }).then(function (tabs) {
            const activeTab = tabs[0]
            browser.tabs.update(activeTab.id, { pinned: !activeTab.pinned })
        }).catch(function (error) {
            console.error(error)
        })
    }    
})
