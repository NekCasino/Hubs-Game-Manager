import * as jspb from 'google-protobuf'



export class CollectionCreateRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): CollectionCreateRequest;

  getName(): string;
  setName(value: string): CollectionCreateRequest;

  getSort(): number;
  setSort(value: number): CollectionCreateRequest;

  getActive(): boolean;
  setActive(value: boolean): CollectionCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionCreateRequest): CollectionCreateRequest.AsObject;
  static serializeBinaryToWriter(message: CollectionCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionCreateRequest;
  static deserializeBinaryFromReader(message: CollectionCreateRequest, reader: jspb.BinaryReader): CollectionCreateRequest;
}

export namespace CollectionCreateRequest {
  export type AsObject = {
    identity: string,
    name: string,
    sort: number,
    active: boolean,
  }
}

export class CollectionUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CollectionUpdateRequest;

  getName(): string;
  setName(value: string): CollectionUpdateRequest;
  hasName(): boolean;
  clearName(): CollectionUpdateRequest;

  getSort(): number;
  setSort(value: number): CollectionUpdateRequest;
  hasSort(): boolean;
  clearSort(): CollectionUpdateRequest;

  getActive(): boolean;
  setActive(value: boolean): CollectionUpdateRequest;
  hasActive(): boolean;
  clearActive(): CollectionUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionUpdateRequest): CollectionUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: CollectionUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionUpdateRequest;
  static deserializeBinaryFromReader(message: CollectionUpdateRequest, reader: jspb.BinaryReader): CollectionUpdateRequest;
}

export namespace CollectionUpdateRequest {
  export type AsObject = {
    id: string,
    name?: string,
    sort?: number,
    active?: boolean,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum SortCase { 
    _SORT_NOT_SET = 0,
    SORT = 3,
  }

  export enum ActiveCase { 
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 4,
  }
}

export class CollectionUpdateImageRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CollectionUpdateImageRequest;

  getData(): CollectionUpdateImageRequest.ImageChunk | undefined;
  setData(value?: CollectionUpdateImageRequest.ImageChunk): CollectionUpdateImageRequest;
  hasData(): boolean;
  clearData(): CollectionUpdateImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionUpdateImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionUpdateImageRequest): CollectionUpdateImageRequest.AsObject;
  static serializeBinaryToWriter(message: CollectionUpdateImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionUpdateImageRequest;
  static deserializeBinaryFromReader(message: CollectionUpdateImageRequest, reader: jspb.BinaryReader): CollectionUpdateImageRequest;
}

export namespace CollectionUpdateImageRequest {
  export type AsObject = {
    id: string,
    data?: CollectionUpdateImageRequest.ImageChunk.AsObject,
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

export class CollectionInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CollectionInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionInfoRequest): CollectionInfoRequest.AsObject;
  static serializeBinaryToWriter(message: CollectionInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionInfoRequest;
  static deserializeBinaryFromReader(message: CollectionInfoRequest, reader: jspb.BinaryReader): CollectionInfoRequest;
}

export namespace CollectionInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class CollectionListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): CollectionListRequest;

  getLimit(): number;
  setLimit(value: number): CollectionListRequest;

  getIdentity(): string;
  setIdentity(value: string): CollectionListRequest;
  hasIdentity(): boolean;
  clearIdentity(): CollectionListRequest;

  getName(): string;
  setName(value: string): CollectionListRequest;
  hasName(): boolean;
  clearName(): CollectionListRequest;

  getActive(): boolean;
  setActive(value: boolean): CollectionListRequest;
  hasActive(): boolean;
  clearActive(): CollectionListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionListRequest): CollectionListRequest.AsObject;
  static serializeBinaryToWriter(message: CollectionListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionListRequest;
  static deserializeBinaryFromReader(message: CollectionListRequest, reader: jspb.BinaryReader): CollectionListRequest;
}

export namespace CollectionListRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    identity?: string,
    name?: string,
    active?: boolean,
  }

  export enum IdentityCase { 
    _IDENTITY_NOT_SET = 0,
    IDENTITY = 3,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 4,
  }

  export enum ActiveCase { 
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 5,
  }
}

export class CollectionUpdateResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CollectionUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionUpdateResponse): CollectionUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: CollectionUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionUpdateResponse;
  static deserializeBinaryFromReader(message: CollectionUpdateResponse, reader: jspb.BinaryReader): CollectionUpdateResponse;
}

export namespace CollectionUpdateResponse {
  export type AsObject = {
    id: string,
  }
}

export class CollectionDetailsResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CollectionDetailsResponse;

  getIdentity(): string;
  setIdentity(value: string): CollectionDetailsResponse;

  getName(): string;
  setName(value: string): CollectionDetailsResponse;

  getImagesMap(): jspb.Map<string, string>;
  clearImagesMap(): CollectionDetailsResponse;

  getSort(): number;
  setSort(value: number): CollectionDetailsResponse;

  getActive(): boolean;
  setActive(value: boolean): CollectionDetailsResponse;

  getGameCount(): number;
  setGameCount(value: number): CollectionDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionDetailsResponse): CollectionDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: CollectionDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionDetailsResponse;
  static deserializeBinaryFromReader(message: CollectionDetailsResponse, reader: jspb.BinaryReader): CollectionDetailsResponse;
}

export namespace CollectionDetailsResponse {
  export type AsObject = {
    id: string,
    identity: string,
    name: string,
    imagesMap: Array<[string, string]>,
    sort: number,
    active: boolean,
    gameCount: number,
  }
}

export class CollectionListResponse extends jspb.Message {
  getTotalItems(): number;
  setTotalItems(value: number): CollectionListResponse;

  getItemsList(): Array<CollectionDetailsResponse>;
  setItemsList(value: Array<CollectionDetailsResponse>): CollectionListResponse;
  clearItemsList(): CollectionListResponse;
  addItems(value?: CollectionDetailsResponse, index?: number): CollectionDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionListResponse): CollectionListResponse.AsObject;
  static serializeBinaryToWriter(message: CollectionListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionListResponse;
  static deserializeBinaryFromReader(message: CollectionListResponse, reader: jspb.BinaryReader): CollectionListResponse;
}

export namespace CollectionListResponse {
  export type AsObject = {
    totalItems: number,
    itemsList: Array<CollectionDetailsResponse.AsObject>,
  }
}

