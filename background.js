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
            title: '* Csound Doc Search',
            type: 'normal',
            contexts: ['selection']
        });
      chrome.contextMenus.create({
            id: 'GitLookup',
            title: '* GitHub Csound Doc Search',
            type: 'normal',
            contexts: ['selection']
        });
     chrome.contextMenus.create({
            id: 'PlayableLookup',
            title: '* Csound Playable Doc Search',
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
            id: 'CsPlayable Reference',
            title: 'Csound Playable Reference',
            type: 'normal',
            contexts: ['selection']
        });
       chrome.contextMenus.create({
            id: 'CsOpcode Reference',
            title: 'Csound Opcode QuickRef',
            type: 'normal',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id: 'CsLookup Reference No Selection',
            title: 'Csound Reference',
            type: 'normal'
        });
        chrome.contextMenus.create({
            id: 'CsPlayable Reference No Selection',
            title: 'Csound Playable Reference',
            type: 'normal'
        });
        chrome.contextMenus.create({
            id: 'CsOpcode Reference No Selection',
            title: 'Csound Opcode QuickRef',
            type: 'normal'
        });
        chrome.contextMenus.create({
            id: 'CsIDE No Selection',
            title: '   Web Csound IDE',
            type: 'normal'
        });
        chrome.contextMenus.create({
            id: 'GitPlayEdit No Selection',
            title: '   GitHub Web Player/Editor',
            type: 'normal'
        });
        chrome.contextMenus.create({
            id: 'CsOnlinePlayer No Selection',
            title: '   Basic Web Csound Player',
            type: 'normal'
        });
        chrome.contextMenus.create({
            id: 'CsPlayer&Editor No Selection',
            title: '   Web Csound Player && Editor',
            type: 'normal'
        });
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
    let url = '';
    switch(item.menuItemId) {

        case 'CsLookup':
            url = 'https://csound.com/docs/manual/' + item.selectionText + '.html';
            break;
        case 'CsLookup Reference':
        case 'CsLookup Reference No Selection':
            url = 'https://csound.com/docs/manual/PartReference.html';
            break;
        case 'GitLookup':
            url = 'https://csound.com/manual/' + item.selectionText + '.html';
            break;
        case 'PlayableLookup':
            url = 'https://gogins.github.io/csound-extended-manual/examples/' + item.selectionText + '.csd.html';
            break;
        case 'CsPlayable Reference':
        case 'CsPlayable Reference No Selection':
            url = 'https://gogins.github.io/csound-extended-manual/indexframes.html';
            break;
        case 'CsOpcode Reference':
        case 'CsOpcode Reference No Selection':
            url = 'https://csound.com/docs/manual/MiscQuickref.html';
            break;
        case 'CsIDE No Selection':
            url = 'https://IDE.csound.com';
            break;
        case 'GitPlayEdit No Selection':
            url = 'https://gogins.github.io/csound-extended-manual/player.html';
            break;
        case 'CsOnlinePlayer No Selection':
            url = 'http://arthunkins.com/CsOnlinePlayer.html';
            break;
        case 'CsPlayer&Editor No Selection':
            url = 'https://thumbsdb.herokuapp.com/csound/';
            break;
   }

    chrome.tabs.create({url: url, index: tab.index + 1});
});
