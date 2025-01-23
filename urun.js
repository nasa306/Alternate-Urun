/// urun.js
document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey) {
		var t = window.open("", "_blank", "width=500,height=300");
		var e = t.document.createElement("iframe");
		(e.src = "https://raw.githubusercontent.com/nasa306/idk/refs/heads/main/Popup.html?token=GHSAT0AAAAAAC5EWWIJT3ZTBKQ4XKQ4BBGGZ4STPGA"),
			(e.style.cssText = "width:100%; height:100%; border:none;"),
			t.document.body.appendChild(e),
			t.document.title = "uRun",
			t.addEventListener("message", function (e) {
				e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
			});
	}
});
