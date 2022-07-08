# Guide Endpoints

**Guide Endpoints** are specially crafted endpoints in the Halo Infinite API that are used to provide comprehensive information about specific entities that exist under an asset class. More concretely, you can use these endpoints to discover _publicly available_ assets under a specific asset class, such as `images` or `progression`.

## Endpoint Structure

```http
https://gamecms-hacs.svc.halowaypoint.com:443/hi/<ASSET_CLASS>/guide/xo?flight=<FLIGHT_ID>
```

## Endpoint Parameters

| Parameter | Required | Description |
|:----------|:---------|:------------|
| `flight`  | 🛑 No    | Unique flight ID for which a full guide needs to be obtained. |

## Endpoint Headers

| Header                         | Required | Description |
|:-------------------------------|:---------|:------------|
| `x-343-authorization-spartan`  | ✅ Yes   | Spartan token used to authenticate the request. |
| `Accept-Language`              | ✅ Yes   | Language for the returned results. Use `en-US` for English. |

## Example Response

The response can be quite large. For example, the guide response for the `progression` asset class is 177.51KB and contains 63,307 lines of JSON. You can view an example of such a response in [`example-progression-guide.json`](./examples/guide-endpoints/example-progression-guide.json).

<<< @/src/.vuepress/public/examples/guide-endpoints/example-progression-guide.json#documentation-snippet