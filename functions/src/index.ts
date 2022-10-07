import * as admin from "firebase-admin";

import serviceAccount from "./firebase/serviceAccount.json";

const params = {
  type: serviceAccount.type,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  clientId: serviceAccount.client_id,
  projectId: serviceAccount.project_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  privateKeyId: serviceAccount.private_key_id,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
};

admin.initializeApp({
  credential: admin.credential.cert(params),
});

import { getGamesFromUser, addGamesToUser } from "./games";

exports.addGamesToUser = addGamesToUser;
exports.getGamesFromUser = getGamesFromUser;
