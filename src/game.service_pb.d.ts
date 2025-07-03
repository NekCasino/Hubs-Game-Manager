import * as jspb from 'google-protobuf'



export class GameCreateRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): GameCreateRequest;

  getName(): string;
  setName(value: string): GameCreateRequest;

  getProviderId(): string;
  setProviderId(value: string): GameCreateRequest;

  getBonusBet(): boolean;
  setBonusBet(value: boolean): GameCreateRequest;

  getBonusWagering(): boolean;
  setBonusWagering(value: boolean): GameCreateRequest;

  getSort(): number;
  setSort(value: number): GameCreateRequest;

  getActive(): boolean;
  setActive(value: boolean): GameCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameCreateRequest): GameCreateRequest.AsObject;
  static serializeBinaryToWriter(message: GameCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameCreateRequest;
  static deserializeBinaryFromReader(message: GameCreateRequest, reader: jspb.BinaryReader): GameCreateRequest;
}

export namespace GameCreateRequest {
  export type AsObject = {
    identity: string,
    name: string,
    providerId: string,
    bonusBet: boolean,
    bonusWagering: boolean,
    sort: number,
    active: boolean,
  }
}

export class GameUpdateResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GameUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateResponse): GameUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: GameUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateResponse;
  static deserializeBinaryFromReader(message: GameUpdateResponse, reader: jspb.BinaryReader): GameUpdateResponse;
}

export namespace GameUpdateResponse {
  export type AsObject = {
    id: string,
  }
}

export class GameUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameUpdateRequest;

  getName(): string;
  setName(value: string): GameUpdateRequest;
  hasName(): boolean;
  clearName(): GameUpdateRequest;

  getProviderId(): string;
  setProviderId(value: string): GameUpdateRequest;
  hasProviderId(): boolean;
  clearProviderId(): GameUpdateRequest;

  getBonusBet(): boolean;
  setBonusBet(value: boolean): GameUpdateRequest;
  hasBonusBet(): boolean;
  clearBonusBet(): GameUpdateRequest;

  getBonusWagering(): boolean;
  setBonusWagering(value: boolean): GameUpdateRequest;
  hasBonusWagering(): boolean;
  clearBonusWagering(): GameUpdateRequest;

  getSort(): number;
  setSort(value: number): GameUpdateRequest;
  hasSort(): boolean;
  clearSort(): GameUpdateRequest;

  getActive(): boolean;
  setActive(value: boolean): GameUpdateRequest;
  hasActive(): boolean;
  clearActive(): GameUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateRequest): GameUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: GameUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateRequest;
  static deserializeBinaryFromReader(message: GameUpdateRequest, reader: jspb.BinaryReader): GameUpdateRequest;
}

export namespace GameUpdateRequest {
  export type AsObject = {
    id: string,
    name?: string,
    providerId?: string,
    bonusBet?: boolean,
    bonusWagering?: boolean,
    sort?: number,
    active?: boolean,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum ProviderIdCase { 
    _PROVIDER_ID_NOT_SET = 0,
    PROVIDER_ID = 3,
  }

  export enum BonusBetCase { 
    _BONUS_BET_NOT_SET = 0,
    BONUS_BET = 4,
  }

  export enum BonusWageringCase { 
    _BONUS_WAGERING_NOT_SET = 0,
    BONUS_WAGERING = 5,
  }

  export enum SortCase { 
    _SORT_NOT_SET = 0,
    SORT = 6,
  }

  export enum ActiveCase { 
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 7,
  }
}

export class GameUpdateImageRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameUpdateImageRequest;

  getData(): GameUpdateImageRequest.ImageChunk | undefined;
  setData(value?: GameUpdateImageRequest.ImageChunk): GameUpdateImageRequest;
  hasData(): boolean;
  clearData(): GameUpdateImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateImageRequest): GameUpdateImageRequest.AsObject;
  static serializeBinaryToWriter(message: GameUpdateImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateImageRequest;
  static deserializeBinaryFromReader(message: GameUpdateImageRequest, reader: jspb.BinaryReader): GameUpdateImageRequest;
}

export namespace GameUpdateImageRequest {
  export type AsObject = {
    id: string,
    data?: GameUpdateImageRequest.ImageChunk.AsObject,
  }

