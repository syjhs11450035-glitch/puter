/*
 * Copyright (C) 2024-present Puter Technologies Inc.
 */

const { AdvancedBase } = require("../AdvancedBase");
const EmitterFeature = require("../features/EmitterFeature");

class Emitter extends AdvancedBase {
    static FEATURES = [
        EmitterFeature(),
    ];
}

module.exports = { Emitter };
