import * as jspb from 'google-protobuf'



export class GameVariantUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameVariantUpdateRequest;

  getGameId(): string;
  setGameId(value: string): GameVariantUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameVariantUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameVariantUpdateRequest): GameVariantUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: GameVariantUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameVariantUpdateRequest;
  static deserializeBinaryFromReader(message: GameVariantUpdateRequest, reader: jspb.BinaryReader): GameVariantUpdateRequest;
}

export namespace GameVariantUpdateRequest {
  export type AsObject = {
    id: string,
    gameId: string,
  }
}

export class GameVariantUpdateResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GameVariantUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameVariantUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameVariantUpdateResponse): GameVariantUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: GameVariantUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameVariantUpdateResponse;
  static deserializeBinaryFromReader(message: GameVariantUpdateResponse, reader: jspb.BinaryReader): GameVariantUpdateResponse;
}

export namespace GameVariantUpdateResponse {
  export type AsObject = {
    id: string,
  }
}

export class GameVariantInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameVariantInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameVariantInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameVariantInfoRequest): GameVariantInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GameVariantInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameVariantInfoRequest;
  static deserializeBinaryFromReader(message: GameVariantInfoRequest, reader: jspb.BinaryReader): GameVariantInfoRequest;
}

export namespace GameVariantInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GameVariantDetailsResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GameVariantDetailsResponse;

  getIdentity(): string;
  setIdentity(value: string): GameVariantDetailsResponse;

  getExternalId(): string;
  setExternalId(value: string): GameVariantDetailsResponse;

  getName(): string;
  setName(value: string): GameVariantDetailsResponse;

  getIntegrationType(): string;
  setIntegrationType(value: string): GameVariantDetailsResponse;

  getSupportedLangList(): Array<string>;
  setSupportedLangList(value: Array<string>): GameVariantDetailsResponse;
  clearSupportedLangList(): GameVariantDetailsResponse;
  addSupportedLang(value: string, index?: number): GameVariantDetailsResponse;

  getPlatformsList(): Array<string>;
  setPlatformsList(value: Array<string>): GameVariantDetailsResponse;
  clearPlatformsList(): GameVariantDetailsResponse;
  addPlatforms(value: string, index?: number): GameVariantDetailsResponse;

  getGameIdentity(): string;
  setGameIdentity(value: string): GameVariantDetailsResponse;
  hasGameIdentity(): boolean;
  clearGameIdentity(): GameVariantDetailsResponse;

  getDemoEnable(): boolean;
  setDemoEnable(value: boolean): GameVariantDetailsResponse;

  getFreespinEnable(): boolean;
  setFreespinEnable(value: boolean): GameVariantDetailsResponse;

  getFreechipEnable(): boolean;
  setFreechipEnable(value: boolean): GameVariantDetailsResponse;

  getJackpotEnable(): boolean;
  setJackpotEnable(value: boolean): GameVariantDetailsResponse;

  getBonusBuyEnable(): boolean;
  setBonusBuyEnable(value: boolean): GameVariantDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameVariantDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameVariantDetailsResponse): GameVariantDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: GameVariantDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameVariantDetailsResponse;
  static deserializeBinaryFromReader(message: GameVariantDetailsResponse, reader: jspb.BinaryReader): GameVariantDetailsResponse;
}

export namespace GameVariantDetailsResponse {
  export type AsObject = {
    id: string,
    identity: string,
    externalId: string,
    name: string,
    integrationType: string,
    supportedLangList: Array<string>,
    platformsList: Array<string>,
    gameIdentity?: string,
    demoEnable: boolean,
    freespinEnable: boolean,
    freechipEnable: boolean,
    jackpotEnable: boolean,
    bonusBuyEnable: boolean,
  }

  export enum GameIdentityCase { 
    _GAME_IDENTITY_NOT_SET = 0,
    GAME_IDENTITY = 8,
  }
}

export class GameVariantListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): GameVariantListRequest;

  getLimit(): number;
  setLimit(value: number): GameVariantListRequest;

  getId(): string;
  setId(value: string): GameVariantListRequest;
  hasId(): boolean;
  clearId(): GameVariantListRequest;

  getIdentity(): string;
  setIdentity(value: string): GameVariantListRequest;
  hasIdentity(): boolean;
  clearIdentity(): GameVariantListRequest;

  getExternalId(): string;
  setExternalId(value: string): GameVariantListRequest;
  hasExternalId(): boolean;
  clearExternalId(): GameVariantListRequest;

  getName(): string;
  setName(value: string): GameVariantListRequest;
  hasName(): boolean;
  clearName(): GameVariantListRequest;

  getIntegrationType(): string;
  setIntegrationType(value: string): GameVariantListRequest;
  hasIntegrationType(): boolean;
  clearIntegrationType(): GameVariantListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameVariantListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameVariantListRequest): GameVariantListRequest.AsObject;
  static serializeBinaryToWriter(message: GameVariantListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameVariantListRequest;
  static deserializeBinaryFromReader(message: GameVariantListRequest, reader: jspb.BinaryReader): GameVariantListRequest;
}

export namespace GameVariantListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    id?: string,
    identity?: string,
    externalId?: string,
    name?: string,
    integrationType?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 3,
  }

  export enum IdentityCase { 
    _IDENTITY_NOT_SET = 0,
    IDENTITY = 4,
  }

  export enum ExternalIdCase { 
    _EXTERNAL_ID_NOT_SET = 0,
    EXTERNAL_ID = 5,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 6,
  }

  export enum IntegrationTypeCase { 
    _INTEGRATION_TYPE_NOT_SET = 0,
    INTEGRATION_TYPE = 7,
  }
}

export class GameVariantListResponse extends jspb.Message {
  getTotalItems(): number;
  setTotalItems(value: number): GameVariantListResponse;

  getItemsList(): Array<GameVariantDetailsResponse>;
  setItemsList(value: Array<GameVariantDetailsResponse>): GameVariantListResponse;
  clearItemsList(): GameVariantListResponse;
  addItems(value?: GameVariantDetailsResponse, index?: number): GameVariantDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameVariantListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameVariantListResponse): GameVariantListResponse.AsObject;
  static serializeBinaryToWriter(message: GameVariantListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameVariantListResponse;
  static deserializeBinaryFromReader(message: GameVariantListResponse, reader: jspb.BinaryReader): GameVariantListResponse;
}

export namespace GameVariantListResponse {
  export type AsObject = {
    totalItems: number,
    itemsList: Array<GameVariantDetailsResponse.AsObject>,
  }
}

