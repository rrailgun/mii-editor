export class Mii {
    //Using array size one since TS doesn't allow setting individual values to this type
    invalid: Uint16Array[1];
    isGirl: Uint16Array[1];
    month: Uint16Array[1];
    day: Uint16Array[1];
    favColor: Uint16Array[1];
    isFavorite: Uint16Array[1];
    name: string; //To change
    height: Uint8Array[1];
    weight: Uint8Array[1];
    miiId: Uint8Array[4];
    sysId: Uint8Array[4];
    faceShape: Uint16Array[1];
    skinColor: Uint16Array[1];
    facialFeature: Uint16Array[1];
    mingleOff: Uint16Array[1];
    downloaded: Uint16Array[1];
    hairType: Uint16Array[1];
    hairColor: Uint16Array[1];
    hairPart: Uint16Array[1];
    eyebrowType: Uint32Array[1];
    eyebrowRotation: Uint32Array[1];
    eyebrowColor: Uint32Array[1];
    eyebrowSize: Uint32Array[1];
    eyebrowVertPos: Uint32Array[1];
    eyebrowHorizSpacing: Uint32Array[1];
    //TODO: eye, nose, lip, glasses, facial hair, mole, creator name
    //https://wiibrew.org/wiki/Mii_data
    }
