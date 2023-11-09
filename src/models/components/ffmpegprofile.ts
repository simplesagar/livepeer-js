/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export enum Profile {
    H264Baseline = "H264Baseline",
    H264Main = "H264Main",
    H264High = "H264High",
    H264ConstrainedHigh = "H264ConstrainedHigh",
}

export enum Encoder {
    H264 = "h264",
    Hevc = "hevc",
    Vp8 = "vp8",
    Vp9 = "vp9",
}

/**
 * LMPS ffmpeg profile
 */
export class FfmpegProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "width" })
    width: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "height" })
    height: number;

    @SpeakeasyMetadata()
    @Expose({ name: "bitrate" })
    bitrate: number;

    @SpeakeasyMetadata()
    @Expose({ name: "fps" })
    fps: number;

    @SpeakeasyMetadata()
    @Expose({ name: "fpsDen" })
    fpsDen?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "gop" })
    gop?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    profile?: Profile;

    @SpeakeasyMetadata()
    @Expose({ name: "encoder" })
    encoder?: Encoder;
}
