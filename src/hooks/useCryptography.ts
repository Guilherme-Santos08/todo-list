import SimpleCrypto from "simple-crypto-js";

export function useCrypto(textCrypto: string) {
  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);

  const plainText = textCrypto;
  const cipherText = simpleCrypto.encrypt(plainText);

  return { cipherText };
}

export function useDecrypt() {
  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);
  const decryptText = (textDescript: string) =>
    simpleCrypto.decrypt(textDescript).toString();

  return { decryptText };
}
