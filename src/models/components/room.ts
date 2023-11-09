/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class Participants extends SpeakeasyBase {
    /**
     * participant ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "identity" })
    identity?: string;

    /**
     * user defined participant name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * the time the participant joined
     */
    @SpeakeasyMetadata()
    @Expose({ name: "joinedAt" })
    joinedAt?: number;

    /**
     * the time the participant left
     */
    @SpeakeasyMetadata()
    @Expose({ name: "leftAt" })
    leftAt?: number;
}

export class Room extends SpeakeasyBase {
    /**
     * room ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Timestamp (in milliseconds) at which the room was created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt?: number;

    /**
     * Timestamp (in milliseconds) at which room was updated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt?: number;

    /**
     * internal ID for egress output
     */
    @SpeakeasyMetadata()
    @Expose({ name: "egressId" })
    egressId?: string;

    @SpeakeasyMetadata({ elemType: Participants })
    @Expose({ name: "participants" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, Participants> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], Participants);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    participants: Record<string, Participants>;
}
