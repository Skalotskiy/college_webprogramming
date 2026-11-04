import { marked } from "https://cdn.jsdelivr.net/npm/marked@15/lib/marked.esm.js";

const content = document.getElementById("content");
const params = new URLSearchParams(location.search);
const defaultDoc = content.dataset.doc || "README.md";
const requested = params.get("doc") || defaultDoc;

// Only allow Markdown files from the current folder.
const doc = /^[\w.-]+\.md$/.test(requested) ? requested : defaultDoc;

function rewriteLinks(root) {
  root.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    const match = href.match(/^(?:\.\/)?([\w.-]+\.md)(#.*)?$/);
    if (match) {
      link.setAttribute("href", `?doc=${encodeURIComponent(match[1])}${match[2] || ""}`);
    }
  });
}

try {
  const response = await fetch(doc);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

  content.innerHTML = marked.parse(await response.text());
  rewriteLinks(content);

  const heading = content.querySelector("h1, h2");
  if (heading) document.title = `${heading.textContent} — Web-програмування`;
  if (doc !== defaultDoc) {
    content.insertAdjacentHTML("afterbegin", '<p><a href="./">← До інструкції</a></p>');
  }
} catch (error) {
  content.innerHTML = `<p>Не вдалося завантажити <a href="${doc}">${doc}</a>: ${error.message}</p>`;
}
