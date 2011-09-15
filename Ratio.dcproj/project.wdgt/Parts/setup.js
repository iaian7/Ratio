/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */
var dashcodePartSpecs = {
    "aspectLock": { "creationFunction": "CreateStackLayout", "subviewsTransitions": [{ "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }] },
    "autodone": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "showMain", "rightImageWidth": 5, "text": "done" },
    "autoGenerate": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "auto", "rightImageWidth": 5, "text": "auto" },
    "doneSave": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "showFront", "rightImageWidth": 5, "text": "done" },
    "download": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "versionDownload", "rightImageWidth": 5, "text": "download" },
    "explanation": { "creationFunction": "CreateText", "text": "explanation" },
    "iaian7com": { "creationFunction": "CreateText", "text": "iaian7com" },
    "info": { "backgroundStyle": "black", "creationFunction": "CreateInfoButton", "foregroundStyle": "white", "frontID": "front", "onclick": "showBack" },
    "label": { "creationFunction": "CreateText", "text": "Item" },
    "limits": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "onchange": "updateLimit", "options": [["no limit", "none"], ["integer", "1"], ["base 2", "2"], ["base 4", "4"], ["base 5", "5"], ["base 6", "6"], ["base 8", "8"], ["base 10", "10", true], ["base 12", "12"], ["base 16", "16"]], "rightImageWidth": 16 },
    "new": { "creationFunction": "CreateText", "text": "new" },
    "newVersion": { "creationFunction": "CreateText", "text": "newVersion" },
    "presets": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "onchange": "updatePreset", "options": ["presets", ["HD 1080p", "1920x1080"], ["HD 720p", "1280x720"], ["HD 480p", "852x480"], ["SD NTSC", "720x480"], ["SD PAL", "720x576"], ["Apple iPhone & iPod Touch", "320x480"], ["Microsoft Zune HD", "272x480"], ["Microsoft Windows Mobile", "480x800"], ["Microsoft Surface", "1024x768"], ["Desktop Fullscreen", "1600x1200"], ["Desktop Widescreen", "1920x1200"], ["Film 1.85", "2220x1200"], ["Film 2.35", "2820x1200"]], "rightImageWidth": 16 },
    "ratioList": { "creationFunction": "CreateList", "dataArray": ["Item 1", "Item 2", "Item 3"], "dataSourceName": "listData", "labelElementId": "label", "listStyle": "List.EDGE_TO_EDGE", "sampleRows": 3, "useDataSource": true },
    "scrollArea": { "autoHideScrollbars": true, "creationFunction": "CreateScrollArea", "hasVerticalScrollbar": true, "scrollbarDivSize": 18, "scrollbarMargin": 6, "spacing": -18 },
    "skip": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "showMain", "rightImageWidth": 5, "text": "skip" },
    "stack": { "creationFunction": "CreateStackLayout", "subviewsTransitions": [{ "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }] },
    "swap": { "creationFunction": "CreateShape" },
    "text": { "creationFunction": "CreateText", "text": "©2009 John Einselen / Vectorform LLC" },
    "x1": { "creationFunction": "CreateText", "text": "x" },
    "x2": { "creationFunction": "CreateText", "text": "x" },
    "x3": { "creationFunction": "CreateText", "text": "x" }
};
