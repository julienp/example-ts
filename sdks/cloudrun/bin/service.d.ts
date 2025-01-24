import * as pulumi from "@pulumi/pulumi";
export declare class Service extends pulumi.ComponentResource {
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * The Docker image of the service
     */
    readonly imageRef: pulumi.Output<string>;
    /**
     * The URL of the deployed service.
     */
    readonly url: pulumi.Output<string | undefined>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * The path to the application source code.
     */
    appPath?: pulumi.Input<string>;
    /**
     * The number of concurrent containers to run.
     */
    concurrency?: pulumi.Input<number>;
    /**
     * The port the container listens on.
     */
    containerPort?: pulumi.Input<number>;
    /**
     * The CPU limit for the container.
     */
    cpu?: pulumi.Input<number>;
    /**
     * The name of the Docker image.
     */
    imageName?: pulumi.Input<string>;
    /**
     * The memory limit for the container.
     */
    memory?: pulumi.Input<string>;
    /**
     * The project to deploy the service to. The project requires the Artifact
     *     Registry API and the Cloud Run API to be enabled.
     */
    project: pulumi.Input<string>;
    /**
     * The region to deploy the service to.
     */
    region: pulumi.Input<string>;
}
