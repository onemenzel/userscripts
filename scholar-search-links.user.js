// ==UserScript==
// @name        scholar.google.com -  Semantic Search buttons
// @namespace   Violentmonkey Scripts
// @match       https://scholar.google.*/scholar
// @grant       none
// @version     1.0
// @author      -
// @grant GM_addStyle
// @description 22.4.2022, 11:52:58
// ==/UserScript==

GM_addStyle(`
#gs_hdr_md {
  display: flex;
  align-items: center;
  gap: 2rem;
}

#gs_hdr_srch { padding: 0; }

.mycustombutton.mycustombutton.mycustombutton {
  color: white;
  background: #C66;
  height: 38px;
  border-radius: 2px;
  border: 1px solid #922;
  padding: .5rem 1rem;
}
`)

let headerSearch = document.getElementById('gs_hdr_md')
let con = document.createElement('div')

let params = new URLSearchParams(window.location.search)
let q = params.get('q')

con.innerHTML = `
  <a href="https://elicit.org/search?q=${encodeURIComponent(q)}" class="mycustombutton" target="_blank">Semantische Suche mit Elicit</a>
  <a href="https://www.semanticscholar.org/search?q=${encodeURIComponent(q)}&sort=relevance" class="mycustombutton" target="_blank">Suche mit Semantic Scholar</a>`

headerSearch.appendChild(con)
