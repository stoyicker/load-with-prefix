const input = document.getElementById("prefix");
const status = document.getElementById("status");

chrome.storage.sync.get({ prefix: "" }, ({ prefix }) => {
  input.value = prefix;
});

let timer;
input.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    chrome.storage.sync.set({ prefix: input.value }, () => {
      status.textContent = "Saved";
      setTimeout(() => { status.textContent = ""; }, 1500);
    });
  }, 400);
});
