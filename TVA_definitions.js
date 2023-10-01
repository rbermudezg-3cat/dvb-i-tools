import { mpeg7 } from "./MPEG7_definitions.js";

export const TVA_CSmetadata = "urn:tva:metadata:cs";

export const tva = {
	SYNOPSIS_BRIEF_LABEL: "brief",
	SYNOPSIS_BRIEF_LENGTH: 30,
	SYNOPSIS_SHORT_LABEL: "short",
	SYNOPSIS_SHORT_LENGTH: 90,
	SYNOPSIS_MEDIUM_LABEL: "medium",
	SYNOPSIS_MEDIUM_LENGTH: 250,
	SYNOPSIS_LONG_LABEL: "long",
	SYNOPSIS_LONG_LENGTH: 1200,
	SYNOPSIS_EXTENDED_LABEL: "extended",

	KEYWORD_TYPE_MAIN: "main",
	KEYWORD_TYPE_SECONDARY: "secondary",
	KEYWORD_TYPE_OTHER: "other",
	DEFAULT_KEYWORD_TYPE: "main",

	GENRE_TYPE_MAIN: "main",
	GENRE_TYPE_SECONDARY: "secondary",
	GENRE_TYPE_OTHER: "other",
	DEFAULT_GENRE_TYPE: "main",
	ALL_GENRE_TYPES: ["main", "secondary", "other"],

	DELIVERY_MODE_STREAMING: "streaming",

	SCAN_TYPES: ["interlaced", "progressive"],
	COLOR_TYPES: ["color", "blackAndWhite", "blackAndWhiteAndColor", "colorized"],

	ALLOWED_ASPECT_RATIO_TYPES: ["original", "publication"],

	e_TVAMain: "TVAMain",
	e_ProgramInformationTable: "ProgramInformationTable",
	e_ProgramLocationTable: "ProgramLocationTable",
	e_GroupInformationTable: "GroupInformationTable",

	e_AccessibilityAttributes: "AccessibilityAttributes",
	e_ActualDuration: "ActualDuration",
	e_ActualEndTime: "ActualEndTime",
	e_ActualStartTime: "ActualStartTime",
	e_AggregationOf: "AggregationOf",
	e_AppInformation: "AppInformation",
	e_AspectRatio: "AspectRatio",
	e_AVAttributes: "AVAttributes",
	e_AudioAttributes: "AudioAttributes",
	e_AudioDescriptionAttributes: "AudioDescriptionAttributes",
	e_AudioLanguage: "AudioLanguage",
	e_AuxiliaryURI: "AuxiliaryURI",
	e_AuxiliaryURL: "AuxiliaryURL",
	e_AwardsList: "AwardsList",
	e_BasicDescription: "BasicDescription",
	e_BitRate: "BitRate",
	e_BitsPerSample: "BitsPerSample",
	e_BroadcastEvent: "BroadcastEvent",
	e_CaptioningAttributes: "CaptioningAttributes",
	e_CaptionLanguage: "CaptionLanguage",
	e_Character: "Character",
	e_Closed: "Closed",
	e_Coding: "Coding",
	e_Color: "Color",
	e_ContentVersion: "ContentVersion",
	e_CountryCodes: "CountryCodes",
	e_CreationCoordinates: "CreationCoordinates",
	e_CreditsInformationTable: "CreditsInformationTable",
	e_CreditsItem: "CreditsItem",
	e_CreditsList: "CreditsList",
	e_DeliveryMode: "DeliveryMode",
	e_DepictedCoordinates: "DepictedCoordinates",
	e_DerivedFrom: "DerivedFrom",
	e_DialogueEnhancementAttributes: "DialogueEnhancementAttributes",
	e_EarlyPlayout: "EarlyPlayout",
	e_EmbargoTime: "EmbargoTime",
	e_EndOfAvailability: "EndOfAvailability",
	e_EpisodeOf: "EpisodeOf",
	e_ExpiryTimeAfterDownload: "ExpiryTimeAfterDownload",
	e_ExpiryTimeAfterDownloadFirstStart: "ExpiryTimeAfterDownloadFirstStart",
	e_ExpiryTimeAfterFirstStart: "ExpiryTimeAfterFirstStart",
	e_ExpiryTime: "ExpiryTime",
	e_ExplanatoryText: "ExplanatoryText",
	e_FamilyName: "FamilyName",
	e_FileFormat: "FileFormat",
	e_FileSize: "FileSize",
	e_FirstAvailability: "FirstAvailability",
	e_FirstShowing: "FirstShowing",
	e_Format: "Format",
	e_FrameRate: "FrameRate",
	e_Free: "Free",
	e_Genre: "Genre",
	e_GivenName: "GivenName",
	e_GroupInformation: "GroupInformation",
	e_GroupType: "GroupType",
	e_HighContrastUIAttributes: "HighContrastUIAttributes",
	e_HorizontalSize: "HorizontalSize",
	e_HowRelated: "HowRelated",
	e_ImmediateViewing: "ImmediateViewing",
	e_InlineMedia: "InlineMedia",
	e_InstanceDescription: "InstanceDescription",
	e_InstanceMetadataId: "InstanceMetadataId",
	e_Keyword: "Keyword",
	e_Language: "Language",
	e_LastAvailability: "LastAvailability",
	e_LastShowing: "LastShowing",
	e_Live: "Live",
	e_MagnificationUIAttributes: "MagnificationUIAttributes",
	e_MaxNumberOfDownloads: "MaxNumberOfDownloads",
	e_MediaLocator: "MediaLocator",
	e_MediaTitle: "MediaTitle",
	e_MediaUri: "MediaUri",
	e_MemberOf: "MemberOf",
	e_MinimumAge: "MinimumAge",
	e_MixType: "MixType",
	e_NumOfChannels: "NumOfChannels",
	e_OnDemandProgram: "OnDemandProgram",
	e_OnDemandService: "OnDemandService",
	e_OrganizationName: "OrganizationName",
	e_OtherIdentifier: "OtherIdentifier",
	e_ParentalGuidance: "ParentalGuidance",
	e_ParentalRating: "ParentalRating",
	e_PartOfAggregatedGroup: "PartOfAggregatedGroup",
	e_PartOfAggregateProgram: "PartOfAggregateProgram",
	e_Personalisation: "Personalisation",
	e_PersonName: "PersonName",
	e_PictureFormat: "PictureFormat",
	e_ProductionDate: "ProductionDate",
	e_ProductionLocation: "ProductionLocation",
	e_ProgramDescription: "ProgramDescription",
	e_ProgramInformation: "ProgramInformation",
	e_Program: "Program",
	e_ProgramReviewTable: "ProgramReviewTable",
	e_ProgramURL: "ProgramURL",
	e_PromotionalInformation: "PromotionalInformation",
	e_PromotionalMedia: "PromotionalMedia",
	e_PromotionalText: "PromotionalText",
	e_PublishedDuration: "PublishedDuration",
	e_PublishedEndTime: "PublishedEndTime",
	e_PublishedStartTime: "PublishedStartTime",
	e_PurchaseInformationTable: "PurchaseInformationTable",
	e_PurchaseList: "PurchaseList",
	e_Purpose: "Purpose",
	e_PushDownloadProgram: "PushDownloadProgram",
	e_ReceiverMix: "ReceiverMix",
	e_RelatedMaterial: "RelatedMaterial",
	e_ReleaseInformation: "ReleaseInformation",
	e_Repeat: "Repeat",
	e_RequiredStandardVersion: "RequiredStandardVersion",
	e_RequiredOptionalFeature: "RequiredOptionalFeature",
	e_ResponseToUserAction: "ResponseToUserAction",
	e_RightsInformationTable: "RightsInformationTable",
	e_SampleFrequency: "SampleFrequency",
	e_Scan: "Scan",
	e_Schedule: "Schedule",
	e_ScheduleEvent: "ScheduleEvent",
	e_ScreenReaderAttributes: "ScreenReaderAttributes",
	e_SegmentInformationTable: "SegmentInformationTable",
	e_ServiceInformationTable: "ServiceInformationTable",
	e_SegmentReference: "SegmentReference",
	e_ShortTitle: "ShortTitle",
	e_SigningAttributes: "SigningAttributes",
	e_SignLanguage: "SignLanguage",
	e_SocialMediaReference: "SocialMediaReference",
	e_SourceMediaLocator: "SourceMediaLocator",
	e_SpokenSubtitlesAttributes: "SpokenSubtitlesAttributes",
	e_StartOfAvailability: "StartOfAvailability",
	e_StillPictureFormat: "StillPictureFormat",
	e_StreamID: "StreamID",
	e_SubtitleAttributes: "SubtitleAttributes",
	e_SubtitleLanguage: "SubtitleLanguage",
	e_SuitableForTTS: "SuitableForTTS",
	e_Synopsis: "Synopsis",
	e_System: "System",
	e_Title: "Title",
	e_VerticalSize: "VerticalSize",
	e_VideoAttributes: "VideoAttributes",

	a_average: "average",
	a_closed: "closed",
	a_contentLanguage: "contentLanguage",
	a_contentType: "contentType",
	a_crid: "crid",
	a_end: "end",
	a_fragmentId: "fragmentId",
	a_fragmentVersion: "fragmentVersion",
	a_fragmentExpirationDate: "fragmentExpirationDate",
	a_groupId: "groupId",
	a_horizontalSize: "horizontalSize",
	a_href: "href",
	a_index: "index",
	a_lang: mpeg7.a_lang,
	a_length: "length",
	a_maximum: "maximum",
	a_metadataOriginIDRef: "metadataOriginIDRef",
	a_minimum: "minimum",
	a_numOfItems: "numOfItems",
	a_ordered: "ordered",
	a_primary: "primary",
	a_programId: "programId",
	a_purpose: "purpose",
	a_role: "role",
	a_serviceIDRef: "serviceIDRef",
	a_start: "start",
	a_supplemental: "supplemental",
	a_translation: "translation",
	a_type: "type",
	a_uriType: "uriType",
	a_variable: "variable",
	a_value: "value",
	a_verticalSize: "verticalSize",

	v_lengthLong: "long",
	v_otherCollection: "otherCollection",

	t_MemberOfType: "MemberOfType",
	t_ProgramGroupTypeType: "ProgramGroupTypeType",

	cs_PromotionalStillImage: `${TVA_CSmetadata}:HowRelatedCS:2012:19`,
};

