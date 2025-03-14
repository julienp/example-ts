// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Service extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'cloudrun:index:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    public /*out*/ readonly imageRef!: pulumi.Output<string>;
    public /*out*/ readonly url!: pulumi.Output<string | undefined>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ServiceArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["appPath"] = args ? args.appPath : undefined;
            resourceInputs["concurrency"] = args ? args.concurrency : undefined;
            resourceInputs["containerPort"] = args ? args.containerPort : undefined;
            resourceInputs["cpu"] = args ? args.cpu : undefined;
            resourceInputs["imageName"] = args ? args.imageName : undefined;
            resourceInputs["memory"] = args ? args.memory : undefined;
            resourceInputs["imageRef"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        } else {
            resourceInputs["imageRef"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Service.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
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
