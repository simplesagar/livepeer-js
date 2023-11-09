/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { PlaybackPolicy } from "./playbackpolicy";
import { Expose, Type } from "class-transformer";

export class NewAssetPayloadStorage extends SpeakeasyBase {
    /**
     * Set to true to make default export to IPFS. To customize the
     *
     * @remarks
     * pinned files, specify an object with a spec field. False or null
     * means to unpin from IPFS, but it's unsupported right now.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ipfs" })
    ipfs?: any;
}

export class NewAssetPayloadEncryption extends SpeakeasyBase {
    /**
     * Encryption key used to encrypt the asset. Only writable in the upload asset endpoints and cannot be retrieved back.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "encryptedKey" })
    encryptedKey: string;
}

export class NewAssetPayload extends SpeakeasyBase {
    /**
     * Name of the asset. This is not necessarily the filename, can be a
     *
     * @remarks
     * custom name or title
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Whether to generate MP4s for the asset.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "staticMp4" })
    staticMp4?: boolean;

    /**
     * Whether the playback policy for a asset or stream is public or signed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "playbackPolicy" })
    @Type(() => PlaybackPolicy)
    playbackPolicy?: PlaybackPolicy;

    @SpeakeasyMetadata()
    @Expose({ name: "creatorId" })
    creatorId?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "storage" })
    @Type(() => NewAssetPayloadStorage)
    storage?: NewAssetPayloadStorage;

    /**
     * URL where the asset contents can be retrieved. Only allowed (and
     *
     * @remarks
     * also required) in the upload asset via URL endpoint.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "encryption" })
    @Type(() => NewAssetPayloadEncryption)
    encryption?: NewAssetPayloadEncryption;
}