const tvaBaseMemberOfTypeAttributes = [tva.a_crid, tva.a_index],
	tvaControlledTermTypeAttributes = [tva.a_href],
	tvafragmentIdentificationAttributes = [tva.a_fragmentId, tva.a_fragmentVersion, tva.a_fragmentExpirationDate],
	mpeg7UniqueIDTypeAttributes = [mpeg7.a_type, mpeg7.a_organization, mpeg7.a_authority, mpeg7.a_encoding];

export const tvaEA = {
	// EA = Element-Attributes - the attributes that are defiend for each element
	AudioLanguage: [tva.a_purpose, mpeg7.a_type, mpeg7.a_supplemental],
	AuxiliaryURI: [tva.a_contentType, tva.a_uriType],
	Coding: tvaControlledTermTypeAttributes,
	CreditsItem: [tva.a_role, tva.a_index],
	EpisodeOf: tvaBaseMemberOfTypeAttributes,
	ExplanatoryText: [tva.a_length, tva.a_lang],
	Genre: [tva.a_type, tva.a_metadataOriginIDRef].concat(tvaControlledTermTypeAttributes),
	GroupInformation: [tva.a_groupId, tva.a_lang, tva.a_ordered, tva.a_numOfItems, tva.a_metadataOriginIDRef, tva.a_serviceIDRef].concat(tvafragmentIdentificationAttributes),
	GroupType: [tva.a_type, tva.a_value],
	HowRelated: tvaControlledTermTypeAttributes,
	Keyword: [tva.a_lang, tva.a_type, tva.a_metadataOriginIDRef],
	MediaLocator: [],
	MediaUri: [tva.a_contentType, tva.a_uriType],
	MemberOf: tvaBaseMemberOfTypeAttributes,
	MinimumAge: [],
	MixType: tvaControlledTermTypeAttributes,
	OnDemandProgram: [tva.a_serviceIDRef, tva.a_lang, tva.a_metadataOriginIDRef].concat(tvafragmentIdentificationAttributes),
	OtherIdentifier: mpeg7UniqueIDTypeAttributes,
	ParentalRating: [tva.a_href],
	Program: [tva.a_crid],
	ProgramInformation: [tva.a_programId, tva.a_lang, tva.a_metadataOriginIDRef].concat(tvafragmentIdentificationAttributes),
	ProgramInformationTable: [tva.a_lang, tva.a_programId, tva.a_metadataOriginIDRef].concat(tvafragmentIdentificationAttributes),
	ProgramLocationTable: [tva.a_lang, tva.a_metadataOriginIDRef],
	Schedule: [tva.a_serviceIDRef, tva.a_start, tva.a_end, tva.a_lang, tva.a_metadataOriginIDRef].concat(tvafragmentIdentificationAttributes),
	ScheduleEvent: [tva.a_lang, tva.a_metadataOriginIDRef],
	SillPictureFormat: [tva.a_horizontalSize, tva.a_verticalSize].concat(),
	Synopsis: [tva.a_length, tva.a_lang],
	Title: [tva.a_type, tva.a_lang],
};

