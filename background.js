chrome.action.onClicked.addListener(async (tab) => {
  const { prefix } = await chrome.storage.sync.get({ prefix: "" });
  if (!prefix) {
    chrome.runtime.openOptionsPage();
    return;
  }
  let newUrl = prefix + tab.url;
  if (!/^https?:\/\//i.test(newUrl)) {
    newUrl = "https://" + newUrl;
  }
  chrome.tabs.update(tab.id, { url: newUrl });
});
