/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
var cordova = require('cordova');

/**
 * Mocks for not supported platform to prevent from bugs
 *
 * @function
 * @returns {Boolean}
 */
function notSupported() {
    console.log('Analytics is not supported');
    return false;
}

module.exports = {
    setUserId: notSupported,
    debugMode: notSupported,
    startTrackerWithId: notSupported,
    enableAds: notSupported,
    trackEvent: notSupported,
    trackView: notSupported,
    addCustomDimension: notSupported,
    trackException: notSupported,
    trackTiming: notSupported,
    addTransaction: notSupported,
    addTransactionItem: notSupported,
    enableUncaughtExceptionReporting: notSupported
};

