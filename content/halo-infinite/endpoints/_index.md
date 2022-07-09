---
title: Halo Infinite API Endpoints
linkTitle: Halo Infinite API Endpoints
type: docs
---

This section documents the broad variety of endpoints that are available in the Halo API. Most of the endpoint information is captured through the [master settings endpoint](master-settings-endpoint.md).

## Complete Endpoint List

The following endpoint list was produced on **July 9, 2022** and might or might not be accurate at the time of reading this article. For the most up-to-date list, always refer to the [master settings endpoint](master-settings-endpoint.md).

| Endpoint												| AuthorityId						| Path																								| QueryString												| RetryPolicyId						| TopicName																	| AcknowledgementTypeId	| AuthenticationLifetimeExtensionSupported | ClearanceAware |
|:------------------------------------------------------|:----------------------------------|:--------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:----------------------------------|:--------------------------------------------------------------------------|:----------------------|:-----------------------------------------|:---------------|
| Academy_GetBotCustomization							| gamecms-hacs						| /hi/multiplayer/file/Academy/BotCustomizationData.json											| ?flight={flightId}										| longerdelayedexponentialretry		| 																			| 0	| false	| true  |
| Academy_GetContent									| gamecms							| /hi/multiplayer/file/Academy/AcademyClientManifest.json											| 															| longerdelayedexponentialretry		| 																			| 0	| false	| true  |
| Academy_GetContentTest								| gamecms-hacs						| /hi/multiplayer/file/Academy/AcademyClientManifest_Test.json										| ?flight={clearanceId}										| longerdelayedexponentialretry		| 																			| 0	| false	| true  |
| Academy_GetStarDefinitions							| gamecms							| /hi/multiplayer/file/Academy/AcademyStarGUIDDefinitions.json										| 															| longerdelayedexponentialretry		| 																			| 0	| false	| true  |
| Crashes_Upload										| crashes							| /crashes/hipc/bf05b320-ee8f-4be5-879d-505b669654c9												| 															| linearretry						| 																			| 0	| false	| false |
| Economy_AiCoreCustomization							| economy							| /hi/players/{player}/customization/ais/{coreId}													| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_AiCoresCustomization							| economy							| /hi/players/{player}/customization/ais															| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_AllOwnedCoresDetails							| economy							| /hi/players/{player}/cores																		| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_ArmorCoreCustomization						| economy							| /hi/players/{player}/customization/armors/{coreId}												| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_ArmorCoresCustomization						| economy							| /hi/players/{player}/customization/armors															| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_GetActiveBoosts								| economy							| /hi/players/{player}/boosts																		| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetAwardedRewards								| economy							| /hi/players/{player}/rewards/{rewardId}															| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetBoostsStore								| economy							| /hi/players/{player}/stores/boosts																| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetEventsStore								| economy							| /hi/players/{player}/stores/events																| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetGiveawayRewards							| economy							| /hi/players/{player}/giveaways																	| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetHCSStore									| economy							| /hi/players/{player}/stores/hcs																	| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetInventoryItems								| economy							| /hi/players/{player}/inventory																	| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetMainStore									| economy							| /hi/players/{player}/stores/main																	| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetMultiplePlayersCustomization				| economy							| /hi/customization																					| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetOperationRewardLevelsStore					| economy							| /hi/players/{player}/stores/operationrewardlevels													| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetOperationsStore							| economy							| /hi/players/{player}/stores/operations															| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetRewardTrack								| economy							| /hi/players/{player}/rewardtracks/{rewardTrackType}s/{trackId}									| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetVirtualCurrencyBalances					| economy							| /hi/players/{player}/currencies																	| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_GetXpGrantsStore								| economy							| /hi/players/{player}/stores/xpgrants																| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_OwnedCoreDetails								| economy							| /hi/players/{player}/cores/{coreId}																| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_PlayerAppearanceCustomization					| economy							| /hi/players/{player}/customization/appearance														| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_PlayerCustomization							| economy							| /hi/players/{player}/customization	?view={viewType}											| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_PlayerOperations								| economy							| /hi/players/{player}/rewardtracks/operations														| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_PostCurrencyTransaction						| economy							| /hi/players/{player}/currencies/{currencyId}/transactions											| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_PurchaseStorefrontOfferingTransaction			| economy							| /hi/players/{player}/storetransactions															| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_ScheduledStorefrontOfferings					| economy							| /hi/players/{player}/stores/{storeId}																| 															| linearretry						| 																			| 0	| false	| true  |
| Economy_SpartanBodyCustomization						| economy							| /hi/players/{player}/customization/spartanbody													| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_VehicleCoreCustomization						| economy							| /hi/players/{player}/customization/vehicles/{coreId}												| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_VehicleCoresCustomization						| economy							| /hi/players/{player}/customization/vehicles														| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_WeaponCoreCustomization						| economy							| /hi/players/{player}/customization/weapons/{coreId}												| 															| longerlinearretry					| 																			| 0	| false	| true  |
| Economy_WeaponCoresCustomization						| economy							| /hi/players/{player}/customization/weapons														| 															| longerlinearretry					| 																			| 0	| false	| true  |
| GameCms_GetAchievements								| gamecms							| /hi/Multiplayer/file/Live/Achievements.json														| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetArmorCoreManifest							| gamecms							| /hi/Progression/file/Inventory/Manifest/armorcores.json											| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetAsyncComputeOverrides						| gamecms							| /hi/Specs/file/graphics/AsyncComputeOverrides.json												| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetBanMessage									| gamecms							| /hi/Banning/file/{banMessagePath}																	| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetChallenge									| gamecms							| /hi/Progression/file/{challengePath}																| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetChallengeDeck								| gamecms							| /hi/Progression/file/{challengeDeckPath}															| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetClawAccess									| gamecms							| /hi/TitleAuthorization/file/claw/access.json														| ?flight={flightId}										| longerdelayedexponentialretry		| 																			| 0	| false	| true  |
| GameCms_GetCpuPresets									| gamecms							| /hi/Specs/file/cpu/presets.json																	| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetCustomGameDefaults							| gamecms							| /hi/Multiplayer/file/NonMatchmaking/customgame.json												| 															| longerdelayedexponentialretry		| 																			| 0	| false	| true  |
| GameCms_GetCustomizationCatalog						| gamecms							| /hi/Progression/file/inventory/catalog/inventory_catalog.json										| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetDevicePresetOverrides						| gamecms							| /hi/Specs/file/graphics/DevicePresetOverrides.json												| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetEvent										| gamecms							| /hi/Progression/file/{eventPath}																	| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetEventManifest								| gamecms							| /hi/Progression/file/RewardTracks/Manifest/eventmanifest.json										| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetGraphicsSpecControlOverrides				| gamecms							| /hi/Specs/file/graphics/GraphicsSpecControlOverrides.json											| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetGraphicSpecs								| gamecms							| /hi/Specs/file/graphics/overrides.json															| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetGuide_Images								| gamecms							| /hi/images/guide/xo																				| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetGuide_Multiplayer							| gamecms							| /hi/Multiplayer/guide/xo																			| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetGuide_News									| gamecms							| /hi/News/guide/xo																					| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetGuide_Progression							| gamecms							| /hi/Progression/guide/xo																			| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetGuide_Specs								| gamecms							| /hi/Specs/guide/xo																				| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetGuide_TitleAuthorization					| gamecms							| /hi/TitleAuthorization/guide/xo																	| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetImage										| gamecms							| /hi/images/file/{filePath}																		| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetItem										| gamecms							| /hi/Progression/file/{itemPath}																	| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetLobbyErrorMessages							| gamecms							| /hi/Multiplayer/file/gameStartErrorMessages/LobbyHoppperErrorMessageList.json						| ?flight={flightId}										| longerdelayedexponentialretry		| 																			| 0	| false	| true  |
| GameCms_GetMetadata									| gamecms							| /hi/Progression/file/metadata/metadata.json														| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetNetworkConfiguration						| gamecms							| /hi/Multiplayer/file/network/config.json															| ?flight={flightId}										| longerdelayedexponentialretry		| 																			| 0	| false	| true  |
| GameCms_GetNews										| gamecms							| /hi/news/file/{filePath}																			| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetNotAllowedInTitleMessage					| gamecms-hacs-noauth				| /branches/hi/OEConfiguration/data/authfail/Default.json											| 															| longerdelayedexponentialretry		| 																			| 0	| false	| false |
| GameCms_GetProgressionFile							| gamecms							| /hi/Progression/file/{filePath}																	| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetRecommendedDrivers							| gamecms							| /hi/Specs/file/graphics/RecommendedDrivers.json													| 															| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetSeasonRewardTrack							| gamecms							| /hi/Progression/file/{seasonPath}																	| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetSeasonRewardTrackManifest					| gamecms							| /hi/Progression/file/RewardTracks/Manifest/seasonmanifest.json									| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetStorefronts								| gamecms							| /hi/Progression/file/Store/storefronts.json														| ?flight={flightId}										| linearretry_3						| 																			| 0	| false	| true  |
| GameCms_GetUiConfigurationJson						| gamecms							| /branches/oly/UI-Settings/data/Settings.json														| 															| linearretry_3						| 																			| 0	| false	| false |
| GameCms_Origin										| gamecmsOrigin						| ://{path}																							| 															| linearretry_3						| 																			| 0	| false	| true  |
| HIUGC_CheckAssetPlayerBookmark						| HIUGC_Authoring_Authority			| /{title}/players/{player}/favorites/{assetType}/{assetId}											| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_CreateAssetVersionAgnostic						| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/versions															| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_DeleteAllVersions								| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/versions															| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_DeleteAsset										| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}																	| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_DeleteVersion									| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/versions/{versionId}												| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_GetCustomGameManifest					| HIUGC_Discovery_Authority			| /hi/projects/a9dc0785-2a99-4fec-ba6e-0216feaaf041													| 															| getcustomgamemanifest				| 																			| 0	| false	| false |
| HIUGC_Discovery_GetEngineGameVariant					| HIUGC_Discovery_Authority_Open	| /hi/engineGameVariants/{assetId}/versions/{versionId}												| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_Discovery_GetEngineGameVariantWithoutVersion	| HIUGC_Discovery_Authority			| /hi/engineGameVariants/{assetId}																	| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_Discovery_GetManifest							| HIUGC_Discovery_Authority			| /hi/manifests/{assetId}/versions/{versionId}}														| ?clearanceId={clearanceId}								| linearretry						| 																			| 0	| false	| true  | 
| HIUGC_Discovery_GetManifestByBranch					| HIUGC_Discovery_Authority			| /hi/manifests/branches/{branchName}/game															| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_GetManifestByBuild					| HIUGC_Discovery_Authority			| /hi/manifests/builds/{buildNumber}/game															| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_GetManifestWithoutVersion				| HIUGC_Discovery_Authority			| /hi/manifests/{assetId}																			| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_GetMap								| HIUGC_Discovery_Authority_Open	| /hi/maps/{assetId}/versions/{versionId}															| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_GetMapModePair						| HIUGC_Discovery_Authority			| /hi/mapModePairs/{assetId}/versions/{versionId}													| ?clearanceId={clearanceId}								| linearretry						| 																			| 0	| false	| true  |
| HIUGC_Discovery_GetMapModePairWithoutVersion			| HIUGC_Discovery_Authority			| /hi/mapModePairs/{assetId}																		| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_GetMapWithoutVersion					| HIUGC_Discovery_Authority			| /hi/maps/{assetId}																				| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_GetPlaylist							| HIUGC_Discovery_Authority			| /hi/playlists/{assetId}/versions/{versionId}														| ?clearanceId={clearanceId}								| linearretry						| 																			| 0	| false	| true  |
| HIUGC_Discovery_GetPlaylistWithoutVersion				| HIUGC_Discovery_Authority			| /hi/playlists/{assetId}																			| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_Discovery_GetPrefab								| HIUGC_Discovery_Authority			| /hi/prefabs/{assetId}/versions/{versionId}														| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_Discovery_GetPrefabWithoutVersion				| HIUGC_Discovery_Authority			| /hi/prefabs/{assetId}																				| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_Discovery_GetProject							| HIUGC_Discovery_Authority			| /hi/projects/{assetId}/versions/{versionId}														| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_Discovery_GetProjectWithoutVersion				| HIUGC_Discovery_Authority			| /hi/projects/{assetId}																			| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_Discovery_GetTagsInfo							| HIUGC_Discovery_Authority			| /hi/info/tags																						| 															| linearretry						| 																			| 0	| false	| true  |
| HIUGC_Discovery_GetUgcGameVariant						| HIUGC_Discovery_Authority_Open	| /hi/ugcGameVariants/{assetId}/versions/{versionId}												| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_GetUgcGameVariantWithoutVersion		| HIUGC_Discovery_Authority			| /hi/ugcGameVariants/{assetId}																		| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_Search								| HIUGC_Discovery_Authority			| /hi/search																						| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_Discovery_SpectateByMatchId						| HIUGC_Discovery_Authority			| /hi/films/matches/{matchId}/spectate																| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_EndSession										| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/sessions/active													| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_FavoriteAnAsset									| HIUGC_Authoring_Authority			| /hi/players/{player}/favorites/{assetType}/{assetId}												| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_GetAsset										| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}																	| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_GetBlob											| iUgcFiles							| 																									| 															| cdnretry							| 																			| 0	| false	| false |
| HIUGC_GetLatestAssetVersion							| HIUGC_Authoring_Authority			| /{title}/films/{assetId}/versions/latest															| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_GetLatestAssetVersionAgnostic					| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/versions/latest													| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_GetPublishedVersion								| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/versions/published													| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_GetSessionBlob									| iUgcSessionFiles					| 																									| 															| cdnretry							| 																			| 0	| false	| false |
| HIUGC_GetSpecificAssetVersion							| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/versions/{versionId}												| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_ListAllVersions									| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/versions															| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_ListPlayerAssets								| HIUGC_Authoring_Authority			| /{title}/players/{player}/assets																	| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_ListPlayerFavorites								| HIUGC_Authoring_Authority			| /hi/players/{player}/favorites/{assetType}														| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_ListPlayerFavoritesAgnostic						| HIUGC_Authoring_Authority			| /hi/players/{player}/favorites																	| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_PatchAssetVersion								| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/versions/{versionId}												| 															| linearretry						| 																			| 0	| false	| false |
| HIUGC_PublishAssetVersion								| HIUGC_Authoring_Authority			| /hi/{assetType}/{assetId}/publish/{versionId}														| ?clearanceId={clearanceId}								| linearretry						| 																			| 0	| false	| true  |
| HIUGC_RateAnAsset										| HIUGC_Authoring_Authority			| /hi/players/{player}/ratings/{assetType}/{assetId}												| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_ReportAnAsset									| HIUGC_Authoring_Authority			| /hi/players/{player}/reports/{assetType}/{assetId}												| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_SpawnAsset										| HIUGC_Authoring_Authority			| /{title}/{assetType}																				| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_SpectateFilm									| HIUGC_Authoring_Authority			| /hi/films/{assetId}/spectate																		| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_StartSessionAgnostic							| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/sessions															| ?include-container-sas={includeContainerSas}				| linearretry						| 																			| 0	| false	| false | 
| HIUGC_StringValidation								| HIUGC_Authoring_Authority			| /{title}/validation/strings																		| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_UndeleteAsset									| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}																	| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_UndeleteVersion									| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/versions/{versionId}/recover										| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_UnpublishAsset									| HIUGC_Authoring_Authority			| /hi/{assetType}/{assetId}/unpublish																| 															| linearretry						| 																			| 0	| false	| false | 
| HIUGC_UploadImage										| HIUGC_Authoring_Authority			| /{title}/{assetType}/{assetId}/sessions/{sessionId}/Image/{filePath}								| ?player={player}											| linearretry						| 																			| 0	| false	| false | 
| Lobby_GameConnection									| lobbyamqp							| /																									| 															| longerdelayedexponentialretry		| /hi/gamesession/{gameSessionId}?AuthModel=PerLinkAuth&Players={players}	| 0	| false	| false | 
| Lobby_GetQosServers									| lobby								| /titles/hi/qosservers																				| 															| linearretry						| 																			| 0	| false	| false | 
| Lobby_JoinLobby										| lobby								| /hi/lobbies/{lobbyId}/players/{player}															| ?auth=st													| linearretry						| 																			| 0	| false	| false | 
| Lobby_LobbyConnection									| lobbyamqp							| /																									| 															| delayedexponentialretry			| /hi/lobby/{lobbyId}?AuthModel=PerLinkAuth&Players={players}				| 0	| true	| false | 
| Lobby_LobbyConnectionPublish							| lobbyamqp							| /																									| 															| delayedexponentialretry			| /hi/lobby/{lobbyId}?AuthModel=PerLinkAuth									| 0	| true	| false | 
| Lobby_LobbyConnectionSubscribe						| lobbyamqp							| /																									| 															| delayedexponentialretry			| /hi/lobby/{lobbyId}?AuthModel=PerLinkAuth&Players={players}				| 0	| true	| false | 
| Lobby_LobbyPresence									| lobby								| /hi/presence																						| 															| linearretry						| 																			| 0	| false	| false | 
| Lobby_RegisterJoinLobbyHandle							| lobby								| /hi/handles/{handleId}/players/{player}															| ?auth=st													| registerjoinlobbyhandle			| 																			| 0	| false	| false | 
| Lobby_ThirdPartyJoinHandle							| lobby								| /hi/lobbies/{lobbyId}/players/{player}/thirdPartyJoinHandle										| ?audience={handleAudience}&platform={handlePlatform}		| linearretry						| 																			| 0	| false	| false | 
| Setting_GetFeatureFlags								| settings							| /featureflags/{platform}/{version}																| 															| linearretry						| 																			| 0	| false	| false | 
| Setting_GetFlightedFeatureFlags						| settings_st4						| /featureflags/hi	?flight={flightId}																| 															| linearretry_3						| 																			| 0	| false	| true  |
| Settings_ActiveFlight									| settings_st4						| /oban/flight-configurations/titles/hi/audiences/RETAIL/active										| ?sandbox={sandbox}&build={buildNumber}					| linearretry_3						| 																			| 0	| false	| false |
| Settings_GetClearance									| settings_st4						| /oban/flight-configurations/titles/hi/audiences/{audience}/active									| ?sandbox={sandbox}&build={buildNumber}					| linearretry_3						| 																			| 0	| false	| false |
| Settings_GetPlayerClearance							| settings_st4						| /oban/flight-configurations/titles/hi/audiences/{audience}/players/{player}/active				| ?sandbox={sandbox}&build={buildNumber}					| linearretry_3						| 																			| 0	| false	| false |
| Settings_PlayerClearance								| settings_st4						| /oban/flight-configurations/titles/hi/audiences/RETAIL/players/{player}/active					| ?sandbox={sandbox}&build={buildNumber}					| linearretry_3						| 																			| 0	| false	| false |
| Settings_SpartanTokenV4								| settings_noauth					| /spartan-token																					| 															| linearretry						| 																			| 0	| false	| false |
| Skill_GetMatchResult									| skill								| /hi/matches/{matchId}/skill																		| 															| linearretry404retry				| 																			| 0	| false	| true  |
| Skill_GetPlaylistCsr									| skill								| /hi/playlist/{playlistId}/csrs																	| 															| linearretry						| 																			| 0	| false	| true  |
| Stats_BanSummary										| banprocessor						| /hi/bansummary																					| ?auth=st&targets={targetlist}								| linearretry						| 																			| 0	| false	| false |
| Stats_GetChallengeDecks								| halostats							| /hi/players/{player}/decks																		| 															| linearretry						| 																			| 0	| false	| false |
| Stats_GetMatchCount									| halostats							| /hi/players/{player}/matches/count																| 															| linearretry						| 																			| 0	| false	| false |
| Stats_GetMatchHistory									| halostats							| /hi/players/{player}/matches																		| 															| linearretry						| 																			| 0	| false	| false |
| Stats_GetMatchStats									| halostats							| /hi/matches/{matchId}/stats																		| 															| linearretry404retry				| 																			| 0	| false	| false |
| Stats_GetPlayerMatchProgression						| halostats							| /hi/players/{player}/matches/{matchId}/progression												| 															| linearretry404retry				| 																			| 0	| false	| false |
| Stats_MatchPrivacy									| halostats							| /hi/players/{player}/matches-privacy																| 															| linearretry_3x50					| 																			| 0	| false	| false |
| Stats_ProcessPlayerChallengeAction					| halostats							| /hi/players/{player}/decks/{deckId}/challenges/{challengeId}										| 															| linearretry						| 																			| 0	| false	| false |
| Stats_PutCampaignProgress								| halostats							| /hi/players/{player}/campaign/progress															| 															| linearretry_3x50					| 																			| 0	| false	| false |
| Stats_PutPlayerPresenceInMatch						| halostats							| /hi/players/{player}/matches/{matchId}/present-in-match											| 															| linearretry_3x50					| 																			| 0	| false	| false |
| Telemetry_HighPriority								| telemetry							| /																									| 															| telemetryhighpriorityretry		| /hipc/telemetry/sessions/{id}?guaranteed=true								| 1	| false	| false |
| Telemetry_LowPriority									| telemetry							| /																									| 															| noretry							| /hipc/telemetry/sessions/{id}?guaranteed=false							| 0	| false	| false |
| TextModeration_GetSigningKey							| textmoderation_anonymous			| /hi/moderation-proof-keys//{keyId}																| 															| linearretry_gsk					| 																			| 0	| false	| false |
| TextModeration_GetSigningKeys							| textmoderation_anonymous			| /hi/moderation-proof-keys																			| 															| linearretry_gsks					| 																			| 0	| false	| false |
| TextModeration_PostInappropriateMessageReport			| textmoderation					| /hi/players/{player}/text-message-reports															| 															| linearretry_pimr					| 																			| 0	| false	| false |
| TextModeration_PostTextForModeration					| textmoderation					| /hi/players/{player}/text-messages																| 															| linearretry_ptfm					| 																			| 0	| false	| false |
| Xbl_GetProfileSettingsForSpeechAccessibility			| xbl-profile						| /users/me/profile/settings																		| ?settings=SpeechAccessibility								| linearretry						| 																			| 0	| false	| false |
| XboxLive_TitleManagedStorage							| xbl-title-storage					| /trustedplatform/users/xuid({xuid})/scids/{scid}/data/thunderhead_campaign_saves					| 															| linearretry						| 																			| 0	| false	| false |
| XboxLive_TitleManagedStorageFile						| xbl-title-storage					| /trustedplatform/users/xuid({xuid})/scids/{scid}/data/thunderhead_campaign_saves/{filename}{type}	| 															| ExtendedLinearRetryForTMS			| 																			| 0	| false	| false |
| Xboxlive_QoSEndpoints									| gameserverds-xbl					| /xplatqosservers																																				| linearretry						| 																			| 0	| false	| false |
