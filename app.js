var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'B2Euj6PIuv1eRGz1',
    secretKey: '47FZKR2yF1MtCNAZ3UrGbTAHN67dS4Dw'
});

minioClient.makeBucket('test-bucket', 'us-east-1', (err) => {
  if (err) return console.error(err)

  console.log('Bucket created successfully');
});
