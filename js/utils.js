function showMessage(text, type = "info") {
  const el = document.getElementById("message");
  if (!el) return;

  el.classList.remove("hidden");

  if (type === "error") {
    el.className = "mt-4 px-4 py-3 rounded-xl bg-red-100 text-red-700";
  } else if (type === "success") {
    el.className = "mt-4 px-4 py-3 rounded-xl bg-green-100 text-green-700";
  } else {
    el.className = "mt-4 px-4 py-3 rounded-xl bg-blue-100 text-blue-700";
  }

  el.innerHTML = text;
}
