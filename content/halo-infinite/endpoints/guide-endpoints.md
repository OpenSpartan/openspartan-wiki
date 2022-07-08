---
title: Guide Endpoints
linkTitle: Guide Endpoints
type: docs
---

**Guide Endpoints** are specially crafted endpoints in the Halo Infinite API that are used to provide comprehensive information about specific entities that exist under an asset class. More concretely, you can use these endpoints to discover _publicly available_ assets under a specific asset class, such as `images` or `progression`.

## Endpoint Structure

```HTTP
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

The response can be quite large. For example, the guide response for the `progression` asset class is 177.51KB and contains 63,307 lines of JSON. You can view an example of such a response in [`example-progression-guide.json`](/examples/halo-infinite/endpoint-examples/guide-endpoint-response.json).

An excerpt of the response can be seen below:

```json
{
    "Accept": "application/x-bond-compact-binary",
    "AcceptEncoding": "gzip",
    "AcceptLanguage": "en-US",
    "Files": [
        {
            "Uri": {
                "AuthorityId": "gamecms",
                "Path": "/hi/progression/file/calendars/seasons/seasoncalendar.json",
                "QueryString": "",
                "RetryPolicyId": "",
                "TopicName": "",
                "AcknowledgementTypeId": 0,
                "AuthenticationLifetimeExtensionSupported": false,
                "ClearanceAware": true
            },
            "ETag": "\"UqbUzm0v2guCX8BoASV67g/R5uI+q6ILGv2tDQ==\"",
            "ContentLength": 445,
            "Usage": 1
        },
        {
            "Uri": {
                "AuthorityId": "gamecms",
                "Path": "/hi/progression/file/challengecontent/clientchallengedeckdefinitions/dailyplaynewdeck.json",
                "QueryString": "",
                "RetryPolicyId": "",
                "TopicName": "",
                "AcknowledgementTypeId": 0,
                "AuthenticationLifetimeExtensionSupported": false,
                "ClearanceAware": true
            },
            "ETag": "\"g0u5JGsEUCRdlGnMcYs/A9p/ZLCHHacmJfKRJQ==\"",
            "ContentLength": 29,
            "Usage": 1
        },
[...]
```

If you follow all the entities in the response for the `progression` asset class, you will notice that it lists all available armor cores, coatings, AI definitions, and more. Amongst others, this endpoint can also provide information on non-game assets, such as the season calendar, available at `/hi/progression/file/calendars/seasons/seasoncalendar.json`.