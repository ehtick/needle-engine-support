---
title: Scripting Image Tracking
description: Access tracked images, assigned objects, and tracking data from code using the image-tracking event
---

# Scripting Image Tracking

Learn how to access tracked image data, assigned 3D objects, and tracking state from TypeScript using the `image-tracking` event.

:::warning Advanced
This guide covers scripting image tracking from code. For most use cases, the built-in `WebXRImageTracking` component handles everything automatically — just set it up in Unity, Blender, or [add it from code](#setting-up-image-tracking-from-code). See the [Image Tracking setup guide](/docs/how-to-guides/xr/image-tracking) first.
:::

:::tip Prerequisites
Make sure you have [WebXR Image Tracking](/docs/how-to-guides/xr/image-tracking) set up in your scene first.
:::

:::tip Version
The `WebXRImageTrackingEvent`, `event.detail.trackedImages`, `WebXRImageTrackingModel` constructor, `addImage`, and `img.trackedModel` APIs are available in the current Needle Engine 5.1 alpha and will be part of Needle Engine 5.1.x. If you're using an older engine version, update to the 5.1 alpha or newer.
:::

---

## Setting Up Image Tracking from Code

You can configure image tracking entirely from TypeScript without the Unity/Blender editor:

```ts
import { Behaviour, WebXRImageTracking, WebXRImageTrackingModel } from "@needle-tools/engine";

export class CodeImageTracking extends Behaviour {
    start() {
        const tracker = this.gameObject.getOrAddComponent(WebXRImageTracking);

        const model = new WebXRImageTrackingModel({
            url: "https://engine.needle.tools/samples/image-tracking/assets/imagetracking-01-marker.jpg",
            widthInMeters: 0.3,
            object: this.gameObject,
            hideWhenTrackingIsLost: true,
            imageDoesNotMove: false,
        });

        tracker.addImage(model);
    }
}
```

---

## Reacting to Tracking on the Tracked Object

Normally, the simplest approach is to add a component directly to the object assigned to the image tracker. You can use `onEnterXR` and `onLeaveXR` to react to the XR session starting and ending:

```ts
import { Behaviour, NeedleXREventArgs } from "@needle-tools/engine";

// Add this component to the object assigned to WebXRImageTrackingModel
export class OnImageFound extends Behaviour {
    onEnterXR(args: NeedleXREventArgs) {
        console.log("XR session started");
    }

    onLeaveXR(args: NeedleXREventArgs) {
        console.log("XR session ended");
    }
}
```

---

## Listening to the Image Tracking Event

The `WebXRImageTracking` component dispatches an `image-tracking` event every frame when images are being tracked. The event's `detail` contains a `WebXRImageTrackingEvent` with the tracked images array.

```ts
import { Behaviour, WebXRImageTracking } from "@needle-tools/engine";

export class ImageTrackingHandler extends Behaviour {
    onEnable() {
        const tracker = this.gameObject.getComponent(WebXRImageTracking);
        // The event is fully typed — event.detail.trackedImages is WebXRTrackedImage[]
        tracker?.addEventListener("image-tracking", this.onImageTracking);
    }

    onDisable() {
        const tracker = this.gameObject.getComponent(WebXRImageTracking);
        tracker?.removeEventListener("image-tracking", this.onImageTracking);
    }

    private onImageTracking = (event: CustomEvent) => {
        for (const img of event.detail.trackedImages) {
            console.log(img.url, img.state);
        }
    }
}
```

---

## Accessing the Assigned Object

Each `WebXRTrackedImage` gives you access to the 3D object assigned in the `WebXRImageTrackingModel` configuration:

```ts
tracker?.addEventListener("image-tracking", event => {
    for (const img of event.detail.trackedImages) {
        // Access the assigned AssetReference via the model configuration
        const obj = img.model.object;

        // From Needle Engine 5.1+ you can also use the shorthand:
        // const obj = img.trackedModel;
    }
});
```

| Property | Type | Description |
| --- | --- | --- |
| `img.model` | `WebXRImageTrackingModel` | Full configuration including `object`, `widthInMeters`, `hideWhenTrackingIsLost`, etc. |
| `img.model.object` | `AssetReference` | The 3D object assigned to this tracked image marker |
| `img.trackedModel` | `AssetReference` | Shorthand for `img.model.object` *(available from Needle Engine 5.1+)* |

---

## Reading Position and Rotation

Get the local position and rotation of the tracked image (relative to the XR rig):

```ts
import { Vector3, Quaternion } from "three";

const position = new Vector3();
const rotation = new Quaternion();

tracker?.addEventListener("image-tracking", event => {
    for (const img of event.detail.trackedImages) {
        img.getPosition(position);
        img.getQuaternion(rotation);
        console.log("Position:", position, "Rotation:", rotation);
    }
});
```

---

## Checking Tracking State

Each tracked image reports its current state:

```ts
for (const img of trackedImages) {
    if (img.state === "tracked") {
        // Image is actively being tracked by the device
    } else if (img.state === "emulated") {
        // Tracking is emulated (less accurate)
    }
}
```

| State | Description |
| --- | --- |
| `"tracked"` | Image is actively tracked by the device camera |
| `"emulated"` | Tracking is estimated/emulated (less accurate) |

---

## Next Steps

**Learn more:**
- [WebXR Image Tracking](/docs/how-to-guides/xr/image-tracking) - Setup, platform support, and best practices
- [XR Development](/docs/how-to-guides/xr/) - Full XR capabilities
- [iOS WebXR App Clip](/docs/how-to-guides/xr/ios-webxr-app-clip) - Native iOS support

**Reference:**
- [Scripting Examples](/docs/reference/scripting-examples) - More code patterns
- [Component Lifecycle](/docs/how-to-guides/scripting/use-lifecycle-hooks) - awake, start, update methods
