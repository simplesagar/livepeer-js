/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { EncryptionOutput } from "./encryptionoutput";
import { Expose, Type } from "class-transformer";

/**
 * Parameters for the upload task
 */
export class UploadOutput extends SpeakeasyBase {
    /**
     * URL of the asset to "upload"
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "encryption" })
    @Type(() => EncryptionOutput)
    encryption?: EncryptionOutput;

    /**
     * ID of the original recorded session to avoid re-transcoding
     *
     * @remarks
     * of the same content. Only used for import task.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recordedSessionId" })
    recordedSessionId?: string;
}
