import  admin from  "firebase-admin";
import serviceAccount from "./serviceKey.json";

export const fireService = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
