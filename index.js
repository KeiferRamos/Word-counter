const message = document.getElementById("text-generator");
const countEl = document.getElementById("word-count");

message.addEventListener("input", () => replaceText(message.value));

function replaceText(message) {
  const result = message.replace(/[,,:,.,?,!,",;]/g, " ");
  const count = result.split(" ").filter((n) => n).length;
  countEl.textContent = `Word Count : ${count}`;
}
