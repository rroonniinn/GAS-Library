/**
 * Zwraca aktualny arkusz (aktywny / wyświetlony)
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */

export const getCurrentSheet = () => SpreadsheetApp.getActiveSheet();
