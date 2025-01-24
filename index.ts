import * as pulumi from "@pulumi/pulumi";
import * as cloudrun from "@pulumi/cloudrun";

const gcpConfig = new pulumi.Config("gcp")
const project = gcpConfig.require("project")
const region = gcpConfig.require("region")

const service = new cloudrun.Service("example", {
    project,
    region,
    appPath: "./app",
})

export const url = service.url
