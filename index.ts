import * as cloudrun from "@pulumi/cloudrun";

const service = new cloudrun.Service("example", {
    appPath: "./app",
})

export const url = service.url
