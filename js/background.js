chrome.commands.onCommand.addListener((command, tab) => {
    
  chrome.tabs.query({currentWindow: true}, function(tabs) {  
    console.log(tabs);
    // for (var oneTab of tabs) {
    //   console.log(oneTab);
    // }
    chrome.tabs.sendMessage(tab.id, {content: tabs}, function(response) {})

  })  
  
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['./js/content.js']
  });
    //     chrome.tabs.query({currentWindow: true}, function(tabs) {
        
    
//         console.log(tabs);
//         for (var tab of tabs) {
//             console.log(tab);
//             if (tab.active = 'true') {
//                 chrome.scripting.executeScript({
//                     target: {tabId: tab.id},
//                     files: ['./js/content.js']
//                 });
//                 break;
//             }
//         }
//      })
});

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: {tabId: tab.id},
//       files: ['./js/content.js']
//     });
//   });