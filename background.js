// Created 2019 tgrey1@gmail.com
// 
// Based off example extension:
//
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
// Add a listener to create the initial context menu items,
// context menu items only need to be created at runtime.onInstalled
chrome.runtime.onInstalled.addListener(function() {
        chrome.contextMenus.create({
            id: 'CsLookup',
            title: 'Csound Doc Search',
            type: 'normal',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id: 'CsLookup Reference',
            title: 'Csound Reference',
            type: 'normal',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id: 'CsLookup Reference No Selection',
            title: 'Csound Reference',
            type: 'normal'
        });
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
    console.log(item);
    let part = "PartReference";
    if (item.menuItemId == 'CsLookup'){
        part = item.selectionText;
    }
    let url = 'https://csound.com/docs/manual/' + part + '.html';
    chrome.tabs.create({url: url, index: tab.index + 1});
});


