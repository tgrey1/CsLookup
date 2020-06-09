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
      contexts: ['selection'],
    });
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let url =
  'https://csound.com/docs/manual/' + item.selectionText + '.html';
  chrome.tabs.create({url: url, index: tab.index + 1});
});


