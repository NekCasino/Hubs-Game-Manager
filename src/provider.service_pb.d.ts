import * as jspb from 'google-protobuf'



export class ProviderCreateRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): ProviderCreateRequest;

  getName(): string;
  setName(value: string): ProviderCreateRequest;

  getActive(): boolean;
  setActive(value: boolean): ProviderCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderCreateRequest): ProviderCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ProviderCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderCreateRequest;
  static deserializeBinaryFromReader(message: ProviderCreateRequest, reader: jspb.BinaryReader): ProviderCreateRequest;
}

export namespace ProviderCreateRequest {
  export type AsObject = {
    identity: string,
    name: string,
    active: boolean,
  }
}

export class ProviderUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ProviderUpdateRequest;

  getName(): string;
  setName(value: string): ProviderUpdateRequest;
  hasName(): boolean;
  clearName(): ProviderUpdateRequest;

  getActive(): boolean;
  setActive(value: boolean): ProviderUpdateRequest;
  hasActive(): boolean;
  clearActive(): ProviderUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderUpdateRequest): ProviderUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ProviderUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderUpdateRequest;
  static deserializeBinaryFromReader(message: ProviderUpdateRequest, reader: jspb.BinaryReader): ProviderUpdateRequest;
}

export namespace ProviderUpdateRequest {
  export type AsObject = {
    id: string,
    name?: string,
    active?: boolean,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum ActiveCase { 
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 3,
  }
}

export class ProviderUpdateImageRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ProviderUpdateImageRequest;

  getData(): ProviderUpdateImageRequest.ImageChunk | undefined;
  setData(value?: ProviderUpdateImageRequest.ImageChunk): ProviderUpdateImageRequest;
  hasData(): boolean;
  clearData(): ProviderUpdateImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderUpdateImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderUpdateImageRequest): ProviderUpdateImageRequest.AsObject;
  static serializeBinaryToWriter(message: ProviderUpdateImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderUpdateImageRequest;
  static deserializeBinaryFromReader(message: ProviderUpdateImageRequest, reader: jspb.BinaryReader): ProviderUpdateImageRequest;
}

export namespace ProviderUpdateImageRequest {
  export type AsObject = {
    id: string,
    data?: ProviderUpdateImageRequest.ImageChunk.AsObject,
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

export class ProviderInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ProviderInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderInfoRequest): ProviderInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ProviderInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderInfoRequest;
  static deserializeBinaryFromReader(message: ProviderInfoRequest, reader: jspb.BinaryReader): ProviderInfoRequest;
}

export namespace ProviderInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class ProviderListRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ProviderListRequest;

  getLimit(): number;
  setLimit(value: number): ProviderListRequest;

  getIdentity(): string;
  setIdentity(value: string): ProviderListRequest;
  hasIdentity(): boolean;
  clearIdentity(): ProviderListRequest;

  getName(): string;
  setName(value: string): ProviderListRequest;
  hasName(): boolean;
  clearName(): ProviderListRequest;

  getActive(): boolean;
  setActive(value: boolean): ProviderListRequest;
  hasActive(): boolean;
  clearActive(): ProviderListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderListRequest): ProviderListRequest.AsObject;
  static serializeBinaryToWriter(message: ProviderListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderListRequest;
  static deserializeBinaryFromReader(message: ProviderListRequest, reader: jspb.BinaryReader): ProviderListRequest;
}

export namespace ProviderListRequest {
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

export class ProviderUpdateResponse extends jspb.Message {
  getId(): string;
  setId(value: string): ProviderUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderUpdateResponse): ProviderUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: ProviderUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderUpdateResponse;
  static deserializeBinaryFromReader(message: ProviderUpdateResponse, reader: jspb.BinaryReader): ProviderUpdateResponse;
}

export namespace ProviderUpdateResponse {
  export type AsObject = {
    id: string,
  }
}

export class ProviderDetailsResponse extends jspb.Message {
  getId(): string;
  setId(value: string): ProviderDetailsResponse;

  getIdentity(): string;
  setIdentity(value: string): ProviderDetailsResponse;

  getName(): string;
  setName(value: string): ProviderDetailsResponse;

  getImagesMap(): jspb.Map<string, string>;
  clearImagesMap(): ProviderDetailsResponse;

  getActive(): boolean;
  setActive(value: boolean): ProviderDetailsResponse;

  getGameCount(): number;
  setGameCount(value: number): ProviderDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderDetailsResponse): ProviderDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: ProviderDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderDetailsResponse;
  static deserializeBinaryFromReader(message: ProviderDetailsResponse, reader: jspb.BinaryReader): ProviderDetailsResponse;
}

export namespace ProviderDetailsResponse {
  export type AsObject = {
    id: string,
    identity: string,
    name: string,
    imagesMap: Array<[string, string]>,
    active: boolean,
    gameCount: number,
  }
}

export class ProviderListResponse extends jspb.Message {
  getTotalItems(): number;
  setTotalItems(value: number): ProviderListResponse;

  getItemsList(): Array<ProviderDetailsResponse>;
  setItemsList(value: Array<ProviderDetailsResponse>): ProviderListResponse;
  clearItemsList(): ProviderListResponse;
  addItems(value?: ProviderDetailsResponse, index?: number): ProviderDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderListResponse): ProviderListResponse.AsObject;
  static serializeBinaryToWriter(message: ProviderListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderListResponse;
  static deserializeBinaryFromReader(message: ProviderListResponse, reader: jspb.BinaryReader): ProviderListResponse;
}

export namespace ProviderListResponse {
  export type AsObject = {
    totalItems: number,
    itemsList: Array<ProviderDetailsResponse.AsObject>,
  }
}

