function tools() {
  const content = document.getElementById("content");

  let toolsHTML = `
    <div class="tools-container">
        <h2 class="tools-title">Tools I Use</h2>
        <ul class="tools-list">
            <li>Blender</li>
            <li>VS Code</li>
            <li>Android Studio</li>
            <li>Eclipse (basic level)</li>
            <li>Microsoft Tools</li>
            <li>Google Workspaces</li>
        </ul>
    </div>
  `;

  content.innerHTML = toolsHTML;
}
