import * as zlib from 'zlib';
export default class Crypto{

    public static swap2Bytes(bytes: Buffer){
        const length = bytes.length;
        const halfLength = Math.floor(length / 2);
        let v5 = length >> 31; //???? not even gonna question
        let v7 = 0;
        for(let v4 = 0; v4 < halfLength; v4++){
            if(v7 >= length){
                break;
            }
            bytes[v7] = bytes[v7] ^ 237;
            v5 = v7 + 1;
            if(v7 + 1 > length){
                break;
            }
            bytes[v5] = bytes[v5] ^ 237;
            if(v7 >= length || v5 >= length){
                break;
            }
            bytes[v7] = bytes[v7] ^ bytes[v5];
            bytes[v5] = bytes[v5] ^ bytes[v7];
            bytes[v7] = bytes[v7] ^ bytes[v5];
            v7 = v7 + 2;
        }
        return bytes;
    }

    public static decryptHttpsPostTraffic(bytes: Buffer): JSON{
        const dezipped = zlib.gunzipSync(bytes);
        return JSON.parse(Crypto.swap2Bytes(dezipped).toString());
    }

    public static encryptHttpsPostTraffic(bytes: Buffer): Buffer{
        return zlib.gzipSync(Crypto.swap2Bytes(bytes));
    }
}