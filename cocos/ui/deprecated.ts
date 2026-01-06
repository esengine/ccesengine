/*
 Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

import { removeProperty, markAsWarning } from '../core';
import { View } from './view';

// #region deprecation on view
removeProperty(View.prototype, 'View.prototype', [
    {
        name: 'isAntiAliasEnabled',
        suggest: 'The API of Texture2d have been largely modified, no alternative',
    },
    {
        name: 'enableAntiAlias',
        suggest: 'The API of Texture2d have been largely modified, no alternative',
    },
]);
markAsWarning(View.prototype, 'View.prototype', [
    {
        name: 'adjustViewportMeta',
    },
    {
        name: 'enableAutoFullScreen',
        suggest: 'use screen.requestFullScreen() instead.',
    },
    {
        name: 'isAutoFullScreenEnabled',
    },
    {
        name: 'setCanvasSize',
        suggest: 'setting size in CSS pixels is not recommended, please use screen.windowSize instead.',
    },
    {
        name: 'getCanvasSize',
        suggest: 'please use screen.windowSize instead.',
    },
    {
        name: 'getFrameSize',
        suggest: 'getting size in CSS pixels is not recommended, please use screen.windowSize instead.',
    },
    {
        name: 'setFrameSize',
        suggest: 'setting size in CSS pixels is not recommended, please use screen.windowSize instead.',
    },
    {
        name: 'getDevicePixelRatio',
        suggest: 'use screen.devicePixelRatio instead.',
    },
    {
        name: 'convertToLocationInView',
    },
    {
        name: 'enableRetina',
    },
    {
        name: 'isRetinaEnabled',
    },
    {
        name: 'setRealPixelResolution',
    },
]);
