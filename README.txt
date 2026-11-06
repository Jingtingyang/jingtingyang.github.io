使用说明：
1. 把 big-data.html、big-data.css、big-data.js 放到 GitHub Pages 仓库根目录，与 index.html 同级。
2. 在 index.html 的大数据项目卡片里加入链接：
   <a class="project-detail-link" href="big-data.html">View Research →</a>
   建议放在大数据项目卡片的 </article> 之前。
3. 在 style.css 末尾加入：
   .project-detail-link{display:inline-block;margin-top:18px;color:#3568a8;font-weight:700;text-decoration:none}
   .project-detail-link:hover{text-decoration:underline}
4. 可选：要让整张卡片可点击，给大数据 article 加 id="big-data-card"，在 index.html 的 </body> 前加：
   <script>document.getElementById('big-data-card')?.addEventListener('click',e=>{if(!e.target.closest('a,button'))location.href='big-data.html'})</script>
   并在 style.css 添加：#big-data-card{cursor:pointer}
5. PDF、Notebook 链接是占位路径，只有上传 projects/big-data/report.pdf 和 projects/big-data/analysis.ipynb 后才会生效。
6. 双语页面会读取并保存 preferredLanguage（与主页语言设置共用）。
