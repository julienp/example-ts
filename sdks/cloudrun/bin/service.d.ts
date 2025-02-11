import * as pulumi from "@pulumi/pulumi";
export declare class Service extends pulumi.ComponentResource {
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    readonly imageRef: pulumi.Output<string>;
    readonly url: pulumi.Output<string | undefined>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ServiceArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    appPath?: pulumi.Input<string>;
    concurrency?: pulumi.Input<number>;
    containerPort?: pulumi.Input<number>;
    cpu?: pulumi.Input<number>;
    imageName?: pulumi.Input<string>;
    memory?: pulumi.Input<string>;
}
