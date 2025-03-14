"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.Provider = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
exports.Provider = null;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));
exports.Service = null;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "cloudrun:index:Service":
                return new exports.Service(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("cloudrun", "index", _module);
pulumi.runtime.registerResourcePackage("cloudrun", {
    version: utilities.getVersion(),
    constructProvider: (name, type, urn) => {
        if (type !== "pulumi:providers:cloudrun") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new exports.Provider(name, undefined, { urn });
    },
});
//# sourceMappingURL=index.js.map