const ProgramLocationType = [tva.e_Program, tva.e_ProgramURL, tva.e_AuxiliaryURL, tva.e_InatanceMetadataId, tva.e_InstanceDescription];
export const BaseAccessibilityAttributesType = [tva.e_AppInformation, tva.e_Personalisation];

export const tvaEC = {
	// EC = Element-Children - the child elements or each element
	AccessibilityAttributes: [
		tva.e_SubtitleAttributes,
		tva.e_AudioDescriptionAttributes,
		tva.e_SigningAttributes,
		tva.e_DialogueEnhancementAttributes,
		tva.e_SpokenSubtitlesAttributes,
		tva.e_MagnificationUIAttributes,
		tva.e_HighContrastUIAttributes,
		tva.e_ScreenReaderAttributes,
		tva.e_ResponseToUserAction,
	],
	AudioAttributes: [tva.e_Coding, tva.e_NumOfChannels, tva.e_MixType, tva.e_AudioLanguage, tva.e_SampleFrequency, tva.e_BitsPerSample, tva.e_BitRate],
	AudioDescriptionAttributes: [tva.e_AudioAttributes, tva.e_ReceiverMix].concat(BaseAccessibilityAttributesType),
	AVAttributes: [
		tva.e_FileFormat,
		tva.e_FileSize,
		tva.e_System,
		tva.e_BitRate,
		tva.e_AudioAttributes,
		tva.e_VideoAttributes,
		tva.e_CaptioningAttributes,
		tva.e_AccessibilityAttributes,
	],
	CaptioningAttributes: [tva.e_Coding, tva.e_BitRate],
	BasicDescription: [
		tva.e_Title,
		tva.e_MediaTitle,
		tva.e_ShortTitle,
		tva.e_Synopsis,
		tva.e_PromotionalInformation,
		tva.e_Keyword,
		tva.e_Genre,
		tva.e_ParentalGuidance,
		tva.e_Language,
		tva.e_SignLanguage,
		tva.e_CaptionLanguage,
		tva.e_CreditsList,
		tva.e_AwardsList,
		tva.e_RelatedMaterial,
		tva.e_ProductionDate,
		tva.e_ProductionLocation,
		tva.e_CreationCoordinates,
		tva.e_DepictedCoordinates,
		tva.e_ReleaseInformation,
		tva.e_PublishedDuration,
		tva.e_PurchaseList,
	],
	DialogEnhancementAttributes: [tva.e_AudioAttributes].concat(BaseAccessibilityAttributesType),
	Format: [tva.e_AVAttributes, tva.e_StillPictureFormat],
	GroupInformation: [tva.e_GroupType, tva.e_BasicDescription, tva.e_MemberOf, tva.e_OtherIdentifier, tva.e_PartOfAggregatedGroup, tva.e_AggregationOf],
	InstanceDescription: [
		tva.e_Title,
		tva.e_Synopsis,
		tva.e_Genre,
		tva.e_PurchaseList,
		tva.e_CaptionLanguage,
		tva.e_SignLanguage,
		tva.e_ParentalGuidance,
		tva.e_AVAttributes,
		tva.e_MemberOf,
		tva.e_OtherIdentifier,
		tva.e_RelatedMaterial,
	],
	MediaLocator: [tva.e_MediaUri, tva.e_AuxiliaryURI, tva.e_InlineMedia, tva.e_StreamID],
	OnDemandProgram: [
		tva.e_PublishedDuration,
		tva.e_StartOfAvailability,
		tva.e_EndOfAvailability,
		tva.e_FirstAvailability,
		tva.e_LastAvailability,
		tva.e_ImmediateViewing,
		tva.e_DeliveryMode,
		tva.e_ContentVersion,
		tva.e_ExpiryDate,
		tva.e_EarlyPlayout,
		tva.e_Free,
		tva.e_ExpiryTimeAfterFirstStart,
		tva.e_EmbargoTime,
		tva.e_MaxNumberOfDownloads,
		tva.e_ExpiryTimeAfterDownload,
		tva.e_ExpiryTimeAfterDownloadFirstStart,
	].concat(ProgramLocationType),
	ProgramDescription: [
		tva.e_ProgramInformationTable,
		tva.e_GroupInformationTable,
		tva.e_ProgramInformationTable,
		tva.e_ServiceInformationTable,
		tva.e_CreditsInformationTable,
		tva.e_ProgramReviewTable,
		tva.e_SegmentInformationTable,
		tva.e_PurchaseInformationTable,
		tva.e_RightsInformationTable,
	],
	ProgramInformation: [
		tva.e_BasicDescription,
		tva.e_OtherIdentifier,
		tva.e_AVAttributes,
		tva.e_MemberOf,
		tva.e_DerivedFrom,
		tva.e_EpisodeOf,
		tva.e_PartOfAggregateProgram,
		tva.e_AggregationOf,
	],
	ProgramLocationTable: [tva.e_Schedule, tva.e_BroadcastEvent, tva.e_OnDemandProgram, tva.e_OnDemandService, tva.e_PushDownloadProgram],
	RelatedMaterial: [
		tva.e_HowRelated,
		tva.e_Format,
		tva.e_MediaLocator,
		tva.e_SegmentReference,
		tva.e_PromotionalText,
		tva.e_PromotionalMedia,
		tva.e_SocialMediaReference,
		tva.e_SourceMediaLocator,
		tva.e_AccessibilityAttributes,
	],
	Schedule: [tva.e_ScheduleEvent],
	ScheduleEvent: [
		tva.e_PublishedStartTime,
		tva.e_PublishedEndTime,
		tva.e_PublishedDuration,
		tva.e_ActualStartTime,
		tva.e_ActualEndTime,
		tva.e_ActualDuration,
		tva.e_DeliveryMode,
		tva.e_Repeat,
		tva.e_FirstShowing,
		tva.e_LastShowing,
		tva.e_Free,
	].concat(ProgramLocationType),
	SigningAttributes: [tva.e_Coding, tva.e_SignLanguage, tva.e_Closed].concat(BaseAccessibilityAttributesType),
	SpokenSubtitlesAttributes: [tva.e_AudioAttributes].concat(BaseAccessibilityAttributesType),
	SubtitleAttributes: [tva.e_Coding, tva.e_SubtitleLanguage, tva.e_Purpose, tva.e_SuitableForTTS].concat(BaseAccessibilityAttributesType),
	VideoAttributes: [tva.e_Coding, tva.e_Scan, tva.e_HorizontalSize, tva.e_VerticalSize, tva.e_AspectRatio, tva.e_Color, tva.e_FrameRate, tva.e_BitRate, tva.e_BitsPerSample],
};
