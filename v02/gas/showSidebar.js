/**
 * Odpalanie sidebaru
 * @param {string} srcHtml - nazwa pliku html do wyświetlenia w sidebarze np. 'index.html'
 * @param {string} title - wyświetlany tytuł sidebaru
 * @return {void}
 */

const showSidebar = (srcHtml, title) => {
	const ui = HtmlService.createTemplateFromFile(srcHtml)
		.evaluate()
		.setSandboxMode(HtmlService.SandboxMode.IFRAME)
		.setTitle(title);

	SpreadsheetApp.getUi().showSidebar(ui);
};

export { showSidebar };
