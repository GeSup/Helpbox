// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
const projectId = 'pan-opsik-gbdf'
const keyFilename = './pan-opsik-gbdf-dialogflow-admin.json'
const storage = new Storage({projectId, keyFilename});

// Makes an authenticated API request.
async function listBuckets() {
  try {
    const [buckets] = await storage.getBuckets();
    console.log('storage :>> ', storage);
    // console.log('Buckets:');
    // buckets.forEach(bucket => {
    //   console.dir(bucket.name);
    // });
  } catch (err) {
    console.error('ERROR:', err);
  }
}
listBuckets();