  export class ImageChunk extends jspb.Message {
    getKey(): string;
    setKey(value: string): ImageChunk;

    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): ImageChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageChunk.AsObject;
    static toObject(includeInstance: boolean, msg: ImageChunk): ImageChunk.AsObject;
    static serializeBinaryToWriter(message: ImageChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageChunk;
    static deserializeBinaryFromReader(message: ImageChunk, reader: jspb.BinaryReader): ImageChunk;
  }

  export namespace ImageChunk {
    export type AsObject = {
      key: string,
      content: Uint8Array | string,
    }
  }

}

export class GameUpdateCollectionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameUpdateCollectionRequest;

  getCollectionId(): string;
  setCollectionId(value: string): GameUpdateCollectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateCollectionRequest): GameUpdateCollectionRequest.AsObject;
  static serializeBinaryToWriter(message: GameUpdateCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateCollectionRequest;
  static deserializeBinaryFromReader(message: GameUpdateCollectionRequest, reader: jspb.BinaryReader): GameUpdateCollectionRequest;
}

export namespace GameUpdateCollectionRequest {
  export type AsObject = {
    id: string,
    collectionId: string,
  }
}

export class GameInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameInfoRequest): GameInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GameInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameInfoRequest;
  static deserializeBinaryFromReader(message: GameInfoRequest, reader: jspb.BinaryReader): GameInfoRequest;
}

export namespace GameInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GameDetailsResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GameDetailsResponse;

  getIdentity(): string;
  setIdentity(value: string): GameDetailsResponse;

  getName(): string;
  setName(value: string): GameDetailsResponse;

  getProviderId(): string;
  setProviderId(value: string): GameDetailsResponse;

  getBonusBet(): boolean;
  setBonusBet(value: boolean): GameDetailsResponse;

  getBonusWagering(): boolean;
  setBonusWagering(value: boolean): GameDetailsResponse;

  getImagesMap(): jspb.Map<string, string>;
  clearImagesMap(): GameDetailsResponse;

  getSort(): number;
  setSort(value: number): GameDetailsResponse;

  getActive(): boolean;
  setActive(value: boolean): GameDetailsResponse;

  getProvider(): GameDetailsResponse.ProviderDetailsDto | undefined;
  setProvider(value?: GameDetailsResponse.ProviderDetailsDto): GameDetailsResponse;
  hasProvider(): boolean;
  clearProvider(): GameDetailsResponse;

  getCollectionsList(): Array<GameDetailsResponse.CollectionDetailsDto>;
  setCollectionsList(value: Array<GameDetailsResponse.CollectionDetailsDto>): GameDetailsResponse;
  clearCollectionsList(): GameDetailsResponse;
  addCollections(value?: GameDetailsResponse.CollectionDetailsDto, index?: number): GameDetailsResponse.CollectionDetailsDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameDetailsResponse): GameDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: GameDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameDetailsResponse;
  static deserializeBinaryFromReader(message: GameDetailsResponse, reader: jspb.BinaryReader): GameDetailsResponse;
}

export namespace GameDetailsResponse {
  export type AsObject = {
    id: string,
    identity: string,
    name: string,
    providerId: string,
    bonusBet: boolean,
    bonusWagering: boolean,
    imagesMap: Array<[string, string]>,
    sort: number,
    active: boolean,
    provider?: GameDetailsResponse.ProviderDetailsDto.AsObject,
    collectionsList: Array<GameDetailsResponse.CollectionDetailsDto.AsObject>,
  }

  export class ProviderDetailsDto extends jspb.Message {
    getId(): string;
    setId(value: string): ProviderDetailsDto;

    getIdentity(): string;
    setIdentity(value: string): ProviderDetailsDto;

    getName(): string;
    setName(value: string): ProviderDetailsDto;

    getImagesMap(): jspb.Map<string, string>;
    clearImagesMap(): ProviderDetailsDto;

    getActive(): boolean;
    setActive(value: boolean): ProviderDetailsDto;

    getGameCount(): number;
    setGameCount(value: number): ProviderDetailsDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProviderDetailsDto.AsObject;
    static toObject(includeInstance: boolean, msg: ProviderDetailsDto): ProviderDetailsDto.AsObject;
    static serializeBinaryToWriter(message: ProviderDetailsDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProviderDetailsDto;
    static deserializeBinaryFromReader(message: ProviderDetailsDto, reader: jspb.BinaryReader): ProviderDetailsDto;
  }

