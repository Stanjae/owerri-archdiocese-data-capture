'use client'

export async function fixBase64Length(base64String:any) {
    // Add padding '=' to the Base64 string if it's not divisible by 4
    const padding = base64String?.length % 4;
    if (padding === 2) {
      base64String += '==';
    } else if (padding === 3) {
      base64String += '=';
    }
    return base64String;
  }
  //.replace(/[^A-Za-z0-9+/=]/g, '')

  export async function base64ToBlob(base64:any, mimeType:any) {
    const byteString = atob(base64.split(',')[1]);  // Decode base64
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeType });
    
}
  