  export namespace ProviderDetailsDto {
    export type AsObject = {
      id: string,
      identity: string,
      name: string,
      imagesMap: Array<[string, string]>,
      active: boolean,
      gameCount: number,
    }
  }


  export class CollectionDetailsDto extends jspb.Message {
    getId(): string;
    setId(value: string): CollectionDetailsDto;

    getIdentity(): string;
    setIdentity(value: string): CollectionDetailsDto;

    getName(): string;
    setName(value: string): CollectionDetailsDto;

    getImagesMap(): jspb.Map<string, string>;
    clearImagesMap(): CollectionDetailsDto;

    getSort(): number;
    setSort(value: number): CollectionDetailsDto;

    getActive(): boolean;
    setActive(value: boolean): CollectionDetailsDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionDetailsDto.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionDetailsDto): CollectionDetailsDto.AsObject;
    static serializeBinaryToWriter(message: CollectionDetailsDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionDetailsDto;
    static deserializeBinaryFromReader(message: CollectionDetailsDto, reader: jspb.BinaryReader): CollectionDetailsDto;
  }

  export namespace CollectionDetailsDto {
    export type AsObject = {
      id: string,
      identity: string,
      name: string,
      imagesMap: Array<[string, string]>,
      sort: number,
      active: boolean,
    }
  }

}

export class GameListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): GameListRequest;

  getLimit(): number;
  setLimit(value: number): GameListRequest;

  getName(): string;
  setName(value: string): GameListRequest;
  hasName(): boolean;
  clearName(): GameListRequest;

  getProviderId(): string;
  setProviderId(value: string): GameListRequest;
  hasProviderId(): boolean;
  clearProviderId(): GameListRequest;

  getBonusBet(): boolean;
  setBonusBet(value: boolean): GameListRequest;
  hasBonusBet(): boolean;
  clearBonusBet(): GameListRequest;

  getBonusWagering(): boolean;
  setBonusWagering(value: boolean): GameListRequest;
  hasBonusWagering(): boolean;
  clearBonusWagering(): GameListRequest;

  getActive(): boolean;
  setActive(value: boolean): GameListRequest;
  hasActive(): boolean;
  clearActive(): GameListRequest;

  getCollectionId(): string;
  setCollectionId(value: string): GameListRequest;
  hasCollectionId(): boolean;
  clearCollectionId(): GameListRequest;

  getIdentity(): string;
  setIdentity(value: string): GameListRequest;
  hasIdentity(): boolean;
  clearIdentity(): GameListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameListRequest): GameListRequest.AsObject;
  static serializeBinaryToWriter(message: GameListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameListRequest;
  static deserializeBinaryFromReader(message: GameListRequest, reader: jspb.BinaryReader): GameListRequest;
}

export namespace GameListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    name?: string,
    providerId?: string,
    bonusBet?: boolean,
    bonusWagering?: boolean,
    active?: boolean,
    collectionId?: string,
    identity?: string,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 3,
  }

  export enum ProviderIdCase { 
    _PROVIDER_ID_NOT_SET = 0,
    PROVIDER_ID = 4,
  }

  export enum BonusBetCase { 
    _BONUS_BET_NOT_SET = 0,
    BONUS_BET = 5,
  }

  export enum BonusWageringCase { 
    _BONUS_WAGERING_NOT_SET = 0,
    BONUS_WAGERING = 6,
  }

  export enum ActiveCase { 
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 7,
  }

  export enum CollectionIdCase { 
    _COLLECTION_ID_NOT_SET = 0,
    COLLECTION_ID = 8,
  }

  export enum IdentityCase { 
    _IDENTITY_NOT_SET = 0,
    IDENTITY = 9,
  }
}

export class GameListResponse extends jspb.Message {
  getTotalItems(): number;
  setTotalItems(value: number): GameListResponse;

  getItemsList(): Array<GameDetailsResponse>;
  setItemsList(value: Array<GameDetailsResponse>): GameListResponse;
  clearItemsList(): GameListResponse;
  addItems(value?: GameDetailsResponse, index?: number): GameDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameListResponse): GameListResponse.AsObject;
  static serializeBinaryToWriter(message: GameListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameListResponse;
  static deserializeBinaryFromReader(message: GameListResponse, reader: jspb.BinaryReader): GameListResponse;
}

export namespace GameListResponse {
  export type AsObject = {
    totalItems: number,
    itemsList: Array<GameDetailsResponse.AsObject>,
  }
}

